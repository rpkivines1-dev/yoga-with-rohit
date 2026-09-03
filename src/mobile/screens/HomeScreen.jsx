import React from 'react';
import { Sparkles, Calendar, Clock, Video, Sun, Flame, ArrowRight, ShieldCheck, Star, Heart, Award, Bell } from 'lucide-react';
import { useMobileAuth } from '../context/MobileAuthContext';
import { useMobileClasses } from '../context/MobileClassContext';
import { BRAND, YOGA_PROGRAMS, SUNDAY_FREE_YOGA } from '../../data/yogaData';

export default function HomeScreen({ onNavigate, onSelectProgram, onOpenLiveRoom }) {
  const { currentUser, isAdmin } = useMobileAuth();
  const { bookings, notifications } = useMobileClasses();

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Find next upcoming confirmed class for current student
  const studentUpcomingBookings = bookings.filter((b) => b.status === 'Confirmed');
  const nextClass = studentUpcomingBookings[0];

  return (
    <div style={{ padding: '16px 16px 24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Top Welcome Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'}
            alt="User avatar"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--primary)',
            }}
          />
          <div>
            <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--text-muted)' }}>
              Namaste 🙏
            </div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-dark)', lineHeight: 1.2 }}>
              {currentUser ? currentUser.name.split(' ')[0] : 'Guest Practitioner'}
            </div>
          </div>
        </div>

        {/* Notifications Icon Button */}
        <button
          onClick={() => onNavigate('notifications')}
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(194, 94, 26, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-main)',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <Bell size={18} />
          {unreadCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '4px',
                right: '4px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#EF4444',
              }}
            />
          )}
        </button>
      </div>

      {/* Live / Next Upcoming Class Banner (If booked) */}
      {nextClass ? (
        <div
          style={{
            background: 'linear-gradient(135deg, #4A1D07 0%, #23160D 100%)',
            borderRadius: '22px',
            padding: '18px 16px',
            color: '#FFFFFF',
            boxShadow: '0 10px 24px rgba(69, 26, 3, 0.25)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                backgroundColor: 'rgba(245, 158, 11, 0.25)',
                color: '#FDE68A',
                padding: '3px 10px',
                borderRadius: '9999px',
                letterSpacing: '0.06em',
              }}
            >
              Next Live Class
            </span>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.75)' }}>
              {nextClass.date}
            </span>
          </div>

          <div>
            <h4 style={{ fontSize: '16.5px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 4px' }}>
              {nextClass.programName}
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#FDE68A', fontWeight: 700 }}>
              <Clock size={14} />
              <span>{nextClass.batch}</span>
              <span>•</span>
              <span>{nextClass.platform}</span>
            </div>
          </div>

          <button
            onClick={() => onOpenLiveRoom(nextClass)}
            className="btn btn-primary btn-sm w-full"
            style={{
              padding: '10px 14px',
              fontSize: '13px',
              borderRadius: '12px',
              boxShadow: '0 4px 14px rgba(194, 94, 26, 0.4)',
            }}
          >
            <Video size={15} />
            <span>JOIN LIVE CLASS</span>
          </button>
        </div>
      ) : (
        /* Welcome Banner with Free Demo CTA */
        <div
          style={{
            background: 'linear-gradient(135deg, #C25E1A 0%, #8C3E0B 100%)',
            borderRadius: '22px',
            padding: '18px 18px',
            color: '#FFFFFF',
            boxShadow: '0 10px 24px rgba(194, 94, 26, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Award size={14} style={{ color: '#FDE68A' }} />
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FDE68A' }}>
              Rishikesh Master Yoga
            </span>
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
            Begin with a Free Demo Class ($0)
          </h3>
          <p style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.88)', margin: 0 }}>
            Experience authentic live classes with Rohit. Morning & Evening batches available.
          </p>
          <button
            onClick={() => onNavigate('booking', { plan: 'demo', programId: 'traditional-hatha' })}
            style={{
              alignSelf: 'flex-start',
              marginTop: '4px',
              backgroundColor: '#FFFFFF',
              color: 'var(--primary-dark)',
              border: 'none',
              padding: '7px 16px',
              borderRadius: '9999px',
              fontSize: '12.5px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>Book Free Demo</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}

      {/* Quick Action 4-Grid */}
      <div>
        <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
          Quick Actions
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {/* Action 1: Book Free Demo */}
          <div
            onClick={() => onNavigate('booking', { plan: 'demo' })}
            className="quick-action-btn"
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', backgroundColor: 'var(--primary-50)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={18} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-main)' }}>Free Demo</span>
          </div>

          {/* Action 2: Book a Class */}
          <div
            onClick={() => onNavigate('booking', { plan: 'monthly' })}
            className="quick-action-btn"
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar size={18} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-main)' }}>Book Class</span>
          </div>

          {/* Action 3: View Schedule */}
          <div
            onClick={() => onNavigate('schedule')}
            className="quick-action-btn"
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', backgroundColor: '#EDE9FE', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={18} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-main)' }}>Schedule</span>
          </div>

          {/* Action 4: My Classes */}
          <div
            onClick={() => onNavigate('my-classes')}
            className="quick-action-btn"
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', backgroundColor: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Video size={18} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-main)' }}>My Classes</span>
          </div>
        </div>
      </div>

      {/* Featured Yoga Programs */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--text-main)' }}>
            Featured Yoga Programs
          </span>
          <button
            onClick={() => onNavigate('programs')}
            style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: '12.5px', fontWeight: 700, cursor: 'pointer' }}
          >
            View All
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Program 1: Traditional Hatha Yoga */}
          <div
            onClick={() => onSelectProgram('traditional-hatha')}
            className="mobile-card"
            style={{ padding: '16px', cursor: 'pointer', borderLeft: '4px solid var(--primary)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: 'var(--primary-50)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sun size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                    Traditional Hatha Yoga
                  </h4>
                  <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700 }}>
                    3 Morning Batches (EST)
                  </span>
                </div>
              </div>
              <span className="badge badge-primary" style={{ fontSize: '10.5px' }}>Morning</span>
            </div>

            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: '0 0 10px', lineHeight: 1.45 }}>
              Joint opening, gentle spinal alignment, dynamic Sun Salutations, and energizing pranayama.
            </p>

            {/* Batch Pills */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['6:30 AM EST', '7:45 AM EST', '9:00 AM EST'].map((time) => (
                <span
                  key={time}
                  style={{
                    backgroundColor: 'var(--bg-sand)',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                  }}
                >
                  {time}
                </span>
              ))}
            </div>
          </div>

          {/* Program 2: Ashtanga Vinyasa Primary Series */}
          <div
            onClick={() => onSelectProgram('ashtanga-vinyasa')}
            className="mobile-card"
            style={{ padding: '16px', cursor: 'pointer', borderLeft: '4px solid var(--accent)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: '#FEF3C7', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Flame size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                    Ashtanga Vinyasa Series
                  </h4>
                  <span style={{ fontSize: '11px', color: 'var(--accent-hover)', fontWeight: 700 }}>
                    3 Evening Batches (EST)
                  </span>
                </div>
              </div>
              <span className="badge badge-accent" style={{ fontSize: '10.5px' }}>Evening</span>
            </div>

            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: '0 0 10px', lineHeight: 1.45 }}>
              Dynamic breath-synchronized flow, core stamina, full-body strength, and evening de-stress.
            </p>

            {/* Batch Pills */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['7:30 PM EST', '8:45 PM EST', '10:00 PM EST'].map((time) => (
                <span
                  key={time}
                  style={{
                    backgroundColor: '#FEF3C7',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--accent-hover)',
                  }}
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sunday Free Community Yoga Banner */}
      <div
        onClick={() => onNavigate('booking', { plan: 'sunday-free', title: 'Sunday Free Community Yoga' })}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: '14px 16px',
          border: '1.5px solid #F59E0B',
          boxShadow: '0 4px 14px rgba(245, 158, 11, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Sun size={22} />
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#B45309' }}>
              100% Free Every Sunday
            </div>
            <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-main)' }}>
              Sunday Free Community Yoga
            </div>
          </div>
        </div>
        <ArrowRight size={16} style={{ color: 'var(--primary)' }} />
      </div>

      {/* Instructor Rohit Mini Trust Card */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: '14px 16px',
          border: '1px solid rgba(194, 94, 26, 0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <img
          src="/images/certificates/trophy-award-honor.jpg"
          alt="Rohit Award of Honor"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--primary)',
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)' }}>
              Rohit (Lead Instructor)
            </span>
            <div style={{ display: 'flex', color: '#F59E0B' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#F59E0B" />)}
            </div>
          </div>
          <p style={{ fontSize: '11.5px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
            500-Hr Yoga Alliance Certified • Rishikesh, India
          </p>
        </div>
      </div>
    </div>
  );
}
