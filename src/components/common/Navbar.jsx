// ==========================================================================
// WELCOME HOTEL - NAVIGATION BAR
// ==========================================================================

import React, { useState, useEffect } from 'react';
import { useHotel } from '../../context/HotelContext';
import { 
  Hotel, 
  Calendar, 
  User, 
  ShieldCheck, 
  Menu as MenuIcon, 
  X, 
  Phone, 
  Sparkles,
  UtensilsCrossed,
  Image as ImageIcon,
  Info,
  Mail
} from 'lucide-react';

export const Navbar = ({ onOpenAuth }) => {
  const { activePage, navigateTo, currentUser, logout, hotelInfo, startBookingFlow } = useHotel();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'restaurant', label: 'Restaurant & Dining' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    navigateTo(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#FFFFFF',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 4px 20px rgba(18, 24, 32, 0.08)' : '0 1px 0 rgba(28, 36, 45, 0.06)',
          borderBottom: '1px solid rgba(197, 168, 128, 0.2)'
        }}
      >
        {/* Top Info Bar */}
        <div
          style={{
            backgroundColor: '#121820',
            color: '#DCC7A8',
            fontSize: '0.8rem',
            padding: '0.35rem 0',
            borderBottom: '1px solid rgba(197, 168, 128, 0.15)'
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={13} color="#C5A880" /> Boutique 10-Room Luxury Experience
              </span>
              <span style={{ display: 'none', mdDisplay: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={12} color="#C5A880" /> {hotelInfo.phone.split('/')[0]}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => navigateTo('admin')}
                style={{
                  color: activePage === 'admin' ? '#C5A880' : '#A4B0BE',
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.15rem 0.6rem',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.06)'
                }}
              >
                <ShieldCheck size={13} color="#C5A880" /> Admin Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '74px'
            }}
          >
            {/* Logo */}
            <div
              onClick={() => handleNavClick('home')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  background: 'var(--gold-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-gold)',
                  color: '#FFFFFF'
                }}
              >
                <Hotel size={22} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-brand)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#121820',
                    lineHeight: 1.1
                  }}
                >
                  WELCOME
                </div>
                <div
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.28em',
                    color: 'var(--gold-600)',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}
                >
                  HOTEL & SUITES
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.6rem'
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    fontWeight: activePage === link.id ? 600 : 400,
                    color: activePage === link.id ? 'var(--gold-700)' : 'var(--text-primary)',
                    fontSize: '0.92rem',
                    position: 'relative',
                    padding: '0.4rem 0'
                  }}
                >
                  {link.label}
                  {activePage === link.id && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--gold-500)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              {/* User Account / Login Button */}
              {currentUser ? (
                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="btn btn-secondary btn-sm"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      borderColor: 'var(--gold-400)'
                    }}
                  >
                    <User size={15} color="var(--gold-600)" />
                    <span style={{ maxWidth: '110px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {currentUser.name.split(' ')[0]}
                    </span>
                  </button>

                  {userDropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: '110%',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-lg)',
                        border: '1px solid var(--border-light)',
                        minWidth: '180px',
                        padding: '0.5rem',
                        zIndex: 1000
                      }}
                    >
                      <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--border-light)' }}>
                        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {currentUser.name}
                        </p>
                        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          {currentUser.email}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          navigateTo(currentUser.role === 'admin' ? 'admin' : 'guest-account');
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.55rem 0.75rem',
                          fontSize: '0.85rem',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        {currentUser.role === 'admin' ? <ShieldCheck size={14} /> : <Calendar size={14} />}
                        {currentUser.role === 'admin' ? 'Admin Dashboard' : 'My Bookings'}
                      </button>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          logout();
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.55rem 0.75rem',
                          fontSize: '0.85rem',
                          color: 'var(--danger)',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <X size={14} /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={onOpenAuth}
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <User size={15} /> Guest Login
                </button>
              )}

              {/* Primary Book CTA */}
              <button
                onClick={() => startBookingFlow()}
                className="btn btn-primary btn-sm"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontWeight: 600
                }}
              >
                <Calendar size={15} /> Book Your Stay
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-toggle"
                style={{
                  display: 'none',
                  padding: '0.45rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)'
                }}
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(18, 24, 32, 0.7)',
            backdropFilter: 'blur(10px)',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: '290px',
              height: '100%',
              backgroundColor: '#FFFFFF',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-xl)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      background: 'var(--gold-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFF'
                    }}
                  >
                    <Hotel size={18} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: '1.1rem' }}>
                    WELCOME HOTEL
                  </span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X size={22} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    style={{
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: activePage === link.id ? 'var(--gold-100)' : 'transparent',
                      color: activePage === link.id ? 'var(--gold-800)' : 'var(--text-primary)',
                      fontWeight: activePage === link.id ? 600 : 500,
                      fontSize: '1rem'
                    }}
                  >
                    {link.label}
                  </button>
                ))}

                <button
                  onClick={() => handleNavClick('admin')}
                  style={{
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: activePage === 'admin' ? '#121820' : 'transparent',
                    color: activePage === 'admin' ? '#DCC7A8' : 'var(--text-primary)',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <ShieldCheck size={16} color="var(--gold-600)" /> Admin Dashboard
                </button>
              </div>
            </div>

            <div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  startBookingFlow();
                }}
                className="btn btn-primary"
                style={{ width: '100%', marginBottom: '0.75rem' }}
              >
                <Calendar size={16} /> Book Your Stay
              </button>

              {currentUser ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                  }}
                  className="btn btn-secondary"
                  style={{ width: '100%', color: 'var(--danger)' }}
                >
                  Sign Out ({currentUser.name})
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth();
                  }}
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  <User size={16} /> Guest Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Style fix for responsive navbar */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
};
