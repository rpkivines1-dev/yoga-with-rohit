import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { Home, Compass, Calendar, DollarSign, Sparkles, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found (404) | Yoga With Rohit"
        description="The requested page could not be found. Explore our live online yoga classes, schedule, pricing, or book a free demo session with Rohit."
        canonicalUrl="https://www.yogawithrohit.com/404"
      />

      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '140px 24px 80px',
          backgroundColor: '#FAF6F0',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <span
            style={{
              fontSize: 'clamp(64px, 8vw, 96px)',
              fontWeight: 800,
              color: 'var(--primary)',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1,
              display: 'block',
              marginBottom: '8px',
            }}
          >
            404
          </span>

          <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 800, color: 'var(--text-main)', marginBottom: '14px' }}>
            Page Not Found
          </h1>

          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '32px' }}>
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let us help you find what you need:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
              marginBottom: '36px',
              textAlign: 'left',
            }}
          >
            <Link
              to="/"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '16px 18px',
                border: '1.5px solid rgba(194, 94, 26, 0.14)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-main)',
                textDecoration: 'none',
              }}
            >
              <Home size={18} color="var(--primary)" />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800 }}>Home Page</div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>Return to start</div>
              </div>
            </Link>

            <Link
              to="/online-yoga-classes"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '16px 18px',
                border: '1.5px solid rgba(194, 94, 26, 0.14)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-main)',
                textDecoration: 'none',
              }}
            >
              <Compass size={18} color="var(--primary)" />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800 }}>Online Classes</div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>Overview of programs</div>
              </div>
            </Link>

            <Link
              to="/schedule"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '16px 18px',
                border: '1.5px solid rgba(194, 94, 26, 0.14)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-main)',
                textDecoration: 'none',
              }}
            >
              <Calendar size={18} color="var(--primary)" />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800 }}>Class Schedule</div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>M/W/F batch timings</div>
              </div>
            </Link>

            <Link
              to="/pricing"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '16px 18px',
                border: '1.5px solid rgba(194, 94, 26, 0.14)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-main)',
                textDecoration: 'none',
              }}
            >
              <DollarSign size={18} color="var(--primary)" />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800 }}>Tuition & Pricing</div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>$5 Daily • $50 Monthly</div>
              </div>
            </Link>
          </div>

          <Link to="/free-yoga-demo" className="btn btn-primary">
            <Sparkles size={16} style={{ color: '#FDE68A' }} />
            <span>Book a Free Demo Class</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
