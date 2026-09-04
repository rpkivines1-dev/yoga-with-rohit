import React from 'react';
import { Check, Sparkles, Star, ShieldCheck, ArrowRight, Clock, Video, HeartHandshake, MapPin, Calendar, Award } from 'lucide-react';
import { PRICING_PACKAGES } from '../../data/yogaData';

export default function ClassPackages({ onSelectPackage }) {
  return (
    <section
      id="pricing"
      className="section-padding"
      style={{
        backgroundColor: '#FAF6F0',
        position: 'relative',
        borderTop: '1px solid rgba(194, 94, 26, 0.08)',
      }}
    >
      <div className="container-custom">
        {/* Section Title Centered */}
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>TRANSPARENT & AFFORDABLE TUITION</span>
          </div>

          <h2 className="section-title">
            Online Yoga Class <span style={{ color: 'var(--primary)' }}>Packages & Pricing</span>
          </h2>

          <p className="section-subtitle">
            Choose the online yoga class plan that suits your lifestyle. Experience authentic live guidance on <strong>Monday, Wednesday & Friday</strong> with Rohit from Rishikesh.
          </p>
        </div>

        {/* Pricing Cards Grid (Equal Heights) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
            maxWidth: '960px',
            margin: '0 auto',
            alignItems: 'stretch',
          }}
          className="pricing-grid"
        >
          {PRICING_PACKAGES.map((pkg) => {
            const isMonthly = pkg.id === 'monthly';

            return (
              <div
                key={pkg.id}
                className="nicepage-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '28px',
                  padding: '40px 34px',
                  border: isMonthly ? '2.5px solid var(--primary)' : '1.5px solid rgba(194, 94, 26, 0.14)',
                  boxShadow: isMonthly ? 'var(--shadow-xl)' : 'var(--shadow-md)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  height: '100%',
                }}
              >
                {/* Popular / Best Value Pill Badge */}
                {isMonthly && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'var(--primary)',
                      color: '#FFFFFF',
                      padding: '5px 18px',
                      borderRadius: '9999px',
                      fontSize: '11.5px',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      boxShadow: '0 6px 18px rgba(194, 94, 26, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Star size={13} fill="#FDE68A" color="#FDE68A" />
                    <span>{pkg.highlight}</span>
                  </div>
                )}

                <div>
                  {/* Package Type Tag */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 800,
                        color: isMonthly ? 'var(--primary)' : 'var(--accent)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {isMonthly ? 'Full Monthly Program' : 'Single Drop-In Pass'}
                    </span>
                    <span
                      className="badge"
                      style={{
                        backgroundColor: isMonthly ? 'var(--primary-50)' : '#FEF3C7',
                        color: isMonthly ? 'var(--primary-dark)' : '#B45309',
                        fontWeight: 800,
                        fontSize: '11px',
                      }}
                    >
                      {pkg.classesCount}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      marginBottom: '12px',
                    }}
                  >
                    {pkg.title}
                  </h3>

                  {/* Price Display */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
                    <span
                      style={{
                        fontSize: '48px',
                        fontWeight: 800,
                        color: isMonthly ? 'var(--primary-dark)' : 'var(--accent-hover)',
                        lineHeight: 1,
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {pkg.price}
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-muted)' }}>
                      {pkg.billingCycle}
                    </span>
                  </div>

                  {/* Schedule Indicator */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 10px',
                      backgroundColor: 'var(--bg-sand)',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--primary-dark)',
                      marginBottom: '16px',
                    }}
                  >
                    <Calendar size={13} style={{ color: 'var(--primary)' }} />
                    <span>Schedule: Monday, Wednesday & Friday</span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                      minHeight: '44px',
                    }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <div style={{ borderTop: '1px solid rgba(194, 94, 26, 0.1)', paddingTop: '20px', marginBottom: '28px' }}>
                    <div style={{ fontSize: '12.5px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '12px', letterSpacing: '0.04em' }}>
                      What is included:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                      {pkg.features.map((feat, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <div
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              backgroundColor: isMonthly ? 'var(--primary-50)' : 'var(--accent-light)',
                              color: isMonthly ? 'var(--primary)' : 'var(--accent)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          >
                            <Check size={13} strokeWidth={3} />
                          </div>
                          <span style={{ fontSize: '14px', color: 'var(--text-main)', lineHeight: '1.45' }}>
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button Aligned at Bottom */}
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`btn ${isMonthly ? 'btn-primary' : 'btn-accent'} btn-lg w-full`}
                  style={{
                    boxShadow: isMonthly ? '0 10px 25px -4px rgba(194, 94, 26, 0.4)' : '0 10px 25px -4px rgba(217, 119, 6, 0.35)',
                  }}
                >
                  <span>{pkg.buttonText}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner Symmetrically Centered */}
        <div
          style={{
            maxWidth: '860px',
            margin: '44px auto 0',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '22px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1.5px solid rgba(194, 94, 26, 0.14)',
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'left',
          }}
          className="guarantee-banner"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-50)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <HeartHandshake size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                Unsure which package is right for you?
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
                Join our 100% Free Demo Class or Sunday Free Community Yoga with Rohit first!
              </p>
            </div>
          </div>

          <a
            href="#free-demo"
            className="btn btn-outline btn-sm"
            style={{ flexShrink: 0 }}
          >
            Try Free Demo
          </a>
        </div>

        {/* 4-Pillar Prospective Student Confidence Grid */}
        <div
          style={{
            maxWidth: '860px',
            margin: '24px auto 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '14px',
          }}
        >
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '16px', padding: '14px 16px', border: '1px solid rgba(194, 94, 26, 0.1)', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
              <ShieldCheck size={16} color="#16A34A" />
              <span>Zero Risk Trial</span>
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              Experience the full 60-minute live class free before paying a single dollar.
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '16px', padding: '14px 16px', border: '1px solid rgba(194, 94, 26, 0.1)', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
              <Video size={16} color="var(--primary)" />
              <span>Live Posture Check</span>
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              Rohit observes your camera and offers personal verbal cues so you stay safe.
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '16px', padding: '14px 16px', border: '1px solid rgba(194, 94, 26, 0.1)', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
              <Clock size={16} color="#D97706" />
              <span>Flexible Timings</span>
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              Switch between morning & evening batches if your schedule changes.
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '16px', padding: '14px 16px', border: '1px solid rgba(194, 94, 26, 0.1)', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
              <Calendar size={16} color="var(--primary)" />
              <span>HD Replay Access</span>
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              Missed a session? Watch high-definition class recordings anytime.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .guarantee-banner {
            flex-direction: column !important;
            gap: 16px !important;
            text-align: center !important;
            align-items: center !important;
          }
          .guarantee-banner > div {
            text-align: center !important;
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
