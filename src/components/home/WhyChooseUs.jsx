// ==========================================================================
// WELCOME HOTEL - WHY CHOOSE US
// ==========================================================================

import React from 'react';
import { 
  BedDouble, 
  HeartHandshake, 
  UtensilsCrossed, 
  Wifi, 
  Sparkles, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <BedDouble size={28} color="var(--gold-600)" />,
      title: 'Comfortable Rooms',
      desc: '10 exclusively designed guest suites equipped with orthopedic king/queen beds, fine Egyptian cotton linens, and double-glazed acoustic soundproofing.'
    },
    {
      icon: <HeartHandshake size={28} color="var(--gold-600)" />,
      title: 'Premium Hospitality',
      desc: 'Our dedicated 24/7 concierge and personalized guest services anticipate your every need, from arrival to departure.'
    },
    {
      icon: <UtensilsCrossed size={28} color="var(--gold-600)" />,
      title: 'Delicious Restaurant',
      desc: 'Savor gourmet dining, artisanal breakfast spreads, fine reserve wines, and 24-hour room service prepared by award-winning chefs.'
    },
    {
      icon: <Wifi size={28} color="var(--gold-600)" />,
      title: 'Free Ultra-Fast Wi-Fi',
      desc: 'Seamless gigabit fiber-optic internet across every suite and all common hotel premises, ideal for work and 4K streaming.'
    },
    {
      icon: <ShieldCheck size={28} color="var(--gold-600)" />,
      title: 'Clean & Safe Environment',
      desc: 'Hospital-grade sanitation, daily housekeeping, 24/7 security surveillance, and secure electronic keycard access for absolute peace of mind.'
    },
    {
      icon: <MapPin size={28} color="var(--gold-600)" />,
      title: 'Convenient Location',
      desc: 'Centrally situated on Grand Boulevard with direct access to premier shopping districts, cultural landmarks, and major transit hubs.'
    }
  ];

  return (
    <section
      style={{
        padding: '5rem 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} /> The Welcome Difference
          </span>
          <h2>Why Choose Welcome Hotel</h2>
          <p>
            Experience world-class boutique hotel hospitality with thoughtful amenities crafted for relaxation, comfort, and unmatched convenience.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(197, 168, 128, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {item.icon}
              </div>

              <div>
                <h4
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
