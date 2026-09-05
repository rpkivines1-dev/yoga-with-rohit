import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import { getFaqSchema } from '../data/seoSchema';
import { Sparkles, CheckCircle2, ArrowRight, HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Heart, Clock } from 'lucide-react';

export default function BeginnersYogaPage({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);

  const handleDemoClick = () => {
    onOpenBooking({
      plan: 'demo',
      programId: 'traditional-hatha',
      programName: 'Traditional Hatha Yoga for Beginners',
      batch: '6:30 AM EST',
      title: 'Free Beginner Online Yoga Demo Class',
    });
  };

  const breadcrumbs = [
    { name: 'Online Yoga Classes', url: '/online-yoga-classes' },
    { name: 'For Beginners', url: '/online-yoga-classes-for-beginners' },
  ];

  const beginnerFaqs = [
    {
      question: 'Are online yoga classes suitable for beginners?',
      answer: 'Yes, absolutely. In fact, practicing online from home is often more comfortable for beginners than a crowded studio. Rohit teaches foundational postures with step-by-step instructions and monitors your posture live on camera, offering gentle modifications tailored to your current flexibility level.'
    },
    {
      question: 'What should I bring to my first online yoga class?',
      answer: 'You only need a simple non-slip yoga mat, comfortable clothing that allows free movement, a bottle of drinking water, and a quiet space at home. No advanced yoga blocks, straps, or specialized props are required to start.'
    },
    {
      question: 'Can I join yoga classes from home without any previous experience?',
      answer: 'Yes. Our Traditional Hatha Yoga morning classes are specifically structured so that students with zero prior yoga experience can safely and comfortably follow along from Day 1.'
    },
    {
      question: 'Do I need previous yoga experience or flexibility?',
      answer: 'No. You do not need to be flexible to start yoga—saying you are too stiff for yoga is like saying you are too dirty to take a bath. Developing natural mobility and releasing joint tightness is the purpose of the practice itself.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Online Yoga Classes for Beginners | Yoga With Rohit"
        description="Discover gentle, step-by-step online yoga classes for beginners with Rohit. Learn safe posture alignment, breathing, and flexibility at your own pace from home."
        canonicalUrl="https://www.yogawithrohit.com/online-yoga-classes-for-beginners"
        keywords="Online yoga classes for beginners, beginner yoga online, learn yoga at home, yoga for stiff bodies, beginner Hatha yoga"
        breadcrumbs={breadcrumbs}
        faqSchema={getFaqSchema(beginnerFaqs)}
      />

      <PageBanner
        badge="Zero Experience Needed"
        title="Online Yoga Classes for Beginners"
        subtitle="Start your yoga journey in a welcoming, judgment-free environment. Learn foundational alignment, restorative breathing, and joint mobility directly with Rohit from Rishikesh."
        breadcrumbs={breadcrumbs}
        ctaText="Book Your Free Beginner Yoga Demo"
        onCtaClick={handleDemoClick}
      />

      <article className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom" style={{ maxWidth: '960px' }}>
          
          {/* Section 1: Can Complete Beginners Join? */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              Can Complete Beginners Join Live Online Yoga Classes?
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              Yes, unconditionally. Many people hesitate to start yoga because they fear they are not flexible enough, cannot touch their toes, or will feel self-conscious in front of experienced students in a public studio. 
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              Our <strong>online yoga classes for beginners</strong> remove all of that intimidation. You practice in the comfort and privacy of your living room or bedroom. Rohit specializes in teaching students with stiff muscles, desk-bound postures, or zero background in yoga. Every posture is broken down into simple, accessible stages with safe anatomical cues.
            </p>
          </section>

          {/* Section 2: What to Expect in Your Very First Class */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              What to Expect in Your First Online Class
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#FAF6F0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <span className="nicepage-number-pill" style={{ marginBottom: '12px' }}>1</span>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Gentle Introductions
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Rohit greets you personally on Zoom and checks if you have any sensitive areas (e.g., knee sensitivity, tight lower back) so adjustments can be offered.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <span className="nicepage-number-pill" style={{ marginBottom: '12px' }}>2</span>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Gentle Joint Freeing (Sukshma)
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  We never jump into demanding stretches. Classes begin with warm-up movements to gently lubricate the wrists, shoulders, neck, and hips.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <span className="nicepage-number-pill" style={{ marginBottom: '12px' }}>3</span>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Personal Posture Feedback
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Rohit watches your camera feed and offers clear, calming vocal feedback so you maintain natural spinal alignment without straining.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                <span className="nicepage-number-pill" style={{ marginBottom: '12px' }}>4</span>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Savasana & Breathwork
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  You conclude with soothing guided relaxation, leaving you calm, physically refreshed, and centered for the rest of your day.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Basic Preparation, What to Wear & Equipment */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '16px' }}>
              Basic Preparation: What to Wear & What You Need
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '20px' }}>
              One of the greatest advantages of online yoga classes for beginners is minimal preparation:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
              <li>
                <strong>Comfortable Clothing:</strong> Wear loose or stretchy athletic wear (such as leggings, sweatpants, or a breathable t-shirt) that permits full range of motion. Yoga is practiced barefoot.
              </li>
              <li>
                <strong>A Standard Yoga Mat:</strong> Any basic non-slip yoga or exercise mat will cushion your knees and joints.
              </li>
              <li>
                <strong>Camera Placement:</strong> Position your phone, tablet, or laptop 6 to 8 feet away so your mat is clearly visible.
              </li>
              <li>
                <strong>Empty Stomach:</strong> Avoid eating a heavy meal within 2 hours before practice. A light cup of herbal tea or warm water is completely fine.
              </li>
            </ul>
          </section>

          {/* Section 4: Recommended Beginner Batches */}
          <section style={{ marginBottom: '52px', backgroundColor: '#FAF6F0', padding: '32px', borderRadius: '24px', border: '1.5px solid rgba(194, 94, 26, 0.16)' }}>
            <h2 style={{ fontSize: '24px', color: 'var(--text-main)', marginBottom: '12px' }}>
              Recommended Batches for Beginners
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              We strongly recommend beginners start with our morning <strong>Traditional Hatha Yoga</strong> sessions on <strong>Monday, Wednesday, and Friday</strong>:
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '12px 18px', borderRadius: '14px', border: '1px solid rgba(194, 94, 26, 0.14)' }}>
                <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary)' }}>6:30 AM EST</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block' }}>Early Sunrise Beginner Batch</span>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '12px 18px', borderRadius: '14px', border: '1px solid rgba(194, 94, 26, 0.14)' }}>
                <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary)' }}>7:45 AM EST</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block' }}>Morning Energy Batch</span>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '12px 18px', borderRadius: '14px', border: '1px solid rgba(194, 94, 26, 0.14)' }}>
                <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary)' }}>9:00 AM EST</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block' }}>Gentle Alignment Batch</span>
              </div>
            </div>
            <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '13px 26px', fontSize: '15px' }}>
              <Sparkles size={16} style={{ color: '#FDE68A' }} />
              <span>Book Your Free Beginner Yoga Demo</span>
              <ArrowRight size={16} />
            </button>
          </section>

          {/* Section 5: Beginner FAQs */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--text-main)', marginBottom: '20px' }}>
              Frequently Asked Questions for Beginners
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {beginnerFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#FAF6F0',
                      borderRadius: '16px',
                      border: '1.5px solid rgba(194, 94, 26, 0.12)',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      style={{
                        width: '100%',
                        padding: '18px 22px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        fontWeight: 800,
                        fontSize: '15.5px',
                        color: 'var(--text-main)',
                      }}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp size={18} color="var(--primary)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 22px 18px', fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Final Beginner CTA */}
          <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(194, 94, 26, 0.1)' }}>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Explore our <Link to="/schedule" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Class Schedule</Link> or learn more about our <Link to="/pricing" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>$50 Monthly Package (12 Classes)</Link>.
            </p>
          </div>

        </div>
      </article>
    </>
  );
}
