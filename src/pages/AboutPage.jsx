import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import CertificatesSection from '../components/home/CertificatesSection';
import { Sparkles, Award, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Heart, BookOpen, Users } from 'lucide-react';

export default function AboutPage({ onOpenBooking }) {
  const handleDemoClick = () => {
    onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' });
  };

  const breadcrumbs = [
    { name: 'About Rohit', url: '/about' },
  ];

  return (
    <>
      <SEOHead
        title="About Rohit | Master Online Yoga Teacher from Rishikesh | Yoga With Rohit"
        description="Learn about Rohit, a 500-Hour Yoga Alliance Certified Master Yoga Teacher from Rishikesh, India. Discover his traditional lineage, teaching philosophy, and live online classes."
        canonicalUrl="https://www.yogawithrohit.com/about"
        keywords="About Rohit yoga teacher, Rishikesh yoga master, 500 hour yoga teacher, online yoga instructor India, Yoga With Rohit background"
        breadcrumbs={breadcrumbs}
      />

      <PageBanner
        badge="500-Hour Yoga Alliance Certified"
        title="About Rohit: Lead Online Yoga Teacher"
        subtitle="Born and trained in Rishikesh—the spiritual capital of yoga—Rohit brings authentic classical lineage, anatomical precision, and compassionate guidance to students worldwide."
        breadcrumbs={breadcrumbs}
        ctaText="Book a Free Demo with Rohit"
        onCtaClick={handleDemoClick}
      />

      <article className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom" style={{ maxWidth: '960px' }}>
          
          {/* Section 1: Bio & Journey */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '44px', alignItems: 'center', marginBottom: '56px' }}>
            <div>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '6px solid #FFFFFF',
                  position: 'relative',
                  backgroundColor: 'var(--primary-100)',
                }}
              >
                <img
                  src="/images/rohit-meditation-namaste.jpg"
                  alt="Rohit Kumar - Online Yoga Teacher from Rishikesh"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '16px 20px',
                    background: 'linear-gradient(to top, rgba(35, 22, 13, 0.9) 0%, transparent 100%)',
                    color: '#FFFFFF',
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#FDE68A' }}>
                    Rishikesh, Uttarakhand, India
                  </div>
                  <div style={{ fontSize: '17px', fontWeight: 800 }}>
                    Rohit Kumar
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span style={{ fontSize: '12.5px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Authentic Ashram Roots
              </span>
              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 34px)', color: 'var(--text-main)', margin: '6px 0 16px', lineHeight: 1.25 }}>
                Preserving the Pure Essence of Indian Yoga
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '14px' }}>
                Growing up in Rishikesh along the sacred banks of Mother Ganges, yoga was never simply a physical fitness routine for Rohit—it was a way of living. Immersed from early childhood in traditional ashrams and mentored by revered Himalayan yogis, Rohit dedicated his life to mastering classical Hatha, Ashtanga Vinyasa, and Pranayama.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                Today, as a <strong>500-Hour Yoga Alliance Certified Master Teacher</strong> and recipient of the prestigious <strong>2025 Garhwal Cup Award of Honor</strong>, Rohit bridges traditional spiritual depth with modern anatomical precision, helping students across the US, UK, Canada, and Europe practice safely at home.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: 'var(--primary-50)', color: 'var(--primary-dark)', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: 800 }}>
                  500-HR Certified RYT
                </span>
                <span style={{ backgroundColor: 'var(--primary-50)', color: 'var(--primary-dark)', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: 800 }}>
                  Rishikesh Ashram Trained
                </span>
                <span style={{ backgroundColor: 'var(--primary-50)', color: 'var(--primary-dark)', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: 800 }}>
                  420+ Global Students Guided
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: Teaching Philosophy & Style */}
          <section style={{ marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '18px' }}>
              Teaching Philosophy: Compassion, Breath & Alignment
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#FAF6F0', padding: '24px', borderRadius: '20px', border: '1.5px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  Safety & Anatomical Precision
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Rohit emphasizes proper bone stacking, spinal elongation, and joint protection over superficial flexibility. You will never be pushed into painful or dangerous contortions.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', padding: '24px', borderRadius: '20px', border: '1.5px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  Pranayama as the Core Anchor
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Without conscious breath, asana is merely physical gymnastics. Rohit guides students to coordinate every inhale and exhale, training the nervous system to remain peaceful under physical stress.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', padding: '24px', borderRadius: '20px', border: '1.5px solid rgba(194, 94, 26, 0.12)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>
                  Two-Way Personal Attention
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  By keeping online batches small (max 15 students), Rohit watches your camera feed continuously, giving verbal adjustments by name so you practice with total confidence.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Verified Certificates Showcase */}
          <CertificatesSection />

          {/* Section 4: Final CTA */}
          <div style={{ backgroundColor: '#FAF6F0', padding: '36px', borderRadius: '24px', textAlign: 'center', border: '1.5px solid rgba(194, 94, 26, 0.16)', marginTop: '48px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
              Experience Authentic Rishikesh Yoga Firsthand
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 22px' }}>
              Join Rohit for a 60-minute live demonstration session. Ask questions, receive personalized alignment tips, and experience the warmth of his teaching.
            </p>
            <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '13px 26px' }}>
              <Sparkles size={16} style={{ color: '#FDE68A' }} />
              <span>Book Your Free Demo Class</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </article>
    </>
  );
}
