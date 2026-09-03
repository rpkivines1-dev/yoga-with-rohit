import React, { useState } from 'react';
import { Users, Calendar, DollarSign, Video, Bell, Plus, Check, X, ShieldCheck, Sun, Flame, Clock, Send, Search } from 'lucide-react';
import { useMobileClasses } from '../context/MobileClassContext';
import { useMobileAuth } from '../context/MobileAuthContext';
import { YOGA_PROGRAMS } from '../../data/yogaData';

export default function AdminMobileScreen({ onExitAdmin }) {
  const { bookings, payments, updateBookingStatus, broadcastNotification } = useMobileClasses();
  const { switchRole } = useMobileAuth();
  const [adminTab, setAdminTab] = useState('overview'); // 'overview', 'bookings', 'students', 'broadcast'
  const [searchQuery, setSearchQuery] = useState('');

  // Broadcast state
  const [broadcastForm, setBroadcastForm] = useState({
    title: '',
    message: '',
    target: 'All Students',
  });
  const [broadcastSent, setBroadcastSent] = useState(false);

  // Computed Metrics
  const totalRevenue = payments.reduce((acc, p) => (p.status === 'Successful' ? acc + p.amount : acc), 0);
  const demoBookingsCount = bookings.filter((b) => b.packageType.includes('Free') || b.amount === 0).length;
  const monthlyMembersCount = bookings.filter((b) => b.packageType.includes('Monthly')).length;

  const handleSendBroadcast = (e) => {
    e.preventDefault();
    if (!broadcastForm.title || !broadcastForm.message) return;
    broadcastNotification(broadcastForm.title, broadcastForm.message, broadcastForm.target);
    setBroadcastSent(true);
    setTimeout(() => {
      setBroadcastSent(false);
      setBroadcastForm({ title: '', message: '', target: 'All Students' });
    }, 3000);
  };

  return (
    <div style={{ padding: '16px 16px 32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Admin Top Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '10.5px', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            👑 Instructor Admin Portal
          </span>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
            Yoga With Rohit Control
          </h3>
        </div>

        <button
          onClick={() => switchRole('student')}
          className="btn btn-outline btn-sm"
          style={{ fontSize: '11px', padding: '6px 10px' }}
        >
          Exit Admin
        </button>
      </div>

      {/* Admin Nav Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          backgroundColor: '#EAE5DB',
          padding: '4px',
          borderRadius: '14px',
        }}
      >
        {['overview', 'bookings', 'students', 'broadcast'].map((tab) => (
          <button
            key={tab}
            onClick={() => setAdminTab(tab)}
            style={{
              padding: '7px 4px',
              borderRadius: '10px',
              border: 'none',
              fontSize: '11px',
              fontWeight: 800,
              textTransform: 'capitalize',
              backgroundColor: adminTab === tab ? 'var(--primary)' : 'transparent',
              color: adminTab === tab ? '#FFFFFF' : 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 1. OVERVIEW DASHBOARD */}
      {adminTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Stats 4-Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div className="mobile-card" style={{ padding: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '4px' }}>
                <DollarSign size={16} />
                <span style={{ fontSize: '11px', fontWeight: 700 }}>Total Revenue</span>
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)' }}>
                ${totalRevenue}
              </div>
              <span style={{ fontSize: '10.5px', color: '#16A34A', fontWeight: 700 }}>Stripe & PayPal</span>
            </div>

            <div className="mobile-card" style={{ padding: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', marginBottom: '4px' }}>
                <Users size={16} />
                <span style={{ fontSize: '11px', fontWeight: 700 }}>Monthly Members</span>
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)' }}>
                {monthlyMembersCount}
              </div>
              <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>$50/mo (12 classes)</span>
            </div>

            <div className="mobile-card" style={{ padding: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7C3AED', marginBottom: '4px' }}>
                <Calendar size={16} />
                <span style={{ fontSize: '11px', fontWeight: 700 }}>Demo Bookings</span>
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)' }}>
                {demoBookingsCount}
              </div>
              <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>100% Free Demos</span>
            </div>

            <div className="mobile-card" style={{ padding: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#16A34A', marginBottom: '4px' }}>
                <Clock size={16} />
                <span style={{ fontSize: '11px', fontWeight: 700 }}>Daily Live Batches</span>
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)' }}>
                6 Batches
              </div>
              <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>3 Hatha + 3 Ashtanga</span>
            </div>
          </div>

          {/* Active Yoga Programs Summary */}
          <div className="mobile-card" style={{ padding: '16px' }}>
            <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
              Active Yoga Programs & Schedule Management
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Traditional Hatha */}
              <div style={{ padding: '10px', backgroundColor: 'var(--primary-50)', borderRadius: '12px', border: '1px solid var(--primary-100)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, fontSize: '13px', color: 'var(--primary-dark)' }}>
                  <Sun size={15} />
                  <span>Traditional Hatha Yoga (3 Morning Batches)</span>
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  6:30 AM EST • 7:45 AM EST • 9:00 AM EST (Status: Active)
                </div>
              </div>

              {/* Ashtanga Vinyasa */}
              <div style={{ padding: '10px', backgroundColor: '#FEF3C7', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, fontSize: '13px', color: 'var(--accent-hover)' }}>
                  <Flame size={15} />
                  <span>Ashtanga Vinyasa Primary Series (3 Evening Batches)</span>
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  7:30 PM EST • 8:45 PM EST • 10:00 PM EST (Status: Active)
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. BOOKINGS MANAGEMENT */}
      {adminTab === 'bookings' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)' }}>
            All Student Bookings ({bookings.length})
          </div>

          {bookings.map((b) => (
            <div key={b.id} className="mobile-card" style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                    {b.studentName}
                  </h4>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    {b.studentEmail} • {b.studentPhone}
                  </span>
                </div>
                <span className={`badge ${b.status === 'Confirmed' ? 'badge-primary' : 'badge-accent'}`} style={{ fontSize: '10px' }}>
                  {b.status}
                </span>
              </div>

              <div style={{ fontSize: '12.5px', color: 'var(--primary-dark)', fontWeight: 700 }}>
                {b.programName} • {b.batch} ({b.date})
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '8px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  {b.packageType.split('(')[0]} (${b.amount})
                </span>

                <div style={{ display: 'flex', gap: '6px' }}>
                  {b.status !== 'Confirmed' && (
                    <button
                      onClick={() => updateBookingStatus(b.id, 'Confirmed')}
                      style={{ backgroundColor: '#16A34A', color: '#FFF', border: 'none', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, cursor: 'pointer' }}
                    >
                      Approve
                    </button>
                  )}
                  {b.status !== 'Cancelled' && (
                    <button
                      onClick={() => updateBookingStatus(b.id, 'Cancelled')}
                      style={{ backgroundColor: '#EF4444', color: '#FFF', border: 'none', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, cursor: 'pointer' }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. STUDENTS MANAGEMENT */}
      {adminTab === 'students' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Search bar */}
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search students..."
              className="form-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '36px', fontSize: '13px' }}
            />
            <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>

          {[
            { name: 'Sarah Jenkins', email: 'sarah.jenkins@example.com', plan: 'Monthly ($50/mo - 12 Classes)', prog: 'Traditional Hatha', batch: '6:30 AM EST', status: 'Active' },
            { name: 'David Miller', email: 'david.miller@example.com', plan: 'Free Demo ($0)', prog: 'Traditional Hatha', batch: '7:45 AM EST', status: 'Active' },
            { name: 'Elena Rossi', email: 'elena.rossi@example.com', plan: 'Monthly ($50/mo - 12 Classes)', prog: 'Ashtanga Vinyasa', batch: '8:45 PM EST', status: 'Active' },
            { name: 'Marcus Tan', email: 'marcus.tan@example.com', plan: 'Daily Pass ($5)', prog: 'Ashtanga Vinyasa', batch: '7:30 PM EST', status: 'Active' },
          ]
            .filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.email.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((s, idx) => (
              <div key={idx} className="mobile-card" style={{ padding: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                    {s.name}
                  </h4>
                  <span style={{ fontSize: '11px', color: '#16A34A', fontWeight: 700 }}>
                    ● {s.status}
                  </span>
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                  {s.email}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--primary-dark)', fontWeight: 700, marginTop: '6px' }}>
                  {s.plan} • {s.prog} ({s.batch})
                </div>
              </div>
            ))}
        </div>
      )}

      {/* 4. BROADCAST NOTIFICATIONS */}
      {adminTab === 'broadcast' && (
        <form onSubmit={handleSendBroadcast} className="mobile-card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary-dark)' }}>
            Send Push Notification to Students
          </div>

          <div>
            <label className="form-label" style={{ fontSize: '12px' }}>Target Audience</label>
            <select
              className="form-select"
              value={broadcastForm.target}
              onChange={(e) => setBroadcastForm({ ...broadcastForm, target: e.target.value })}
              style={{ fontSize: '12.5px' }}
            >
              <option value="All Students">All Registered Students (Worldwide)</option>
              <option value="Traditional Hatha Students">Traditional Hatha Students (Morning)</option>
              <option value="Ashtanga Vinyasa Students">Ashtanga Vinyasa Students (Evening)</option>
              <option value="Sunday Free Yoga Participants">Sunday Free Yoga Participants</option>
            </select>
          </div>

          <div>
            <label className="form-label" style={{ fontSize: '12px' }}>Notification Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Special Pranayama Workshop this Sunday"
              className="form-input"
              value={broadcastForm.title}
              onChange={(e) => setBroadcastForm({ ...broadcastForm, title: e.target.value })}
              style={{ fontSize: '13px' }}
            />
          </div>

          <div>
            <label className="form-label" style={{ fontSize: '12px' }}>Message Body</label>
            <textarea
              required
              rows={3}
              placeholder="Enter announcement details..."
              className="form-input"
              value={broadcastForm.message}
              onChange={(e) => setBroadcastForm({ ...broadcastForm, message: e.target.value })}
              style={{ fontSize: '13px', resize: 'vertical' }}
            />
          </div>

          {broadcastSent && (
            <div style={{ color: '#16A34A', fontSize: '12.5px', fontWeight: 700, textAlign: 'center' }}>
              ✓ Notification broadcasted successfully!
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full"
            style={{ padding: '12px', fontSize: '13.5px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
          >
            <Send size={15} />
            <span>Broadcast Push Notification</span>
          </button>
        </form>
      )}
    </div>
  );
}
