// ==========================================================================
// WELCOME HOTEL - AUTHENTICATION & DEMO LOGIN MODAL
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { Hotel, X, Mail, Lock, User, Phone, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose, defaultTab = 'login' }) => {
  const { loginUser, registerUser, quickDemoLogin, navigateTo } = useHotel();
  const [tab, setTab] = useState(defaultTab); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (tab === 'login') {
      const res = loginUser(email, password);
      if (res.success) {
        onClose();
        if (res.user.role === 'admin') {
          navigateTo('admin');
        } else {
          navigateTo('guest-account');
        }
      } else {
        setError(res.message);
      }
    } else {
      if (!name || !email || !password) {
        setError('Please fill in all required fields.');
        return;
      }
      const res = registerUser({ name, email, password, phone });
      if (res.success) {
        onClose();
        navigateTo('guest-account');
      } else {
        setError(res.message);
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="card"
        style={{
          width: '100%',
          maxWidth: '460px',
          padding: '2.25rem',
          position: 'relative',
          backgroundColor: '#FFFFFF'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: 'var(--text-muted)'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'var(--gold-gradient)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              marginBottom: '0.75rem',
              boxShadow: 'var(--shadow-gold)'
            }}
          >
            <Hotel size={24} />
          </div>
          <h3 style={{ fontSize: '1.45rem', marginBottom: '0.25rem' }}>
            {tab === 'login' ? 'Sign In to Welcome Hotel' : 'Create Guest Account'}
          </h3>
          <p style={{ fontSize: '0.85rem' }}>
            {tab === 'login'
              ? 'Access your reservations, booking details, and special offers'
              : 'Join Welcome Hotel for expedited bookings and guest rewards'}
          </p>
        </div>

        {/* Quick Demo Switcher Buttons */}
        <div
          style={{
            backgroundColor: 'var(--gold-50)',
            border: '1px dashed var(--gold-400)',
            borderRadius: 'var(--radius-md)',
            padding: '0.85rem',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--gold-800)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={13} /> Instant Quick Demo Access:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <button
              onClick={() => {
                quickDemoLogin('guest');
                onClose();
              }}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--gold-300)',
                padding: '0.4rem 0.6rem',
                borderRadius: '4px',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem'
              }}
            >
              <User size={12} color="var(--gold-600)" /> Demo Guest
            </button>

            <button
              onClick={() => {
                quickDemoLogin('admin');
                onClose();
              }}
              style={{
                backgroundColor: '#121820',
                border: '1px solid #121820',
                padding: '0.4rem 0.6rem',
                borderRadius: '4px',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#DCC7A8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem'
              }}
            >
              <ShieldCheck size={12} color="var(--gold-400)" /> Demo Admin
            </button>
          </div>
        </div>

        {/* Tabs Switch */}
        <div
          style={{
            display: 'flex',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            padding: '4px',
            marginBottom: '1.5rem'
          }}
        >
          <button
            type="button"
            onClick={() => {
              setTab('login');
              setError('');
            }}
            style={{
              flex: 1,
              padding: '0.55rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: tab === 'login' ? '#FFFFFF' : 'transparent',
              color: tab === 'login' ? 'var(--text-primary)' : 'var(--text-secondary)',
              boxShadow: tab === 'login' ? 'var(--shadow-sm)' : 'none'
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setTab('register');
              setError('');
            }}
            style={{
              flex: 1,
              padding: '0.55rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: tab === 'register' ? '#FFFFFF' : 'transparent',
              color: tab === 'register' ? 'var(--text-primary)' : 'var(--text-secondary)',
              boxShadow: tab === 'register' ? 'var(--shadow-sm)' : 'none'
            }}
          >
            Register
          </button>
        </div>

        {error && (
          <div
            style={{
              backgroundColor: 'var(--danger-bg)',
              color: 'var(--danger)',
              padding: '0.65rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              marginBottom: '1rem'
            }}
          >
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {tab === 'register' && (
            <>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                    style={{ paddingLeft: '2.5rem' }}
                  />
                  <User
                    size={16}
                    color="var(--text-muted)"
                    style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="tel"
                    placeholder="e.g. +1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                    style={{ paddingLeft: '2.5rem' }}
                  />
                  <Phone
                    size={16}
                    color="var(--text-muted)"
                    style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
                  />
                </div>
              </div>
            </>
          )}

          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
              />
              <Mail
                size={16}
                color="var(--text-muted)"
                style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label className="form-label">Password *</label>
              {tab === 'login' && (
                <span
                  style={{ fontSize: '0.75rem', color: 'var(--gold-700)', cursor: 'pointer' }}
                  onClick={() => alert('For demo, please use email: guest@welcomehotel.com with password: password123, or use Quick Demo buttons above.')}
                >
                  Forgot Password?
                </span>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
              />
              <Lock
                size={16}
                color="var(--text-muted)"
                style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.75rem', fontSize: '0.95rem' }}
          >
            {tab === 'login' ? 'Sign In' : 'Create Account'} <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};
