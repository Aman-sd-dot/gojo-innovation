'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  User,
  Activity,
  Home,
  Info,
  ShieldCheck,
  Zap,
  Sparkles,
  FlaskConical,
  TrendingUp,
  Briefcase,
  Phone,
  ChevronRight,
  HeartHandshake,
} from 'lucide-react';
import { BrandLogo } from '@/components/brand/BrandLogo';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics/tracker';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const mainNavLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Bioheed', href: '/bioheed', icon: ShieldCheck, badge: 'Healthcare' },
    { name: 'Gojo Nutrition', href: '/gojo-nutrition', icon: Zap, badge: 'Beverage' },
    { name: 'GojoMe', href: '/gojome', icon: Sparkles, badge: 'AI Platform' },
    { name: 'GojoImpact', href: '/gojo-impact', icon: HeartHandshake, badge: 'Impact' },
    { name: 'R&D & Innovation', href: '/rd-innovation', icon: FlaskConical },
    { name: 'Investors', href: '/investors', icon: TrendingUp },
    { name: 'Careers', href: '/careers', icon: Briefcase, badge: 'Hiring' },
  ];

  const mobileCategories = [
    {
      label: 'Main',
      links: [
        { name: 'Home', href: '/', icon: Home, subtitle: 'Overview & Ecosystem' },
        { name: 'About Us', href: '/about', icon: Info, subtitle: 'Our Philosophy & Mission' },
      ],
    },
    {
      label: 'The Ecosystem',
      links: [
        {
          name: 'Bioheed Pharmaceutical',
          href: '/bioheed',
          icon: ShieldCheck,
          badge: 'Healthcare',
          badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
          subtitle: 'Clinical Formulations & R&D',
        },
        {
          name: 'GOJO Nutrition',
          href: '/gojo-nutrition',
          icon: Zap,
          badge: 'Drink',
          badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
          subtitle: "The Maharaja's Drink",
        },
        {
          name: 'GojoMe Platform',
          href: '/gojome',
          icon: Sparkles,
          badge: 'AI Tech',
          badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
          subtitle: 'Nutrition Intelligence & Tracker',
        },
        {
          name: 'GojoImpact',
          href: '/gojo-impact',
          icon: HeartHandshake,
          badge: 'ESG & Health',
          badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
          subtitle: 'Community Health, Sustainability & ESG',
        },
        {
          name: 'R&D & Innovation',
          href: '/rd-innovation',
          icon: FlaskConical,
          badge: 'Science',
          badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
          subtitle: 'Analytical Standards & Labs',
        },
      ],
    },
    {
      label: 'Corporate',
      links: [
        { name: 'Investors & Governance', href: '/investors', icon: TrendingUp, subtitle: 'ESG & Corporate Governance' },
        { name: 'Careers & Openings', href: '/careers', icon: Briefcase, subtitle: 'Join the GOJO Innovation Team', badge: 'Hiring', badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' },
      ],
    },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-200',
          isScrolled || mobileMenuOpen
            ? 'bg-[#080C14]/95 backdrop-blur-xl border-b border-slate-800/90 shadow-xl shadow-black/50 py-2.5'
            : 'bg-[#080C14]/70 backdrop-blur-md border-b border-white/5 py-3.5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'px-2.5 2xl:px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-colors',
                    isActive
                      ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
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
              className="text-[13px] font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800/60 transition-colors"
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

          {/* Mobile Header Buttons (Quick Login + Menu Toggle) */}
          <div className="xl:hidden flex items-center gap-2">
            <Link
              href="/login"
              className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5 px-3"
              aria-label="Login"
            >
              <User className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Login</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Rendered outside header to guarantee 100% visible viewport positioning) */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="xl:hidden fixed inset-x-0 top-[58px] sm:top-[64px] bottom-0 z-40 flex flex-col bg-[#080C14]/98 backdrop-blur-2xl border-t border-slate-800 shadow-2xl animate-fade-in overflow-hidden"
        >
          {/* Scrollable Nav Container */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6 pb-28 text-left">
            {mobileCategories.map((category) => (
              <div key={category.label} className="space-y-2">
                {/* Category Header */}
                <div className="px-2 text-[10.5px] font-bold uppercase tracking-widest text-slate-400 font-heading">
                  {category.label}
                </div>

                {/* Category Links */}
                <div className="space-y-1.5">
                  {category.links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          trackEvent({
                            action: 'mobile_nav_click',
                            category: 'NAVIGATION',
                            label: link.name,
                          });
                        }}
                        className={cn(
                          'p-3 rounded-2xl transition-all flex items-center justify-between group border',
                          isActive
                            ? 'bg-emerald-500/15 border-emerald-500/40 text-white shadow-lg shadow-emerald-950/30'
                            : 'bg-slate-900/70 border-slate-800/80 text-slate-300 hover:bg-slate-800/80 hover:text-white hover:border-slate-700'
                        )}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={cn(
                              'w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105',
                              isActive
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                                : 'bg-slate-800/80 text-slate-400 border-slate-700'
                            )}
                          >
                            <Icon className="w-4 h-4" />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                                {link.name}
                              </span>
                              {link.badge && (
                                <span
                                  className={cn(
                                    'text-[9.5px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider',
                                    link.badgeColor || 'bg-slate-800 text-slate-300 border-slate-700'
                                  )}
                                >
                                  {link.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-400 font-medium">
                              {link.subtitle}
                            </p>
                          </div>
                        </div>

                        <ChevronRight
                          className={cn(
                            'w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5',
                            isActive ? 'text-emerald-400' : 'text-slate-600 group-hover:text-slate-400'
                          )}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Quick Ecosystem Info Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5" />
                <span>GOJO Innovation Ecosystem</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Healthcare, Nutrition &amp; Technology working together for a healthier tomorrow.
              </p>
            </div>
          </div>

          {/* Sticky Bottom Actions inside Mobile Drawer */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-[#080C14]/98 border-t border-slate-800 backdrop-blur-xl flex gap-3 shadow-2xl">
            <Button
              href="/login"
              size="md"
              variant="bioheed"
              leftIcon={<User className="w-4 h-4" />}
              className="flex-1 justify-center rounded-xl text-xs py-3 font-bold shadow-md shadow-emerald-950/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              GOJO ID Login
            </Button>
            <Button
              href="/contact"
              size="md"
              variant="secondary"
              leftIcon={<Phone className="w-4 h-4" />}
              className="flex-1 justify-center rounded-xl text-xs py-3 font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
