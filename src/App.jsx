import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import SundayFreeYogaSection from './components/home/SundayFreeYogaSection';
import About from './components/home/About';
import CertificatesSection from './components/home/CertificatesSection';
import FreeDemoSection from './components/home/FreeDemoSection';
import ClassPackages from './components/home/ClassPackages';
import ClassSchedule from './components/home/ClassSchedule';
import HowItWorks from './components/home/HowItWorks';
import BenefitsOfYoga from './components/home/BenefitsOfYoga';
import AsanaGallery from './components/home/AsanaGallery';
import Testimonials from './components/home/Testimonials';
import FaqSection from './components/home/FaqSection';
import ContactSection from './components/home/ContactSection';
import Footer from './components/layout/Footer';
import BookingModal from './components/common/BookingModal';
import StudentClassPortal from './components/dashboard/StudentClassPortal';
import AdminClassScheduler from './components/admin/AdminClassScheduler';
import FloatingActions from './components/common/FloatingActions';

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
      programId: data.programId || (data.plan === 'sunday-free' ? 'sunday-free' : (data.programName && data.programName.includes('Ashtanga') ? 'ashtanga-vinyasa' : 'traditional-hatha')),
      title: data.title || (data.plan === 'sunday-free' ? 'Sunday Free Community Yoga' : (data.plan === 'monthly' ? 'Monthly Yoga Package' : (data.plan === 'daily' ? 'Daily Yoga Class' : 'Free Demo Yoga Class'))),
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
    <div className="min-h-screen" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenStudentPortal={() => setStudentPortalOpen(true)}
        onOpenAdminScheduler={() => setAdminSchedulerOpen(true)}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Sunday Free Community Yoga Section */}
        <SundayFreeYogaSection onOpenBooking={handleOpenBooking} />

        {/* 3. About Yoga Teacher Rohit */}
        <About onOpenBooking={handleOpenBooking} />

        {/* 4. Verified Certificates & Awards Showcase */}
        <CertificatesSection />

        {/* 5. Free Demo Class Section */}
        <FreeDemoSection onBookingSuccess={(info) => {
          showToast(`Demo booked for ${info.name} (${info.program} • ${info.batch})!`);
          setStudentPortalOpen(true);
        }} />

        {/* 6. Class Packages & Pricing ($50/mo & $5/class) */}
        <ClassPackages onSelectPackage={handleSelectPackage} />

        {/* 7. Class Schedule (Traditional Hatha & Ashtanga Vinyasa + Timezone Converter) */}
        <ClassSchedule onSelectBatch={handleSelectBatch} />

        {/* 8. How It Works (4 Steps) */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 9. Benefits of Yoga (8 Core Pillars) */}
        <BenefitsOfYoga />

        {/* 10. Authentic Asana & Meditation Gallery Showcase with Lightbox */}
        <AsanaGallery />

        {/* 11. Student Testimonials */}
        <Testimonials />

        {/* 12. Frequently Asked Questions */}
        <FaqSection onOpenBooking={handleOpenBooking} />

        {/* 13. Contact Section (Phone, WhatsApp, Instagram, Form) */}
        <ContactSection />
      </main>

      {/* 14. Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenStudentPortal={() => setStudentPortalOpen(true)}
        onOpenAdminScheduler={() => setAdminSchedulerOpen(true)}
      />

      {/* Floating Actions Dock */}
      <FloatingActions
        onOpenBooking={handleOpenBooking}
        onOpenStudentPortal={() => setStudentPortalOpen(true)}
      />

      {/* Universal Enrollment / Demo Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialData={modalData}
        onSuccess={(info) => showToast(`Success! Spot reserved for ${info.name} (${info.program} • ${info.batch}).`)}
        onOpenPortal={() => {
          setModalOpen(false);
          setStudentPortalOpen(true);
        }}
      />

      {/* Student Class Portal & My Classes (with Join Live Class gatekeeper) */}
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
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#4ADE80' }}></div>
          <span style={{ fontSize: '14px', fontWeight: 600 }}>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
