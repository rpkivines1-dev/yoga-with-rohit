import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import FreeDemoSection from '../components/home/FreeDemoSection';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Video, Calendar, Clock, HeartHandshake } from 'lucide-react';

export default function FreeDemoPage({ onOpenBooking, showToast, setStudentPortalOpen }) {
  const handleDemoClick = () => {
    onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' });
  };

  const breadcrumbs = [
    { name: 'Free Yoga Demo', url: '/free-yoga-demo' },
  ];

  const steps = [
    {
      num: 1,
      title: 'Choose Your Yoga Program',
      desc: 'Select between morning Traditional Hatha Yoga (alignment & breathing) or evening Ashtanga Vinyasa (dynamic flow).',
    },
    {
      num: 2,
      title: 'Choose Your Preferred Batch',
      desc: 'Pick a timing that fits your timezone: morning 6:30, 7:45, 9:00 AM EST or evening 7:30, 8:45, 10:00 PM EST.',
    },
    {
      num: 3,
      title: 'Select an Available Date',
      desc: 'Choose your upcoming Monday, Wednesday, or Friday session date.',
    },
    {
      num: 4,
      title: 'Confirm Your Booking in 30 Seconds',
      desc: 'Enter your name, email, and WhatsApp number. Zero credit card or payment information is required.',
    },
    {
      num: 5,
      title: 'Receive Instant Class Details',
      desc: 'Check your email or WhatsApp for your personalized Zoom/Google Meet link and calendar invitation.',
    },
    {
      num: 6,
      title: 'Join the Live Class with Rohit',
      desc: 'Set your camera 6-8 feet away, step on your mat, and enjoy 60 minutes of authentic Rishikesh yoga guidance.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Free Online Yoga Demo Class | Try Yoga with Rohit | Yoga With Rohit"
        description="Book your 100% free online yoga demo class with Rohit from Rishikesh. Experience live posture feedback via Zoom. No credit card required."
        canonicalUrl="https://www.yogawithrohit.com/free-yoga-demo"
        keywords="Free yoga demo, free online yoga class, try online yoga, yoga class demo, free Zoom yoga class"
        breadcrumbs={breadcrumbs}
      />

      <PageBanner
        badge="Zero Risk • 100% Free"
        title="Book Your Free Online Yoga Demo Class"
        subtitle="Experience master-level yoga instruction live from Rishikesh. See how our two-way interactive Zoom classes work and receive personal posture feedback before paying a dollar."
        breadcrumbs={breadcrumbs}
        ctaText="Claim Your Free Spot Now"
        onCtaClick={handleDemoClick}
      />

      <main style={{ backgroundColor: '#FFFFFF' }}>
        {/* Step-by-Step Explanation Section */}
        <section className="section-padding" style={{ paddingBottom: '40px' }}>
          <div className="container-custom" style={{ maxWidth: '960px' }}>
            <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 48px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Simple 6-Step Process
              </span>
              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', margin: '6px 0 12px' }}>
                How to Join Your Free Demo Session
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                Joining our live online studio is quick, effortless, and completely commitment-free:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px', marginBottom: '44px' }}>
              {steps.map((step) => (
                <div
                  key={step.num}
                  style={{
                    backgroundColor: '#FAF6F0',
                    borderRadius: '20px',
                    padding: '26px',
                    border: '1.5px solid rgba(194, 94, 26, 0.14)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span className="nicepage-number-pill" style={{ marginBottom: '14px' }}>
                      {step.num}
                    </span>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Embedded Interactive Free Demo Section */}
        <FreeDemoSection
          onBookingSuccess={(info) => {
            showToast(`Demo booked for ${info.name} (${info.program} • ${info.batch})!`);
            setStudentPortalOpen(true);
          }}
        />
      </main>
    </>
  );
}
