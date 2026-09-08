import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import { getFaqSchema } from '../data/seoSchema';
import { Sparkles, CheckCircle2, ArrowRight, Clock, Calendar, ShieldCheck, Sun, Heart, Flame, ChevronDown, ChevronUp } from 'lucide-react';

export default function HathaYogaPage({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);

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

  const hathaFaqs = [
    {
      question: 'What is Traditional Hatha Yoga?',
      answer: 'Traditional Hatha Yoga is the classical foundational science of yoga from Rishikesh. "Ha" represents solar vital energy and "Tha" represents lunar calming awareness. In our online classes, Rohit emphasizes steady held postures (asanas), deep diaphragmatic breathing (pranayama), and mindful spinal alignment to balance the body and quiet the mind.'
    },
    {
      question: 'Are Hatha yoga online classes suitable for complete beginners?',
      answer: 'Yes, absolutely. Classical Hatha yoga is celebrated worldwide as the best style for beginners because postures are held with patience rather than rushed through in fast transitions. Rohit watches your camera feed and offers gentle modifications for stiff hips, tight hamstrings, or sensitive joints.'
    },
    {
      question: 'What is the weekly schedule for online Hatha yoga classes?',
      answer: 'Classes run three days per week every Monday, Wednesday, and Friday across three morning Eastern Standard Time (EST) options: 6:30 AM EST (Sunrise Alignment), 7:45 AM EST (Morning Vitality Flow), and 9:00 AM EST (Gentle Alignment).'
    },
    {
      question: 'How much do Hatha yoga online classes cost?',
      answer: 'We provide a 100% Free Demo Class ($0) so you can experience Rohit’s teaching risk-free. Ongoing tuition is transparent: $5 for a single daily drop-in class pass, or $50 per month for our full 12-class package with live camera corrections and WhatsApp support.'
    },
    {
      question: 'What equipment do I need for an online Hatha class?',
      answer: 'You only need a non-slip yoga mat, comfortable stretchable clothing, and a device with a working camera (laptop, tablet, or smartphone) placed 6 to 8 feet away so your full body is visible.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Hatha Yoga Online Classes | Live Traditional Hatha Yoga"
        description="Join authentic live Hatha yoga online classes with Rohit from Rishikesh. Practice classical asana alignment, restorative pranayama, and mindful movement on M/W/F."
        canonicalUrl="https://yogawithrohit.com/hatha-yoga-online-classes"
        keywords="Hatha yoga online classes, traditional Hatha yoga, online Hatha yoga, live Hatha yoga classes, Rishikesh Hatha yoga, Hatha yoga classes online"
        breadcrumbs={breadcrumbs}
        faqSchema={getFaqSchema(hathaFaqs)}
      />

      <PageBanner
        badge="Classical Rishikesh Lineage"
        title="Live Hatha Yoga Online Classes"
        subtitle="Experience classical Traditional Hatha Yoga directly from Rishikesh. Discover steady postures, mindful breathwork, spinal decompression, and deep inner balance."
        breadcrumbs={breadcrumbs}
        ctaText="Book Free Hatha Demo"
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
              <Link to="/schedule" className="btn btn-outline" style={{ padding: '13px 20px' }}>
                View Full Interactive Schedule
              </Link>
            </div>
          </section>

          {/* Section 3: Structure of a Hatha Class */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              Structure of a 60-Minute Hatha Yoga Class
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', backgroundColor: '#FAF6F0', padding: '20px', borderRadius: '16px' }}>
                <span className="nicepage-number-pill" style={{ flexShrink: 0 }}>1</span>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 4px' }}>Breath Centering & Sacred Chanting</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>Opening invocation and diaphragmatic breath awareness to calm the nervous system and arrive fully on the mat.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', backgroundColor: '#FAF6F0', padding: '20px', borderRadius: '16px' }}>
                <span className="nicepage-number-pill" style={{ flexShrink: 0 }}>2</span>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 4px' }}>Joint Lubrication & Warm-Up (Sukshma Vyayama)</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>Therapeutic micro-movements to awaken synovial fluid in the neck, shoulders, spine, hips, and ankles safely.</p>
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

          {/* Section 5: Visible FAQs */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', color: 'var(--text-main)', marginBottom: '18px' }}>
              Frequently Asked Questions About Hatha Yoga Online
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {hathaFaqs.map((faq, idx) => {
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
              Ready to Deepen Your Online Practice?
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', marginBottom: '18px', lineHeight: 1.65 }}>
              Try a <Link to="/free-online-yoga-class" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Free Online Yoga Class</Link> this Sunday or schedule your weekday demo. You can also view our full <Link to="/schedule" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Class Schedule</Link>, read our <Link to="/pricing" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Pricing & Packages</Link>, explore <Link to="/live-yoga-classes-online" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Live Yoga Classes Online</Link>, or check out our dynamic evening <Link to="/ashtanga-yoga-online" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Ashtanga Yoga Online</Link>.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '12px 24px' }}>
                <Sparkles size={16} style={{ color: '#FDE68A' }} />
                <span>Book Free Hatha Demo</span>
              </button>
              <Link to="/pricing" className="btn btn-outline" style={{ padding: '12px 20px' }}>
                View Monthly Package ($50)
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  );
}
