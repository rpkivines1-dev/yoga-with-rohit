import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import Hero from '../components/home/Hero';
import SundayFreeYogaSection from '../components/home/SundayFreeYogaSection';
import ProspectiveMatcher from '../components/home/ProspectiveMatcher';
import About from '../components/home/About';
import CertificatesSection from '../components/home/CertificatesSection';
import FreeDemoSection from '../components/home/FreeDemoSection';
import ClassPackages from '../components/home/ClassPackages';
import ClassSchedule from '../components/home/ClassSchedule';
import TransformationRoadmap from '../components/home/TransformationRoadmap';
import HowItWorks from '../components/home/HowItWorks';
import BenefitsOfYoga from '../components/home/BenefitsOfYoga';
import AsanaGallery from '../components/home/AsanaGallery';
import Testimonials from '../components/home/Testimonials';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';

export default function HomePage({
  onOpenBooking,
  onSelectPackage,
  onSelectBatch,
  showToast,
  setStudentPortalOpen,
}) {
  return (
    <>
      <SEOHead
        title="Online Yoga Classes with Rohit | Yoga With Rohit"
        description="Join live online yoga classes with Rohit. Practice Traditional Hatha Yoga and Ashtanga Vinyasa Primary Series from Rishikesh, India. Free demo class available."
        canonicalUrl="https://www.yogawithrohit.com/"
        keywords="Online yoga classes, live online yoga classes, online yoga classes with Rohit, online yoga classes for beginners, Hatha yoga online classes, Ashtanga yoga online"
      />

      <main style={{ flex: 1 }}>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={onOpenBooking} />

        {/* 2. Sunday Free Community Yoga Section */}
        <SundayFreeYogaSection onOpenBooking={onOpenBooking} />

        {/* 2.5 Prospective Student Interactive Class & Level Matcher */}
        <ProspectiveMatcher onOpenBooking={onOpenBooking} />

        {/* 3. About Yoga Teacher Rohit */}
        <About onOpenBooking={onOpenBooking} />

        {/* 4. Verified Certificates & Awards Showcase */}
        <CertificatesSection />

        {/* 5. Free Demo Class Section */}
        <FreeDemoSection
          onBookingSuccess={(info) => {
            showToast(`Demo booked for ${info.name} (${info.program} • ${info.batch})!`);
            setStudentPortalOpen(true);
          }}
        />

        {/* 6. Class Packages & Pricing ($50/mo & $5/class) */}
        <ClassPackages onSelectPackage={onSelectPackage} />

        {/* 7. Class Schedule (Traditional Hatha & Ashtanga Vinyasa + Timezone Converter) */}
        <ClassSchedule onSelectBatch={onSelectBatch} />

        {/* 7.5 Prospective Student 30-Day Transformation Roadmap */}
        <TransformationRoadmap onOpenBooking={onOpenBooking} />

        {/* 8. How It Works (4 Steps) */}
        <HowItWorks onOpenBooking={onOpenBooking} />

        {/* 9. Benefits of Yoga */}
        <BenefitsOfYoga />

        {/* 10. Authentic Asana & Meditation Gallery Showcase */}
        <AsanaGallery />

        {/* 11. Student Testimonials */}
        <Testimonials />

        {/* 12. Frequently Asked Questions */}
        <FaqSection onOpenBooking={onOpenBooking} />

        {/* 13. Contact Section */}
        <ContactSection />
      </main>
    </>
  );
}
