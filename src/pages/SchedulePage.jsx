import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import PageBanner from '../components/common/PageBanner';
import ClassSchedule from '../components/home/ClassSchedule';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Calendar } from 'lucide-react';

export default function SchedulePage({ onSelectBatch, onOpenBooking }) {
  const handleDemoClick = () => {
    onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' });
  };

  const breadcrumbs = [
    { name: 'Schedule', url: '/schedule' },
  ];

  return (
    <>
      <SEOHead
        title="Live Online Yoga Class Schedule | Traditional Hatha & Ashtanga | Yoga With Rohit"
        description="View our complete live online yoga class schedule. Morning Traditional Hatha (6:30, 7:45, 9:00 AM EST) and Evening Ashtanga (7:30, 8:45, 10:00 PM EST) on M/W/F."
        canonicalUrl="https://www.yogawithrohit.com/schedule"
        keywords="Online yoga schedule, live yoga class timings, Hatha yoga schedule, Ashtanga yoga schedule EST, online yoga timetable"
        breadcrumbs={breadcrumbs}
      />

      <PageBanner
        badge="Eastern Standard Time (EST)"
        title="Live Online Yoga Class Schedule"
        subtitle="Classes run every Monday, Wednesday, and Friday with morning and evening options. Use our interactive timezone switcher below to see exact times in your local region."
        breadcrumbs={breadcrumbs}
        ctaText="Book Free Demo in Any Batch"
        onCtaClick={handleDemoClick}
      />

      <main style={{ backgroundColor: '#FFFFFF' }}>
        {/* Full Interactive Schedule Component */}
        <ClassSchedule onSelectBatch={onSelectBatch} />

        {/* Schedule Summary & Quick Details */}
        <section className="section-padding" style={{ backgroundColor: '#FAF6F0', borderTop: '1px solid rgba(194, 94, 26, 0.1)' }}>
          <div className="container-custom" style={{ maxWidth: '860px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-main)', textAlign: 'center', marginBottom: '14px' }}>
              Summary of Class Days & Timings
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '32px' }}>
              All classes run on <strong>Monday, Wednesday & Friday</strong> live via Zoom and Google Meet with direct posture adjustments.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '36px' }}>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', padding: '26px', border: '1.5px solid rgba(194, 94, 26, 0.14)' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
                  Morning Sessions (EST)
                </span>
                <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--text-main)', margin: '6px 0 12px' }}>
                  Traditional Hatha Yoga
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>
                  <li>🌅 <strong>6:30 AM EST:</strong> Sunrise Alignment Batch</li>
                  <li>☀️ <strong>7:45 AM EST:</strong> Morning Vitality Batch</li>
                  <li>🧘 <strong>9:00 AM EST:</strong> Mindful Foundation Batch</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', padding: '26px', border: '1.5px solid rgba(194, 94, 26, 0.14)' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase' }}>
                  Evening Sessions (EST)
                </span>
                <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--text-main)', margin: '6px 0 12px' }}>
                  Ashtanga Vinyasa Primary Series
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>
                  <li>🌙 <strong>7:30 PM EST:</strong> Evening Vinyasa Flow</li>
                  <li>🔥 <strong>8:45 PM EST:</strong> Strength & Core Stamina</li>
                  <li>✨ <strong>10:00 PM EST:</strong> Night Recharge Flow</li>
                </ul>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button onClick={handleDemoClick} className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
                <Sparkles size={16} style={{ color: '#FDE68A' }} />
                <span>Reserve a Spot in Next Live Class</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
