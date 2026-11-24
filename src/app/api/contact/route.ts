import { NextResponse } from 'next/server';
import { prisma } from '@/lib/database/prisma';
import type { InquiryType as PrismaInquiryType } from '@prisma/client';

const ALLOWED_METHODS = ['POST'];

const allowedInquiryTypes = [
  'GENERAL_CORPORATE',
  'BIOHEED_HEALTHCARE',
  'GOJO_NUTRITION',
  'GOJOME_PLATFORM',
  'INVESTOR_RELATIONS',
  'CAREERS_HR',
  'MEDIA_PRESS',
  'PARTNERSHIP',
] as const;

function methodNotAllowed() {
  return NextResponse.json(
    {
      success: false,
      error: 'Method Not Allowed',
      message: 'Only POST method is allowed for /api/contact',
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

// CO-09: Explicit 405 handlers with Allow header
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
        { success: false, error: 'Invalid request data' },
        { status: 400 }
      );
    }

    if (!rawText || !rawText.trim()) {
      return NextResponse.json(
        { success: false, error: 'Missing required inquiry fields' },
        { status: 400 }
      );
    }

    try {
      body = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, error: 'Invalid request data' },
        { status: 400 }
      );
    }

    const fullName =
      typeof body.fullName === 'string' ? body.fullName.trim() : '';
    const email =
      typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const subject =
      typeof body.subject === 'string' ? body.subject.trim() : '';
    const message =
      typeof body.message === 'string' ? body.message.trim() : '';

    const phone =
      typeof body.phone === 'string' ? body.phone.trim() : null;
    const organization =
      typeof body.organization === 'string'
        ? body.organization.trim()
        : null;

    const inquiryType = (typeof body.inquiryType === 'string' && body.inquiryType.trim())
      ? body.inquiryType.trim()
      : 'GENERAL_CORPORATE';

    // CO-02, CO-03, CO-05, CO-06: Missing required fields
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required inquiry fields' },
        { status: 400 }
      );
    }

    // CO-04: Invalid email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // CO-07: Invalid inquiry type
    if (
      !allowedInquiryTypes.includes(
        inquiryType as (typeof allowedInquiryTypes)[number]
      )
    ) {
      return NextResponse.json(
        { success: false, error: 'Invalid inquiry type' },
        { status: 400 }
      );
    }

    // CO-01: Valid inquiry saved to Neon PostgreSQL
    const inquiry = await prisma.contactInquiry.create({
      data: {
        fullName,
        email,
        subject,
        message,
        phone: phone || null,
        organization: organization || null,
        inquiryType: inquiryType as PrismaInquiryType,
      },
    });

    console.log('[API /contact] Inquiry saved:', inquiry.id);

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry successfully saved.',
        referenceId: inquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[API /contact] Error:', error);

    // CO-08: Database connection failure or unhandled internal error
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to save inquiry. Please try again later.',
      },
      { status: 500 }
    );
  }
}
