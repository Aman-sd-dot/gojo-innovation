import React from 'react';
import Link from 'next/link';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { BLOG_POSTS } from '@/data/mockData';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Scientific Blog & Ecosystem Insights | GOJO Innovation',
  description:
    'Read clinical whitepapers, nutritional science articles, and technology insights from the GOJO Innovation council.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-16">
        <PageHeader
          badge="SCIENTIFIC INSIGHTS & ARTICLES"
          badgeVariant="cyan"
          title="The GOJO Innovation Journal"
          subtitle="Clinical research papers, nutritional science breakdowns, and technology architecture notes from our multi-disciplinary council."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="glass-panel rounded-3xl border border-slate-800 bg-slate-900/80 hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  <span className="font-semibold text-slate-300 block">{post.author}</span>
                  <span>{post.authorRole}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors"
                  aria-label={`Read article: ${post.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
