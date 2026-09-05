import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import { BLOG_POSTS } from '../data/blogData';
import { Clock, Calendar, ArrowLeft, ArrowRight, Sparkles, CheckCircle2, User, Share2 } from 'lucide-react';

export default function BlogPostPage({ onOpenBooking }) {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleDemoClick = () => {
    onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' });
  };

  const breadcrumbs = [
    { name: 'Yoga Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <>
      <SEOHead
        title={`${post.title} | Yoga With Rohit`}
        description={post.excerpt}
        canonicalUrl={`https://www.yogawithrohit.com/blog/${post.slug}`}
        keywords={post.primaryKeyword}
        ogType="article"
        breadcrumbs={breadcrumbs}
      />

      <PageBanner
        badge={post.category}
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={breadcrumbs}
      />

      <article className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom" style={{ maxWidth: '820px' }}>
          
          {/* Post Meta Byline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(194, 94, 26, 0.12)',
              paddingBottom: '20px',
              marginBottom: '36px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src="/images/certificates/trophy-award-honor.jpg"
                alt="Rohit Yoga Teacher from Rishikesh"
                style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }}
              />
              <div>
                <div style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--text-main)' }}>
                  Written by Rohit
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Lead Online Yoga Teacher from Rishikesh • 500-HR Yoga Alliance
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12.5px', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={13} />
                <span>{post.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Clock size={13} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Body Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', fontSize: '16.5px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            {post.sections.map((section, idx) => (
              <section key={idx}>
                <h2 style={{ fontSize: 'clamp(20px, 2.6vw, 26px)', color: 'var(--text-main)', marginBottom: '14px', lineHeight: 1.3 }}>
                  {section.heading}
                </h2>
                <p style={{ margin: 0 }}>
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Contextual Internal Links Box */}
          <div
            style={{
              backgroundColor: '#FAF6F0',
              borderRadius: '20px',
              padding: '28px',
              margin: '48px 0',
              border: '1.5px solid rgba(194, 94, 26, 0.14)',
            }}
          >
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
              Related Yoga Guides & Resources:
            </h3>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14.5px' }}>
              <li>
                <Link to="/online-yoga-classes" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                  Complete Guide to Live Online Yoga Classes
                </Link>
              </li>
              <li>
                <Link to="/online-yoga-classes-for-beginners" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                  Online Yoga Classes for Beginners: What to Expect
                </Link>
              </li>
              <li>
                <Link to="/hatha-yoga-online-classes" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                  Traditional Hatha Yoga Morning Batches (6:30, 7:45, 9:00 AM EST)
                </Link>
              </li>
              <li>
                <Link to="/ashtanga-yoga-online" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                  Ashtanga Vinyasa Primary Series Evening Batches
                </Link>
              </li>
              <li>
                <Link to="/pricing" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                  Transparent Pricing: $5 Daily & $50 Monthly (12 Classes)
                </Link>
              </li>
            </ul>
          </div>

          {/* Author Callout & Free Demo CTA */}
          <div
            style={{
              backgroundColor: 'var(--primary-50)',
              borderRadius: '22px',
              padding: '32px',
              textAlign: 'center',
              border: '2px solid var(--primary-100)',
            }}
          >
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '8px' }}>
              Practice Live with Rohit from Rishikesh
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 22px' }}>
              Experience the benefits of personalized verbal adjustments on your Zoom camera. Book your free 60-minute demo class today.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '13px 26px' }}>
                <Sparkles size={16} style={{ color: '#FDE68A' }} />
                <span>Book Free Demo Class</span>
                <ArrowRight size={16} />
              </button>
              <Link to="/schedule" className="btn btn-outline" style={{ padding: '13px 20px' }}>
                View Class Schedule
              </Link>
            </div>
          </div>

          {/* Back to Blog Hub Link */}
          <div style={{ marginTop: '36px', textAlign: 'left' }}>
            <Link
              to="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--primary)',
                textDecoration: 'none',
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to all yoga articles</span>
            </Link>
          </div>

        </div>
      </article>
    </>
  );
}
