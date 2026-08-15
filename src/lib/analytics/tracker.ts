/**
 * GOJO Innovation Event Telemetry & Analytics Architecture
 * Supports privacy-conscious event logging across Web, QR Scans, and GojoMe activations.
 */

export interface TrackingEvent {
  action: string;
  category: 'NAVIGATION' | 'QR_GATEWAY' | 'GOJOME_SIMULATOR' | 'PRODUCT_INTERACTION' | 'INQUIRY' | 'CAREER';
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}

export function trackEvent({ action, category, label, value, metadata }: TrackingEvent) {
  if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== 'true') return;

  const payload = {
    action,
    category,
    label,
    value,
    metadata,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.pathname : '',
  };

  if (typeof window !== 'undefined') {
    // 1. Google Analytics gtag support if initialized
    const win = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof win.gtag === 'function') {
      win.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...metadata,
      });
    }

    // 2. Local telemetry buffer & internal API logger
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics/track', JSON.stringify(payload));
      }
    } catch {
      // Graceful fallback without blocking user interaction
    }
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`[GOJO Analytics Log] [${category}] ${action}`, payload);
  }
}
