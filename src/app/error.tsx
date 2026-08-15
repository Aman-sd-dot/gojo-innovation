'use client';

import React, { useEffect } from 'react';
import { RefreshCcw, AlertTriangle } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Runtime Application Error:', error);
  }, [error]);

  return (
    <div className="pt-28 pb-16 min-h-[70vh] flex items-center justify-center">
      <SectionContainer className="text-center space-y-6 max-w-lg">
        <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h1 className="text-3xl font-extrabold font-heading text-white">
          Unexpected System Event
        </h1>

        <p className="text-sm text-slate-400">
          Our system encountered an intermittent error. Please try reloading the view or contact technical support.
        </p>

        <div className="pt-2 flex items-center justify-center gap-4">
          <Button onClick={() => reset()} size="md" variant="primary" leftIcon={<RefreshCcw className="w-4 h-4" />}>
            Retry View
          </Button>
          <Button href="/" size="md" variant="secondary">
            Go to Homepage
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
}
