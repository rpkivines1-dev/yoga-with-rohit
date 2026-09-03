import React, { useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { BRAND } from '../../data/yogaData';

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2400);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      style={{
        flex: 1,
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        background: 'linear-gradient(160deg, #4A1D07 0%, #23160D 60%, #1A0F08 100%)',
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Background Sacred Glow */}
      <div
        style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Lotus App Icon */}
      <div
        style={{
          width: '96px',
          height: '96px',
          borderRadius: '28px',
          background: 'linear-gradient(135deg, #C25E1A 0%, #D97706 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          boxShadow: '0 16px 36px rgba(194, 94, 26, 0.45)',
          marginBottom: '28px',
          position: 'relative',
          animation: 'pulse 2s infinite ease-in-out',
        }}
      >
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" opacity="0.2" fill="#FEF3C7" />
          <path d="M12 6c-1.5 2.5-3 5-3 7.5a3 3 0 0 0 6 0C15 11 13.5 8.5 12 6z" />
          <path d="M7.5 10c-1.8 1.5-3 3.5-3 5.5a3.5 3.5 0 0 0 5.5 2.5C9 16 8 13.5 7.5 10z" />
          <path d="M16.5 10c1.8 1.5 3 3.5 3 5.5a3.5 3.5 0 0 1-5.5 2.5c1-2 2-4.5 2.5-8z" />
        </svg>
      </div>

      {/* App Title */}
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '28px',
          fontWeight: 800,
          letterSpacing: '0.04em',
          color: '#FFFFFF',
          marginBottom: '8px',
          textTransform: 'uppercase',
        }}
      >
        {BRAND.name}
      </h1>

      {/* Required Tagline */}
      <p
        style={{
          fontSize: '15px',
          color: '#FDE68A',
          fontWeight: 600,
          letterSpacing: '0.04em',
          marginBottom: '40px',
        }}
      >
        Transform Your Body, Mind & Soul
      </p>

      {/* Loading Indicator */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#C25E1A', animation: 'bounce 1s infinite 0.1s' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706', animation: 'bounce 1s infinite 0.2s' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FDE68A', animation: 'bounce 1s infinite 0.3s' }} />
      </div>

      {/* Direct Tap to Skip */}
      <button
        onClick={onFinish}
        style={{
          background: 'none',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '12px',
          fontWeight: 600,
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
      >
        Tap to continue
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
