import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Compass, Clock, Zap, Target } from 'lucide-react';

export default function ProspectiveMatcher({ onOpenBooking }) {
  const [selectedGoal, setSelectedGoal] = useState('mobility');
  const [selectedLevel, setSelectedLevel] = useState('beginner');
  const [selectedTiming, setSelectedTiming] = useState('6:30 AM EST');

  const goals = [
    {
      id: 'mobility',
      title: 'Mobility & Pain Relief',
      desc: 'Relieve stiff neck, tight lower back & tight hips from desk work',
      icon: '🌿',
      recommendedProgram: 'traditional-hatha',
      programName: 'Traditional Hatha Yoga',
    },
    {
      id: 'stress',
      title: 'Stress Relief & Better Sleep',
      desc: 'Soothe nervous system through ancient Rishikesh Pranayama breathwork',
      icon: '🧘',
      recommendedProgram: 'traditional-hatha',
      programName: 'Traditional Hatha & Breathwork',
    },
    {
      id: 'strength',
      title: 'Core Strength & Stamina',
      desc: 'Tone muscles, build balance and burn calories with active flow',
      icon: '🔥',
      recommendedProgram: 'ashtanga-vinyasa',
      programName: 'Ashtanga Vinyasa Primary Series',
    },
    {
      id: 'authentic',
      title: 'Authentic Yogic Lineage',
      desc: 'Learn classical Indian yoga philosophy, mantra, and precise bandhas',
      icon: '🕉️',
      recommendedProgram: 'traditional-hatha',
      programName: 'Classical Rishikesh Hatha Yoga',
    },
  ];

  const levels = [
    { id: 'beginner', label: 'Beginner / Stiff Body', sub: 'Zero experience needed' },
    { id: 'intermediate', label: 'Some Practice', sub: 'Know basic sun salutations' },
    { id: 'advanced', label: 'Consistent Yogi', sub: 'Looking for deeper refinement' },
  ];

  const timings = [
    { time: '6:30 AM EST', label: 'Early Sunrise Batch', tag: 'Traditional Hatha' },
    { time: '7:45 AM EST', label: 'Morning Energy Batch', tag: 'Traditional Hatha' },
    { time: '9:00 AM EST', label: 'Evening Rejuvenation', tag: 'Ashtanga Vinyasa' },
  ];

  const currentGoalObj = goals.find((g) => g.id === selectedGoal) || goals[0];

  const handleClaimDemo = () => {
    onOpenBooking({
      plan: 'demo',
      programId: currentGoalObj.recommendedProgram,
      programName: currentGoalObj.programName,
      batch: selectedTiming,
      title: `Free Demo: ${currentGoalObj.programName} (${selectedTiming})`,
    });
  };

  return (
    <section
      id="prospective-matcher"
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderTop: '1px solid rgba(194, 94, 26, 0.08)',
        borderBottom: '1px solid rgba(194, 94, 26, 0.08)',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center" style={{ maxWidth: '780px', margin: '0 auto 44px' }}>
          <div className="section-tag" style={{ margin: '0 auto 12px' }}>
            <Compass size={14} />
            <span>PERSONALIZED CLASS MATCH</span>
          </div>

          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.8vw, 42px)' }}>
            Find Your Ideal Practice in <span style={{ color: 'var(--primary)' }}>30 Seconds</span>
          </h2>

          <p className="section-subtitle">
            Not sure which batch fits you best? Answer 3 quick preferences to see your tailored practice roadmap and claim your <strong>100% Free Live Zoom Demo</strong>.
          </p>
        </div>

        {/* Interactive Grid: Left Controls (3 Steps) | Right Dynamic Recommendation Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Interactive Preference Selectors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
            {/* Step 1: Goal */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span className="nicepage-number-pill" style={{ width: '32px', height: '32px', fontSize: '13px' }}>1</span>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  What is your primary wellness aspiration?
                </h4>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {goals.map((g) => {
                  const isActive = selectedGoal === g.id;
                  return (
                    <div
                      key={g.id}
                      onClick={() => setSelectedGoal(g.id)}
                      className={`matcher-option-card ${isActive ? 'active' : ''}`}
                      style={{ padding: '14px 16px' }}
                    >
                      <span style={{ fontSize: '24px', flexShrink: 0 }}>{g.icon}</span>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: isActive ? 'var(--primary-dark)' : 'var(--text-main)' }}>
                          {g.title}
                        </div>
                        <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.35 }}>
                          {g.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Experience Level */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span className="nicepage-number-pill" style={{ width: '32px', height: '32px', fontSize: '13px' }}>2</span>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  What is your current yoga experience?
                </h4>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {levels.map((lvl) => {
                  const isActive = selectedLevel === lvl.id;
                  return (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => setSelectedLevel(lvl.id)}
                      style={{
                        padding: '12px 10px',
                        borderRadius: '14px',
                        border: isActive ? '2px solid var(--primary)' : '1.5px solid rgba(194, 94, 26, 0.14)',
                        backgroundColor: isActive ? 'var(--primary-50)' : '#FFFFFF',
                        textAlign: 'center',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ fontSize: '13px', fontWeight: 800, color: isActive ? 'var(--primary-dark)' : 'var(--text-main)' }}>
                        {lvl.label}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {lvl.sub}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Preferred Class Timing */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span className="nicepage-number-pill" style={{ width: '32px', height: '32px', fontSize: '13px' }}>3</span>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  Choose your ideal live batch timing (EST):
                </h4>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {timings.map((t) => {
                  const isActive = selectedTiming === t.time;
                  return (
                    <button
                      key={t.time}
                      type="button"
                      onClick={() => setSelectedTiming(t.time)}
                      style={{
                        padding: '12px 10px',
                        borderRadius: '14px',
                        border: isActive ? '2px solid var(--primary)' : '1.5px solid rgba(194, 94, 26, 0.14)',
                        backgroundColor: isActive ? 'var(--primary-50)' : '#FFFFFF',
                        textAlign: 'center',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary)' }}>
                        {t.time}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {t.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Matched Recommendation Card */}
          <div
            style={{
              backgroundColor: '#FAF6F0',
              borderRadius: '26px',
              padding: '34px 30px',
              border: '2px solid var(--primary-200)',
              boxShadow: '0 20px 45px -10px rgba(69, 26, 3, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Accent Ribbon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(194, 94, 26, 0.16)',
                paddingBottom: '16px',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="live-pulse-dot" />
                <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary-dark)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Your Personalized Match
                </span>
              </div>
              <span
                style={{
                  backgroundColor: '#DCFCE7',
                  color: '#15803D',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '9999px',
                }}
              >
                99% Match Score
              </span>
            </div>

            {/* Program Title & Timing */}
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Recommended Program
              </span>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)', margin: '4px 0 8px' }}>
                {currentGoalObj.programName}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>
                  <Clock size={15} color="var(--primary)" />
                  <span>Selected Batch: <strong>{selectedTiming}</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>
                  <Target size={15} color="var(--primary)" />
                  <span>Level: <strong style={{ textTransform: 'capitalize' }}>{selectedLevel}</strong></span>
                </div>
              </div>
            </div>

            {/* Prospective 30-Day Outcomes */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                padding: '18px 20px',
                marginBottom: '22px',
                border: '1px solid rgba(194, 94, 26, 0.1)',
              }}
            >
              <div style={{ fontSize: '12.5px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={15} color="var(--accent-gold)" fill="var(--accent-gold)" />
                <span>What You Will Experience in Your First 30 Days:</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  <CheckCircle2 size={16} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Day 1:</strong> Immediate relief in spine tension & customized posture feedback on camera.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  <CheckCircle2 size={16} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Day 10:</strong> Deeper diaphragmatic lung capacity & noticeably improved hip flexibility.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  <CheckCircle2 size={16} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Day 30:</strong> Effortless morning vitality, calm nervous system, and consistent practice habit.</span>
                </li>
              </ul>
            </div>

            {/* Rohit's Direct Instructor Note */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '22px',
                backgroundColor: 'rgba(194, 94, 26, 0.08)',
                padding: '12px 16px',
                borderRadius: '14px',
              }}
            >
              <img
                src="/images/certificates/trophy-award-honor.jpg"
                alt="Rohit Yoga Teacher"
                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--primary)', flexShrink: 0 }}
              />
              <p style={{ fontSize: '12.5px', color: 'var(--text-main)', margin: 0, lineHeight: 1.4, fontStyle: 'italic' }}>
                "In your demo class, I will personally watch your camera and guide each breath gently. You will leave feeling lighter." — Rohit
              </p>
            </div>

            {/* Action CTA & Prospective Guarantee */}
            <div>
              <button
                onClick={handleClaimDemo}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '15px 24px',
                  fontSize: '15.5px',
                  boxShadow: '0 12px 28px -4px rgba(194, 94, 26, 0.45)',
                }}
              >
                <Sparkles size={18} style={{ color: '#FDE68A' }} />
                <span>Claim Free Demo For This Match</span>
                <ArrowRight size={18} />
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '12px',
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                }}
              >
                <ShieldCheck size={14} color="#16A34A" />
                <span>100% Free Demo Session • No Credit Card Required • Live Zoom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
