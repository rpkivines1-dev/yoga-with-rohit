import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Layout & Global Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BookingModal from './components/common/BookingModal';
import StudentClassPortal from './components/dashboard/StudentClassPortal';
import AdminClassScheduler from './components/admin/AdminClassScheduler';
import FloatingActions from './components/common/FloatingActions';
import SEOHead from './components/seo/SEOHead';

// Pages
import HomePage from './pages/HomePage';
import OnlineYogaClassesPage from './pages/OnlineYogaClassesPage';
import FreeOnlineYogaClassPage from './pages/FreeOnlineYogaClassPage';
import BeginnersYogaPage from './pages/BeginnersYogaPage';
import HathaYogaPage from './pages/HathaYogaPage';
import AshtangaYogaPage from './pages/AshtangaYogaPage';
import LiveYogaClassesPage from './pages/LiveYogaClassesPage';
import SchedulePage from './pages/SchedulePage';
import PricingPage from './pages/PricingPage';
import FreeDemoPage from './pages/FreeDemoPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import BlogHubPage from './pages/BlogHubPage';
import BlogPostPage from './pages/BlogPostPage';
import NotFoundPage from './pages/NotFoundPage';

// Private Route Handler with noindex for crawlers & instant modal/portal trigger for users
function PrivateRouteHandler({ onOpenPortal, onOpenAdmin, type, title }) {
  useEffect(() => {
    if (type === 'admin') onOpenAdmin();
    else onOpenPortal();
  }, [type, onOpenPortal, onOpenAdmin]);

  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 80px', textAlign: 'center', backgroundColor: '#FAF6F0' }}>
      <SEOHead title={`${title} | Yoga With Rohit`} noIndex={true} />
      <div style={{ maxWidth: '500px', backgroundColor: '#FFFFFF', padding: '36px 28px', borderRadius: '24px', border: '1.5px solid rgba(194, 94, 26, 0.14)', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '10px', color: 'var(--text-main)' }}>{title}</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '24px' }}>
          This area is private to enrolled students and instructors. Click below to open the secure access window.
        </p>
        <button onClick={type === 'admin' ? onOpenAdmin : onOpenPortal} className="btn btn-primary" style={{ padding: '12px 24px' }}>
          <span>Access {title}</span>
        </button>
      </div>
    </div>
  );
}

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [studentPortalOpen, setStudentPortalOpen] = useState(false);
  const [adminSchedulerOpen, setAdminSchedulerOpen] = useState(false);

  const [modalData, setModalData] = useState({
    plan: 'demo',
    programId: 'traditional-hatha',
    title: 'Free Demo Yoga Class',
    batch: '6:30 AM EST',
  });
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenBooking = (data = {}) => {
    setModalData({
      plan: data.plan || 'demo',
      programId:
        data.programId ||
        (data.plan === 'sunday-free'
          ? 'sunday-free'
          : data.programName && data.programName.includes('Ashtanga')
          ? 'ashtanga-vinyasa'
          : 'traditional-hatha'),
      title:
        data.title ||
        (data.plan === 'sunday-free'
          ? 'Sunday Free Community Yoga'
          : data.plan === 'monthly'
          ? 'Monthly Yoga Package'
          : data.plan === 'daily'
          ? 'Daily Yoga Class'
          : 'Free Demo Yoga Class'),
      batch: data.timeEST || data.batch || '6:30 AM EST',
    });
    setModalOpen(true);
  };

  const handleSelectPackage = (pkg) => {
    handleOpenBooking({ plan: pkg.id, title: pkg.title });
  };

  const handleSelectBatch = (batch) => {
    handleOpenBooking({
      plan: 'demo',
      programId: batch.programId || 'traditional-hatha',
      programName: batch.programName,
      batch: batch.timeEST,
    });
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen" style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Global Navigation Bar */}
        <Navbar
          onOpenBooking={handleOpenBooking}
          onOpenStudentPortal={() => setStudentPortalOpen(true)}
          onOpenAdminScheduler={() => setAdminSchedulerOpen(true)}
        />

        {/* Dynamic Multi-Route Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            {/* Primary Homepage */}
            <Route
              path="/"
              element={
                <HomePage
                  onOpenBooking={handleOpenBooking}
                  onSelectPackage={handleSelectPackage}
                  onSelectBatch={handleSelectBatch}
                  showToast={showToast}
                  setStudentPortalOpen={setStudentPortalOpen}
                />
              }
            />

            {/* Pillar & Primary Keyword Specific Pages */}
            <Route
              path="/online-yoga-classes"
              element={<OnlineYogaClassesPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/free-online-yoga-class"
              element={<FreeOnlineYogaClassPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/online-yoga-classes-for-beginners"
              element={<BeginnersYogaPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/hatha-yoga-online-classes"
              element={<HathaYogaPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/ashtanga-yoga-online"
              element={<AshtangaYogaPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/live-yoga-classes-online"
              element={<LiveYogaClassesPage onOpenBooking={handleOpenBooking} />}
            />

            {/* Core Utility Pages */}
            <Route
              path="/schedule"
              element={
                <SchedulePage
                  onSelectBatch={handleSelectBatch}
                  onOpenBooking={handleOpenBooking}
                />
              }
            />
            <Route
              path="/pricing"
              element={
                <PricingPage
                  onSelectPackage={handleSelectPackage}
                  onOpenBooking={handleOpenBooking}
                />
              }
            />
            {/* Redirect /free-yoga-demo to canonical /free-online-yoga-class */}
            <Route
              path="/free-yoga-demo"
              element={<Navigate to="/free-online-yoga-class" replace />}
            />

            {/* Private & Admin Routes (Blocked via noindex and robots.txt) */}
            <Route
              path="/admin"
              element={
                <PrivateRouteHandler
                  onOpenPortal={() => setStudentPortalOpen(true)}
                  onOpenAdmin={() => setAdminSchedulerOpen(true)}
                  type="admin"
                  title="Admin Scheduler Portal"
                />
              }
            />
            {[
              '/dashboard',
              '/student-dashboard',
              '/login',
              '/register',
              '/payment',
              '/checkout',
              '/private-class-links',
              '/meeting-links',
            ].map((p) => (
              <Route
                key={p}
                path={p}
                element={
                  <PrivateRouteHandler
                    onOpenPortal={() => setStudentPortalOpen(true)}
                    onOpenAdmin={() => setAdminSchedulerOpen(true)}
                    type="student"
                    title="Student Class Portal"
                  />
                }
              />
            ))}
            <Route
              path="/about"
              element={<AboutPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="/faq"
              element={<FaqPage onOpenBooking={handleOpenBooking} />}
            />

            {/* Blog Hub & Dynamic Blog Articles */}
            <Route
              path="/blog"
              element={<BlogHubPage />}
            />
            <Route
              path="/blog/:slug"
              element={<BlogPostPage onOpenBooking={handleOpenBooking} />}
            />

            {/* 404 Not Found Catch-All */}
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </div>

        {/* Global Footer with SEO Internal Linking Columns */}
        <Footer
          onOpenBooking={handleOpenBooking}
          onOpenStudentPortal={() => setStudentPortalOpen(true)}
          onOpenAdminScheduler={() => setAdminSchedulerOpen(true)}
        />

        {/* Global Floating Actions Dock */}
        <FloatingActions
          onOpenBooking={handleOpenBooking}
          onOpenStudentPortal={() => setStudentPortalOpen(true)}
        />

        {/* Universal Enrollment / Demo Modal */}
        <BookingModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialData={modalData}
          onSuccess={(info) =>
            showToast(`Success! Spot reserved for ${info.name} (${info.program} • ${info.batch}).`)
          }
          onOpenPortal={() => {
            setModalOpen(false);
            setStudentPortalOpen(true);
          }}
        />

        {/* Student Class Portal & My Classes (Live Zoom & Google Meet Gatekeeper) */}
        <StudentClassPortal
          isOpen={studentPortalOpen}
          onClose={() => setStudentPortalOpen(false)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Master Admin Class Management & Scheduler Portal */}
        <AdminClassScheduler
          isOpen={adminSchedulerOpen}
          onClose={() => setAdminSchedulerOpen(false)}
        />

        {/* Dynamic Toast Feedback Notification */}
        {toastMessage && (
          <div className="toast-notification">
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#4ADE80',
              }}
            ></div>
            <span style={{ fontSize: '14px', fontWeight: 600 }}>{toastMessage}</span>
          </div>
        )}
      </div>
    </Router>
  );
}
