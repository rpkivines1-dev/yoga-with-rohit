import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, CheckCircle2, ShieldCheck, Video, ArrowRight, MessageCircle, RefreshCw, MapPin, Sun, Flame } from 'lucide-react';
import { YOGA_PROGRAMS, COUNTRIES_LIST, BRAND } from '../../data/yogaData';

export default function FreeDemoSection({ onBookingSuccess }) {
  const [selectedProgram, setSelectedProgram] = useState('traditional-hatha');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'United States',
    preferredBatch: '6:30 AM EST',
    experienceLevel: 'Beginner',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);

  const currentProgramObj = YOGA_PROGRAMS.find((p) => p.id === selectedProgram) || YOGA_PROGRAMS[0];

  const handleProgramSelect = (progId) => {
    setSelectedProgram(progId);
    const prog = YOGA_PROGRAMS.find((p) => p.id === progId) || YOGA_PROGRAMS[0];
    setFormData((prev) => ({
      ...prev,
      preferredBatch: prog.batches[0].timeEST,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate instant secure registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const data = {
        ...formData,
        programName: currentProgramObj.name,
        bookedAt: new Date().toLocaleDateString(),
      };
      setSubmissionData(data);
      if (onBookingSuccess) {
        onBookingSuccess({
          name: formData.fullName,
          email: formData.email,
          program: currentProgramObj.name,
          batch: formData.preferredBatch,
          plan: 'Free Demo Online Yoga Class',
        });
      }
    }, 750);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSelectedProgram('traditional-hatha');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: 'United States',
      preferredBatch: '6:30 AM EST',
      experienceLevel: 'Beginner',
    });
  };

  return (
    <section
      id="free-demo"
      className="section-padding"
      style={{
        background: 'linear-gradient(145deg, #4A1D07 0%, #23160D 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Rings */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(194, 94, 26, 0.35) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '44px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(245, 158, 11, 0.2)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#FDE68A',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <Sparkles size={16} />
            <span>100% FREE DEMO ONLINE YOGA CLASS • $0 COST</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 46px)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Start Your Journey with a <span style={{ color: '#FDE68A' }}>Free Demo Class</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(15.5px, 1.8vw, 18px)',
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Select your preferred program (<strong>Traditional Hatha</strong> or <strong>Ashtanga Vinyasa</strong>), pick your batch, and experience live guidance from Rohit directly from Rishikesh.
          </p>
        </div>

        {/* Main Card: Form or Confirmation */}
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: '40px',
            color: 'var(--text-main)',
            boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.5)',
            border: '2px solid rgba(245, 158, 11, 0.2)',
          }}
          className="demo-card-container"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
              {/* Step 1: Choose Your Yoga Program */}
              <div style={{ marginBottom: '26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span className="nicepage-number-pill" style={{ width: '32px', height: '32px', fontSize: '13px' }}>
                    01
                  </span>
                  <label className="form-label" style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                    Step 1: Choose Your Yoga Program <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '14px',
                  }}
                  className="program-select-grid"
                >
                  {/* Traditional Hatha Option */}
                  <div
                    onClick={() => handleProgramSelect('traditional-hatha')}
                    style={{
                      padding: '18px 20px',
                      borderRadius: '16px',
                      border: selectedProgram === 'traditional-hatha' ? '2.5px solid var(--primary)' : '1.5px solid rgba(194, 94, 26, 0.18)',
                      backgroundColor: selectedProgram === 'traditional-hatha' ? 'var(--primary-50)' : '#FAF6F0',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        backgroundColor: selectedProgram === 'traditional-hatha' ? 'var(--primary)' : '#FFFFFF',
                        color: selectedProgram === 'traditional-hatha' ? '#FFFFFF' : 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Sun size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '2px' }}>
                        Traditional Hatha Yoga
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 700 }}>
                        3 Morning Batches (6:30, 7:45, 9:00 AM EST)
                      </div>
                    </div>
                  </div>

                  {/* Ashtanga Vinyasa Option */}
                  <div
                    onClick={() => handleProgramSelect('ashtanga-vinyasa')}
                    style={{
                      padding: '18px 20px',
                      borderRadius: '16px',
                      border: selectedProgram === 'ashtanga-vinyasa' ? '2.5px solid var(--accent)' : '1.5px solid rgba(180, 83, 9, 0.2)',
                      backgroundColor: selectedProgram === 'ashtanga-vinyasa' ? '#FEF3C7' : '#FAF6F0',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        backgroundColor: selectedProgram === 'ashtanga-vinyasa' ? 'var(--accent)' : '#FFFFFF',
                        color: selectedProgram === 'ashtanga-vinyasa' ? '#FFFFFF' : 'var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Flame size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '2px' }}>
                        Ashtanga Vinyasa Primary Series
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--accent-hover)', fontWeight: 700 }}>
                        3 Evening Batches (7:30, 8:45, 10:00 PM EST)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Choose Your Batch Timing */}
              <div style={{ marginBottom: '26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span className="nicepage-number-pill" style={{ width: '32px', height: '32px', fontSize: '13px' }}>
                    02
                  </span>
                  <label className="form-label" style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                    Step 2: Choose Preferred Batch Timing ({currentProgramObj.name}) <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px',
                  }}
                  className="batch-select-grid"
                >
                  {currentProgramObj.batches.map((batch) => {
                    const isSelected = formData.preferredBatch === batch.timeEST;
                    return (
                      <div
                        key={batch.id}
                        onClick={() => setFormData((prev) => ({ ...prev, preferredBatch: batch.timeEST }))}
                        style={{
                          padding: '14px 16px',
                          borderRadius: '14px',
                          border: isSelected ? '2.5px solid var(--primary)' : '1.5px solid rgba(194, 94, 26, 0.16)',
                          backgroundColor: isSelected ? 'var(--primary-50)' : '#FAF6F0',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{ fontSize: '11px', fontWeight: 800, color: isSelected ? 'var(--primary)' : 'var(--text-muted)', textTransform: 'uppercase' }}>
                          {batch.batchNumber}
                        </div>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: isSelected ? 'var(--primary-dark)' : 'var(--text-main)', margin: '2px 0' }}>
                          {batch.timeEST}
                        </div>
                        <div style={{ fontSize: '11.5px', fontWeight: 600, color: 'var(--text-muted)' }}>
                          {batch.tag}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Student Details */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span className="nicepage-number-pill" style={{ width: '32px', height: '32px', fontSize: '13px' }}>
                    03
                  </span>
                  <label className="form-label" style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                    Step 3: Your Contact Information
                  </label>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                  }}
                  className="demo-form-grid"
                >
                  {/* Full Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="form-input"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email Address */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone / WhatsApp Number <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. +1 555-019-2834"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Country */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="country">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="form-select"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      {COUNTRIES_LIST.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Yoga Experience Level */}
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label">
                      Your Yoga Experience Level
                    </label>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '10px',
                      }}
                      className="experience-select-grid"
                    >
                      {['Beginner (New to Yoga)', 'Intermediate', 'Advanced Practitioner'].map((lvl) => {
                        const isSelected = formData.experienceLevel === lvl;
                        return (
                          <div
                            key={lvl}
                            onClick={() => setFormData((prev) => ({ ...prev, experienceLevel: lvl }))}
                            style={{
                              padding: '10px 12px',
                              borderRadius: '12px',
                              border: isSelected ? '2px solid var(--accent)' : '1.5px solid rgba(0, 0, 0, 0.1)',
                              backgroundColor: isSelected ? 'var(--accent-light)' : '#FAF6F0',
                              cursor: 'pointer',
                              textAlign: 'center',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <span style={{ fontSize: '13px', fontWeight: 700, color: isSelected ? 'var(--accent-hover)' : 'var(--text-main)' }}>
                              {lvl}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg w-full"
                  style={{
                    fontSize: '17px',
                    padding: '16px 28px',
                  }}
                >
                  {isSubmitting ? (
                    <span>Confirming your free demo class...</span>
                  ) : (
                    <>
                      <Sparkles size={18} style={{ color: '#FDE68A' }} />
                      <span className="demo-btn-text-full">Book Free Demo ({currentProgramObj.name} • {formData.preferredBatch})</span>
                      <span className="demo-btn-text-mobile">Book Free Demo Class ($0)</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--primary)' }} />
                  <span>No credit card needed • Live Zoom session with Rohit (Teacher from Rishikesh)</span>
                </div>
              </div>
            </form>
          ) : (
            /* Confirmation Success State */
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-50)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 10px 25px rgba(194, 94, 26, 0.25)',
                }}
              >
                <CheckCircle2 size={40} />
              </div>

              <span className="badge badge-accent" style={{ marginBottom: '12px' }}>
                Registration Confirmed
              </span>

              <h3 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '10px' }}>
                Welcome to Yoga With Rohit!
              </h3>

              <p style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 28px', lineHeight: 1.6 }}>
                Thank you, <strong>{submissionData.fullName}</strong>! Your free demo online yoga class has been successfully registered. We have sent the live joining link to <strong>{submissionData.email}</strong>.
              </p>

              {/* Booking Summary Box */}
              <div
                style={{
                  backgroundColor: 'var(--bg-sand)',
                  borderRadius: '18px',
                  padding: '24px',
                  maxWidth: '540px',
                  margin: '0 auto 28px',
                  border: '1px solid rgba(194, 94, 26, 0.15)',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Yoga Program:</span>
                  <strong style={{ color: 'var(--primary-dark)', fontSize: '14px' }}>{submissionData.programName}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Batch Time:</span>
                  <strong style={{ color: 'var(--primary)', fontSize: '14px' }}>{submissionData.preferredBatch}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Instructor:</span>
                  <strong style={{ color: 'var(--text-main)', fontSize: '14px' }}>Rohit (Teacher from Rishikesh)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Tuition:</span>
                  <strong style={{ color: '#16A34A', fontSize: '14px' }}>100% Free Demo ($0)</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
                <a
                  href={`https://wa.me/918077570122?text=Hi%20Rohit!%20I%20just%20booked%20my%20Free%20Demo%20for%20${encodeURIComponent(submissionData.programName)}%20at%20${encodeURIComponent(submissionData.preferredBatch)}.%20My%20name%20is%20${encodeURIComponent(submissionData.fullName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                  style={{ backgroundColor: '#25D366', color: '#FFF' }}
                >
                  <MessageCircle size={16} />
                  <span>Notify Rohit on WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="btn btn-outline btn-sm"
                >
                  <RefreshCw size={15} />
                  <span>Register Another Student</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .demo-btn-text-mobile {
          display: none;
        }
        @media (max-width: 768px) {
          .demo-card-container {
            padding: 24px 18px !important;
          }
          .demo-form-grid, .program-select-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .batch-select-grid, .experience-select-grid {
            grid-template-columns: 1fr !important;
          }
          .form-group {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 640px) {
          .demo-btn-text-full {
            display: none !important;
          }
          .demo-btn-text-mobile {
            display: inline !important;
          }
          .demo-card-container {
            padding: 20px 14px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
