import React, { useState } from 'react';
import { Globe, Compass, Heart, ArrowRight, Sparkles, Check } from 'lucide-react';

const ONBOARDING_SLIDES = [
  {
    id: 1,
    title: 'Practice Yoga Anytime, Anywhere',
    description: 'Join live online yoga classes from anywhere in the world, guided directly from Rishikesh by Rohit.',
    icon: Globe,
    badge: 'Live Interactive Classes',
    image: '/images/rohit-waterfall-meditation.jpg',
  },
  {
    id: 2,
    title: 'Choose Your Perfect Yoga Program',
    description: 'Select between Traditional Hatha Yoga (Morning) and Ashtanga Vinyasa (Evening) with 6 daily live batches.',
    icon: Compass,
    badge: 'Hatha & Ashtanga Batches',
    image: '/images/rohit-splits-ganges.jpg',
  },
  {
    id: 3,
    title: 'Transform Your Life Through Yoga',
    description: 'Build strength, improve flexibility, reduce stress, and find inner balance with certified master guidance.',
    icon: Heart,
    badge: 'Beginner to Advanced',
    image: '/images/rohit-forward-bend.jpg',
  },
];

export default function OnboardingScreen({ onFinish }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < ONBOARDING_SLIDES.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onFinish();
    }
  };

  const slide = ONBOARDING_SLIDES[currentSlide];
  const IconComponent = slide.icon;

  return (
    <div
      style={{
        flex: 1,
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FAF6F0',
        padding: '24px 20px 32px',
        position: 'relative',
      }}
    >
      {/* Top Bar: Skip Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '32px' }}>
        {currentSlide < ONBOARDING_SLIDES.length - 1 ? (
          <button
            onClick={onFinish}
            style={{
              background: 'none',
              border: 'none',
              color: '#8C7E74',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '6px 12px',
            }}
          >
            Skip
          </button>
        ) : (
          <div />
        )}
      </div>

      {/* Main Slide Illustration & Content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '12px 6px' }}>
        {/* Arched Photo Frame */}
        <div
          style={{
            width: '260px',
            height: '310px',
            borderRadius: '160px 160px 24px 24px',
            overflow: 'hidden',
            border: '4px solid #FFFFFF',
            boxShadow: '0 20px 40px rgba(69, 26, 3, 0.15)',
            marginBottom: '28px',
            position: 'relative',
            backgroundColor: '#EAE5DB',
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Floating Icon Pill */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(35, 22, 13, 0.88)',
              backdropFilter: 'blur(8px)',
              padding: '6px 14px',
              borderRadius: '9999px',
              color: '#FDE68A',
              fontSize: '11px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap',
            }}
          >
            <IconComponent size={13} />
            <span>{slide.badge}</span>
          </div>
        </div>

        {/* Slide Title */}
        <h2
          style={{
            fontSize: '22px',
            fontWeight: 800,
            color: 'var(--text-main)',
            lineHeight: 1.25,
            marginBottom: '10px',
            letterSpacing: '-0.02em',
          }}
        >
          {slide.title}
        </h2>

        {/* Slide Description */}
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            lineHeight: 1.55,
            maxWidth: '300px',
            margin: '0 auto',
          }}
        >
          {slide.description}
        </p>
      </div>

      {/* Bottom Controls: Indicators + Action Button */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
          {ONBOARDING_SLIDES.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                height: '7px',
                width: currentSlide === idx ? '28px' : '7px',
                borderRadius: '4px',
                backgroundColor: currentSlide === idx ? 'var(--primary)' : 'rgba(194, 94, 26, 0.25)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Next / Get Started Button */}
        <button
          onClick={handleNext}
          className="btn btn-primary w-full"
          style={{
            padding: '14px 20px',
            fontSize: '15px',
            fontWeight: 800,
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(194, 94, 26, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <span>{currentSlide === ONBOARDING_SLIDES.length - 1 ? 'Get Started' : 'Continue'}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
