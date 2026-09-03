import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle, MapPin } from 'lucide-react';
import { FAQS, BRAND } from '../../data/yogaData';

export default function FaqSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const enhancedFaqs = [
    ...FAQS,
    {
      question: "Why should I choose an online yoga teacher from Rishikesh?",
      answer: "Rishikesh is the global birthplace and spiritual capital of yoga. When you practice with an online yoga teacher from Rishikesh like Rohit, you receive authentic traditional lineage, accurate anatomical alignment, genuine pranayama breathwork, and personalized attention rather than superficial exercise routines.",
    },
    {
      question: "How is a live online yoga class better than recorded YouTube videos?",
      answer: "In a live online yoga class with Rohit, you receive real-time verbal and visual posture corrections. Rohit watches your movements on camera, provides tailored modifications for your body, prevents injury, and answers your questions immediately after class.",
    },
  ];

  return (
    <section
      id="faq"
      className="section-padding"
      style={{
        backgroundColor: '#FAF8F5',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>

          <h2 className="section-title">
            Online Yoga Class <span style={{ color: 'var(--primary)' }}>FAQs</span>
          </h2>

          <p className="section-subtitle">
            Find answers to all your questions about our live online yoga classes, batch schedules, fees, and learning with a certified online yoga teacher from Rishikesh.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          {enhancedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  border: isOpen ? '1.5px solid var(--primary)' : '1px solid rgba(44, 94, 67, 0.1)',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  textAlign: 'left',
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '22px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontSize: '16.5px',
                      fontWeight: 700,
                      color: isOpen ? 'var(--primary-dark)' : 'var(--text-main)',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </span>

                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--primary-50)' : '#F3EFE9',
                      color: isOpen ? 'var(--primary)' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 26px 24px 26px',
                      color: 'var(--text-muted)',
                      fontSize: '15px',
                      lineHeight: '1.7',
                      borderTop: '1px solid rgba(44, 94, 67, 0.08)',
                      paddingTop: '16px',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div
          style={{
            marginTop: '48px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
            Have a custom question about your online yoga class?
          </span>
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
            style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
          >
            <MessageCircle size={15} />
            <span>Ask Online Yoga Teacher Rohit on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
