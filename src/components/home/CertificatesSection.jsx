import React, { useState } from 'react';
import { Award, CheckCircle2, ShieldCheck, Eye, X, ChevronLeft, ChevronRight, Sparkles, FileText, GraduationCap, Trophy } from 'lucide-react';
import { CERTIFICATES, BRAND } from '../../data/yogaData';

export default function CertificatesSection() {
  const [selectedCertIndex, setSelectedCertIndex] = useState(null);

  const openModal = (index) => {
    setSelectedCertIndex(index);
  };

  const closeModal = () => {
    setSelectedCertIndex(null);
  };

  const nextCert = (e) => {
    e.stopPropagation();
    setSelectedCertIndex((prev) => (prev + 1) % CERTIFICATES.length);
  };

  const prevCert = (e) => {
    e.stopPropagation();
    setSelectedCertIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length);
  };

  return (
    <section
      id="certificates"
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderTop: '1px solid rgba(194, 94, 26, 0.08)',
      }}
    >
      <div className="container-custom">
        {/* Section Header Centered */}
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <div className="section-tag">
            <Trophy size={14} />
            <span>AUTHENTIC AWARDS & CERTIFICATIONS</span>
          </div>

          <h2 className="section-title">
            Verified Certifications & <span style={{ color: 'var(--primary)' }}>Awards</span>
          </h2>

          <p className="section-subtitle">
            Rohit is a 500-Hour Master Certified Yoga Instructor (Yoga Alliance), recipient of the 2025 Garhwal Cup Award of Honor, with formal university education in Yogic Science.
          </p>
        </div>

        {/* Certificate Cards Grid (3 columns, Equal Heights) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
            marginBottom: '48px',
            alignItems: 'stretch',
          }}
          className="cert-grid-3"
        >
          {CERTIFICATES.map((cert, index) => (
            <div
              key={cert.id}
              className="nicepage-card"
              style={{
                borderRadius: '24px',
                padding: 0,
                overflow: 'hidden',
                border: index === 0 ? '2px solid var(--accent)' : '1.5px solid rgba(194, 94, 26, 0.14)',
                boxShadow: index === 0 ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#FAF6F0',
                textAlign: 'left',
                height: '100%',
              }}
            >
              {/* Top Certificate Visual Banner */}
              <div
                onClick={() => openModal(index)}
                style={{
                  position: 'relative',
                  height: '230px',
                  backgroundColor: '#ECE7DE',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  borderBottom: '1px solid rgba(194, 94, 26, 0.1)',
                }}
                className="cert-img-container"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.4s ease',
                  }}
                  className="cert-img"
                />

                {/* Overlay on hover */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(35, 22, 13, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.25s ease',
                  }}
                  className="cert-hover-overlay"
                >
                  <div
                    style={{
                      padding: '8px 18px',
                      borderRadius: '9999px',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--primary-dark)',
                      fontWeight: 800,
                      fontSize: '13px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    }}
                  >
                    <Eye size={15} />
                    <span>View Document</span>
                  </div>
                </div>

                {/* Badge on top */}
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: index === 0 ? 'var(--accent)' : 'var(--primary)',
                    color: '#FFFFFF',
                    fontSize: '10.5px',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {cert.badge}
                </span>
              </div>

              {/* Card Body Details */}
              <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <GraduationCap size={15} style={{ color: 'var(--accent)' }} />
                    <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.04em' }}>
                      {cert.institution}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px', lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>

                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '16px', minHeight: '40px' }}>
                    {cert.description}
                  </p>

                  {/* Highlights Grid */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                    {cert.highlights.slice(0, 3).map((h, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '12.5px',
                          color: 'var(--text-main)',
                        }}
                      >
                        <CheckCircle2 size={13} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action View Button Aligned at Bottom */}
                <button
                  onClick={() => openModal(index)}
                  className="btn btn-outline btn-sm w-full"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '9px 14px' }}
                >
                  <Eye size={14} />
                  <span>View Original</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Strip with Symmetrical Spacing */}
        <div
          style={{
            backgroundColor: 'var(--primary-50)',
            borderRadius: '24px',
            padding: '24px 32px',
            border: '1px solid var(--primary-100)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            textAlign: 'left',
          }}
          className="cert-trust-strip"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '680px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Award size={26} />
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                100% Certified & Verified Instruction
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '4px 0 0' }}>
                Every live class adheres to traditional yogic principles, correct anatomical alignment, and safe progression.
              </p>
            </div>
          </div>

          <a
            href="#free-demo"
            className="btn btn-primary btn-sm"
            style={{ flexShrink: 0 }}
          >
            <Sparkles size={14} style={{ color: '#FDE68A' }} />
            <span>Experience a Live Class</span>
          </a>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedCertIndex !== null && CERTIFICATES[selectedCertIndex] && (
        <div
          className="modal-overlay active"
          onClick={closeModal}
          style={{ padding: '16px' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '820px',
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '92vh',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '18px 24px',
                backgroundColor: '#FAF6F0',
                borderBottom: '1px solid rgba(194, 94, 26, 0.12)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.08em' }}>
                  {CERTIFICATES[selectedCertIndex].badge}
                </span>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                  {CERTIFICATES[selectedCertIndex].title}
                </h4>
              </div>

              <button
                onClick={closeModal}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#EAE5DB',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Certificate High-Res Viewer */}
            <div
              style={{
                padding: '20px',
                backgroundColor: '#23160D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'auto',
                flex: 1,
              }}
            >
              <img
                src={CERTIFICATES[selectedCertIndex].image}
                alt={CERTIFICATES[selectedCertIndex].title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '560px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
              />

              {/* Prev / Next */}
              <button
                onClick={prevCert}
                aria-label="Previous Certificate"
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={nextCert}
                aria-label="Next Certificate"
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Modal Footer Description */}
            <div style={{ padding: '16px 24px', backgroundColor: '#FAF6F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                <strong>Institution:</strong> {CERTIFICATES[selectedCertIndex].institution}
              </div>
              <button onClick={closeModal} className="btn btn-outline btn-sm">
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .cert-img-container:hover .cert-img {
          transform: scale(1.04);
        }
        .cert-img-container:hover .cert-hover-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 960px) {
          .cert-grid-3 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .cert-grid-3 {
            grid-template-columns: 1fr !important;
          }
          .cert-trust-strip {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
