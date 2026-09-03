import React, { useState, useEffect } from 'react';
import { Home, Compass, Clock, Video, User, Smartphone, Monitor, ChevronRight, ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react';
import { MobileAuthProvider, useMobileAuth } from './context/MobileAuthContext';
import { MobileClassProvider, useMobileClasses } from './context/MobileClassContext';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import ProgramsScreen from './screens/ProgramsScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import BookingFlowScreen from './screens/BookingFlowScreen';
import MyClassesScreen from './screens/MyClassesScreen';
import LiveClassRoomScreen from './screens/LiveClassRoomScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import AdminMobileScreen from './screens/AdminMobileScreen';
import './mobile.css';

function MobileAppContent({ onSwitchToWeb }) {
  const { currentUser, isAuthenticated, hasCompletedOnboarding, completeOnboarding, isAdmin } = useMobileAuth();
  const { bookings } = useMobileClasses();

  // Navigation State
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [navParams, setNavParams] = useState({});
  const [liveClassData, setLiveClassData] = useState(null);

  // Auto-detect mobile screen vs desktop: On real mobile phones (<= 768px), default to fullscreen native mode
  const [deviceType, setDeviceType] = useState(() => {
    return window.innerWidth <= 768 ? 'fullscreen' : 'iphone';
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && deviceType !== 'fullscreen') {
        setDeviceType('fullscreen');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [deviceType]);

  // Handle Splash Screen Completion
  const handleSplashFinish = () => {
    if (!hasCompletedOnboarding) {
      setCurrentScreen('onboarding');
    } else if (!isAuthenticated) {
      setCurrentScreen('auth');
    } else {
      setCurrentScreen('home');
    }
  };

  // Handle Onboarding Completion
  const handleOnboardingFinish = () => {
    completeOnboarding();
    if (!isAuthenticated) {
      setCurrentScreen('auth');
    } else {
      setCurrentScreen('home');
    }
  };

  // Navigation Helper
  const navigate = (screen, params = {}) => {
    setNavParams(params);
    setCurrentScreen(screen);
  };

  const openLiveRoom = (classData) => {
    setLiveClassData(classData);
    setCurrentScreen('live-room');
  };

  // Check current bottom tab
  const getActiveTab = () => {
    if (['home', 'programs', 'schedule', 'my-classes', 'profile'].includes(currentScreen)) {
      return currentScreen;
    }
    if (currentScreen === 'booking') return 'programs';
    if (currentScreen === 'live-room') return 'my-classes';
    if (currentScreen === 'notifications') return 'profile';
    return 'home';
  };

  const activeTab = getActiveTab();
  const showBottomNav = isAuthenticated && !['splash', 'onboarding', 'auth', 'live-room', 'admin'].includes(currentScreen);
  const isMobileScreen = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div className="mobile-app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header / Switcher Bar */}
      <div className="device-switcher-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#FDE68A' }}>
            📱 Yoga With Rohit App
          </span>
          <span style={{ fontSize: '10.5px', backgroundColor: 'rgba(255, 255, 255, 0.15)', padding: '2px 7px', borderRadius: '9999px' }}>
            Live
          </span>
        </div>

        {/* Controls: Device Frame selector on desktop + Switch to Web */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {!isMobileScreen && (
            <>
              <button
                onClick={() => setDeviceType('iphone')}
                style={{
                  backgroundColor: deviceType === 'iphone' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Smartphone size={13} />
                <span>iPhone</span>
              </button>

              <button
                onClick={() => setDeviceType('android')}
                style={{
                  backgroundColor: deviceType === 'android' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Smartphone size={13} />
                <span>Android</span>
              </button>
            </>
          )}

          {/* Switch to Full Website */}
          <button
            onClick={onSwitchToWeb}
            style={{
              backgroundColor: 'var(--accent)',
              color: '#FFFFFF',
              border: 'none',
              padding: '5px 12px',
              borderRadius: '6px',
              fontSize: '11.5px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Monitor size={13} />
            <span>Full Website</span>
          </button>
        </div>
      </div>

      {/* Main Container with chosen Phone Simulator Shell or Full Native View */}
      <div className={deviceType === 'fullscreen' ? 'fullscreen-mobile-container' : 'phone-simulator-container'}>
        <div
          className={
            deviceType === 'iphone'
              ? 'iphone-frame'
              : deviceType === 'android'
              ? 'android-frame'
              : 'fullscreen-mobile-container'
          }
        >
          {/* Inner Screen */}
          <div className={deviceType === 'iphone' ? 'iphone-screen' : deviceType === 'android' ? 'android-screen' : ''} style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            {/* Simulated Desktop Status Bar (Hidden on real mobile devices via CSS) */}
            {deviceType === 'iphone' && (
              <div className="ios-status-bar">
                <span>9:41</span>
                <div className="dynamic-island">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#C25E1A' }} />
                  <span style={{ fontSize: '9px', color: '#FDE68A', fontWeight: 800 }}>YWR</span>
                </div>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px' }}>5G</span>
                  <span>100%</span>
                </div>
              </div>
            )}

            {deviceType === 'android' && (
              <div className="android-status-bar">
                <span>09:41</span>
                <div className="camera-hole" />
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <span>LTE</span>
                  <span>100%</span>
                </div>
              </div>
            )}

            {/* Screen View Router */}
            <div className="mobile-screen-content" style={{ paddingBottom: showBottomNav ? '76px' : '0' }}>
              {/* 1. Splash Screen */}
              {currentScreen === 'splash' && (
                <SplashScreen onFinish={handleSplashFinish} />
              )}

              {/* 2. Onboarding Screen */}
              {currentScreen === 'onboarding' && (
                <OnboardingScreen onFinish={handleOnboardingFinish} />
              )}

              {/* 3. Authentication Screen */}
              {currentScreen === 'auth' && (
                <AuthScreen onAuthSuccess={() => setCurrentScreen('home')} />
              )}

              {/* 4. Home Screen */}
              {currentScreen === 'home' && (
                <HomeScreen
                  onNavigate={navigate}
                  onSelectProgram={(progId) => navigate('programs', { initialProgramId: progId })}
                  onOpenLiveRoom={openLiveRoom}
                />
              )}

              {/* 5. Programs Screen */}
              {currentScreen === 'programs' && (
                <ProgramsScreen
                  initialProgramId={navParams.initialProgramId || 'traditional-hatha'}
                  onBookProgram={(progId, batch) => navigate('booking', { programId: progId, batch })}
                />
              )}

              {/* 6. Schedule Screen */}
              {currentScreen === 'schedule' && (
                <ScheduleScreen
                  onSelectBatch={(progId, batch) => navigate('booking', { programId: progId, batch })}
                />
              )}

              {/* 7. Booking Wizard Screen */}
              {currentScreen === 'booking' && (
                <BookingFlowScreen
                  initialData={navParams}
                  onBookingComplete={() => navigate('my-classes')}
                  onCancel={() => navigate('home')}
                />
              )}

              {/* 8. My Classes Screen */}
              {currentScreen === 'my-classes' && (
                <MyClassesScreen
                  onOpenLiveRoom={openLiveRoom}
                  onBookNew={() => navigate('booking', { plan: 'demo' })}
                />
              )}

              {/* 9. Live Class Room Video Simulator */}
              {currentScreen === 'live-room' && (
                <LiveClassRoomScreen
                  classInfo={liveClassData}
                  onClose={() => navigate('my-classes')}
                />
              )}

              {/* 10. Student Profile */}
              {currentScreen === 'profile' && (
                <ProfileScreen onNavigate={navigate} />
              )}

              {/* 11. Push Notifications Center */}
              {currentScreen === 'notifications' && (
                <NotificationsScreen onBack={() => navigate('home')} />
              )}

              {/* 12. Admin Portal */}
              {currentScreen === 'admin' && (
                <AdminMobileScreen onExitAdmin={() => navigate('home')} />
              )}
            </div>

            {/* Bottom Navigation Dock */}
            {showBottomNav && (
              <div className="mobile-bottom-nav">
                <button
                  onClick={() => navigate('home')}
                  className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`}
                >
                  <Home size={20} />
                  <span>Home</span>
                </button>

                <button
                  onClick={() => navigate('programs')}
                  className={`mobile-nav-item ${activeTab === 'programs' ? 'active' : ''}`}
                >
                  <Compass size={20} />
                  <span>Programs</span>
                </button>

                <button
                  onClick={() => navigate('schedule')}
                  className={`mobile-nav-item ${activeTab === 'schedule' ? 'active' : ''}`}
                >
                  <Clock size={20} />
                  <span>Schedule</span>
                </button>

                <button
                  onClick={() => navigate('my-classes')}
                  className={`mobile-nav-item ${activeTab === 'my-classes' ? 'active' : ''}`}
                >
                  <Video size={20} />
                  <span>My Classes</span>
                </button>

                <button
                  onClick={() => navigate(isAdmin ? 'admin' : 'profile')}
                  className={`mobile-nav-item ${activeTab === 'profile' || currentScreen === 'admin' ? 'active' : ''}`}
                >
                  <User size={20} />
                  <span>{isAdmin ? 'Admin' : 'Profile'}</span>
                </button>
              </div>
            )}

            {/* iOS Home Indicator Bar (Desktop simulation only) */}
            {deviceType === 'iphone' && <div className="ios-home-bar" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileApp({ onSwitchToWeb }) {
  return (
    <MobileAuthProvider>
      <MobileClassProvider>
        <MobileAppContent onSwitchToWeb={onSwitchToWeb} />
      </MobileClassProvider>
    </MobileAuthProvider>
  );
}
