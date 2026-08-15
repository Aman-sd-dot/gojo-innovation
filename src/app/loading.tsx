import React from 'react';

export default function Loading() {
  return (
    <div className="pt-28 pb-16 min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="relative w-12 h-12">
        <div className="w-12 h-12 rounded-full border-2 border-slate-800 border-t-emerald-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold text-emerald-400 font-heading">
          G
        </div>
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
        Loading GOJO Ecosystem...
      </span>
    </div>
  );
}
