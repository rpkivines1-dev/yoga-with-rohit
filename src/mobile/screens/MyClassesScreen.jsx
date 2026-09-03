import React, { useState } from 'react';
import { Video, Calendar, Clock, CheckCircle2, ArrowRight, ExternalLink, Sparkles, MapPin, Sun, Flame } from 'lucide-react';
import { useMobileClasses } from '../context/MobileClassContext';
import { useMobileAuth } from '../context/MobileAuthContext';

export default function MyClassesScreen({ onOpenLiveRoom, onBookNew }) {
  const { bookings } = useMobileClasses();
  const { currentUser } = useMobileAuth();
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' | 'completed'

  const upcomingClasses = bookings.filter((b) => b.status === 'Confirmed');
  const completedClasses = [
    {
      id: 'CMP-001',
      programName: 'Traditional Hatha Yoga',
      batch: '6:30 AM EST',
      date: '2026-08-30',
      instructor: 'Rohit',
      duration: '60 mins',
      status: 'Completed',
    },
    {
      id: 'CMP-002',
      programName: 'Ashtanga Vinyasa Primary Series',
      batch: '7:30 PM EST',
      date: '2026-08-28',
      instructor: 'Rohit',
      duration: '60 mins',
      status: 'Completed',
    },
  ];

  return (
    <div style={{ padding: '16px 16px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Top Segmented Tab */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          backgroundColor: '#EAE5DB',
          padding: '4px',
          borderRadius: '14px',
        }}
      >
        <button
          onClick={() => setActiveTab('upcoming')}
          style={{
            padding: '9px',
            borderRadius: '11px',
            border: 'none',
            fontSize: '12.5px',
            fontWeight: 800,
            backgroundColor: activeTab === 'upcoming' ? 'var(--primary)' : 'transparent',
            color: activeTab === 'upcoming' ? '#FFFFFF' : 'var(--text-muted)',
            cursor: 'pointer',
          }}
        >
          Upcoming ({upcomingClasses.length})
        </button>

        <button
          onClick={() => setActiveTab('completed')}
          style={{
            padding: '9px',
            borderRadius: '11px',
            border: 'none',
            fontSize: '12.5px',
            fontWeight: 800,
            backgroundColor: activeTab === 'completed' ? 'var(--primary)' : 'transparent',
            color: activeTab === 'completed' ? '#FFFFFF' : 'var(--text-muted)',
            cursor: 'pointer',
          }}
        >
          Completed ({completedClasses.length})
        </button>
      </div>

      {/* UPCOMING CLASSES */}
      {activeTab === 'upcoming' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {upcomingClasses.length > 0 ? (
            upcomingClasses.map((item) => {
              const isHatha = item.programId === 'traditional-hatha' || item.programName.includes('Hatha');

              return (
                <div
                  key={item.id}
                  className="mobile-card"
                  style={{
                    padding: '18px',
                    borderLeft: `4px solid ${isHatha ? 'var(--primary)' : 'var(--accent)'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          backgroundColor: isHatha ? 'var(--primary-50)' : '#FEF3C7',
                          color: isHatha ? 'var(--primary)' : 'var(--accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {isHatha ? <Sun size={18} /> : <Flame size={18} />}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                          {item.programName}
                        </h4>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                          Booking: {item.id} • {item.packageType.split('(')[0]}
                        </span>
                      </div>
                    </div>

                    <span className="badge badge-accent" style={{ fontSize: '10px' }}>
                      {item.status}
                    </span>
                  </div>

                  {/* Timing & Date Details */}
                  <div
                    style={{
                      padding: '12px',
                      backgroundColor: 'var(--bg-sand)',
                      borderRadius: '14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: 'var(--primary-dark)', fontWeight: 800 }}>
                      <Clock size={15} />
                      <span>{item.batch}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700 }}>
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Meeting Room Credentials */}
                  <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Platform: <strong>{item.platform}</strong></span>
                    <span>Passcode: <strong>{item.passcode}</strong></span>
                  </div>

                  {/* Join Live Class Primary Button */}
                  <button
                    onClick={() => onOpenLiveRoom(item)}
                    className="btn btn-primary w-full"
                    style={{ padding: '12px', fontSize: '13.5px', borderRadius: '12px' }}
                  >
                    <Video size={16} />
                    <span>JOIN LIVE CLASS</span>
                  </button>
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', padding: '36px 20px' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                You have no upcoming live classes booked.
              </p>
              <button onClick={onBookNew} className="btn btn-primary btn-sm" style={{ marginTop: '8px' }}>
                Book a Class Now
              </button>
            </div>
          )}
        </div>
      ) : (
        /* COMPLETED CLASSES */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {completedClasses.map((item) => (
            <div key={item.id} className="mobile-card" style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-main)' }}>
                  {item.programName}
                </span>
                <span style={{ fontSize: '11px', color: '#16A34A', fontWeight: 700 }}>
                  ✓ Attended
                </span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {item.date} • {item.batch} • Guided by {item.instructor}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
