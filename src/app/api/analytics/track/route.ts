import { NextResponse } from 'next/server';

const ALLOWED_METHODS = ['POST'];

function methodNotAllowed() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'Only POST method is allowed for /api/analytics/track',
      allowed: ALLOWED_METHODS,
    },
    {
      status: 405,
      headers: {
        Allow: ALLOWED_METHODS.join(', '),
      },
    }
  );
}

// AN-05: Explicit 405 handlers with Allow header for all other HTTP methods
export async function GET() {
  return methodNotAllowed();
}

export async function PUT() {
  return methodNotAllowed();
}

export async function DELETE() {
  return methodNotAllowed();
}

export async function PATCH() {
  return methodNotAllowed();
}

export async function HEAD() {
  return methodNotAllowed();
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
    },
  });
}

export async function POST(request: Request) {
  try {
    let event: Record<string, unknown>;

    // Read raw body text first to cleanly distinguish empty body (AN-03) and invalid JSON (AN-04)
    let rawText: string;
    try {
      rawText = await request.text();
    } catch {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    if (!rawText || !rawText.trim()) {
      // AN-03: Empty request body
      return NextResponse.json(
        { error: 'Empty JSON body' },
        { status: 400 }
      );
    }

    // AN-04: Invalid JSON body
    try {
      event = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    // AN-03: Empty JSON object `{}` or non-object
    if (
      !event ||
      typeof event !== 'object' ||
      Array.isArray(event) ||
      Object.keys(event).length === 0
    ) {
      return NextResponse.json(
        { error: 'Empty JSON body' },
        { status: 400 }
      );
    }

    // AN-02: Missing action field
    const action =
      typeof event.action === 'string' ? event.action.trim() : '';

    if (!action) {
      return NextResponse.json(
        { error: 'Missing action in tracking event' },
        { status: 400 }
      );
    }

    // AN-01: Valid analytics event
    if (process.env.NODE_ENV === 'development') {
      console.log('[API /analytics/track] Telemetry Event Ingested:', {
        action,
        category: event.category,
        label: event.label,
        value: event.value,
        timestamp: event.timestamp || new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      recorded: true,
    });
  } catch (error) {
    console.error('Error logging analytics event:', error);
    return NextResponse.json(
      { error: 'Internal server error recording event' },
      { status: 500 }
    );
  }
}
