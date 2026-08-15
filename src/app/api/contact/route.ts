import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, subject, message, inquiryType } = body;

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required inquiry fields' },
        { status: 400 }
      );
    }

    console.log('[API /contact] Inbound corporate inquiry received:', {
      inquiryType: inquiryType || 'GENERAL_CORPORATE',
      fullName,
      email,
      subject,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry received and dispatched to division secretariat.',
      referenceId: `INQ-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error('Error processing contact inquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error processing inquiry' },
      { status: 500 }
    );
  }
}
