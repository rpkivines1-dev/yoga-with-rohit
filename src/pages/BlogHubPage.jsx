import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import { BLOG_POSTS } from '../data/blogData';
import { Sparkles, Calendar, Clock, ArrowRight, BookOpen, Compass } from 'lucide-react';

export default function BlogHubPage() {
  const breadcrumbs = [
    { name: 'Yoga Blog & Guides', url: '/blog' },
  ];

  return (
    <>
      <SEOHead
        title="Yoga Guides & Online Class Articles | Yoga With Rohit"
        description="Explore practical guides, beginner tutorials, and traditional yogic wisdom written by Rohit, a master yoga teacher from Rishikesh."
        canonicalUrl="https://www.yogawithrohit.com/blog"
        keywords="Yoga blog, online yoga guides, beginner yoga articles, Hatha yoga tutorials, Ashtanga yoga guide"
        breadcrumbs={breadcrumbs}
      />

      <PageBanner
        badge="Wisdom from Rishikesh"
        title="Yoga Guides & Articles"
        subtitle="Practical guidance, beginner tutorials, posture breakdowns, and classical yogic philosophy to support your daily practice at home."
        breadcrumbs={breadcrumbs}
      />

      <article className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom" style={{ maxWidth: '1080px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '56px' }}>
            {BLOG_POSTS.map((post) => (
              <div
                key={post.slug}
                className="nicepage-card"
                style={{
                  backgroundColor: '#FAF6F0',
                  borderRadius: '22px',
                  padding: '28px 24px',
                  border: '1.5px solid rgba(194, 94, 26, 0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--primary)', backgroundColor: 'var(--primary-50)', padding: '3px 10px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {post.category}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', color: 'var(--text-muted)' }}>
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px', lineHeight: 1.35 }}>
                    <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h2>

                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {post.excerpt}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(194, 94, 26, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {post.date}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    style={{
                      fontSize: '13.5px',
                      fontWeight: 800,
                      color: 'var(--primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Demo CTA Banner */}
          <div style={{ backgroundColor: 'var(--primary-dark)', borderRadius: '24px', padding: '40px 32px', textAlign: 'center', color: '#FFFFFF' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
              Put Knowledge Into Practice
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '560px', margin: '0 auto 22px' }}>
              Join Rohit live from Rishikesh. Try a full 60-minute interactive demo class with zero commitment.
            </p>
            <Link to="/free-yoga-demo" className="btn btn-primary" style={{ backgroundColor: 'var(--primary)', color: '#FFFFFF' }}>
              <Sparkles size={16} style={{ color: '#FDE68A' }} />
              <span>Book Free Demo Class</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </article>
    </>
  );
}
