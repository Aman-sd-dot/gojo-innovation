import { NextResponse } from 'next/server';

const ALLOWED_METHODS = ['POST'];

function methodNotAllowed() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'Only POST method is allowed for /api/newsletter',
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

// NL-06: Explicit 405 handlers with Allow header
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
    let body: Record<string, unknown>;

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
      // NL-04: Empty request body
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // NL-05: Invalid JSON body
    try {
      body = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    const email = typeof body.email === 'string' ? body.email.trim() : '';

    // NL-02 & NL-03: Missing or Invalid email format
    if (!email || !email.includes('@') || email.length > 254) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    console.log('[API /newsletter] Subscriber registered:', {
      email,
      timestamp: new Date().toISOString(),
    });

    // NL-01: Valid subscription
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to GOJO Innovation updates.',
    });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return NextResponse.json(
      { error: 'Internal server error processing subscription' },
      { status: 500 }
    );
  }
}
