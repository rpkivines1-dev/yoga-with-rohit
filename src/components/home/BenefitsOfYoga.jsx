import React from 'react';
import { Activity, ShieldCheck, Heart, Sun, Feather, Zap, Smile, Sparkles, Check } from 'lucide-react';
import { BENEFITS } from '../../data/yogaData';

export default function BenefitsOfYoga() {
  const getIcon = (iconName) => {
    const props = { size: 24, strokeWidth: 2 };
    switch (iconName) {
      case 'Activity':
        return <Activity {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Heart':
        return <Heart {...props} />;
      case 'Sun':
        return <Sun {...props} />;
      case 'Feather':
        return <Feather {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Smile':
        return <Smile {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section
      id="benefits"
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderTop: '1px solid rgba(194, 94, 26, 0.08)',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <div className="section-tag">
            <Heart size={14} />
            <span>HOLISTIC HEALTH & WELL-BEING</span>
          </div>

          <h2 className="section-title">
            Benefits of <span style={{ color: 'var(--primary)' }}>Daily Yoga Practice</span>
          </h2>

          <p className="section-subtitle">
            Consistent practice under an experienced <strong>online yoga teacher from Rishikesh</strong> creates deep physiological, mental, and emotional transformation.
          </p>
        </div>

        {/* Nicepage 8-Card Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
          className="benefits-grid"
        >
          {BENEFITS.map((benefit, index) => (
            <div
              key={benefit.id}
              className="nicepage-card"
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left',
              }}
            >
              <div>
                {/* Top Icon & Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: 'var(--primary-50)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(benefit.icon)}
                  </div>

                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--primary)',
                      backgroundColor: 'var(--primary-50)',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      border: '1px solid var(--primary-100)',
                    }}
                  >
                    {benefit.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px', lineHeight: 1.3 }}>
                  {benefit.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Mini Check */}
              <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid rgba(194, 94, 26, 0.08)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={13} style={{ color: 'var(--primary)' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)' }}>
                  Proven Wellness Pillar
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
