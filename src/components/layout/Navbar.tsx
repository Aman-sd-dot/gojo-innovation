'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, User, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';
import { BrandLogo } from '@/components/brand/BrandLogo';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ecosystemDropdown, setEcosystemDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setEcosystemDropdown(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Our Ecosystem',
      href: '/ecosystem',
      hasDropdown: true,
      subLinks: [
        {
          name: 'Bioheed Pharmaceutical',
          desc: 'Healthcare & Clinical Research Division',
          href: '/bioheed',
          icon: ShieldCheck,
          color: 'text-emerald-400',
        },
        {
          name: 'Gojo Nutrition',
          desc: "The Maharaja's Drink & Functional Foods",
          href: '/gojo-nutrition',
          icon: Zap,
          color: 'text-amber-400',
        },
        {
          name: 'GojoMe',
          desc: 'AI Nutrition Intelligence Platform',
          href: '/gojome',
          icon: Sparkles,
          color: 'text-purple-400',
        },
      ],
    },
    { name: 'Bioheed', href: '/bioheed' },
    { name: 'Gojo Nutrition', href: '/gojo-nutrition' },
    { name: 'GojoMe', href: '/gojome' },
    { name: 'R&D & Innovation', href: '/rd-innovation' },
    { name: 'Investors', href: '/investors' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-slate-950/40 backdrop-blur-md border-b border-white/5 py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <BrandLogo size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.slice(0, 9).map((link) => {
            const isActive = pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setEcosystemDropdown(true)}
                  onMouseLeave={() => setEcosystemDropdown(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1',
                      isActive || pathname.startsWith('/bioheed') || pathname.startsWith('/gojo-nutrition') || pathname.startsWith('/gojome')
                        ? 'text-emerald-400 bg-emerald-950/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>

                  {/* Dropdown Menu */}
                  {ecosystemDropdown && (
                    <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-fade-in">
                      <div className="glass-panel rounded-2xl p-3 shadow-2xl border border-slate-700/80 bg-slate-950/95 space-y-1">
                        {link.subLinks?.map((sub) => {
                          const IconComp = sub.icon;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                            >
                              <div className={cn('p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0 group-hover:border-slate-700', sub.color)}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="text-left">
                                <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                                  {sub.name}
                                </div>
                                <div className="text-[10.5px] text-slate-400 mt-0.5 leading-tight">
                                  {sub.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors',
                  isActive
                    ? 'text-emerald-400 bg-emerald-950/30 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Area: Contact + Gojo Login */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-800/50 transition-colors"
          >
            Contact
          </Link>
          <Button
            href="/login"
            size="sm"
            variant="bioheed"
            leftIcon={<User className="w-3.5 h-3.5" />}
            className="rounded-full shadow-emerald-900/40 text-xs px-4"
          >
            Gojo Login
          </Button>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-slate-950/98 border-b border-slate-800 shadow-2xl backdrop-blur-2xl px-6 py-6 max-h-[85vh] overflow-y-auto animate-fade-in">
          <div className="flex flex-col gap-2 text-left">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between',
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <Activity className="w-4 h-4 text-emerald-400" />}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
              <Button
                href="/login"
                size="md"
                variant="bioheed"
                leftIcon={<User className="w-4 h-4" />}
                className="w-full justify-center rounded-xl"
              >
                Gojo Single Sign-On (GOJO ID)
              </Button>
              <Button
                href="/contact"
                size="md"
                variant="outline"
                className="w-full justify-center rounded-xl"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
