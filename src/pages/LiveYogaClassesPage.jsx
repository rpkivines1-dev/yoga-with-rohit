import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import { Sparkles, CheckCircle2, ArrowRight, Video, XCircle, Clock, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';

export default function LiveYogaClassesPage({ onOpenBooking }) {
  const handleDemoClick = () => {
    onOpenBooking({ plan: 'demo', title: 'Free Demo Live Online Yoga Class' });
  };

  const breadcrumbs = [
    { name: 'Online Yoga Classes', url: '/online-yoga-classes' },
    { name: 'Live Yoga Classes Online', url: '/live-yoga-classes-online' },
  ];

  return (
    <>
      <SEOHead
        title="Live Yoga Classes Online | Real-Time Zoom Yoga | Yoga With Rohit"
        description="Experience genuine interactive live yoga classes online. Real-time posture corrections, teacher accountability, and structured M/W/F schedule from Rishikesh."
        canonicalUrl="https://www.yogawithrohit.com/live-yoga-classes-online"
        keywords="Live yoga classes online, interactive online yoga, live stream yoga classes, Zoom yoga classes, real-time yoga teacher"
        breadcrumbs={breadcrumbs}
      />

      <PageBanner
        badge="Two-Way Interactive Video"
        title="Live Yoga Classes Online"
        subtitle="Discover why live interactive yoga transforms your consistency and safety far beyond recorded video libraries. Experience real-time posture adjustments directly with Rohit."
        breadcrumbs={breadcrumbs}
        ctaText="Try a Live Class Free"
        onCtaClick={handleDemoClick}
      />

      <article className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom" style={{ maxWidth: '960px' }}>
          
          {/* Section 1: Live Interactive vs Pre-Recorded Videos */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              Why Live Yoga Classes Online Are Completely Different from Recorded Videos
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
              Millions of people have started practicing yoga by searching for videos on YouTube or downloading pre-recorded fitness apps, only to give up within two weeks. Without a live teacher watching, recorded videos provide no feedback on your spinal safety, no personalized modifications, and zero social accountability. <strong>Live yoga classes online</strong> bridge the gap between studio-quality personal guidance and the convenience of practicing at home.
            </p>

            {/* Comparison Table / Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              {/* Pre-recorded */}
              <div style={{ backgroundColor: '#FFF5F5', border: '1.5px solid #FED7D7', borderRadius: '20px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E53E3E', fontWeight: 800, fontSize: '16px', marginBottom: '14px' }}>
                  <XCircle size={20} />
                  <span>Pre-Recorded Yoga Videos</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'var(--text-muted)' }}>
                  <li>❌ No one checks if your alignment is compressing your spine or knees</li>
                  <li>❌ No accountability—easy to skip or quit halfway through</li>
                  <li>❌ One-size-fits-all pacing that ignores your stiffness or injuries</li>
                  <li>❌ Isolation without real human connection or questions</li>
                </ul>
              </div>

              {/* Live Classes */}
              <div style={{ backgroundColor: '#F0FDF4', border: '1.5px solid #BBF7D0', borderRadius: '20px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#16A34A', fontWeight: 800, fontSize: '16px', marginBottom: '14px' }}>
                  <CheckCircle2 size={20} />
                  <span>Live Classes with Rohit</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'var(--text-main)' }}>
                  <li>✅ Rohit watches your camera feed and offers real-time verbal adjustments</li>
                  <li>✅ Scheduled class times create sustainable weekly discipline</li>
                  <li>✅ Modifications provided instantly if a posture causes discomfort</li>
                  <li>✅ Interactive Q&A before and after class to discuss your progress</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Core Elements of the Live Experience */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              The 5 Pillars of Our Live Online Yoga Studio
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#FAF6F0', padding: '22px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  1. Real-Time Verbal Instruction
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  You don't need to constantly strain your neck looking at a screen. Rohit gives articulate, cadence-based verbal cues that guide your movement through your ears.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', padding: '22px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  2. Small-Batch Intimacy
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Classes are capped at 15 students per batch. You are an active participant, known by your name, not an anonymous screen number.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', padding: '22px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  3. Zoom & Google Meet Integration
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Join with 1-click from any computer, tablet, or phone. Direct links are sent via email and WhatsApp alongside automated calendar reminders.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', padding: '22px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  4. Structured Mon/Wed/Fri Rhythm
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  A predictable weekly cadence establishes healthy habit loops, allowing muscles and fascia optimal recovery between sessions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Navigation Hub to All Core Pages */}
          <section style={{ backgroundColor: '#FAF6F0', borderRadius: '24px', padding: '36px', border: '1.5px solid rgba(194, 94, 26, 0.16)', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', color: 'var(--text-main)', marginBottom: '12px', textAlign: 'center' }}>
              Explore Our Live Programs & Schedule
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 28px' }}>
              Choose your practice style, explore class batches, and experience transparent, affordable tuition:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px' }}>
              <Link to="/hatha-yoga-online-classes" style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(194, 94, 26, 0.14)', display: 'block', transition: 'all 0.2s' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary)', margin: '0 0 4px' }}>Traditional Hatha</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Morning Batches (EST)</span>
              </Link>

              <Link to="/ashtanga-yoga-online" style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(194, 94, 26, 0.14)', display: 'block', transition: 'all 0.2s' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary)', margin: '0 0 4px' }}>Ashtanga Vinyasa</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Evening Batches (EST)</span>
              </Link>

              <Link to="/schedule" style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(194, 94, 26, 0.14)', display: 'block', transition: 'all 0.2s' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary)', margin: '0 0 4px' }}>Class Schedule</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Timezone Converter</span>
              </Link>

              <Link to="/pricing" style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(194, 94, 26, 0.14)', display: 'block', transition: 'all 0.2s' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary)', margin: '0 0 4px' }}>Tuition & Pricing</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>$5 Daily • $50 Monthly</span>
              </Link>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link to="/free-yoga-demo" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
                <Sparkles size={16} style={{ color: '#FDE68A' }} />
                <span>Book Your Free Online Yoga Demo</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
