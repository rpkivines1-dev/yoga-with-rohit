import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Phone, MessageCircle, Calendar, ArrowRight, Award, Video, Settings, ShieldCheck } from 'lucide-react';
import { BRAND } from '../../data/yogaData';

export default function Navbar({ onOpenBooking, onOpenStudentPortal, onOpenAdminScheduler }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current active section
      const sections = ['home', 'about', 'certificates', 'schedule', 'pricing', 'free-demo', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Class Schedule', href: '#schedule' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Free Demo Class', href: '#free-demo', isSpecial: true },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          backgroundColor: isScrolled ? 'rgba(250, 246, 240, 0.96)' : 'rgba(250, 246, 240, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(194, 94, 26, 0.14)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 20px rgba(69, 26, 3, 0.08)' : 'none',
          transition: 'all 0.3s ease',
          padding: isScrolled ? '12px 0' : '16px 0',
        }}
      >
        <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 12px rgba(194, 94, 26, 0.35)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" opacity="0.2" fill="#FEF3C7" />
                <path d="M12 6c-1.5 2.5-3 5-3 7.5a3 3 0 0 0 6 0C15 11 13.5 8.5 12 6z" />
                <path d="M7.5 10c-1.8 1.5-3 3.5-3 5.5a3.5 3.5 0 0 0 5.5 2.5C9 16 8 13.5 7.5 10z" />
                <path d="M16.5 10c1.8 1.5 3 3.5 3 5.5a3.5 3.5 0 0 1-5.5 2.5c1-2 2-4.5 2.5-8z" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '20px',
                  letterSpacing: '0.04em',
                  color: 'var(--primary-dark)',
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                }}
              >
                {BRAND.name}
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                }}
              >
                Live Online Yoga
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontSize: '13.5px',
                    fontWeight: (link.isSpecial || isActive) ? 700 : 500,
                    color: link.isSpecial ? 'var(--accent)' : (isActive ? 'var(--primary-dark)' : 'var(--text-muted)'),
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    padding: '6px 2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive && !link.isSpecial) {
                      e.currentTarget.style.color = 'var(--text-muted)';
                    }
                  }}
                >
                  {link.isSpecial && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></span>}
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Student "My Classes / Live Portal" Button */}
            <button
              onClick={onOpenStudentPortal}
              className="btn btn-outline btn-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                fontSize: '13px',
                fontWeight: 800,
                borderColor: 'var(--primary)',
                color: 'var(--primary-dark)',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Video size={15} style={{ color: 'var(--primary)' }} />
              <span>My Classes</span>
            </button>

            {/* Admin Scheduler Button */}
            <button
              onClick={onOpenAdminScheduler}
              title="Admin Class Scheduler"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-50)',
                border: '1px solid rgba(194, 94, 26, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                cursor: 'pointer',
              }}
            >
              <Settings size={17} />
            </button>

            {/* Book Free Demo CTA */}
            <button
              onClick={() => onOpenBooking({ plan: 'demo', title: 'Free Demo Yoga Class' })}
              className="btn btn-primary btn-sm animate-pulse-glow"
              style={{
                display: 'inline-flex',
                boxShadow: '0 8px 20px -4px rgba(194, 94, 26, 0.45)',
              }}
            >
              <Sparkles size={15} style={{ color: '#FDE68A' }} />
              <span>Book Free Demo</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="mobile-menu-btn"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'var(--primary-50)',
                color: 'var(--primary)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(194, 94, 26, 0.2)',
              }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
              }}
            >
              <Sparkles size={18} />
            </div>
            <span style={{ fontWeight: 800, fontSize: '17px', color: 'var(--primary-dark)' }}>
              {BRAND.name}
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-surface-alt)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflowY: 'auto' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: 600,
                color: link.isSpecial ? 'var(--accent)' : 'var(--text-main)',
                backgroundColor: link.isSpecial ? 'var(--accent-50)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{link.name}</span>
              <ArrowRight size={16} opacity={0.5} />
            </a>
          ))}
        </div>

        {/* Bottom Drawer Actions */}
        <div style={{ borderTop: '1px solid rgba(194, 94, 26, 0.12)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenStudentPortal();
            }}
            className="btn btn-outline w-full"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <Video size={16} />
            <span>My Classes & Live Portal</span>
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAdminScheduler();
            }}
            className="btn btn-outline w-full btn-sm"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <Settings size={15} />
            <span>Admin Class Management</span>
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking({ plan: 'demo', title: 'Free Demo Yoga Class' });
            }}
            className="btn btn-primary w-full"
          >
            <Sparkles size={16} style={{ color: '#FDE68A' }} />
            Book Free Demo Class
          </button>

          <a
            href={`tel:${BRAND.phone}`}
            className="btn btn-outline w-full btn-sm"
          >
            <Phone size={15} />
            Call: {BRAND.phone}
          </a>

          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm w-full"
            style={{ backgroundColor: '#25D366', color: '#FFF' }}
          >
            <MessageCircle size={15} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
