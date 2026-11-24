import { NextResponse } from 'next/server';

const ALLOWED_METHODS = ['POST'];

function methodNotAllowed() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'Only POST method is allowed for /api/careers',
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

// CA-07: Explicit 405 handlers with Allow header
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
      // CA-05: Empty request body
      return NextResponse.json(
        { error: 'Missing required applicant contact fields' },
        { status: 400 }
      );
    }

    // CA-06: Invalid JSON body
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
        { error: 'Missing required applicant contact fields' },
        { status: 400 }
      );
    }

    const { jobId, jobTitle, fullName, email, phone, linkedIn, coverNote } = body as {
      jobId?: string;
      jobTitle?: string;
      fullName?: string;
      email?: string;
      phone?: string;
      linkedIn?: string;
      coverNote?: string;
    };

    // CA-02, CA-03, CA-04: Missing fields
    if (
      !fullName ||
      typeof fullName !== 'string' ||
      !fullName.trim() ||
      !email ||
      typeof email !== 'string' ||
      !email.trim() ||
      !phone ||
      typeof phone !== 'string' ||
      !phone.trim()
    ) {
      return NextResponse.json(
        { error: 'Missing required applicant contact fields' },
        { status: 400 }
      );
    }

    console.log('[API /careers] Application received:', {
      jobId,
      jobTitle,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      linkedIn,
      receivedAt: new Date().toISOString(),
    });

    // CA-01: Valid application
    return NextResponse.json({
      success: true,
      message: 'Application recorded successfully.',
      applicantId: `APP-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Internal server error processing application' },
      { status: 500 }
    );
  }
}
