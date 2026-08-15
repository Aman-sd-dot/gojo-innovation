import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User, Share2, Sparkles } from 'lucide-react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Button } from '@/components/ui/Button';
import { cms } from '@/lib/cms/client';
import { constructMetadata } from '@/lib/seo/metadata';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await cms.getBlogPostBySlug(params.slug);
  if (!post) return constructMetadata({ title: 'Article Not Found' });

  return constructMetadata({
    title: `${post.title} | The GOJO Innovation Journal`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await cms.getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="pt-24 pb-16">
      <SectionContainer className="pt-12 pb-16">
        <div className="max-w-4xl mx-auto text-left">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </Link>

          {/* Article Header */}
          <div className="space-y-4 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 inline-block">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-2 border-y border-slate-800 py-4">
              <div>
                <strong className="text-white block">{post.author}</strong>
                <span>{post.authorRole}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Content Body */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-900/80 text-slate-300 text-base leading-relaxed space-y-6">
            <div className="text-lg text-emerald-300 font-medium italic border-l-4 border-emerald-500 pl-4 py-1">
              &ldquo;{post.excerpt}&rdquo;
            </div>

            <div className="whitespace-pre-line text-slate-200">
              {post.content}
            </div>

            <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Published by GOJO Innovation Science &amp; Innovation Council
              </span>
              <Button href="/contact" size="sm" variant="outline">
                Contact Author
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
