import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import { Sparkles, CheckCircle2, ArrowRight, Clock, Flame, ShieldCheck, Zap, Award } from 'lucide-react';

export default function AshtangaYogaPage({ onOpenBooking }) {
  const handleDemoClick = () => {
    onOpenBooking({
      plan: 'demo',
      programId: 'ashtanga-vinyasa',
      programName: 'Ashtanga Vinyasa Primary Series',
      batch: '7:30 PM EST',
      title: 'Free Demo: Ashtanga Vinyasa Primary Series',
    });
  };

  const breadcrumbs = [
    { name: 'Online Yoga Classes', url: '/online-yoga-classes' },
    { name: 'Ashtanga Yoga Online', url: '/ashtanga-yoga-online' },
  ];

  return (
    <>
      <SEOHead
        title="Ashtanga Yoga Online | Ashtanga Vinyasa Classes | Yoga With Rohit"
        description="Practice authentic Ashtanga yoga online with Rohit. Learn the classical Ashtanga Vinyasa Primary Series with synchronized breath and movement. Live evening classes M/W/F."
        canonicalUrl="https://www.yogawithrohit.com/ashtanga-yoga-online"
        keywords="Ashtanga yoga online, Ashtanga Vinyasa online, Ashtanga primary series, live Ashtanga yoga, Ashtanga yoga classes"
        breadcrumbs={breadcrumbs}
      />

      <PageBanner
        badge="Dynamic & Athletic Vinyasa"
        title="Ashtanga Yoga Online"
        subtitle="Build extraordinary upper-body strength, core endurance, and internal heat with the classical Ashtanga Vinyasa Primary Series taught live by Rohit from Rishikesh."
        breadcrumbs={breadcrumbs}
        ctaText="Book Your Free Demo"
        onCtaClick={handleDemoClick}
      />

      <article className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom" style={{ maxWidth: '960px' }}>
          
          {/* Section 1: What Is Ashtanga Vinyasa Yoga? */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              What Is Ashtanga Vinyasa Yoga?
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              Ashtanga Vinyasa is a dynamic, disciplined system of classical Indian yoga popularized in Mysore. The term <strong>Vinyasa</strong> refers to breath-synchronized movement—linking conscious inhalation and exhalation with flowing transitions between standing and seated asanas.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              In our <strong>Ashtanga yoga online</strong> classes, practice is structured around the classical Primary Series (traditionally named <em>Yoga Chikitsa</em>, meaning "yoga therapy"). This sequence systematically purifies the body, strengthens the joints, unblocks energetic channels (nadis), and turns physical exercise into a moving meditation.
            </p>
          </section>

          {/* Section 2: Evening Class Schedule & Batches */}
          <section style={{ marginBottom: '48px', backgroundColor: '#FAF6F0', borderRadius: '24px', padding: '32px', border: '2px solid var(--primary-100)' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Evening Batches
            </span>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)', margin: '6px 0 8px' }}>
              Monday, Wednesday & Friday
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Classes run 3 evenings per week in Eastern Standard Time (EST):
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '16px', border: '1.5px solid rgba(194, 94, 26, 0.16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 800, fontSize: '17px' }}>
                  <Clock size={16} />
                  <span>7:30 PM EST</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Evening Flow Batch</span>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '16px', border: '1.5px solid rgba(194, 94, 26, 0.16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 800, fontSize: '17px' }}>
                  <Clock size={16} />
                  <span>8:45 PM EST</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Strength & Stamina Batch</span>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '16px', border: '1.5px solid rgba(194, 94, 26, 0.16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 800, fontSize: '17px' }}>
                  <Clock size={16} />
                  <span>10:00 PM EST</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Night Reset Flow</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '13px 24px' }}>
                <Sparkles size={16} style={{ color: '#FDE68A' }} />
                <span>Book Your Free Demo</span>
              </button>
              <Link to="/schedule" className="btn btn-outline" style={{ padding: '13px 22px' }}>
                <span>View Full Schedule</span>
              </Link>
            </div>
          </section>

          {/* Section 3: The Tristhana Method */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              The 3 Pillars of Ashtanga: The Tristhana Method
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '20px' }}>
              In Ashtanga Yoga, three core elements are practiced in complete harmony throughout the 60 minutes:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#FAF6F0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  1. Ujjayi Pranayama (Oceanic Breath)
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  A gentle constriction at the back of the throat creating a soft wave-like sound. It regulates heart rate, builds internal body heat (tapas), and keeps the mind anchored in the present moment.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  2. Bandhas (Core Energy Locks)
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Engaging Mula Bandha (pelvic floor lift) and Uddiyana Bandha (lower abdominal draw). This protects the lumbar spine, creates lightness in jump-throughs, and supports deep core stability.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  3. Drishti (Focused Gaze Point)
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Directing the visual focus to designated focal points (such as the tip of the nose, third eye, or big toes). Steadying the eyes quiets mental wandering and enhances balance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Who Benefits from Ashtanga Vinyasa? */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              Who May Benefit from Ashtanga Practice?
            </h2>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <li>Students wanting an athletic, invigorating practice that develops toned muscles and cardiovascular stamina.</li>
              <li>Practitioners who appreciate a consistent, structured routine where progress can be measured week after week.</li>
              <li>Individuals seeking to burn calories, increase metabolic rate, and sweat out stored toxins.</li>
              <li>Yogis transitioning from beginner Hatha who desire a more challenging flow.</li>
            </ul>
          </section>

          {/* Section 5: Cross Links */}
          <div style={{ backgroundColor: '#FAF6F0', padding: '28px', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              Prefer a Slower, Meditative Morning Practice?
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '18px' }}>
              Check out our morning <Link to="/hatha-yoga-online-classes" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Traditional Hatha Yoga Classes</Link> or join for <Link to="/pricing" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>$50 / Month (12 Classes)</Link>.
            </p>
            <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '12px 24px' }}>
              <span>Book Your Free Ashtanga Demo</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </article>
    </>
  );
}
