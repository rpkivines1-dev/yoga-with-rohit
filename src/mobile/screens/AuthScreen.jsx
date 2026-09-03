import React, { useState } from 'react';
import { Sparkles, Mail, Lock, User, Phone, Globe, ArrowRight, CheckCircle2, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { useMobileAuth } from '../context/MobileAuthContext';
import { COUNTRIES_LIST, TIMEZONE_OPTIONS, BRAND } from '../../data/yogaData';

export default function AuthScreen({ onAuthSuccess }) {
  const { login, register } = useMobileAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const [loginForm, setLoginForm] = useState({
    email: 'sarah.jenkins@example.com',
    password: 'password123',
  });

  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    country: 'United States',
    timezone: 'EST',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      setErrorMessage('Please provide email and password.');
      return;
    }
    const res = login(loginForm.email, loginForm.password);
    if (res.success) {
      if (onAuthSuccess) onAuthSuccess();
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!registerForm.fullName || !registerForm.email || !registerForm.phone || !registerForm.password) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    const res = register(registerForm);
    if (res.success) {
      if (onAuthSuccess) onAuthSuccess();
    }
  };

  const quickLoginAs = (role) => {
    if (role === 'admin') {
      login('rohit@yogawithrohit.com', 'admin', 'admin');
    } else {
      login('sarah.jenkins@example.com', 'password', 'student');
    }
    if (onAuthSuccess) onAuthSuccess();
  };

  return (
    <div
      style={{
        flex: 1,
        minHeight: '100%',
        backgroundColor: '#FAF6F0',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 20px',
        overflowY: 'auto',
      }}
    >
      {/* Header Logo */}
      <div style={{ textAlign: 'center', marginBottom: '24px', marginTop: '8px' }}>
        <div
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '16px',
            backgroundColor: 'var(--primary)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px',
            boxShadow: '0 8px 20px rgba(194, 94, 26, 0.3)',
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" opacity="0.2" fill="#FEF3C7" />
            <path d="M12 6c-1.5 2.5-3 5-3 7.5a3 3 0 0 0 6 0C15 11 13.5 8.5 12 6z" />
            <path d="M7.5 10c-1.8 1.5-3 3.5-3 5.5a3.5 3.5 0 0 0 5.5 2.5C9 16 8 13.5 7.5 10z" />
            <path d="M16.5 10c1.8 1.5 3 3.5 3 5.5a3.5 3.5 0 0 1-5.5 2.5c1-2 2-4.5 2.5-8z" />
          </svg>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
          {BRAND.name}
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
          {isLogin ? 'Sign in to access your classes & schedule' : 'Create your account to start practicing'}
        </p>
      </div>

      {/* Tabs: Sign In / Create Account */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          backgroundColor: '#EAE5DB',
          padding: '4px',
          borderRadius: '14px',
          marginBottom: '20px',
        }}
      >
        <button
          onClick={() => { setIsLogin(true); setErrorMessage(''); }}
          style={{
            padding: '9px',
            borderRadius: '11px',
            border: 'none',
            fontSize: '13.5px',
            fontWeight: 800,
            backgroundColor: isLogin ? '#FFFFFF' : 'transparent',
            color: isLogin ? 'var(--primary-dark)' : 'var(--text-muted)',
            boxShadow: isLogin ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
            cursor: 'pointer',
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => { setIsLogin(false); setErrorMessage(''); }}
          style={{
            padding: '9px',
            borderRadius: '11px',
            border: 'none',
            fontSize: '13.5px',
            fontWeight: 800,
            backgroundColor: !isLogin ? '#FFFFFF' : 'transparent',
            color: !isLogin ? 'var(--primary-dark)' : 'var(--text-muted)',
            boxShadow: !isLogin ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
            cursor: 'pointer',
          }}
        >
          Register
        </button>
      </div>

      {errorMessage && (
        <div
          style={{
            padding: '10px 14px',
            backgroundColor: '#FEE2E2',
            color: '#B91C1C',
            fontSize: '12.5px',
            fontWeight: 600,
            borderRadius: '10px',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          {errorMessage}
        </div>
      )}

      {/* Login Form */}
      {isLogin ? (
        <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label className="form-label" style={{ fontSize: '13px' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                required
                className="form-input"
                style={{ paddingLeft: '38px', fontSize: '13.5px' }}
                placeholder="name@example.com"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              />
              <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label className="form-label" style={{ fontSize: '13px' }}>Password</label>
              <button
                type="button"
                onClick={() => setForgotModalOpen(true)}
                style={{ background: 'none', border: 'none', fontSize: '12px', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer' }}
              >
                Forgot?
              </button>
            </div>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="form-input"
                style={{ paddingLeft: '38px', paddingRight: '38px', fontSize: '13.5px' }}
                placeholder="Enter password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              />
              <Lock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            style={{ padding: '13px', fontSize: '14.5px', marginTop: '6px', borderRadius: '14px' }}
          >
            <span>Sign In to Yoga With Rohit</span>
            <ArrowRight size={16} />
          </button>
        </form>
      ) : (
        /* Registration Form */
        <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label className="form-label" style={{ fontSize: '12.5px' }}>Full Name *</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                required
                className="form-input"
                style={{ paddingLeft: '36px', fontSize: '13px', padding: '10px 12px 10px 36px' }}
                placeholder="e.g. Sarah Jenkins"
                value={registerForm.fullName}
                onChange={(e) => setRegisterForm({ ...registerForm, fullName: e.target.value })}
              />
              <User size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>

          <div>
            <label className="form-label" style={{ fontSize: '12.5px' }}>Email Address *</label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                required
                className="form-input"
                style={{ paddingLeft: '36px', fontSize: '13px', padding: '10px 12px 10px 36px' }}
                placeholder="sarah@example.com"
                value={registerForm.email}
                onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
              />
              <Mail size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>

          <div>
            <label className="form-label" style={{ fontSize: '12.5px' }}>Phone / WhatsApp *</label>
            <div style={{ position: 'relative' }}>
              <input
                type="tel"
                required
                className="form-input"
                style={{ paddingLeft: '36px', fontSize: '13px', padding: '10px 12px 10px 36px' }}
                placeholder="+1 (555) 234-5678"
                value={registerForm.phone}
                onChange={(e) => setRegisterForm({ ...registerForm, phone: e.target.value })}
              />
              <Phone size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label className="form-label" style={{ fontSize: '12px' }}>Country</label>
              <select
                className="form-select"
                style={{ fontSize: '12px', padding: '8px 10px' }}
                value={registerForm.country}
                onChange={(e) => setRegisterForm({ ...registerForm, country: e.target.value })}
              >
                {COUNTRIES_LIST.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="form-label" style={{ fontSize: '12px' }}>Timezone</label>
              <select
                className="form-select"
                style={{ fontSize: '12px', padding: '8px 10px' }}
                value={registerForm.timezone}
                onChange={(e) => setRegisterForm({ ...registerForm, timezone: e.target.value })}
              >
                {TIMEZONE_OPTIONS.map((t) => <option key={t.code} value={t.code}>{t.code}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="form-label" style={{ fontSize: '12.5px' }}>Create Password *</label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                required
                className="form-input"
                style={{ paddingLeft: '36px', fontSize: '13px', padding: '10px 12px 10px 36px' }}
                placeholder="At least 6 characters"
                value={registerForm.password}
                onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
              />
              <Lock size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            style={{ padding: '13px', fontSize: '14.5px', marginTop: '6px', borderRadius: '14px' }}
          >
            <span>Complete Registration</span>
            <ArrowRight size={16} />
          </button>
        </form>
      )}

      {/* 1-Tap Quick Demo Role Selector */}
      <div style={{ marginTop: 'auto', paddingTop: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
          Quick Demo Logins (1-Tap)
        </div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button
            onClick={() => quickLoginAs('student')}
            style={{
              padding: '6px 12px',
              borderRadius: '9999px',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(194, 94, 26, 0.2)',
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--primary-dark)',
              cursor: 'pointer',
            }}
          >
            🧘 Student Demo
          </button>
          <button
            onClick={() => quickLoginAs('admin')}
            style={{
              padding: '6px 12px',
              borderRadius: '9999px',
              backgroundColor: 'var(--accent-light)',
              border: '1px solid var(--accent)',
              fontSize: '12px',
              fontWeight: 800,
              color: 'var(--accent-hover)',
              cursor: 'pointer',
            }}
          >
            👑 Admin (Rohit) Demo
          </button>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(35, 22, 13, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 200,
          }}
        >
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '24px', width: '100%', maxWidth: '340px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary-dark)', margin: '0 0 8px' }}>
              Reset Password
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Enter your registered email to receive a password reset link.
            </p>
            {!resetEmailSent ? (
              <div>
                <input
                  type="email"
                  className="form-input"
                  placeholder="name@example.com"
                  defaultValue={loginForm.email}
                  style={{ marginBottom: '14px', fontSize: '13px' }}
                />
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => setForgotModalOpen(false)}
                    className="btn btn-outline btn-sm w-full"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setResetEmailSent(true)}
                    className="btn btn-primary btn-sm w-full"
                  >
                    Send Link
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ color: '#16A34A', fontSize: '13px', fontWeight: 700, marginBottom: '14px' }}>
                  ✓ Reset instructions sent to your email!
                </div>
                <button
                  onClick={() => { setForgotModalOpen(false); setResetEmailSent(false); }}
                  className="btn btn-primary btn-sm w-full"
                >
                  Back to Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
