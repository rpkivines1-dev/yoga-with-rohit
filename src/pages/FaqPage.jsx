import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import { getFaqSchema } from '../data/seoSchema';
import { Sparkles, ChevronDown, ChevronUp, Search, HelpCircle, ArrowRight } from 'lucide-react';

export default function FaqPage({ onOpenBooking }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIdx, setOpenIdx] = useState(0);

  const handleDemoClick = () => {
    onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' });
  };

  const breadcrumbs = [
    { name: 'FAQ', url: '/faq' },
  ];

  const faqs = [
    {
      question: 'What are online yoga classes?',
      answer: 'Online yoga classes are live, two-way interactive sessions streamed via high-definition video (Zoom & Google Meet) from Rishikesh, India. Unlike pre-recorded videos, Rohit observes each student’s camera feed and provides personalized verbal adjustments in real time.'
    },
    {
      question: 'Are online yoga classes suitable for beginners?',
      answer: 'Yes, completely. Our morning Traditional Hatha Yoga classes are designed so students with zero prior yoga experience or stiff bodies can practice safely. Every posture is broken down step by step with gentle modifications.'
    },
    {
      question: 'How do live online yoga classes work?',
      answer: 'You receive a secure Zoom or Google Meet link upon registration. You set your phone, tablet, or laptop camera about 6–8 feet away so your mat is visible. Rohit demonstrates the posture, explains breathing cues, and watches student video feeds to guide hand, spine, and joint placement.'
    },
    {
      question: 'What is Traditional Hatha Yoga?',
      answer: 'Traditional Hatha Yoga is the classical lineage focused on holding postures with conscious diaphragmatic breathing (pranayama). It emphasizes spinal decompression, joint lubrication, isometric strength, and deep nervous system calm.'
    },
    {
      question: 'What is Ashtanga Vinyasa?',
      answer: 'Ashtanga Vinyasa is a dynamic, breath-synchronized sequence following the classical Primary Series (Yoga Chikitsa). It links conscious breathing with flowing movement, building upper-body strength, core endurance, and internal heat.'
    },
    {
      question: 'How much do Yoga With Rohit classes cost?',
      answer: 'Tuition is simple and transparent: $5 for a single Daily Class Pass, or $50 for a Monthly Package that includes 12 full live classes (just $4.16 per class). We also offer a 100% Free Demo Session.'
    },
    {
      question: 'How much is the daily yoga class?',
      answer: 'A single Daily Class Pass is $5.00 USD. It gives you complete flexibility to drop into any scheduled live morning or evening batch without ongoing commitments.'
    },
    {
      question: 'What is included in the monthly package?',
      answer: 'The $50 monthly package includes 12 live interactive classes (3 classes per week across 4 weeks), real-time camera posture checks from Rohit, access to HD class replays if you miss a session, and direct WhatsApp support.'
    },
    {
      question: 'Which days are the monthly classes?',
      answer: 'Live classes are conducted on Monday, Wednesday, and Friday every week, allowing your body a natural day of muscular and fascial recovery between practices.'
    },
    {
      question: 'How do I book a free demo?',
      answer: 'You can book your free demo directly on our website by clicking any "Book Free Demo" button. Select your preferred batch timing, enter your name and email/WhatsApp, and your instant live class access link will be generated.'
    },
    {
      question: 'How do I join the live class?',
      answer: 'Simply click the Zoom or Google Meet link sent to your email or WhatsApp 5 minutes before class begins. You can join from any smartphone, tablet, laptop, or desktop computer.'
    },
    {
      question: 'Do I need previous yoga experience or flexibility?',
      answer: 'No. You do not need to be flexible to start practicing yoga. Developing healthy joint mobility, loosening tight hamstrings, and releasing tension are the goals of the practice itself.'
    }
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions | Online Yoga Classes | Yoga With Rohit"
        description="Find answers to all frequently asked questions about live online yoga classes, beginner suitability, class schedules, Zoom links, and transparent $5/$50 tuition."
        canonicalUrl="https://www.yogawithrohit.com/faq"
        keywords="Online yoga FAQ, yoga class questions, how online yoga works, yoga cost FAQ, beginner yoga FAQ"
        breadcrumbs={breadcrumbs}
        faqSchema={getFaqSchema(faqs)}
      />

      <PageBanner
        badge="Got Questions?"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our live online yoga classes, schedules, teacher corrections, and getting started from home."
        breadcrumbs={breadcrumbs}
        ctaText="Book Free Demo Class"
        onCtaClick={handleDemoClick}
      />

      <article className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom" style={{ maxWidth: '860px' }}>
          
          {/* Search Bar */}
          <div style={{ position: 'relative', marginBottom: '36px' }}>
            <Search size={18} color="var(--primary)" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g., beginners, pricing, schedule, Zoom)..."
              style={{
                width: '100%',
                padding: '14px 18px 14px 48px',
                borderRadius: '16px',
                border: '1.5px solid rgba(194, 94, 26, 0.2)',
                backgroundColor: '#FAF6F0',
                fontSize: '15px',
              }}
            />
          </div>

          {/* Accordion FAQ List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '48px' }}>
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FAF6F0',
                    borderRadius: '18px',
                    border: '1.5px solid rgba(194, 94, 26, 0.12)',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontWeight: 800,
                      fontSize: '16px',
                      color: 'var(--text-main)',
                      gap: '16px',
                    }}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={20} color="var(--primary)" style={{ flexShrink: 0 }} /> : <ChevronDown size={20} color="var(--text-muted)" style={{ flexShrink: 0 }} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 22px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7, borderTop: '1px solid rgba(194, 94, 26, 0.08)', paddingTop: '14px' }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
                <p>No questions matched your search. Please feel free to message Rohit directly via WhatsApp.</p>
                <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: '12px' }}>
                  Contact Us
                </Link>
              </div>
            )}
          </div>

          {/* Bottom Help Box */}
          <div style={{ backgroundColor: 'var(--primary-50)', padding: '32px', borderRadius: '24px', textAlign: 'center', border: '1.5px solid var(--primary-100)' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '8px' }}>
              Still Have a Question?
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 20px' }}>
              We are happy to answer any questions about your practice, timezones, or health considerations.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/918077570122"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-sm"
              >
                Chat on WhatsApp (+91 8077570122)
              </a>
              <button onClick={handleDemoClick} className="btn btn-primary btn-sm">
                Book Free Demo Session
              </button>
            </div>
          </div>

        </div>
      </article>
    </>
  );
}
