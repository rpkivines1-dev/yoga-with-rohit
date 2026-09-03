import React, { useState } from 'react';
import { User, Mail, Phone, Globe, ShieldCheck, CreditCard, Bell, LogOut, PhoneCall, MessageCircle, Sparkles, Edit2, Check, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../../components/common/Icons';
import { useMobileAuth } from '../context/MobileAuthContext';
import { useMobileClasses } from '../context/MobileClassContext';
import { BRAND, COUNTRIES_LIST, TIMEZONE_OPTIONS } from '../../data/yogaData';

export default function ProfileScreen({ onNavigate }) {
  const { currentUser, logout, updateProfile, switchRole, isAdmin } = useMobileAuth();
  const { payments } = useMobileClasses();
  const [isEditing, setIsEditing] = useState(false);
  const [showPaymentsModal, setShowPaymentsModal] = useState(false);

  const [editForm, setEditForm] = useState({
    name: currentUser?.name || '',
    phone: currentUser?.phone || '',
    country: currentUser?.country || 'United States',
    timezone: currentUser?.timezone || 'EST',
  });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile(editForm);
    setIsEditing(false);
  };

  return (
    <div style={{ padding: '16px 16px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Top Profile Summary Card */}
      <div
        className="mobile-card"
        style={{
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          position: 'relative',
        }}
      >
        <img
          src={currentUser?.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'}
          alt="Avatar"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--primary)',
            flexShrink: 0,
          }}
        />

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              {currentUser?.name}
            </h3>
            {isAdmin && (
              <span style={{ fontSize: '10px', backgroundColor: 'var(--accent)', color: '#FFF', padding: '2px 6px', borderRadius: '6px', fontWeight: 800 }}>
                ADMIN
              </span>
            )}
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
            {currentUser?.email}
          </p>
          <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700 }}>
            {currentUser?.country} • {currentUser?.timezone} Timezone
          </span>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-sand)',
            border: '1px solid rgba(194, 94, 26, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
            cursor: 'pointer',
          }}
        >
          <Edit2 size={15} />
        </button>
      </div>

      {/* Edit Profile Form */}
      {isEditing && (
        <form onSubmit={handleSaveProfile} className="mobile-card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '4px' }}>
            Edit Profile Details
          </div>

          <div>
            <label className="form-label" style={{ fontSize: '11.5px' }}>Full Name</label>
            <input
              type="text"
              className="form-input"
              value={editForm.name}
              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              style={{ fontSize: '13px' }}
            />
          </div>

          <div>
            <label className="form-label" style={{ fontSize: '11.5px' }}>Phone / WhatsApp</label>
            <input
              type="text"
              className="form-input"
              value={editForm.phone}
              onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
              style={{ fontSize: '13px' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div>
              <label className="form-label" style={{ fontSize: '11.5px' }}>Country</label>
              <select
                className="form-select"
                value={editForm.country}
                onChange={(e) => setEditForm({ ...editForm, country: e.target.value })}
                style={{ fontSize: '12px' }}
              >
                {COUNTRIES_LIST.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label" style={{ fontSize: '11.5px' }}>Timezone</label>
              <select
                className="form-select"
                value={editForm.timezone}
                onChange={(e) => setEditForm({ ...editForm, timezone: e.target.value })}
                style={{ fontSize: '12px' }}
              >
                {TIMEZONE_OPTIONS.map((t) => <option key={t.code} value={t.code}>{t.code}</option>)}
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
            <button type="button" onClick={() => setIsEditing(false)} className="btn btn-outline btn-sm w-full">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary btn-sm w-full">
              Save Changes
            </button>
          </div>
        </form>
      )}

      {/* Active Package Status Card */}
      <div
        className="mobile-card"
        style={{
          padding: '16px',
          background: 'linear-gradient(135deg, #FAF6F0 0%, #F4EBE1 100%)',
          border: '1.5px solid var(--primary)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.06em' }}>
            Active Membership
          </span>
          <span className="badge badge-primary" style={{ fontSize: '10.5px' }}>
            Active
          </span>
        </div>

        <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 4px' }}>
          {currentUser?.activePackage?.name || 'Monthly Yoga Package ($50/mo - 12 Classes)'}
        </h4>

        <div style={{ fontSize: '12px', color: 'var(--primary-dark)', fontWeight: 800, margin: '4px 0' }}>
          Classes Remaining: 12 / 12 Classes (Mon, Wed, Fri)
        </div>

        <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
          <span>Program: <strong>Traditional Hatha Yoga</strong></span>
          <span>Batch: <strong>6:30 AM EST</strong></span>
        </div>
      </div>

      {/* Account Navigation List */}
      <div className="mobile-card" style={{ padding: '8px 12px', display: 'flex', flexDirection: 'column' }}>
        {/* Payment History */}
        <div
          onClick={() => setShowPaymentsModal(true)}
          style={{
            padding: '12px 6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CreditCard size={18} style={{ color: 'var(--primary)' }} />
            <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-main)' }}>Payment History & Invoices</span>
          </div>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{payments.length}</span>
        </div>

        {/* Push Notifications */}
        <div
          onClick={() => onNavigate('notifications')}
          style={{
            padding: '12px 6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Bell size={18} style={{ color: 'var(--accent)' }} />
            <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-main)' }}>Notification Center</span>
          </div>
        </div>
      </div>

      {/* Contact & Support Section */}
      <div className="mobile-card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)' }}>
          Contact & Direct Support
        </div>

        <a
          href={`tel:${BRAND.phone}`}
          className="btn btn-outline btn-sm w-full"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
        >
          <PhoneCall size={15} />
          <span>Call Now: {BRAND.phone}</span>
        </a>

        <a
          href={BRAND.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm w-full"
          style={{ backgroundColor: '#25D366', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
        >
          <MessageCircle size={15} />
          <span>Chat on WhatsApp (+91 8077570122)</span>
        </a>

        <a
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm w-full"
          style={{ background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
        >
          <InstagramIcon size={15} />
          <span>Follow Yoga With Rohit on Instagram</span>
        </a>
      </div>

      {/* Role Switcher & Logout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button
          onClick={() => switchRole(isAdmin ? 'student' : 'admin')}
          style={{
            padding: '10px',
            borderRadius: '12px',
            backgroundColor: 'var(--bg-sand)',
            border: '1px solid rgba(194, 94, 26, 0.2)',
            fontSize: '12.5px',
            fontWeight: 800,
            color: 'var(--primary-dark)',
            cursor: 'pointer',
          }}
        >
          {isAdmin ? 'Switch to Student View 🧘' : 'Switch to Admin Portal 👑'}
        </button>

        <button
          onClick={logout}
          style={{
            padding: '10px',
            borderRadius: '12px',
            backgroundColor: 'transparent',
            border: '1px solid #EF4444',
            fontSize: '12.5px',
            fontWeight: 800,
            color: '#EF4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            cursor: 'pointer',
          }}
        >
          <LogOut size={15} />
          <span>Log Out</span>
        </button>
      </div>

      {/* Payment History Lightbox Modal */}
      {showPaymentsModal && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(35, 22, 13, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            zIndex: 200,
          }}
        >
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '20px', width: '100%', maxHeight: '80%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                Payment History
              </h4>
              <button
                onClick={() => setShowPaymentsModal(false)}
                style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                Close
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {payments.map((p) => (
                <div key={p.id} style={{ padding: '10px', borderRadius: '12px', backgroundColor: 'var(--bg-sand)', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 800 }}>
                    <span>{p.packageName}</span>
                    <span style={{ color: 'var(--primary-dark)' }}>${p.amount} {p.currency}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    <span>{p.date} • {p.provider}</span>
                    <span style={{ color: '#16A34A', fontWeight: 700 }}>✓ {p.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
