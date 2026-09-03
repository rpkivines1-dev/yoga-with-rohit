import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, Clock, MapPin, MessageCircle, Calendar, Sun, Flame, Video, CreditCard, Lock, ArrowRight } from 'lucide-react';
import { YOGA_PROGRAMS, COUNTRIES_LIST, BRAND } from '../../data/yogaData';
import { ClassSchedulingService } from '../../services/classSchedulingService';

export default function BookingModal({ isOpen, onClose, initialData = {}, onSuccess, onOpenPortal }) {
  const [selectedProgramId, setSelectedProgramId] = useState('traditional-hatha');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'United States',
    batch: '6:30 AM EST',
    packageType: 'Free Demo Yoga Class ($0)',
    experienceLevel: 'Beginner (New to Yoga)',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [createdBooking, setCreatedBooking] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (initialData && isOpen) {
      let progId = 'traditional-hatha';
      if (initialData.programId) {
        progId = initialData.programId;
      } else if (initialData.plan === 'ashtanga' || (initialData.title && initialData.title.includes('Ashtanga'))) {
        progId = 'ashtanga-vinyasa';
      } else if (initialData.plan === 'sunday-free' || (initialData.title && initialData.title.includes('Sunday'))) {
        progId = 'sunday-free';
      }

      let pkg = 'Free Demo Yoga Class ($0)';
      if (initialData.plan === 'monthly') pkg = 'Monthly Yoga Package ($50 / Month - 12 Classes)';
      else if (initialData.plan === 'daily') pkg = 'Daily Yoga Class ($5 / Class)';
      else if (initialData.plan === 'sunday-free') pkg = 'Sunday Free Community Yoga ($0)';

      setSelectedProgramId(progId);
      setFormData((prev) => ({
        ...prev,
        packageType: pkg,
        batch: initialData.timeEST || initialData.batch || (progId === 'ashtanga-vinyasa' ? '7:30 PM EST' : '6:30 AM EST'),
      }));
      setErrorMessage(null);
      setIsSuccess(false);
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const currentProgramObj = YOGA_PROGRAMS.find((p) => p.id === selectedProgramId) || YOGA_PROGRAMS[0];

  const handleProgramChange = (e) => {
    const progId = e.target.value;
    setSelectedProgramId(progId);
    if (progId === 'ashtanga-vinyasa') {
      setFormData((prev) => ({ ...prev, batch: '7:30 PM EST' }));
    } else if (progId === 'sunday-free') {
      setFormData((prev) => ({ ...prev, batch: '7:30 AM EST', packageType: 'Sunday Free Community Yoga ($0)' }));
    } else {
      setFormData((prev) => ({ ...prev, batch: '6:30 AM EST' }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill out all required fields.');
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const newBooking = await ClassSchedulingService.createBooking({
        studentName: formData.fullName,
        studentEmail: formData.email,
        studentPhone: formData.phone,
        programId: selectedProgramId,
        batch: formData.batch,
        packageType: formData.packageType,
        paymentMethod: formData.packageType.includes('$0') ? 'Free Demo' : 'Stripe (Credit Card)',
      });

      setCreatedBooking(newBooking);
      setIsSuccess(true);
      if (onSuccess) {
        onSuccess({
          name: formData.fullName,
          program: selectedProgramId === 'sunday-free' ? 'Sunday Free Community Yoga' : currentProgramObj.name,
          package: formData.packageType,
          batch: formData.batch,
        });
      }
    } catch (err) {
      setErrorMessage(err.message || 'Booking failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={handleClose}>
      <div
        className="modal-container booking-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px' }}
      >
        {/* Modal Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="modal-close-btn"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-sand)',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '1px solid rgba(194, 94, 26, 0.15)',
            zIndex: 10,
          }}
        >
          <X size={18} />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div style={{ textAlign: 'left', marginBottom: '20px', paddingRight: '36px' }}>
              <span className="badge badge-accent" style={{ marginBottom: '8px', fontSize: '11px' }}>
                <Sparkles size={12} />
                <span>Live Online Class Booking & Scheduling</span>
              </span>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0, lineHeight: 1.2 }}>
                Book Your Yoga Session
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Live classes streaming on <strong>Monday, Wednesday & Friday</strong> from Rishikesh with Rohit.
              </p>
            </div>

            {errorMessage && (
              <div style={{ padding: '12px 14px', backgroundColor: '#FEE2E2', color: '#DC2626', borderRadius: '12px', fontSize: '13px', fontWeight: 700, marginBottom: '16px', textAlign: 'left' }}>
                ⚠️ {errorMessage}
              </div>
            )}

            {/* 4-Step Booking Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left' }}>
              {/* Program Selector */}
              <div>
                <label className="label">1. Select Yoga Program</label>
                <select
                  value={selectedProgramId}
                  onChange={handleProgramChange}
                  className="input"
                  style={{ fontWeight: 700, color: 'var(--primary-dark)' }}
                >
                  <option value="traditional-hatha">🧘 Traditional Hatha Yoga (Morning Batches)</option>
                  <option value="ashtanga-vinyasa">🧘‍♂️ Ashtanga Vinyasa Primary Series (Evening Batches)</option>
                  <option value="sunday-free">☀️ Sunday Free Community Yoga ($0 - 7:30 AM EST)</option>
                </select>
              </div>

              {/* Package Type & Batch Timing */}
              <div className="form-grid-2">
                <div>
                  <label className="label">2. Class Package</label>
                  <select
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleChange}
                    className="input"
                    style={{ fontWeight: 600 }}
                  >
                    <option value="Monthly Yoga Package ($50 / Month - 12 Classes)">Monthly Package ($50 / Month - 12 Classes) 🌟 BEST VALUE</option>
                    <option value="Daily Yoga Class ($5 / Class)">Daily Yoga Class ($5 / Class)</option>
                    <option value="Free Demo Yoga Class ($0)">Free Demo Class ($0)</option>
                    {selectedProgramId === 'sunday-free' && (
                      <option value="Sunday Free Community Yoga ($0)">Sunday Free Community Yoga ($0)</option>
                    )}
                  </select>
                </div>

                <div>
                  <label className="label">3. Preferred Batch (EST)</label>
                  <select
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    className="input"
                    style={{ fontWeight: 600 }}
                  >
                    {selectedProgramId === 'sunday-free' ? (
                      <option value="7:30 AM EST">Sunday Community Batch — 7:30 AM EST</option>
                    ) : selectedProgramId === 'ashtanga-vinyasa' ? (
                      <>
                        <option value="7:30 PM EST">Batch 1 — 7:30 PM EST (Mon, Wed, Fri)</option>
                        <option value="8:45 PM EST">Batch 2 — 8:45 PM EST (Mon, Wed, Fri)</option>
                        <option value="10:00 PM EST">Batch 3 — 10:00 PM EST (Mon, Wed, Fri)</option>
                      </>
                    ) : (
                      <>
                        <option value="6:30 AM EST">Batch 1 — 6:30 AM EST (Mon, Wed, Fri)</option>
                        <option value="7:45 AM EST">Batch 2 — 7:45 AM EST (Mon, Wed, Fri)</option>
                        <option value="9:00 AM EST">Batch 3 — 9:00 AM EST (Mon, Wed, Fri)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Full Name & Email */}
              <div className="form-grid-2">
                <div>
                  <label className="label">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Sarah Jenkins"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label className="label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                  />
                </div>
              </div>

              {/* Phone & Country */}
              <div className="form-grid-2">
                <div>
                  <label className="label">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (555) 234-5678"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label className="label">Country / Timezone</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="input"
                  >
                    {COUNTRIES_LIST.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name} ({c.tz})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label className="label">Yoga Experience Level</label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="Beginner (New to Yoga)">Beginner (New to Yoga)</option>
                  <option value="Intermediate (6+ months)">Intermediate (Practicing 6+ months)</option>
                  <option value="Advanced (Regular Daily Practice)">Advanced (Daily Practice)</option>
                  <option value="Teacher / Practitioner">Teacher / Practitioner</option>
                </select>
              </div>

              {/* Payment Summary Preview */}
              <div
                style={{
                  padding: '14px 18px',
                  backgroundColor: 'var(--bg-sand)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(194, 94, 26, 0.15)',
                }}
              >
                <div>
                  <div style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Payment Summary
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-dark)' }}>
                    {formData.packageType.includes('Monthly')
                      ? '$50.00 (12 Live Classes Included)'
                      : formData.packageType.includes('Daily')
                      ? '$5.00 (Single Class Pass)'
                      : '$0.00 (Free Demo Session)'}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#16A34A', fontWeight: 700 }}>
                  <Lock size={14} />
                  <span>Secure Checkout</span>
                </div>
              </div>

              {/* Submit CTA */}
              <div style={{ marginTop: '4px' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full btn-lg animate-pulse-glow"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 12px 28px -4px rgba(194, 94, 26, 0.45)',
                  }}
                >
                  <Sparkles size={18} style={{ color: '#FDE68A' }} />
                  <span>
                    {isSubmitting
                      ? 'Processing Verification...'
                      : formData.packageType.includes('Monthly')
                      ? 'Pay $50 & Activate 12-Class Package'
                      : formData.packageType.includes('Daily')
                      ? 'Pay $5 & Reserve Spot'
                      : 'Confirm Free Booking'}
                  </span>
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>
                <ShieldCheck size={14} style={{ color: 'var(--primary)' }} />
                <span>Verified by Yoga Teacher Rohit (Rishikesh, 500-Hr Yoga Alliance)</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State with Class Details and Launch Portal */
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                backgroundColor: '#DCFCE7',
                color: '#16A34A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 10px 25px rgba(22, 163, 74, 0.25)',
              }}
            >
              <CheckCircle2 size={38} />
            </div>

            <span className="badge badge-accent" style={{ marginBottom: '10px' }}>
              Booking Confirmed & Verified
            </span>

            <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
              Namaste, {createdBooking?.studentName}! 🙏
            </h3>

            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '6px', lineHeight: 1.5 }}>
              Your spot in <strong>{createdBooking?.programName}</strong> ({createdBooking?.batch}) has been confirmed.
            </p>

            {/* Confirmed Details Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-sand)',
                borderRadius: '20px',
                padding: '20px',
                margin: '20px 0',
                border: '1.5px solid rgba(194, 94, 26, 0.15)',
                textAlign: 'left',
              }}
            >
              <div className="form-grid-2" style={{ marginBottom: '14px' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Package Type
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary-dark)' }}>
                    {createdBooking?.packageType}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Schedule
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--accent)' }}>
                    {createdBooking?.isMonthlyMembership ? '12 Classes (Mon, Wed, Fri)' : 'Single Class Session'}
                  </div>
                </div>
              </div>

              <div className="form-grid-2" style={{ borderTop: '1px dashed rgba(194, 94, 26, 0.2)', paddingTop: '12px' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Batch Timing
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary)' }}>
                    {createdBooking?.batch}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Platform
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-main)' }}>
                    {createdBooking?.platform} (Live HD)
                  </div>
                </div>
              </div>

              {createdBooking?.isMonthlyMembership && (
                <div style={{ marginTop: '12px', padding: '10px 12px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>Classes Remaining:</span>
                    <span style={{ color: 'var(--primary)' }}>12 / 12 Classes</span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '3px' }}>
                    Your 12 classes have been scheduled on Monday, Wednesday, and Friday.
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => {
                  handleClose();
                  if (onOpenPortal) onOpenPortal();
                }}
                className="btn btn-primary w-full btn-lg"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <Video size={18} />
                <span>Go to My Classes Dashboard</span>
              </button>

              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full btn-sm"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <MessageCircle size={16} />
                <span>Get Instant Zoom Link on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .booking-modal-card {
          padding: 32px 36px;
        }
        @media (max-width: 640px) {
          .booking-modal-card {
            padding: 24px 16px !important;
          }
        }
        @media (max-width: 440px) {
          .payment-summary-box {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </div>
  );
}
