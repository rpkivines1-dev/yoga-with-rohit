import React, { useState, useEffect } from 'react';
import { Video, Clock, ShieldCheck, AlertCircle, Sparkles, CheckCircle2, Lock, ExternalLink, X, MessageSquare, Volume2, Mic, MicOff, VideoOff } from 'lucide-react';
import { ClassSchedulingService } from '../../services/classSchedulingService';

export default function JoinClassGatekeeper({ booking, onOpenClassroomSimulator }) {
  const [authStatus, setAuthStatus] = useState({ canJoin: false });
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Evaluate authorization and update countdown timer every second
  useEffect(() => {
    const evaluate = () => {
      const result = ClassSchedulingService.checkJoinAuthorization({ booking });
      setAuthStatus(result);
      if (result.secondsUntilOpen) {
        setCountdownSeconds(result.secondsUntilOpen);
      }
    };

    evaluate();
    const interval = setInterval(evaluate, 1000);
    return () => clearInterval(interval);
  }, [booking]);

  const formatCountdown = (totalSec) => {
    if (totalSec <= 0) return '00:00';
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleJoinClick = () => {
    if (!authStatus.canJoin) {
      alert(authStatus.reason || 'Class joining is not available at this moment.');
      return;
    }
    setIsJoinModalOpen(true);
  };

  const launchMeeting = (target) => {
    setIsJoinModalOpen(false);
    if (target === 'direct' && authStatus.joinUrl) {
      window.open(authStatus.joinUrl, '_blank', 'noopener,noreferrer');
    } else if (onOpenClassroomSimulator) {
      onOpenClassroomSimulator(booking);
    }
  };

  // 1. If Booking Cancelled
  if (booking.status === 'Cancelled') {
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '10px', backgroundColor: '#FEE2E2', color: '#DC2626', fontSize: '12px', fontWeight: 700 }}>
        <AlertCircle size={14} />
        <span>Class Cancelled</span>
      </div>
    );
  }

  // 2. If Booking Pending Payment or Approval
  if (booking.status !== 'Confirmed') {
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '10px', backgroundColor: '#FEF3C7', color: '#B45309', fontSize: '12px', fontWeight: 700 }}>
        <Lock size={14} />
        <span>Status: {booking.status}</span>
      </div>
    );
  }

  // 3. If Upcoming (Before the 15-Minute Window)
  if (authStatus.isUpcoming) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
        <button
          disabled
          className="btn btn-sm"
          style={{
            backgroundColor: '#EAE5DB',
            color: '#786B61',
            cursor: 'not-allowed',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            padding: '7px 14px',
            border: '1px solid rgba(194, 94, 26, 0.15)',
            opacity: 0.9,
          }}
        >
          <Clock size={13} />
          <span>Available Soon</span>
        </button>
        <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700 }}>
          Opens in {formatCountdown(countdownSeconds)} (15m before class)
        </span>
      </div>
    );
  }

  // 4. If Ended
  if (authStatus.isEnded) {
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '10px', backgroundColor: '#F3F4F6', color: '#6B7280', fontSize: '12px', fontWeight: 600 }}>
        <CheckCircle2 size={14} />
        <span>Session Completed</span>
      </div>
    );
  }

  // 5. ACTIVE: Inside Joining Window (15 mins prior to end)
  return (
    <>
      <button
        onClick={handleJoinClick}
        className="btn btn-primary btn-sm animate-pulse-glow"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 18px',
          fontSize: '13px',
          fontWeight: 800,
          boxShadow: '0 8px 24px -4px rgba(194, 94, 26, 0.5)',
          background: 'linear-gradient(135deg, #C25E1A 0%, #D97706 100%)',
        }}
      >
        <Video size={16} style={{ color: '#FDE68A' }} />
        <span>JOIN LIVE CLASS</span>
      </button>

      {/* Secure Meeting Launcher Modal */}
      {isJoinModalOpen && (
        <div className="modal-overlay active" onClick={() => setIsJoinModalOpen(false)}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '520px',
              padding: '30px 24px',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Close */}
            <button
              onClick={() => setIsJoinModalOpen(false)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-sand)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                backgroundColor: booking.platform === 'Google Meet' ? '#00897B' : '#2D8CFF',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px',
                boxShadow: '0 8px 20px rgba(45, 140, 255, 0.3)',
              }}
            >
              <Video size={28} />
            </div>

            <span className="badge badge-accent" style={{ marginBottom: '8px' }}>
              {booking.platform} Live Session Verified
            </span>

            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-dark)', margin: '0 0 6px' }}>
              {booking.programName}
            </h3>

            <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 18px' }}>
              Instructor: <strong>Rohit (Rishikesh, India)</strong> • Batch: <strong>{booking.batch}</strong>
            </p>

            {/* Meeting Access Info Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-sand)',
                borderRadius: '16px',
                padding: '14px 18px',
                marginBottom: '20px',
                textAlign: 'left',
                border: '1px solid rgba(194, 94, 26, 0.15)',
                fontSize: '12.5px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Platform:</span>
                <strong style={{ color: 'var(--text-main)' }}>{booking.platform}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Meeting ID:</span>
                <code style={{ backgroundColor: '#FFF', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                  {booking.meetingId || 'Auto Protected'}
                </code>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Passcode:</span>
                <code style={{ backgroundColor: '#FFF', padding: '2px 6px', borderRadius: '4px', fontWeight: 700, color: 'var(--primary)' }}>
                  {booking.passcode || 'ROHIT2026'}
                </code>
              </div>
            </div>

            {/* Action Launch Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => launchMeeting('direct')}
                className="btn btn-primary w-full"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px',
                  backgroundColor: booking.platform === 'Google Meet' ? '#00897B' : '#2D8CFF',
                }}
              >
                <ExternalLink size={16} />
                <span>Launch {booking.platform} Directly</span>
              </button>

              <button
                onClick={() => launchMeeting('simulator')}
                className="btn btn-outline w-full"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '11px',
                  borderColor: 'var(--primary)',
                  color: 'var(--primary-dark)',
                }}
              >
                <Video size={16} />
                <span>Open in Web Interactive Classroom</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
