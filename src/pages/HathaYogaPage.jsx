import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import { Sparkles, CheckCircle2, ArrowRight, Clock, Calendar, ShieldCheck, Sun, Heart, Flame } from 'lucide-react';

export default function HathaYogaPage({ onOpenBooking }) {
  const handleDemoClick = () => {
    onOpenBooking({
      plan: 'demo',
      programId: 'traditional-hatha',
      programName: 'Traditional Hatha Yoga',
      batch: '6:30 AM EST',
      title: 'Free Demo: Traditional Hatha Yoga',
    });
  };

  const breadcrumbs = [
    { name: 'Online Yoga Classes', url: '/online-yoga-classes' },
    { name: 'Hatha Yoga Online Classes', url: '/hatha-yoga-online-classes' },
  ];

  return (
    <>
      <SEOHead
        title="Hatha Yoga Online Classes | Traditional Hatha Yoga | Yoga With Rohit"
        description="Join authentic Hatha yoga online classes with Rohit from Rishikesh. Practice classical asana alignment, restorative pranayama, and mindful movement on Monday, Wednesday & Friday."
        canonicalUrl="https://www.yogawithrohit.com/hatha-yoga-online-classes"
        keywords="Hatha yoga online classes, traditional Hatha yoga, online Hatha yoga, Hatha yoga classes live, Rishikesh Hatha yoga"
        breadcrumbs={breadcrumbs}
      />

      <PageBanner
        badge="Classical Rishikesh Lineage"
        title="Hatha Yoga Online Classes"
        subtitle="Experience classical Traditional Hatha Yoga directly from Rishikesh. Discover steady postures, mindful breathwork, spinal decompression, and deep inner balance."
        breadcrumbs={breadcrumbs}
        ctaText="Book Free Demo"
        onCtaClick={handleDemoClick}
      />

      <article className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom" style={{ maxWidth: '960px' }}>
          
          {/* Section 1: What Is Traditional Hatha Yoga? */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              What Is Traditional Hatha Yoga?
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              Traditional Hatha Yoga is the classical mother science from which most modern yoga forms originated. In Sanskrit, <strong>Ha</strong> represents the sun (vitality, warmth, active energy) and <strong>Tha</strong> represents the moon (cooling, calm, introspective awareness). 
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              In our <strong>Hatha yoga online classes</strong>, Rohit emphasizes held postures combined with conscious diaphragmatic breathing. Rather than hurrying from one shape to the next, students spend deliberate time inside each asana. This builds deep postural strength, decompresses compressed spinal discs, and teaches the mind to remain serene in the midst of physical sensation.
            </p>
          </section>

          {/* Section 2: Available Batches & Schedule */}
          <section style={{ marginBottom: '48px', backgroundColor: '#FAF6F0', borderRadius: '24px', padding: '32px', border: '2px solid var(--primary-100)' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Schedule & Timings
            </span>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)', margin: '6px 0 8px' }}>
              Monday, Wednesday & Friday
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Classes run three days per week across three morning Eastern Standard Time (EST) options:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '16px', border: '1.5px solid rgba(194, 94, 26, 0.16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 800, fontSize: '17px' }}>
                  <Clock size={16} />
                  <span>6:30 AM EST</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Early Sunrise Alignment</span>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '16px', border: '1.5px solid rgba(194, 94, 26, 0.16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 800, fontSize: '17px' }}>
                  <Clock size={16} />
                  <span>7:45 AM EST</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Morning Vitality Flow</span>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '16px', border: '1.5px solid rgba(194, 94, 26, 0.16)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 800, fontSize: '17px' }}>
                  <Clock size={16} />
                  <span>9:00 AM EST</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Gentle Alignment Batch</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '13px 24px' }}>
                <Sparkles size={16} style={{ color: '#FDE68A' }} />
                <span>Book Free Demo</span>
              </button>
              <Link to="/schedule" className="btn btn-outline" style={{ padding: '13px 22px' }}>
                <span>View Class Schedule</span>
              </Link>
            </div>
          </section>

          {/* Section 3: Typical Class Structure */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              Structure of a Live Hatha Yoga Session
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', backgroundColor: '#FAF6F0', padding: '20px', borderRadius: '16px' }}>
                <span className="nicepage-number-pill" style={{ flexShrink: 0 }}>1</span>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 4px' }}>Centering & Sukshma Vyayama (Joint Freeing)</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>Opening breath awareness to transition into your body, followed by rotational movements for the neck, shoulders, wrists, and knees.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', backgroundColor: '#FAF6F0', padding: '20px', borderRadius: '16px' }}>
                <span className="nicepage-number-pill" style={{ flexShrink: 0 }}>2</span>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 4px' }}>Surya Namaskars (Sun Salutations)</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>Classical 12-step sun salutations to warm the cardiovascular system and gently lengthen the spine and hamstrings.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', backgroundColor: '#FAF6F0', padding: '20px', borderRadius: '16px' }}>
                <span className="nicepage-number-pill" style={{ flexShrink: 0 }}>3</span>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 4px' }}>Held Standing, Seated & Prone Postures</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>Trikonasana (Triangle), Virabhadrasana (Warrior), Bhujangasana (Cobra), and Paschimottanasana (Seated Forward Bend) with live camera posture feedback.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', backgroundColor: '#FAF6F0', padding: '20px', borderRadius: '16px' }}>
                <span className="nicepage-number-pill" style={{ flexShrink: 0 }}>4</span>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 4px' }}>Pranayama & Savasana Stillness</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>Nadi Shodhana (channel-clearing breathwork) to soothe the nervous system, followed by deep systematic relaxation.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Who Is Traditional Hatha Suitable For? */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              Who Should Practice Traditional Hatha Yoga?
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              Traditional Hatha Yoga is universally recommended for:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <li>Beginners who want to learn safe postural foundations before trying fast-moving styles.</li>
              <li>Students working through desk stiffness, tight hamstrings, or rounded shoulders.</li>
              <li>Individuals looking to reduce mental stress, calm anxiety, and improve sleep quality.</li>
              <li>Yogis seeking the authentic meditative philosophy and spiritual depth of Rishikesh yoga.</li>
            </ul>
          </section>

          {/* Section 5: Related Links & CTAs */}
          <div style={{ backgroundColor: '#FAF6F0', padding: '28px', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              Looking for a More Dynamic, Athletic Practice?
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '18px' }}>
              Explore our evening <Link to="/ashtanga-yoga-online" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Ashtanga Yoga Online Classes</Link> or review our <Link to="/pricing" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>$5 Daily & $50 Monthly Pricing</Link>.
            </p>
            <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '12px 24px' }}>
              <span>Book Your Free Hatha Demo</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </article>
    </>
  );
}
