import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Menu,
  X,
  Phone,
  MessageCircle,
  Calendar,
  ArrowRight,
  Award,
  Video,
  Settings,
  Sun,
  Home,
  DollarSign,
  Mail,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import { BRAND } from '../../data/yogaData';

export default function Navbar({ onOpenBooking, onOpenStudentPortal, onOpenAdminScheduler }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current active section
      const sections = ['home', 'about', 'certificates', 'schedule', 'pricing', 'free-demo', 'sunday-free', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/', href: '#home', icon: Home },
    { name: 'Online Classes', path: '/online-yoga-classes', icon: Video },
    { name: 'Schedule', path: '/schedule', href: '#schedule', icon: Calendar },
    { name: 'Pricing', path: '/pricing', href: '#pricing', icon: DollarSign },
    { name: 'About', path: '/about', href: '#about', icon: Award },
    { name: 'FAQ', path: '/faq', href: '#faq', icon: Sparkles },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'Contact', path: '/contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/' && link.href) {
      const target = document.querySelector(link.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(link.path);
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
          backgroundColor: isScrolled ? 'rgba(250, 246, 240, 0.98)' : 'rgba(250, 246, 240, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(194, 94, 26, 0.16)' : '1px solid rgba(194, 94, 26, 0.06)',
          boxShadow: isScrolled ? '0 4px 20px rgba(69, 26, 3, 0.08)' : 'none',
          transition: 'all 0.25s ease',
          padding: isScrolled ? '10px 0' : '14px 0',
        }}
      >
        <div
          className="container-custom"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          {/* Brand Logo & Title */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <div
              className="nav-logo-icon"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 12px rgba(194, 94, 26, 0.35)',
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" opacity="0.2" fill="#FEF3C7" />
                <path d="M12 6c-1.5 2.5-3 5-3 7.5a3 3 0 0 0 6 0C15 11 13.5 8.5 12 6z" />
                <path d="M7.5 10c-1.8 1.5-3 3.5-3 5.5a3.5 3.5 0 0 0 5.5 2.5C9 16 8 13.5 7.5 10z" />
                <path d="M16.5 10c1.8 1.5 3 3.5 3 5.5a3.5 3.5 0 0 1-5.5 2.5c1-2 2-4.5 2.5-8z" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <span
                className="nav-brand-title"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '18px',
                  letterSpacing: '0.04em',
                  color: 'var(--primary-dark)',
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {BRAND.name}
              </span>
              <span
                className="nav-brand-subtitle"
                style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                Live Online Yoga
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  style={{
                    fontSize: '13.5px',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--primary-dark)' : 'var(--text-muted)',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    padding: '6px 2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-muted)';
                    }
                  }}
                >
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
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {/* Student "My Classes / Live Portal" Button */}
            <button
              onClick={onOpenStudentPortal}
              className="nav-myclasses-btn btn btn-outline btn-sm"
              title="View your booked classes and live Zoom link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                fontSize: '12.5px',
                fontWeight: 800,
                borderColor: 'var(--primary)',
                color: 'var(--primary-dark)',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                flexShrink: 0,
              }}
            >
              <Video size={14} style={{ color: 'var(--primary)' }} />
              <span className="nav-myclasses-text-full">My Classes</span>
              <span className="nav-myclasses-text-short">Classes</span>
            </button>

            {/* Admin Scheduler Button - Hidden on mobile, visible on desktop */}
            <button
              onClick={onOpenAdminScheduler}
              title="Admin Class Scheduler"
              className="nav-admin-btn"
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
                transition: 'all 0.2s ease',
              }}
            >
              <Settings size={16} />
            </button>

            {/* Book Free Demo CTA - Hidden on narrow screens, available in drawer */}
            <button
              onClick={() => onOpenBooking({ plan: 'demo', title: 'Free Demo Yoga Class' })}
              className="nav-demo-btn btn btn-primary btn-sm animate-pulse-glow"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '7px 14px',
                fontSize: '12.5px',
                fontWeight: 800,
                boxShadow: '0 6px 18px -3px rgba(194, 94, 26, 0.4)',
                borderRadius: '8px',
              }}
            >
              <Sparkles size={14} style={{ color: '#FDE68A' }} />
              <span>Book Free Demo</span>
            </button>

            {/* Mobile Menu Toggle Button (Hamburger) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="mobile-menu-btn"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'var(--primary-50)',
                color: 'var(--primary)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1.5px solid rgba(194, 94, 26, 0.25)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
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
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            paddingBottom: '16px',
            borderBottom: '1px solid rgba(194, 94, 26, 0.12)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                boxShadow: '0 4px 10px rgba(194, 94, 26, 0.3)',
              }}
            >
              <Sparkles size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', lineHeight: 1.1 }}>
                {BRAND.name}
              </div>
              <span style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 700 }}>
                Rishikesh, India • Yoga Alliance
              </span>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(194, 94, 26, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
              cursor: 'pointer',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links Scrollable List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            flex: 1,
            overflowY: 'auto',
            paddingRight: '4px',
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                style={{
                  padding: '11px 14px',
                  borderRadius: '12px',
                  fontSize: '14.5px',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--primary-dark)' : 'var(--text-main)',
                  backgroundColor: isActive ? 'rgba(194, 94, 26, 0.1)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  border: isActive ? '1px solid rgba(194, 94, 26, 0.2)' : '1px solid transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {Icon && <Icon size={17} style={{ color: 'var(--primary)' }} />}
                  <span>{link.name}</span>
                </div>
                <ArrowRight size={15} opacity={0.4} />
              </Link>
            );
          })}
        </div>

        {/* Bottom Drawer Actions */}
        <div
          style={{
            borderTop: '1px solid rgba(194, 94, 26, 0.12)',
            paddingTop: '16px',
            marginTop: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {/* Primary Demo Class Booking */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking({ plan: 'demo', title: 'Free Demo Yoga Class' });
            }}
            className="btn btn-primary w-full"
            style={{
              padding: '11px 16px',
              fontSize: '14px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={16} style={{ color: '#FDE68A' }} />
            <span>Book Free Demo Class ($0)</span>
          </button>

          {/* Student My Classes Portal */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenStudentPortal();
            }}
            className="btn btn-outline w-full"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px 14px',
              fontSize: '13.5px',
              fontWeight: 700,
              backgroundColor: '#FFFFFF',
              borderColor: 'var(--primary)',
            }}
          >
            <Video size={16} style={{ color: 'var(--primary)' }} />
            <span>My Classes & Live Meeting</span>
          </button>

          {/* Admin Class Management Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAdminScheduler();
            }}
            className="btn btn-outline w-full btn-sm"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '12.5px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <Settings size={14} />
            <span>Admin Class Management</span>
          </button>

          {/* Quick Direct Contacts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '2px' }}>
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{
                backgroundColor: '#25D366',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                fontSize: '12px',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${BRAND.phone}`}
              className="btn btn-outline btn-sm"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                fontSize: '12px',
                fontWeight: 700,
                textDecoration: 'none',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Phone size={14} />
              <span>Call Rohit</span>
            </a>
          </div>
        </div>
      </div>

      {/* Responsive Styles for Navbar */}
      <style>{`
        /* Desktop to Tablet breakpoint: hide desktop links, show hamburger */
        @media (max-width: 1040px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }

        /* Tablet breakpoint: hide admin button from top navbar */
        @media (max-width: 900px) {
          .nav-admin-btn {
            display: none !important;
          }
        }

        /* Small Tablet & Large Mobile: hide "Book Free Demo" button from top navbar */
        @media (max-width: 720px) {
          .nav-demo-btn {
            display: none !important;
          }
        }

        /* Standard Mobile: compact logo and clean title */
        @media (max-width: 540px) {
          .nav-brand-title {
            font-size: 16px !important;
          }
          .nav-brand-subtitle {
            font-size: 9.5px !important;
          }
          .nav-logo-icon {
            width: 34px !important;
            height: 34px !important;
          }
          .nav-logo-icon svg {
            width: 19px !important;
            height: 19px !important;
          }
        .nav-myclasses-text-short {
          display: none;
        }

        /* Standard Mobile: compact logo and clean title */
        @media (max-width: 540px) {
          .nav-brand-title {
            font-size: 16px !important;
          }
          .nav-brand-subtitle {
            font-size: 9.5px !important;
          }
          .nav-logo-icon {
            width: 34px !important;
            height: 34px !important;
          }
          .nav-logo-icon svg {
            width: 19px !important;
            height: 19px !important;
          }
          .nav-myclasses-text-full {
            display: none !important;
          }
          .nav-myclasses-text-short {
            display: inline !important;
          }
          .nav-myclasses-btn {
            padding: 6px 10px !important;
            font-size: 12px !important;
          }
        }

        /* Very narrow phones (< 380px): compact text */
        @media (max-width: 380px) {
          .nav-brand-title {
            font-size: 14px !important;
          }
          .nav-brand-subtitle {
            display: none !important;
          }
          .nav-myclasses-text-short, .nav-myclasses-text-full {
            display: none !important;
          }
          .nav-myclasses-btn {
            padding: 6px !important;
            width: 34px !important;
            height: 34px !important;
            justify-content: center !important;
            border-radius: 8px !important;
          }
        }
      `}</style>
    </>
  );
}
