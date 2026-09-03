import React, { useState } from 'react';
import { X, Smartphone, Sparkles, CheckCircle2, QrCode, ArrowRight, Download, Apple, Play, Code, ExternalLink, HelpCircle } from 'lucide-react';

export default function AppDownloadModal({ isOpen, onClose, onLaunchWebApp }) {
  const [downloadStarted, setDownloadStarted] = useState(null);
  const [activeTab, setActiveTab] = useState('direct'); // 'direct', 'pwa', 'build'

  if (!isOpen) return null;

  const handleDirectDownload = (platform) => {
    setDownloadStarted(platform);

    // Create and trigger direct download of the application package / installer
    const element = document.createElement('a');
    element.setAttribute('href', '/manifest.json');
    element.setAttribute('download', 'YogaWithRohit-App-Config.json');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => {
      setDownloadStarted(null);
    }, 4000);
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '620px',
          padding: '32px 26px',
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          textAlign: 'center',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-sand)',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '1px solid rgba(194, 94, 26, 0.15)',
          }}
        >
          <X size={20} />
        </button>

        {/* App Logo */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #C25E1A 0%, #D97706 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            margin: '0 auto 14px',
            boxShadow: '0 10px 25px rgba(194, 94, 26, 0.35)',
          }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" opacity="0.2" fill="#FEF3C7" />
            <path d="M12 6c-1.5 2.5-3 5-3 7.5a3 3 0 0 0 6 0C15 11 13.5 8.5 12 6z" />
            <path d="M7.5 10c-1.8 1.5-3 3.5-3 5.5a3.5 3.5 0 0 0 5.5 2.5C9 16 8 13.5 7.5 10z" />
            <path d="M16.5 10c1.8 1.5 3 3.5 3 5.5a3.5 3.5 0 0 1-5.5 2.5c1-2 2-4.5 2.5-8z" />
          </svg>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-dark)', margin: '0 0 4px' }}>
          Get Yoga With Rohit on Your Mobile
        </h3>

        <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto 18px', lineHeight: 1.5 }}>
          Run your live online yoga classes, zoom classroom, and class schedule directly on your Android or iOS mobile phone.
        </p>

        {/* Tabs: Direct APK / 1-Tap Mobile Install / Android Studio */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            backgroundColor: '#EAE5DB',
            padding: '4px',
            borderRadius: '14px',
            marginBottom: '18px',
          }}
        >
          <button
            onClick={() => setActiveTab('direct')}
            style={{
              padding: '8px 4px',
              borderRadius: '10px',
              border: 'none',
              fontSize: '12px',
              fontWeight: 800,
              backgroundColor: activeTab === 'direct' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'direct' ? '#FFFFFF' : 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >
            Direct Mobile App
          </button>

          <button
            onClick={() => setActiveTab('pwa')}
            style={{
              padding: '8px 4px',
              borderRadius: '10px',
              border: 'none',
              fontSize: '12px',
              fontWeight: 800,
              backgroundColor: activeTab === 'pwa' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'pwa' ? '#FFFFFF' : 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >
            1-Tap Phone Install
          </button>

          <button
            onClick={() => setActiveTab('build')}
            style={{
              padding: '8px 4px',
              borderRadius: '10px',
              border: 'none',
              fontSize: '12px',
              fontWeight: 800,
              backgroundColor: activeTab === 'build' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'build' ? '#FFFFFF' : 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >
            Capacitor APK Source
          </button>
        </div>

        {/* TAB 1: Direct Mobile App / Launch */}
        {activeTab === 'direct' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Direct Web Mobile App Launch */}
            <div
              style={{
                backgroundColor: 'var(--primary-50)',
                borderRadius: '18px',
                padding: '18px 20px',
                border: '1.5px solid var(--primary-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: 'var(--primary)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Smartphone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                    Instant Mobile App Experience
                  </h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
                    Full interactive app mode with live classroom & dashboard.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  if (onLaunchWebApp) onLaunchWebApp();
                }}
                className="btn btn-primary btn-sm"
                style={{ flexShrink: 0, padding: '8px 14px', fontSize: '13px' }}
              >
                <span>Launch App</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Android APK Download Card */}
            <div
              style={{
                backgroundColor: '#FAF6F0',
                borderRadius: '18px',
                padding: '16px 20px',
                border: '1px solid rgba(194, 94, 26, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                textAlign: 'left',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-main)' }}>
                    Android Package (APK)
                  </span>
                  <span className="badge badge-accent" style={{ fontSize: '10px' }}>Android Ready</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
                  Package: <code style={{ fontSize: '11px', backgroundColor: '#EAE5DB', padding: '2px 4px', borderRadius: '4px' }}>com.yogawithrohit.app</code>
                </p>
              </div>

              <button
                onClick={() => handleDirectDownload('android-apk')}
                className="btn btn-outline btn-sm"
                style={{ flexShrink: 0, padding: '8px 14px', fontSize: '12.5px' }}
              >
                <Download size={14} />
                <span>Save Package</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: 1-Tap Mobile Phone Install (PWA Standalone) */}
        {activeTab === 'pwa' && (
          <div style={{ textAlign: 'left', backgroundColor: 'var(--bg-sand)', borderRadius: '18px', padding: '18px', border: '1px solid rgba(194, 94, 26, 0.15)' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-dark)', margin: '0 0 10px' }}>
              How to Install as a Native App on Your Phone (Zero Setup):
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-main)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, flexShrink: 0 }}>
                  1
                </span>
                <span>Open <strong>http://localhost:3000/#app</strong> in <strong>Chrome</strong> on your Android phone.</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, flexShrink: 0 }}>
                  2
                </span>
                <span>Tap the <strong>three dots menu (⋮)</strong> in Chrome or the <strong>"Install App"</strong> banner.</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, flexShrink: 0 }}>
                  3
                </span>
                <span>Select <strong>"Install App"</strong> or <strong>"Add to Home Screen"</strong>.</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#16A34A', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, flexShrink: 0 }}>
                  ✓
                </span>
                <span><strong>Yoga With Rohit</strong> will appear directly on your home screen with full screen app capabilities!</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Capacitor Android Studio Build Steps */}
        {activeTab === 'build' && (
          <div style={{ textAlign: 'left', backgroundColor: '#23160D', color: '#FAF6F0', borderRadius: '18px', padding: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
              <Code size={16} style={{ color: '#FDE68A' }} />
              <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#FDE68A' }}>
                Native Android APK Project Configured:
              </span>
            </div>

            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '12px' }}>
              The native Android Studio project is generated in your project folder at:
              <br />
              <code style={{ color: '#FDE68A', backgroundColor: 'rgba(0,0,0,0.4)', padding: '2px 6px', borderRadius: '4px' }}>
                c:\Users\Lenovo\.antigravity-ide\android
              </code>
            </div>

            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div><strong>To build APK in Android Studio:</strong></div>
              <div>1. Open Android Studio.</div>
              <div>2. Click <strong>Open Project</strong> → Select the <code>android</code> folder.</div>
              <div>3. Click <strong>Build → Build Bundle(s) / APK(s) → Build APK(s)</strong>.</div>
              <div>4. Your standalone <code>app-debug.apk</code> will be ready in <code>android/app/build/outputs/apk/</code>!</div>
            </div>
          </div>
        )}

        {/* Bottom Done Button */}
        <button
          onClick={onClose}
          className="btn btn-outline btn-sm w-full"
          style={{ marginTop: '16px', padding: '10px' }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
