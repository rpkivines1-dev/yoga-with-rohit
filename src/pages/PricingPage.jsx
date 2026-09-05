import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import ClassPackages from '../components/home/ClassPackages';
import { getFaqSchema } from '../data/seoSchema';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, ChevronDown, ChevronUp, DollarSign, Calendar } from 'lucide-react';

export default function PricingPage({ onSelectPackage, onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);

  const handleDemoClick = () => {
    onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' });
  };

  const breadcrumbs = [
    { name: 'Pricing', url: '/pricing' },
  ];

  const pricingFaqs = [
    {
      question: 'How much do Yoga With Rohit classes cost?',
      answer: 'We offer two simple, transparent options: a single Daily Class Pass for $5/class, and our most popular Monthly Package for $50/month which includes 12 full live classes.'
    },
    {
      question: 'What is included in the $50 monthly package?',
      answer: 'The monthly package includes 12 live interactive classes held three days per week on Monday, Wednesday, and Friday. You also receive real-time camera posture corrections from Rohit, access to class recordings if you miss a session, and direct WhatsApp support.'
    },
    {
      question: 'Are there any hidden membership fees or automatic renewals?',
      answer: 'No. You only pay for what you choose. There are zero enrollment fees, zero cancellation penalties, and no automatic hidden renewals without your consent.'
    },
    {
      question: 'Can I try a class before paying?',
      answer: 'Yes, 100%. We provide a full 60-minute Free Demo Class so you can experience Rohit’s teaching style, verify your camera angle, and meet the group with zero financial risk.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit/debit cards, PayPal, Google Pay, Apple Pay, and international bank transfers through our secure SSL-encrypted payment gateway.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Yoga Class Pricing | $5 Daily & $50 Monthly | Yoga With Rohit"
        description="Transparent and affordable online yoga tuition. $5 per daily class or $50 monthly package for 12 live interactive classes (M/W/F). Free demo available."
        canonicalUrl="https://www.yogawithrohit.com/pricing"
        keywords="Yoga class pricing, online yoga cost, $5 yoga class, $50 monthly yoga, affordable online yoga, yoga tuition"
        breadcrumbs={breadcrumbs}
        faqSchema={getFaqSchema(pricingFaqs)}
      />

      <PageBanner
        badge="Transparent & Fair Tuition"
        title="Yoga Class Pricing & Packages"
        subtitle="Experience master-level yoga instruction from Rishikesh without expensive studio fees. Choose single class passes for complete flexibility or join our 12-class monthly package."
        breadcrumbs={breadcrumbs}
        ctaText="Try Free Demo First ($0)"
        onCtaClick={handleDemoClick}
      />

      <main style={{ backgroundColor: '#FFFFFF' }}>
        {/* Full Interactive Class Packages Component */}
        <ClassPackages onSelectPackage={onSelectPackage} />

        {/* Pricing FAQs Section */}
        <section className="section-padding" style={{ backgroundColor: '#FAF6F0', borderTop: '1px solid rgba(194, 94, 26, 0.1)' }}>
          <div className="container-custom" style={{ maxWidth: '860px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-main)', textAlign: 'center', marginBottom: '14px' }}>
              Frequently Asked Questions About Tuition
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '32px' }}>
              Clear answers to your payment, package, and enrollment questions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {pricingFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#FFFFFF',
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

            <div style={{ textAlign: 'center' }}>
              <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
                <Sparkles size={16} style={{ color: '#FDE68A' }} />
                <span>Start with a Free Demo Session</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
