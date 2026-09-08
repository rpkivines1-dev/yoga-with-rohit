import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import { getFaqSchema } from '../data/seoSchema';
import { Sparkles, CheckCircle2, ArrowRight, Clock, Flame, ShieldCheck, Zap, ChevronDown, ChevronUp } from 'lucide-react';

export default function AshtangaYogaPage({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);

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

  const ashtangaFaqs = [
    {
      question: 'What is Ashtanga Vinyasa yoga and how does it work online?',
      answer: 'Ashtanga Vinyasa is an athletic, breath-synchronized sequence of classical yoga postures. In our live online classes, Rohit guides you through the foundational Ashtanga Primary Series (Yoga Chikitsa), calling out traditional Sanskrit counts, breathing cues, and monitoring each student’s posture via live two-way video.'
    },
    {
      question: 'Can beginners practice Ashtanga yoga online?',
      answer: 'Yes. While Ashtanga is vigorous and requires core strength, Rohit provides progressive step-by-step modifications for students new to the system. You will learn modified Sun Salutations (Surya Namaskar A & B), accessible standing postures, and safe jump-through variations.'
    },
    {
      question: 'What is the schedule for live Ashtanga yoga online classes?',
      answer: 'Ashtanga evening batches take place every Monday, Wednesday, and Friday at three convenient Eastern Standard Time (EST) slots: 7:30 PM EST (Evening Flow Batch), 8:45 PM EST (Strength & Stamina Batch), and 10:00 PM EST (Night Reset Flow).'
    },
    {
      question: 'What are the three pillars (Tristhana) of Ashtanga yoga?',
      answer: 'The Tristhana method consists of: 1) Ujjayi Pranayama (steady ocean breath to regulate heat and nervous energy), 2) Bandhas (core energy locks at the pelvic floor and lower abdomen for spine support), and 3) Drishti (focused gaze points that quiet the active thinking mind).'
    },
    {
      question: 'How much do Ashtanga yoga online classes cost?',
      answer: 'You can experience your first class completely free ($0) with our Free Demo pass. Continuing tuition is $5 per single daily class pass, or $50 per month for the complete 12-class live package with interactive teacher feedback.'
    },
    {
      question: 'What equipment do I need for Ashtanga yoga online?',
      answer: 'A high-grip non-slip yoga mat is recommended because Ashtanga produces natural sweat and heat. A small hand towel, a water bottle, and a laptop or tablet placed 6–8 feet away so Rohit can see your entire mat will ensure an optimal practice.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Ashtanga Yoga Online | Live Ashtanga Vinyasa Classes"
        description="Practice authentic Ashtanga yoga online with Rohit. Learn the classical Ashtanga Vinyasa Primary Series with synchronized breath and movement. Live evening classes M/W/F."
        canonicalUrl="https://yogawithrohit.com/ashtanga-yoga-online"
        keywords="Ashtanga yoga online, Ashtanga Vinyasa online, Ashtanga primary series, live Ashtanga yoga, Ashtanga yoga classes, online Ashtanga yoga"
        breadcrumbs={breadcrumbs}
        faqSchema={getFaqSchema(ashtangaFaqs)}
      />

      <PageBanner
        badge="Dynamic & Athletic Vinyasa"
        title="Live Ashtanga Yoga Online Classes"
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

          {/* Section 5: Visible FAQs */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', color: 'var(--text-main)', marginBottom: '18px' }}>
              Frequently Asked Questions About Ashtanga Yoga Online
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {ashtangaFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      border: '1.5px solid rgba(194, 94, 26, 0.14)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      backgroundColor: '#FAF6F0',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        fontWeight: 800,
                        fontSize: '15px',
                        color: 'var(--text-main)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp size={18} color="var(--primary)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 20px 16px', fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 6: Internal Links & Contextual CTAs */}
          <div style={{ backgroundColor: '#FAF6F0', padding: '32px', borderRadius: '22px', border: '1.5px solid rgba(194, 94, 26, 0.14)' }}>
            <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
              Explore Other Yoga Classes & Guides
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', marginBottom: '18px', lineHeight: 1.65 }}>
              Looking for a gentler morning practice? Discover our <Link to="/hatha-yoga-online-classes" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Hatha Yoga Online Classes</Link> or start with our foundational <Link to="/online-yoga-classes-for-beginners" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Online Yoga Classes for Beginners</Link>. Experience a <Link to="/free-online-yoga-class" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Free Online Yoga Class</Link> this Sunday, review our <Link to="/schedule" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Class Schedule</Link>, explore <Link to="/live-yoga-classes-online" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Live Yoga Classes Online</Link>, or read our guide on <Link to="/blog/ashtanga-vinyasa-primary-series-guide" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Ashtanga Primary Series Practice</Link>.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '12px 24px' }}>
                <Sparkles size={16} style={{ color: '#FDE68A' }} />
                <span>Book Your Free Ashtanga Demo</span>
              </button>
              <Link to="/pricing" className="btn btn-outline" style={{ padding: '12px 20px' }}>
                <span>Monthly Package ($50 / 12 Classes)</span>
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  );
}
