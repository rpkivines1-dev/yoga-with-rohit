import React from 'react';
import { Bell, Check, Trash2, Calendar, CreditCard, Sparkles, ArrowLeft } from 'lucide-react';
import { useMobileClasses } from '../context/MobileClassContext';

export default function NotificationsScreen({ onBack }) {
  const { notifications, markNotificationAsRead, clearAllNotifications } = useMobileClasses();

  return (
    <div style={{ padding: '16px 16px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Top Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={onBack}
          style={{ background: 'none', border: 'none', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
          Notifications
        </h3>

        {notifications.length > 0 ? (
          <button
            onClick={clearAllNotifications}
            style={{ background: 'none', border: 'none', color: '#EF4444', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
          >
            Clear All
          </button>
        ) : <div style={{ width: '40px' }} />}
      </div>

      {/* Notifications List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => markNotificationAsRead(notif.id)}
              className="mobile-card"
              style={{
                padding: '14px 16px',
                borderLeft: notif.read ? '1px solid rgba(194, 94, 26, 0.12)' : '4px solid var(--primary)',
                backgroundColor: notif.read ? '#FFFFFF' : 'var(--primary-50)',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)' }}>
                  {notif.title}
                </span>
                <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>
                  {notif.date}
                </span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                {notif.message}
              </p>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
            <Bell size={32} style={{ color: 'var(--primary)', opacity: 0.4, margin: '0 auto 10px' }} />
            <p style={{ fontSize: '14px', margin: 0 }}>No new notifications at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
}
