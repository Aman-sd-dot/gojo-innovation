import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jobId, jobTitle, fullName, email, phone, linkedIn, coverNote } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required applicant contact fields' },
        { status: 400 }
      );
    }

    console.log('[API /careers] Application received:', {
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      linkedIn,
      receivedAt: new Date().toISOString(),
    });

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
