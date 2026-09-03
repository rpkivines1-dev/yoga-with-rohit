// ==========================================================================
// WELCOME HOTEL - TOAST NOTIFICATION COMPONENT
// ==========================================================================

import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useHotel();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.65rem',
        maxWidth: '380px'
      }}
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isWarning = toast.type === 'warning';
        const isDanger = toast.type === 'danger';

        let borderColor = 'var(--gold-500)';
        let icon = <Info size={18} color="var(--gold-600)" />;

        if (isSuccess) {
          borderColor = 'var(--success)';
          icon = <CheckCircle2 size={18} color="var(--success)" />;
        } else if (isWarning) {
          borderColor = 'var(--warning)';
          icon = <AlertCircle size={18} color="var(--warning)" />;
        } else if (isDanger) {
          borderColor = 'var(--danger)';
          icon = <AlertCircle size={18} color="var(--danger)" />;
        }

        return (
          <div
            key={toast.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-xl)',
              borderLeft: `4px solid ${borderColor}`,
              borderTop: '1px solid var(--border-light)',
              borderRight: '1px solid var(--border-light)',
              borderBottom: '1px solid var(--border-light)',
              padding: '0.85rem 1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.85rem',
              animation: 'fadeIn 0.2s ease forwards'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              {icon}
              <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                {toast.message}
              </span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
            >
              <X size={15} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
