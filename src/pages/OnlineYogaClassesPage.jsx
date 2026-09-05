import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import { Sparkles, CheckCircle2, ArrowRight, Video, Calendar, Clock, DollarSign, ShieldCheck, HeartHandshake, Compass, Users } from 'lucide-react';

export default function OnlineYogaClassesPage({ onOpenBooking }) {
  const handleDemoClick = () => {
    onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' });
  };

  const breadcrumbs = [
    { name: 'Online Yoga Classes', url: '/online-yoga-classes' },
  ];

  return (
    <>
      <SEOHead
        title="Online Yoga Classes | Live Yoga Classes Online | Yoga With Rohit"
        description="Experience authentic live online yoga classes taught directly from Rishikesh. Practice Traditional Hatha Yoga & Ashtanga Vinyasa with 1-on-1 posture corrections. Book your free demo."
        canonicalUrl="https://www.yogawithrohit.com/online-yoga-classes"
        keywords="Online yoga classes, live yoga classes online, online yoga practice, yoga classes from home, virtual yoga classes, online yoga teacher"
        breadcrumbs={breadcrumbs}
      />

      <PageBanner
        badge="Direct from Rishikesh, India"
        title="Online Yoga Classes"
        subtitle="Join authentic, interactive live online yoga classes taught directly from the World Capital of Yoga. Cultivate spinal strength, flexible joints, and mental tranquility from the comfort of home."
        breadcrumbs={breadcrumbs}
        ctaText="Book Your Free Demo Class"
        onCtaClick={handleDemoClick}
      />

      <article className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom" style={{ maxWidth: '960px' }}>
          
          {/* Section 1: What Are Online Yoga Classes? */}
          <section style={{ marginBottom: '52px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: 'var(--text-main)', marginBottom: '18px' }}>
              What Are Live Online Yoga Classes?
            </h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '18px' }}>
              <strong>Online yoga classes</strong> bring the sacred, centuries-old traditions of Indian yoga directly into your home using modern high-definition streaming technology. Unlike static, pre-recorded video libraries or fitness apps where students practice in isolation, live online yoga classes are synchronous two-way interactive sessions. 
            </p>
            <p style={{ fontSize: '16.5px', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              Led by Rohit—a 500-hour master certified <strong>online yoga teacher</strong> from Rishikesh, India—each session offers continuous vocal guidance and real-time anatomical feedback. Whether you are seeking relief from desk-bound spinal tension, wanting to rebuild flexibility, or deepening your spiritual practice, practicing <strong>yoga classes from home</strong> eliminates rush-hour travel while preserving the sacred student-teacher connection.
            </p>
          </section>

          {/* Callout Box: Free Demo */}
          <div
            style={{
              backgroundColor: 'var(--primary-50)',
              border: '2px solid var(--primary-100)',
              borderRadius: '20px',
              padding: '28px 32px',
              marginBottom: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                New to Online Yoga?
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-dark)', margin: '4px 0 6px' }}>
                Try Your First 60-Minute Class 100% Free
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                Experience live camera feedback and authentic Rishikesh pranayama with zero obligation.
              </p>
            </div>
            <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '12px 24px' }}>
              <span>Claim Free Demo</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Section 2: Who Are Our Online Yoga Classes Suitable For? */}
          <section style={{ marginBottom: '52px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: 'var(--text-main)', marginBottom: '18px' }}>
              Who Can Benefit from Practicing Online Yoga?
            </h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '22px' }}>
              Our <strong>virtual yoga classes</strong> are thoughtfully structured to accommodate students at varied phases of life, physical mobility, and schedule demands:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#FAF6F0', padding: '22px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  Complete Beginners & Stiff Bodies
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Individuals who have never unrolled a yoga mat or feel too inflexible for local studios. Step-by-step cueing ensures you never feel left behind.
                </p>
              </div>
              <div style={{ backgroundColor: '#FAF6F0', padding: '22px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  Remote Professionals & Office Workers
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Individuals spending 8+ hours seated at computers who experience chronic neck stiffness, tight hip flexors, and lower back discomfort.
                </p>
              </div>
              <div style={{ backgroundColor: '#FAF6F0', padding: '22px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  Busy Parents & Working Adults
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Those with demanding schedules who need consistent morning (6:30 AM EST) or evening classes without wasting 45 minutes commuting to gym studios.
                </p>
              </div>
              <div style={{ backgroundColor: '#FAF6F0', padding: '22px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  Experienced Practitioners
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Yogis seeking authentic lineage instruction in traditional Indian bandhas, breath retention, and the Ashtanga Vinyasa Primary Series.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: How Live Online Classes Work via Zoom / Google Meet */}
          <section style={{ marginBottom: '52px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: 'var(--text-main)', marginBottom: '18px' }}>
              How Live Online Yoga Practice Works (Zoom & Google Meet)
            </h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '20px' }}>
              Joining our <strong>live yoga classes online</strong> is designed to be completely frictionless, even for non-technical students:
            </p>
            <ol style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              <li>
                <strong>Instant Zoom/Meet Access:</strong> Upon booking your pass, an automated calendar invite with direct Zoom and Google Meet links is sent to your registered email and WhatsApp.
              </li>
              <li>
                <strong>Camera Setup for Visual Guidance:</strong> Place your laptop, tablet, or smartphone approximately 6 to 8 feet away, angled so Rohit can observe your posture whether standing, sitting, or lying down.
              </li>
              <li>
                <strong>Personal Verbal Corrections:</strong> Rohit watches each student's video feed during posture holds. If your knee collapses inwards in Warrior II or your lower back compresses in Cobra, you receive immediate, gentle verbal cues to adjust safely.
              </li>
              <li>
                <strong>Intimate Class Sizes:</strong> We intentionally cap batch sizes to a maximum of 15 participants, ensuring personalized attention that massive recorded platforms can never replicate.
              </li>
              <li>
                <strong>HD Replays Available:</strong> If work or travel causes you to miss a live session, high-definition class recordings are uploaded to the student portal for convenient review.
              </li>
            </ol>
          </section>

          {/* Section 4: Available Programs & Class Timings */}
          <section style={{ marginBottom: '52px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: 'var(--text-main)', marginBottom: '18px' }}>
              Available Online Yoga Programs & Schedule
            </h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
              Classes are held 3 days a week on <strong>Monday, Wednesday, and Friday</strong> across morning and evening Eastern Standard Time (EST) batches:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              {/* Program 1: Traditional Hatha */}
              <div style={{ backgroundColor: '#FAF6F0', borderRadius: '22px', padding: '28px', border: '2px solid rgba(194, 94, 26, 0.16)' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
                  Morning Batches
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)', margin: '6px 0 10px' }}>
                  Traditional Hatha Yoga
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Emphasis on steady asana holds, conscious breathwork (Pranayama), spinal articulation, and peaceful meditation.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', fontWeight: 700, color: 'var(--primary-dark)' }}>
                    <Clock size={15} color="var(--primary)" />
                    <span>6:30 AM EST • Sunrise Alignment</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', fontWeight: 700, color: 'var(--primary-dark)' }}>
                    <Clock size={15} color="var(--primary)" />
                    <span>7:45 AM EST • Morning Vitality</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', fontWeight: 700, color: 'var(--primary-dark)' }}>
                    <Clock size={15} color="var(--primary)" />
                    <span>9:00 AM EST • Mindful Foundation</span>
                  </div>
                </div>
                <Link to="/hatha-yoga-online-classes" style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--primary)', textDecoration: 'underline' }}>
                  Learn more about Hatha Yoga Online →
                </Link>
              </div>

              {/* Program 2: Ashtanga Vinyasa */}
              <div style={{ backgroundColor: '#FAF6F0', borderRadius: '22px', padding: '28px', border: '2px solid rgba(194, 94, 26, 0.16)' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
                  Evening Batches
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)', margin: '6px 0 10px' }}>
                  Ashtanga Vinyasa Primary Series
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Dynamic synchronized breath-movement flow, building upper body strength, core stability, and internal heat.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', fontWeight: 700, color: 'var(--primary-dark)' }}>
                    <Clock size={15} color="var(--primary)" />
                    <span>7:30 PM EST • Evening Flow</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', fontWeight: 700, color: 'var(--primary-dark)' }}>
                    <Clock size={15} color="var(--primary)" />
                    <span>8:45 PM EST • Strength & Stamina</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', fontWeight: 700, color: 'var(--primary-dark)' }}>
                    <Clock size={15} color="var(--primary)" />
                    <span>10:00 PM EST • Night Reset</span>
                  </div>
                </div>
                <Link to="/ashtanga-yoga-online" style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--primary)', textDecoration: 'underline' }}>
                  Learn more about Ashtanga Yoga Online →
                </Link>
              </div>
            </div>
          </section>

          {/* Section 5: Transparent Pricing Options */}
          <section style={{ marginBottom: '52px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: 'var(--text-main)', marginBottom: '18px' }}>
              Affordable Tuition: Daily Passes & Monthly Packages
            </h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
              We believe authentic yoga should be accessible to everyone worldwide without exorbitant studio membership contracts:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ border: '1.5px solid rgba(194, 94, 26, 0.2)', borderRadius: '20px', padding: '26px', backgroundColor: '#FFFFFF' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase' }}>Daily Option</span>
                <h3 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-main)', margin: '8px 0' }}>
                  $5 <span style={{ fontSize: '15px', color: 'var(--text-muted)', fontWeight: 500 }}>/ Class</span>
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                  Single-class pass with complete flexibility. Join whenever your schedule allows.
                </p>
                <Link to="/pricing" className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                  View Pricing Details
                </Link>
              </div>

              <div style={{ border: '2.5px solid var(--primary)', borderRadius: '20px', padding: '26px', backgroundColor: '#FFFBF7', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-11px', right: '20px', backgroundColor: 'var(--primary)', color: '#FFFFFF', fontSize: '11px', fontWeight: 800, padding: '3px 12px', borderRadius: '9999px' }}>
                  BEST VALUE
                </span>
                <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Monthly Package</span>
                <h3 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-main)', margin: '8px 0' }}>
                  $50 <span style={{ fontSize: '15px', color: 'var(--text-muted)', fontWeight: 500 }}>/ Month</span>
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                  Includes <strong>12 live interactive classes</strong> (3 classes per week: Monday, Wednesday & Friday). Just $4.16 per session.
                </p>
                <Link to="/pricing" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                  Join Monthly Package
                </Link>
              </div>
            </div>
          </section>

          {/* Section 6: Benefits of Online Yoga Classes */}
          <section style={{ marginBottom: '52px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: 'var(--text-main)', marginBottom: '18px' }}>
              Key Benefits of Practicing Online Yoga with Rohit
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 4px' }}>Authentic Rishikesh Lineage</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>Direct teachings from the yoga capital of India, steeped in classical philosophy.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 4px' }}>Live Verbal Adjustments</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>Safe posture corrections tailored to your personal physical anatomy.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 4px' }}>Zero Commuting Stress</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>Practice in peace at home and immediately step into your day calm and refreshed.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 4px' }}>Consistency & Accountability</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>A structured 3-day weekly cadence keeps your wellness habits sustainable.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: How to Get Started Today */}
          <section style={{ backgroundColor: '#FAF6F0', borderRadius: '24px', padding: '36px 32px', textAlign: 'center', border: '1.5px solid rgba(194, 94, 26, 0.16)' }}>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', color: 'var(--text-main)', marginBottom: '12px' }}>
              Ready to Begin Your Online Yoga Journey?
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto 24px', lineHeight: 1.6 }}>
              Start with a 100% Free Demo Session. Meet Rohit, experience our live video environment, and see how online yoga can transform your physical and mental wellbeing.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
                <Sparkles size={17} style={{ color: '#FDE68A' }} />
                <span>Book Free Demo Class</span>
                <ArrowRight size={17} />
              </button>
              <Link to="/schedule" className="btn btn-outline" style={{ padding: '14px 22px' }}>
                <span>View Class Schedule</span>
              </Link>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
