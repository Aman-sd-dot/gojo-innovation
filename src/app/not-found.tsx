import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="pt-28 pb-16 min-h-[70vh] flex items-center justify-center">
      <SectionContainer className="text-center space-y-6">
        <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
          404 Error — Page Not Found
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
          Page Not Located in Ecosystem
        </h1>

        <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto">
          The requested URL does not exist or has been relocated within the GOJO Innovation digital platform.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Button href="/" size="lg" variant="primary" leftIcon={<Home className="w-4 h-4" />}>
            Return to Home
          </Button>
          <Button href="/about" size="lg" variant="outline">
            About GOJO
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
}
