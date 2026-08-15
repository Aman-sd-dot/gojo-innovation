import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const event = await request.json();

    if (!event || !event.action) {
      return NextResponse.json(
        { error: 'Missing action in tracking event' },
        { status: 400 }
      );
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('[API /analytics/track] Telemetry Event Ingested:', {
        action: event.action,
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
