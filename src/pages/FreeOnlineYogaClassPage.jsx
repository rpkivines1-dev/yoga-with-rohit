import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import FreeDemoSection from '../components/home/FreeDemoSection';
import { getFaqSchema } from '../data/seoSchema';
import {
  Sparkles,
  Sun,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Video,
  Calendar,
  Clock,
  HeartHandshake,
  Users,
  Award,
  ChevronDown,
  ChevronUp,
  MapPin,
  Flame,
  HelpCircle,
} from 'lucide-react';

export default function FreeOnlineYogaClassPage({ onOpenBooking, showToast, setStudentPortalOpen }) {
  const [openFaq, setOpenFaq] = useState(0);

  const handleSundayFreeClick = () => {
    onOpenBooking({
      plan: 'sunday-free',
      title: 'Sunday Free Community Yoga Class',
      programId: 'sunday-free',
      batch: '8:00 AM EST (Sunday)',
    });
  };

  const handleDemoClick = () => {
    onOpenBooking({
      plan: 'demo',
      title: 'Free Demo Online Yoga Class',
      programId: 'traditional-hatha',
      batch: '6:30 AM EST',
    });
  };

  const breadcrumbs = [
    { name: 'Online Yoga Classes', url: '/online-yoga-classes' },
    { name: 'Free Online Yoga Class', url: '/free-online-yoga-class' },
  ];

  const faqs = [
    {
      question: 'Is this online yoga class really 100% free?',
      answer:
        'Yes, completely $0. There are zero hidden fees, zero credit card requirements, and zero automatic subscriptions. Both our Sunday Community Class and our 60-minute weekday demo classes are free to join.',
    },
    {
      question: 'Who can join the free online yoga class?',
      answer:
        'Our free online yoga classes are open to everyone worldwide. Whether you are a complete beginner, returning to practice after an injury, or managing stiff muscles from desk work, Rohit offers modifications for all flexibility levels.',
    },
    {
      question: 'How do I join the live class online?',
      answer:
        'Simply click "Book Free Class" and enter your name and email or WhatsApp. You will immediately receive your secure Zoom and Google Meet access link with class instructions.',
    },
    {
      question: 'Do I need a special yoga camera or studio setup at home?',
      answer:
        'No. A laptop, tablet, or smartphone placed 6 to 8 feet away so your yoga mat is visible is all that is needed. Good room lighting helps Rohit see your posture alignment clearly.',
    },
    {
      question: 'What is the format of the free live session?',
      answer:
        'The session is a full 60-minute interactive live class. It begins with mindful breath centering, transitions into joint warm-ups and foundational asanas, and concludes with guided pranayama and deep restorative Savasana.',
    },
    {
      question: 'Will the teacher give me live posture corrections?',
      answer:
        'Yes. Because our classes are conducted live on video rather than pre-recorded broadcasts, Rohit watches student feeds and offers personalized verbal alignment cues to ensure joint safety and proper technique.',
    },
  ];

  const steps = [
    {
      num: 1,
      title: 'Reserve Your Spot ($0 Cost)',
      desc: 'Select either the Sunday Community Class or a weekday M/W/F Demo Batch. Enter your name and contact details—no payment information required.',
    },
    {
      num: 2,
      title: 'Receive Instant Zoom Link',
      desc: 'Check your email or WhatsApp message for your direct calendar invite and high-definition video meeting link.',
    },
    {
      num: 3,
      title: 'Unroll Your Mat & Practice Live',
      desc: 'Position your device 6-8 feet away, step on your mat, and experience authentic master-led yoga guidance directly from Rishikesh.',
    },
  ];

  const whatYouWillLearn = [
    {
      title: 'Diaphragmatic Yogic Breathwork (Pranayama)',
      desc: 'Learn ancient breathing techniques that calm the central nervous system, reduce cortisol stress, and increase cellular oxygenation.',
    },
    {
      title: 'Foundational Asana Postures & Spine Alignment',
      desc: 'Master essential standing and seated postures with anatomical cues designed to protect knees, wrists, and lower back discs.',
    },
    {
      title: 'Joint Decompression & Hip Mobility',
      desc: 'Release chronic tightness accumulated from prolonged sitting and computer work through gentle, progressive mobility flows.',
    },
    {
      title: 'Deep Restorative Savasana & Stillness',
      desc: 'Conclude with conscious yogic relaxation that integrates physical benefits and leaves your mind clear and refreshed.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Free Online Yoga Class | Live Sunday Yoga | Yoga With Rohit"
        description="Join a 100% free online yoga class with Rohit from Rishikesh. Free Sunday live community yoga class ($0) and weekday demos open to everyone worldwide via Zoom."
        canonicalUrl="https://yogawithrohit.com/free-online-yoga-class"
        keywords="Free online yoga class, free yoga class online, free live yoga class, Sunday free yoga class, online yoga demo, free Zoom yoga class"
        breadcrumbs={breadcrumbs}
        faqSchema={getFaqSchema(faqs)}
      />

      <PageBanner
        badge="100% Free • Open to Everyone Worldwide"
        title="Join a Free Online Yoga Class"
        subtitle="Experience authentic live instruction direct from Rishikesh, India. Practice with Rohit in real-time, receive personalized posture feedback, and start your journey with zero financial commitment."
        breadcrumbs={breadcrumbs}
        ctaText="Book Free Sunday Class ($0)"
        onCtaClick={handleSundayFreeClick}
      />

      <article className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom" style={{ maxWidth: '1000px' }}>
          
          {/* Highlight Card: Free Sunday Community Class */}
          <section
            style={{
              backgroundColor: 'var(--primary-50)',
              borderRadius: '24px',
              padding: '36px',
              border: '2px solid var(--primary-100)',
              marginBottom: '56px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', flexWrap: 'wrap' }}>
              <span
                style={{
                  backgroundColor: 'var(--primary)',
                  color: '#FFFFFF',
                  padding: '4px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Every Sunday
              </span>
              <span style={{ fontSize: '13.5px', color: 'var(--primary-dark)', fontWeight: 700 }}>
                8:00 AM EST • 60-Minute Global Community Session
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(24px, 3.4vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              Free Sunday Community Yoga Class ($0 Cost)
            </h2>

            <p style={{ fontSize: '16.5px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
              Every Sunday morning, Rohit opens the virtual studio doors to students across the globe for a free community yoga class. This live, teacher-led session brings together practitioners from the United States, Canada, the United Kingdom, Europe, and Asia to share in the classical traditions of Rishikesh. There is no charge, no sales pitch, and no prior experience needed.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button onClick={handleSundayFreeClick} className="btn btn-primary btn-lg">
                <Sun size={18} />
                <span>Reserve Free Sunday Class</span>
                <ArrowRight size={18} />
              </button>
              <button onClick={handleDemoClick} className="btn btn-outline btn-lg">
                <Sparkles size={18} color="var(--primary)" />
                <span>Or Try Weekday Demo (M/W/F)</span>
              </button>
            </div>
          </section>

          {/* Section: Who Is This Free Class For? */}
          <section style={{ marginBottom: '56px' }}>
            <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 40px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Inclusive Practice
              </span>
              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', margin: '8px 0 14px' }}>
                Who Can Join Our Free Online Yoga Classes?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Yoga is a universal discipline of union, not an exclusive acrobatic performance. This free session is thoughtfully crafted for:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
              <div style={{ backgroundColor: '#FAF6F0', borderRadius: '20px', padding: '26px', border: '1px solid rgba(194, 94, 26, 0.14)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'var(--primary-50)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Users size={20} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Complete Beginners
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  If you have never stepped on a yoga mat or worry that you are "too stiff," Rohit provides step-by-step guidance so you feel supported and comfortable from the very first breath.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', borderRadius: '20px', padding: '26px', border: '1px solid rgba(194, 94, 26, 0.14)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'var(--primary-50)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <HeartHandshake size={20} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Desk Workers & Stiff Bodies
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Relieve tight shoulders, aching neck muscles, and chronic lower back strain caused by hours of sitting in front of screens with therapeutic spinal alignment cues.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', borderRadius: '20px', padding: '26px', border: '1px solid rgba(194, 94, 26, 0.14)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'var(--primary-50)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Flame size={20} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Curious Students Seeking Authenticity
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Tired of generic prerecorded workout videos? Experience the difference of a live teacher watching your form from Rishikesh, the world capital of yoga.
                </p>
              </div>
            </div>
          </section>

          {/* Section: What You Will Learn */}
          <section style={{ marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              What You Will Learn During Your Free Session
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '28px' }}>
              Every free live online yoga class is structured to deliver immediate physical relief and mental clarity:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {whatYouWillLearn.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '18px',
                    padding: '24px',
                    border: '1.5px solid rgba(194, 94, 26, 0.15)',
                    boxShadow: 'var(--shadow-xs)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <CheckCircle2 size={18} color="var(--primary)" />
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: How to Join in 3 Simple Steps */}
          <section style={{ marginBottom: '56px', backgroundColor: '#FAF6F0', borderRadius: '24px', padding: '36px', border: '1px solid rgba(194, 94, 26, 0.14)' }}>
            <div className="text-center" style={{ maxWidth: '680px', margin: '0 auto 36px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Effortless Process
              </span>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', color: 'var(--text-main)', margin: '8px 0 10px' }}>
                How to Join in 3 Simple Steps
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {steps.map((step) => (
                <div
                  key={step.num}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '18px',
                    padding: '24px',
                    border: '1.5px solid rgba(194, 94, 26, 0.12)',
                  }}
                >
                  <span className="nicepage-number-pill" style={{ marginBottom: '12px' }}>
                    {step.num}
                  </span>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Teacher Bio Feature */}
          <section style={{ marginBottom: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="/images/rohit-namaste-pure.png"
                srcSet="/images/rohit-namaste-pure.png 1x, /images/rohit-namaste-pure-2x.png 2x"
                alt="Rohit Kumar Lead Online Yoga Teacher from Rishikesh"
                style={{
                  width: '100%',
                  maxWidth: '340px',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                  filter: 'drop-shadow(0 14px 28px rgba(194, 94, 26, 0.15))',
                }}
              />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                <MapPin size={14} />
                <span>Trained in Rishikesh, India</span>
              </div>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', color: 'var(--text-main)', marginBottom: '14px' }}>
                Practice Directly with Teacher Rohit
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
                Rohit is a 500-Hour Yoga Alliance Certified Master Teacher and recipient of the 2025 Garhwal Cup Award of Honor. Born and trained on the banks of the sacred Ganges River in Rishikesh, Rohit teaches with profound anatomical care, deep patience, and classical purity.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '22px' }}>
                In every class, he observes each student's screen, offering gentle vocal feedback on spinal curvature, shoulder relaxation, and safe joint stacking.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={handleSundayFreeClick} className="btn btn-primary">
                  <Sun size={16} />
                  <span>Join Sunday Free Class</span>
                </button>
                <Link to="/about" className="btn btn-outline">
                  Read Full Bio
                </Link>
              </div>
            </div>
          </section>

          {/* Internal Linking & Next Steps */}
          <section
            style={{
              backgroundColor: '#FAF6F0',
              borderRadius: '20px',
              padding: '28px',
              marginBottom: '56px',
              border: '1.5px solid rgba(194, 94, 26, 0.14)',
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
              Explore Our Ongoing Online Yoga Programs:
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Looking for a consistent weekly practice? Learn more about our regular class offerings:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px' }}>
              <li>
                <Link to="/online-yoga-classes-for-beginners" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                  Online Yoga Classes for Beginners
                </Link>{' '}
                — Gentle step-by-step guidance for stiff bodies and first-timers.
              </li>
              <li>
                <Link to="/hatha-yoga-online-classes" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                  Hatha Yoga Online Classes
                </Link>{' '}
                — Classical held postures, spine alignment, and pranayama breathwork.
              </li>
              <li>
                <Link to="/ashtanga-yoga-online" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                  Ashtanga Yoga Online
                </Link>{' '}
                — Dynamic breath-synchronized primary series flow for strength and mobility.
              </li>
              <li>
                <Link to="/live-yoga-classes-online" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                  Live Yoga Classes Online
                </Link>{' '}
                — Discover why interactive video feedback outperforms prerecorded yoga apps.
              </li>
              <li>
                <Link to="/schedule" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                  Class Schedule & Batches
                </Link>{' '}
                — 6 daily batches across morning & evening Eastern Standard Time.
              </li>
              <li>
                <Link to="/pricing" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                  Tuition & Monthly Packages
                </Link>{' '}
                — Affordable $5 single drop-in passes and $50 monthly packages (12 classes).
              </li>
            </ul>
          </section>

          {/* Visible FAQs Section */}
          <section style={{ marginBottom: '40px' }}>
            <div className="text-center" style={{ maxWidth: '680px', margin: '0 auto 36px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Frequently Asked Questions
              </span>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', color: 'var(--text-main)', margin: '8px 0' }}>
                Common Questions About Our Free Online Yoga Classes
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    style={{
                      border: '1.5px solid rgba(194, 94, 26, 0.14)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      backgroundColor: '#FAF6F0',
                      transition: 'all 0.2s',
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      style={{
                        width: '100%',
                        padding: '18px 22px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        gap: '12px',
                      }}
                    >
                      <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                      ) : (
                        <ChevronDown size={20} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                      )}
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: '0 22px 20px',
                          fontSize: '15px',
                          color: 'var(--text-muted)',
                          lineHeight: 1.7,
                          borderTop: '1px solid rgba(194, 94, 26, 0.08)',
                          paddingTop: '14px',
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </article>

      {/* Embedded Interactive Booking Form */}
      <FreeDemoSection
        onBookingSuccess={(info) => {
          showToast(`Spot reserved for ${info.name} (${info.program} • ${info.batch})!`);
          setStudentPortalOpen(true);
        }}
      />
    </>
  );
}
