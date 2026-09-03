import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, Sparkles, Clock, Globe } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';
import { BRAND } from '../../data/yogaData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <div className="section-tag">
            <Mail size={14} />
            <span>GET IN TOUCH WITH ROHIT</span>
          </div>

          <h2 className="section-title">
            Connect & Start Your <span style={{ color: 'var(--primary)' }}>Yoga Journey</span>
          </h2>

          <p className="section-subtitle">
            Have questions about timings, custom 1-on-1 requirements, or joining from your time zone? Rohit is always happy to connect directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Contact Info & Socials */}
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px' }}>
              Direct Contact Information
            </h3>

            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '32px' }}>
              Reach out directly via phone, WhatsApp, or Instagram to book your class, ask questions, or discuss your flexibility goals.
            </p>

            {/* Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {/* Phone & WhatsApp Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-sand)',
                  padding: '24px',
                  borderRadius: '20px',
                  border: '1px solid rgba(44, 94, 67, 0.12)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.06em' }}>
                      Phone / WhatsApp
                    </span>
                    <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                      {BRAND.phone}
                    </h4>
                  </div>
                </div>

                {/* Two Action Buttons: Call Now & WhatsApp Us */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1, minWidth: '130px' }}
                  >
                    <Phone size={15} />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={BRAND.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    style={{
                      flex: 1,
                      minWidth: '140px',
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      boxShadow: '0 6px 18px rgba(37, 211, 102, 0.3)',
                    }}
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-sand)',
                  padding: '24px',
                  borderRadius: '20px',
                  border: '1px solid rgba(44, 94, 67, 0.12)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <InstagramIcon size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.06em' }}>
                      Official Instagram
                    </span>
                    <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                      {BRAND.instagramHandle}
                    </h4>
                  </div>
                </div>

                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm w-full"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    borderColor: '#DD2A7B',
                    color: '#B91C1C',
                  }}
                >
                  <InstagramIcon size={16} color="#DD2A7B" />
                  <span>Follow Yoga With Rohit on Instagram</span>
                </a>
              </div>
            </div>

            {/* Quick stats / location reminder */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '13.5px' }}>
              <Globe size={16} style={{ color: 'var(--primary)' }} />
              <span>Teaching online students worldwide via Zoom live stream</span>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div
            className="glass-card contact-form-card"
            style={{
              borderRadius: '24px',
              backgroundColor: '#FAF8F5',
              border: '1.5px solid rgba(44, 94, 67, 0.12)',
              boxShadow: 'var(--shadow-lg)',
              textAlign: 'left',
            }}
          >
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '8px' }}>
              Send Rohit a Message
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Fill out the form below and Rohit will respond to you within a few hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    Full Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="fullName"
                    required
                    placeholder="e.g. David Miller"
                    className="form-input"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    Email Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="e.g. david@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="e.g. +1 555-019-2834"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    Message <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Tell Rohit about your goals, existing health conditions, or preferred batch..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-lg w-full"
                  style={{ marginTop: '8px' }}
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-50)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '8px' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.fullName}</strong>. Rohit has received your note and will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', email: '', phone: '', message: '' });
                  }}
                  className="btn btn-outline btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-form-card {
          padding: 36px 40px;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          .contact-form-card {
            padding: 22px 16px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
