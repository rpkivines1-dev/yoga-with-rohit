import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

export default function PageBanner({
  badge = 'Online Yoga Classes',
  title,
  subtitle,
  breadcrumbs = [],
  ctaText = 'Book Your Free Demo Class',
  onCtaClick,
}) {
  return (
    <section
      style={{
        paddingTop: '130px',
        paddingBottom: '50px',
        background: 'radial-gradient(circle at 85% 15%, rgba(194, 94, 26, 0.12) 0%, transparent 45%), radial-gradient(circle at 10% 70%, rgba(245, 158, 11, 0.1) 0%, transparent 45%), #FAF6F0',
        borderBottom: '1px solid rgba(194, 94, 26, 0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12.5px',
            color: 'var(--text-muted)',
            marginBottom: '20px',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: 'var(--text-muted)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Home size={13} />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight size={13} color="rgba(107, 78, 61, 0.5)" />
              {crumb.url ? (
                <Link
                  to={crumb.url}
                  style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {crumb.name}
                </Link>
              ) : (
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              backgroundColor: 'var(--primary-50)',
              border: '1px solid var(--primary-100)',
              color: 'var(--primary-dark)',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <Sparkles size={14} color="var(--primary)" />
            <span>{badge}</span>
          </div>
        )}

        {/* Main H1 Title */}
        <h1
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            color: 'var(--text-main)',
            lineHeight: 1.18,
            letterSpacing: '-0.025em',
            marginBottom: '16px',
            maxWidth: '860px',
          }}
        >
          {title}
        </h1>

        {/* Subtitle / Lead Paragraph */}
        {subtitle && (
          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 18px)',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              maxWidth: '740px',
              marginBottom: onCtaClick ? '26px' : '0',
            }}
          >
            {subtitle}
          </p>
        )}

        {/* CTA Button */}
        {onCtaClick && (
          <button
            onClick={onCtaClick}
            className="btn btn-primary"
            style={{
              boxShadow: '0 10px 24px -4px rgba(194, 94, 26, 0.4)',
              padding: '13px 26px',
              fontSize: '15px',
            }}
          >
            <Sparkles size={16} style={{ color: '#FDE68A' }} />
            <span>{ctaText}</span>
          </button>
        )}
      </div>
    </section>
  );
}
