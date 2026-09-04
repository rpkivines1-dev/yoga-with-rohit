import React, { useState } from 'react';
import { Calendar, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap, Activity, Heart, Award } from 'lucide-react';

export default function TransformationRoadmap({ onOpenBooking }) {
  const [activeWeek, setActiveWeek] = useState(1);

  const steps = [
    {
      week: 1,
      title: 'Spinal Reset & Breath Awareness',
      subtitle: 'Days 1 to 7',
      focus: 'Gentle spinal decompression, joint lubrication & intro to deep Ujjayi breathwork',
      milestones: [
        'Live 1-on-1 posture analysis by Rohit on Zoom',
        'Relief from upper back tightness and desk hunch',
        'Learn diaphragmatic breathing to quiet the nervous system',
        'Begin experiencing deeper, uninterrupted sleep',
      ],
      quote: '"By day 3, the tension in my shoulder blades had melted away." — Sarah M., New York',
      badge: 'Spinal Alignment',
    },
    {
      week: 2,
      title: 'Hip Opening & Hamstring Mobility',
      subtitle: 'Days 8 to 14',
      focus: 'Gradual lengthening of posterior chain, releasing stored pelvic and lower back tension',
      milestones: [
        'Noticeably closer to touching toes without straining knees',
        'Pelvic stability and core activation during standing asanas',
        'Rohit adjusts your hip squaring live on camera',
        'Reduced afternoon fatigue and improved posture awareness throughout your workday',
      ],
      quote: '"I could finally touch my toes for the first time in 10 years!" — David P., London',
      badge: 'Mobility Breakthrough',
    },
    {
      week: 3,
      title: 'Fluid Vinyasa & Core Stamina',
      subtitle: 'Days 15 to 21',
      focus: 'Synchronizing movement with breath in traditional Surya Namaskars & standing balances',
      milestones: [
        'Smooth coordination in Sun Salutation transitions',
        'Steady balance in Vrksasana (Tree Pose) and Virabhadrasana',
        'Noticeable increase in physical stamina and core firmness',
        'Pranayama techniques (Nadi Shodhana) bringing morning clarity',
      ],
      quote: '"My energy levels now remain steady throughout the entire workday." — Elena R., Toronto',
      badge: 'Stamina & Balance',
    },
    {
      week: 4,
      title: 'Holistic Vitality & Inner Stillness',
      subtitle: 'Days 22 to 30',
      focus: 'Integrating physical strength with meditative calm and sustainable lifelong practice',
      milestones: [
        'Effortless 60-minute practice without feeling drained',
        'Measurable drop in everyday stress and mental chatter',
        'Confidence to practice classical asanas with correct anatomical alignment',
        'Permanent morning yoga routine established',
      ],
      quote: '"Rohit’s Rishikesh classes are the best investment I made in my health." — Mark T., California',
      badge: 'Lifelong Transformation',
    },
  ];

  const currentStep = steps.find((s) => s.week === activeWeek) || steps[0];

  return (
    <section
      id="transformation-roadmap"
      className="section-padding"
      style={{
        backgroundColor: '#FAF6F0',
        position: 'relative',
        borderTop: '1px solid rgba(194, 94, 26, 0.08)',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 44px' }}>
          <div className="section-tag" style={{ margin: '0 auto 12px' }}>
            <Activity size={14} />
            <span>PROSPECTIVE STUDENT MILESTONES</span>
          </div>

          <h2 className="section-title">
            Your 30-Day <span style={{ color: 'var(--primary)' }}>Transformation Roadmap</span>
          </h2>

          <p className="section-subtitle">
            What happens when you practice authentic Rishikesh yoga live with Rohit? Here is the exact week-by-week progress experienced by hundreds of students across the US, UK, and Canada.
          </p>
        </div>

        {/* 4 Week Tabs / Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
            marginBottom: '36px',
          }}
        >
          {steps.map((step) => {
            const isActive = activeWeek === step.week;
            return (
              <div
                key={step.week}
                onClick={() => setActiveWeek(step.week)}
                className={`roadmap-step-card ${isActive ? 'active-step' : ''}`}
                style={{
                  cursor: 'pointer',
                  borderWidth: isActive ? '2.5px' : '1.5px',
                  position: 'relative',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 800,
                        color: isActive ? '#FFFFFF' : 'var(--primary)',
                        backgroundColor: isActive ? 'var(--primary)' : 'var(--primary-50)',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        letterSpacing: '0.04em',
                      }}
                    >
                      WEEK {step.week}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)' }}>
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.45, margin: 0 }}>
                    {step.focus}
                  </p>
                </div>

                <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid rgba(194, 94, 26, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--primary)' }}>
                    {step.badge}
                  </span>
                  <span style={{ fontSize: '11.5px', fontWeight: 800, color: isActive ? 'var(--primary)' : 'var(--text-muted)' }}>
                    {isActive ? '● Selected' : 'View Details →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Week Active Inspector Box */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '26px',
            padding: '36px 32px',
            boxShadow: 'var(--shadow-md)',
            border: '2px solid rgba(194, 94, 26, 0.16)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '36px',
            alignItems: 'center',
          }}
        >
          {/* Left: What You Achieve in this Week */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="live-pulse-dot" />
              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Week {currentStep.week} Deep Dive
              </span>
            </div>
            <h3 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px' }}>
              {currentStep.title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {currentStep.milestones.map((m, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '14px', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    {m}
                  </span>
                </div>
              ))}
            </div>

            {/* Student Quote Box */}
            <div
              style={{
                backgroundColor: 'var(--primary-50)',
                borderLeft: '4px solid var(--primary)',
                padding: '14px 18px',
                borderRadius: '0 14px 14px 0',
                fontStyle: 'italic',
                fontSize: '13.5px',
                color: 'var(--primary-dark)',
                lineHeight: 1.5,
              }}
            >
              {currentStep.quote}
            </div>
          </div>

          {/* Right: Rohit's Teaching Promise & CTA */}
          <div
            style={{
              backgroundColor: '#FAF6F0',
              borderRadius: '20px',
              padding: '28px 24px',
              border: '1px solid rgba(194, 94, 26, 0.12)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-100)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <Award size={32} />
            </div>

            <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              Experience Week 1 Completely Free
            </h4>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '22px', maxWidth: '320px' }}>
              Join a live demo session directly with Rohit. Receive personalized feedback on your posture with zero commitment.
            </p>

            <button
              onClick={() => onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' })}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '14px 24px',
                fontSize: '15px',
                boxShadow: '0 12px 28px -4px rgba(194, 94, 26, 0.45)',
              }}
            >
              <Sparkles size={17} style={{ color: '#FDE68A' }} />
              <span>Book Your Free Demo Class</span>
              <ArrowRight size={17} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px', fontSize: '11.5px', color: 'var(--text-muted)' }}>
              <ShieldCheck size={14} color="#16A34A" />
              <span>Instant Zoom link sent to your email & WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
