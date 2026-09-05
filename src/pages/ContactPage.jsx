import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2, Sparkles, Clock, Globe } from 'lucide-react';
import { trackContactFormSubmit, trackWhatsAppClick, trackInstagramClick } from '../utils/analytics';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', goal: 'Traditional Hatha' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    trackContactFormSubmit();
    setSubmitted(true);
  };

  const breadcrumbs = [
    { name: 'Contact Us', url: '/contact' },
  ];

  return (
    <>
      <SEOHead
        title="Contact Yoga With Rohit | Phone, WhatsApp & Inquiries"
        description="Get in touch with Rohit for online yoga class schedules, private sessions, and batch inquiries. Call or WhatsApp +91 8077570122 or message on Instagram."
        canonicalUrl="https://www.yogawithrohit.com/contact"
        keywords="Contact Yoga With Rohit, Rohit yoga teacher phone, WhatsApp yoga teacher, Rishikesh yoga inquiries"
        breadcrumbs={breadcrumbs}
      />

      <PageBanner
        badge="Direct Student Support"
        title="Contact Yoga With Rohit"
        subtitle="Have questions about class timings, beginner suitability, or private sessions? We are here to guide you directly from Rishikesh, India."
        breadcrumbs={breadcrumbs}
      />

      <article className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom" style={{ maxWidth: '960px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            
            {/* Left: Contact Info Cards */}
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '20px' }}>
                Direct Contact Channels
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '28px' }}>
                Rohit and our student support team respond to all student inquiries via WhatsApp and email within a few hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/918077570122?text=Hello%20Rohit,%20I%20would%20like%20to%20inquire%20about%20your%20live%20online%20yoga%20classes."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('contact_page')}
                  style={{
                    backgroundColor: '#F0FDF4',
                    border: '1.5px solid #BBF7D0',
                    borderRadius: '18px',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#22C55E', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#15803D', textTransform: 'uppercase' }}>WhatsApp Direct</div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>+91 8077570122</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Fastest response for international students</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918077570122"
                  style={{
                    backgroundColor: '#FAF6F0',
                    border: '1.5px solid rgba(194, 94, 26, 0.14)',
                    borderRadius: '18px',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--primary-50)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Phone Call</div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>+91 8077570122</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Direct line (India Standard Time)</div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/panchrohit1943/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackInstagramClick}
                  style={{
                    backgroundColor: '#FAF6F0',
                    border: '1.5px solid rgba(194, 94, 26, 0.14)',
                    borderRadius: '18px',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#FDF2F8', color: '#DB2777', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Globe size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#DB2777', textTransform: 'uppercase' }}>Instagram</div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>@panchrohit1943</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Daily asana demos, videos & student tips</div>
                  </div>
                </a>
              </div>

              <div style={{ backgroundColor: 'var(--primary-50)', padding: '18px 20px', borderRadius: '16px', border: '1px solid var(--primary-100)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '4px' }}>
                  <MapPin size={16} color="var(--primary)" />
                  <span>Based in Rishikesh, Uttarakhand, India</span>
                </div>
                <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                  Classes are taught live via Zoom & Google Meet, accessible worldwide across all global timezones.
                </p>
              </div>
            </div>

            {/* Right: Message Form */}
            <div style={{ backgroundColor: '#FAF6F0', borderRadius: '24px', padding: '32px', border: '1.5px solid rgba(194, 94, 26, 0.16)' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                Send Rohit a Direct Message
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '22px' }}>
                Fill out the quick form below and we will get back to you promptly:
              </p>

              {submitted ? (
                <div style={{ backgroundColor: '#F0FDF4', border: '2px solid #86EFAC', borderRadius: '18px', padding: '28px', textAlign: 'center' }}>
                  <CheckCircle2 size={40} color="#16A34A" style={{ margin: '0 auto 12px' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#15803D', marginBottom: '6px' }}>
                    Message Received!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                    Thank you {formData.name}. Rohit or our student team will message you back shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(194, 94, 26, 0.2)', backgroundColor: '#FFFFFF', fontSize: '14px' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.com"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(194, 94, 26, 0.2)', backgroundColor: '#FFFFFF', fontSize: '14px' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                      WhatsApp Number (with Country Code)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 555 123 4567"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(194, 94, 26, 0.2)', backgroundColor: '#FFFFFF', fontSize: '14px' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Interested Practice
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(194, 94, 26, 0.2)', backgroundColor: '#FFFFFF', fontSize: '14px' }}
                    >
                      <option value="Traditional Hatha">Traditional Hatha Yoga (Morning)</option>
                      <option value="Ashtanga Vinyasa">Ashtanga Vinyasa Primary Series (Evening)</option>
                      <option value="Beginner Demo">Free Demo Online Class</option>
                      <option value="Private 1-on-1">Private 1-on-1 Session Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Your Question or Goal
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your yoga background, time availability, or any questions..."
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(194, 94, 26, 0.2)', backgroundColor: '#FFFFFF', fontSize: '14px', resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '14px', fontSize: '15px', marginTop: '8px' }}
                  >
                    <Send size={16} />
                    <span>Send Message to Rohit</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </article>
    </>
  );
}
