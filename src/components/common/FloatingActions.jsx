import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, Sun, Video } from 'lucide-react';
import { BRAND } from '../../data/yogaData';

export default function FloatingActions({ onOpenBooking, onOpenStudentPortal }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after 180px scroll
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial scroll in case user reloads scrolled down
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="floating-dock">
        {/* 1. My Classes / Student Live Portal */}
        <button
          onClick={onOpenStudentPortal}
          className="floating-btn floating-classes-btn"
          title="Access My Classes & Live Zoom Portal"
        >
          <Video size={16} />
          <span className="btn-label-desktop">My Classes</span>
          <span className="btn-label-mobile">Classes</span>
        </button>

        {/* 2. Sunday Free Community Class */}
        <button
          onClick={() => onOpenBooking({ plan: 'sunday-free', title: 'Sunday Free Community Yoga (7:30 AM EST)', batch: '7:30 AM EST' })}
          className="floating-btn floating-sunday-btn"
          title="Book Sunday Free Community Class (7:30 AM EST)"
        >
          <Sun size={16} />
          <span className="btn-label-desktop">Sunday Free</span>
          <span className="btn-label-mobile">Sunday</span>
        </button>

        {/* 3. Book Free Demo */}
        <button
          onClick={() => onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' })}
          className="floating-btn floating-demo-btn"
          title="Register for Free Demo Class ($0)"
        >
          <Sparkles size={16} />
          <span className="btn-label-desktop">Book Demo</span>
          <span className="btn-label-mobile">Demo</span>
        </button>

        {/* 4. Integrated WhatsApp Button */}
        <a
          href={BRAND.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-whatsapp-btn"
          title="Chat with Rohit on WhatsApp"
          aria-label="Chat with Rohit on WhatsApp"
        >
          <MessageCircle size={16} />
          <span className="btn-label-desktop">WhatsApp</span>
          <span className="btn-label-mobile">WhatsApp</span>
        </a>
      </div>

      <style>{`
        .floating-dock {
          position: fixed;
          bottom: 20px;
          bottom: calc(16px + env(safe-area-inset-bottom, 0px));
          left: 50%;
          transform: translateX(-50%);
          z-index: 850;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(28, 16, 9, 0.94);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          padding: 7px 12px;
          border-radius: 9999px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(245, 158, 11, 0.28);
          animation: floatingSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
          max-width: 96vw;
        }

        .floating-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 14px;
          font-size: 12.5px;
          font-weight: 800;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          white-space: nowrap;
          box-sizing: border-box;
          flex-shrink: 0;
        }

        .floating-btn:hover {
          transform: translateY(-2px);
        }

        .floating-classes-btn {
          background-color: #FFFFFF;
          color: var(--primary-dark);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .floating-classes-btn svg {
          color: var(--primary);
        }

        .floating-sunday-btn {
          background: linear-gradient(135deg, #D97706, #B45309);
          color: #FFFFFF;
          box-shadow: 0 4px 14px rgba(217, 119, 6, 0.35);
        }
        .floating-sunday-btn svg {
          color: #FEF3C7;
        }

        .floating-demo-btn {
          background: linear-gradient(135deg, #C25E1A, #A3480E);
          color: #FFFFFF;
          box-shadow: 0 4px 14px rgba(194, 94, 26, 0.4);
        }
        .floating-demo-btn svg {
          color: #FDE68A;
        }

        .floating-whatsapp-btn {
          background-color: #25D366;
          color: #FFFFFF;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4);
        }
        .floating-whatsapp-btn:hover {
          background-color: #20BA5A;
        }

        .btn-label-mobile {
          display: none;
        }
        .btn-label-desktop {
          display: inline;
        }

        @keyframes floatingSlideUp {
          from {
            transform: translate(-50%, 24px);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }

        /* Mobile Screen Optimization */
        @media (max-width: 580px) {
          .floating-dock {
            width: calc(100% - 16px) !important;
            max-width: 440px !important;
            padding: 6px 6px !important;
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 4px !important;
            border-radius: 20px !important;
            bottom: calc(10px + env(safe-area-inset-bottom, 0px)) !important;
          }

          .floating-btn {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 7px 2px !important;
            font-size: 10px !important;
            font-weight: 800 !important;
            gap: 3px !important;
            border-radius: 14px !important;
            min-height: 44px !important;
            width: 100% !important;
          }

          .floating-btn svg {
            width: 16px !important;
            height: 16px !important;
          }

          .btn-label-desktop {
            display: none !important;
          }
          .btn-label-mobile {
            display: inline !important;
            line-height: 1 !important;
          }
        }
      `}</style>
    </>
  );
}
