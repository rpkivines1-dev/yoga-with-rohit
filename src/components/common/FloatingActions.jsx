import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, Phone, Sun, Video } from 'lucide-react';
import { BRAND } from '../../data/yogaData';

export default function FloatingActions({ onOpenBooking, onOpenStudentPortal }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 850,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: 'rgba(35, 22, 13, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '8px 12px',
        borderRadius: '9999px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
        border: '1.5px solid rgba(245, 158, 11, 0.35)',
        animation: 'slideUp 0.3s ease',
        maxWidth: '94vw',
      }}
      className="floating-dock"
    >
      {/* My Classes / Live Portal */}
      <button
        onClick={onOpenStudentPortal}
        className="btn btn-sm"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '7px 12px',
          fontSize: '12px',
          fontWeight: 800,
          backgroundColor: '#FFFFFF',
          color: 'var(--primary-dark)',
          border: 'none',
        }}
      >
        <Video size={13} style={{ color: 'var(--primary)' }} />
        <span>My Classes</span>
      </button>

      {/* Sunday Free Class Button */}
      <button
        onClick={() => onOpenBooking({ plan: 'sunday-free', title: 'Sunday Free Community Yoga (7:30 AM EST)', batch: '7:30 AM EST' })}
        className="btn btn-accent btn-sm"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '7px 12px',
          fontSize: '12px',
          fontWeight: 800,
        }}
      >
        <Sun size={13} />
        <span>Sunday Free</span>
      </button>

      {/* Book Demo Button */}
      <button
        onClick={() => onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' })}
        className="btn btn-primary btn-sm"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '7px 12px',
          fontSize: '12px',
          fontWeight: 800,
        }}
      >
        <Sparkles size={13} style={{ color: '#FDE68A' }} />
        <span>Book Demo</span>
      </button>

      {/* WhatsApp Button */}
      <a
        href={BRAND.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
        style={{
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
          flexShrink: 0,
        }}
      >
        <MessageCircle size={16} />
      </a>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translate(-50%, 20px);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
