import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, MessageCircle, Mail, Heart, Globe, ArrowUp, ArrowRight, Award, Calendar, DollarSign, BookOpen, HelpCircle } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';
import { BRAND } from '../../data/yogaData';

export default function Footer({ onOpenBooking, onOpenStudentPortal, onOpenAdminScheduler }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Rohit', href: '#about' },
    { name: 'Verified Certificates', href: '#certificates' },
    { name: 'Class Schedule', href: '#schedule' },
    { name: 'Pricing & Packages', href: '#pricing' },
    { name: 'Free Demo Class', href: '#free-demo' },
    { name: 'Benefits of Yoga', href: '#benefits' },
    { name: 'Student Reviews', href: '#testimonials' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#1C110A',
        color: '#FAF6F0',
        paddingTop: '64px',
        paddingBottom: '32px',
        position: 'relative',
        borderTop: '3px solid var(--primary)',
      }}
    >
      <div className="container-custom">
        {/* Top CTA Banner Centered */}
        <div
          style={{
            backgroundColor: 'var(--primary-dark)',
            borderRadius: '24px',
            padding: '40px 32px',
            marginBottom: '56px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            border: '1.5px solid rgba(245, 158, 11, 0.25)',
            maxWidth: '860px',
            margin: '0 auto 56px',
          }}
          className="footer-cta-banner"
        >
          <div style={{ maxWidth: '640px', margin: '0 auto 22px', textAlign: 'center' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 800,
                color: '#FDE68A',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px',
                textAlign: 'center',
              }}
            >
              Start Your Holistic Journey Today
            </span>
            <h3
              style={{
                fontSize: 'clamp(22px, 3.5vw, 28px)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '0 0 10px',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.25,
                textAlign: 'center',
              }}
            >
              Ready to Practice Authentic Live Online Yoga?
            </h3>
            <p
              style={{
                fontSize: '14.5px',
                color: 'rgba(255, 255, 255, 0.85)',
                margin: 0,
                lineHeight: 1.6,
                textAlign: 'center',
              }}
            >
              Join Rohit live from Rishikesh. Free demo available with instant Zoom access.
            </p>
          </div>

          <div className="footer-cta-btn-wrap" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <button
              onClick={() => onOpenBooking({ plan: 'demo', title: 'Free Demo Yoga Class' })}
              className="btn btn-primary btn-lg footer-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '14px 32px',
                fontSize: '15px',
                fontWeight: 800,
                borderRadius: '9999px',
                boxShadow: '0 8px 24px -4px rgba(194, 94, 26, 0.6)',
              }}
            >
              <Sparkles size={18} style={{ color: '#FDE68A' }} />
              <span>Book Free Demo Class</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Footer 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: '48px',
            marginBottom: '48px',
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Sparkles size={20} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '20px',
                  letterSpacing: '0.04em',
                  color: '#FFFFFF',
                }}
              >
                {BRAND.name}
              </span>
            </div>

            <p
              style={{
                fontSize: '13.5px',
                color: 'rgba(255, 255, 255, 0.72)',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}
            >
              Authentic live online yoga classes taught directly from Rishikesh, Uttarakhand, India. Empowering students worldwide through Traditional Hatha, Ashtanga Vinyasa, Pranayama, and mindful wellness.
            </p>

            {/* Social Channels */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={BRAND.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#25D366';
                  e.currentTarget.style.borderColor = '#25D366';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={`tel:${BRAND.phone}`}
                aria-label="Phone Call"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Online Yoga Classes */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#FFFFFF', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Online Yoga Classes
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <li>
                <Link to="/online-yoga-classes" style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Online Yoga Classes Guide
                </Link>
              </li>
              <li>
                <Link to="/hatha-yoga-online-classes" style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Hatha Yoga Online Classes
                </Link>
              </li>
              <li>
                <Link to="/ashtanga-yoga-online" style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Ashtanga Yoga Online
                </Link>
              </li>
              <li>
                <Link to="/online-yoga-classes-for-beginners" style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Online Yoga for Beginners
                </Link>
              </li>
              <li>
                <Link to="/live-yoga-classes-online" style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Live Yoga Classes Online
                </Link>
              </li>
              <li>
                <Link to="/schedule" style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Class Schedule & Batches
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Tuition & Programs */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#FFFFFF', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Tuition & Programs
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <Link to="/pricing" style={{ fontSize: '13.5px', fontWeight: 700, color: '#FFFFFF', textDecoration: 'none' }}>
                  Monthly Yoga Package
                </Link>
                <span style={{ fontSize: '12px', color: '#FDE68A', display: 'block' }}>$50 / Month (12 Classes • M/W/F)</span>
              </div>

              <div>
                <Link to="/pricing" style={{ fontSize: '13.5px', fontWeight: 700, color: '#FFFFFF', textDecoration: 'none' }}>
                  Daily Yoga Class Pass
                </Link>
                <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.75)', display: 'block' }}>$5 / Single Class Drop-in</span>
              </div>

              <div>
                <Link to="/free-yoga-demo" style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--primary-light)', textDecoration: 'none' }}>
                  Book Free Demo Class ($0)
                </Link>
                <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.75)', display: 'block' }}>60-Min Live Zoom Experience</span>
              </div>

              <div style={{ paddingTop: '6px' }}>
                <button
                  onClick={onOpenStudentPortal}
                  style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  Student Portal & Zoom Meeting →
                </button>
              </div>

              <div>
                <button
                  onClick={onOpenAdminScheduler}
                  style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  Admin Class Scheduler →
                </button>
              </div>
            </div>
          </div>

          {/* Col 4: Guides & Company */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#FFFFFF', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Guides & Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)' }}>
              <div>
                <Link to="/about" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                  About Rohit (500-HR Certified)
                </Link>
              </div>
              <div>
                <Link to="/blog" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                  Yoga Blog & Tutorials (10 Guides)
                </Link>
              </div>
              <div>
                <Link to="/faq" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                  Frequently Asked Questions
                </Link>
              </div>
              <div>
                <Link to="/contact" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                  Contact Yoga With Rohit
                </Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                <Phone size={14} style={{ color: '#FDE68A', flexShrink: 0 }} />
                <a href={`tel:${BRAND.phone}`} style={{ color: '#FFFFFF', fontWeight: 600, textDecoration: 'none' }}>
                  {BRAND.phone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageCircle size={14} style={{ color: '#25D366', flexShrink: 0 }} />
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FFFFFF', fontWeight: 600, textDecoration: 'none' }}
                >
                  WhatsApp Support
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={14} style={{ color: '#FDE68A', flexShrink: 0 }} />
                <span>Rishikesh, Uttarakhand, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.55)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. Master Online Yoga Teacher from Rishikesh.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-cta-banner {
            padding: 30px 16px !important;
            border-radius: 20px !important;
            margin-bottom: 40px !important;
          }
          .footer-cta-btn {
            width: 100% !important;
            max-width: 320px !important;
            padding: 13px 18px !important;
            font-size: 14px !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}
