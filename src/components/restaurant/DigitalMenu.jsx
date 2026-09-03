// ==========================================================================
// WELCOME HOTEL - RESTAURANT & DIGITAL MENU PAGE
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { TableReservationModal } from './TableReservationModal';
import { formatCurrency } from '../../utils/helpers';
import { 
  UtensilsCrossed, 
  Sparkles, 
  Clock, 
  Coffee, 
  Wine, 
  Award, 
  Calendar, 
  Leaf, 
  Flame,
  ChefHat
} from 'lucide-react';

export const DigitalMenu = () => {
  const { menu, openLightbox } = useHotel();
  const [activeCategory, setActiveCategory] = useState('All');
  const [dietFilter, setDietFilter] = useState('all'); // all | veg | non-veg | special
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

  const filteredMenu = menu.filter((item) => {
    if (activeCategory !== 'All' && item.category !== activeCategory) return false;
    if (dietFilter === 'veg' && item.diet !== 'veg') return false;
    if (dietFilter === 'non-veg' && item.diet !== 'non-veg') return false;
    if (dietFilter === 'special' && !item.isSpecial) return false;
    return true;
  });

  return (
    <div style={{ paddingBottom: '6rem', backgroundColor: 'var(--bg-main)' }}>
      {/* Restaurant Hero Banner */}
      <section
        style={{
          position: 'relative',
          padding: '6rem 1.5rem 5rem 1.5rem',
          backgroundImage: `linear-gradient(to bottom, rgba(14, 22, 34, 0.75) 0%, rgba(14, 22, 34, 0.9) 100%), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-tag dark" style={{ marginBottom: '1rem' }}>
            <UtensilsCrossed size={14} /> The Welcome Dining Room
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-brand)',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: '#FFFFFF',
              marginBottom: '1rem'
            }}
          >
            Our Restaurant
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#E2E8F0',
              lineHeight: 1.7,
              marginBottom: '2rem',
              fontWeight: 300
            }}
          >
            Enjoy delicious food and a comfortable dining experience at Welcome Hotel.
          </p>

          <button
            onClick={() => setReservationModalOpen(true)}
            className="btn btn-primary btn-lg"
            style={{ fontWeight: 600, boxShadow: 'var(--shadow-gold)' }}
          >
            <Calendar size={18} /> Reserve a Table
          </button>
        </div>
      </section>

      {/* Meal Services Sections (Breakfast, Lunch, Dinner, Special Dishes) */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}
          >
            <div
              className="card"
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div style={{ color: 'var(--gold-600)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Coffee size={20} />
                <span style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase' }}>Breakfast</span>
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>Morning Continental</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Freshly baked pastries, organic juices, artisan coffee, and hot entrees.
              </p>
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                7:00 AM – 11:00 AM
              </div>
            </div>

            <div
              className="card"
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div style={{ color: 'var(--gold-600)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <UtensilsCrossed size={20} />
                <span style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase' }}>Lunch</span>
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>Artisan Midday</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Fresh market salads, handmade pastas, sea bass, and gourmet sandwiches.
              </p>
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                12:30 PM – 3:30 PM
              </div>
            </div>

            <div
              className="card"
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div style={{ color: 'var(--gold-600)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Wine size={20} />
                <span style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase' }}>Dinner</span>
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>Candlelit Fine Dining</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Prime aged steaks, rack of lamb, sommelier wine pairing & decadent desserts.
              </p>
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                7:00 PM – 11:00 PM
              </div>
            </div>

            <div
              className="card"
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid rgba(197, 168, 128, 0.4)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div style={{ color: 'var(--gold-600)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ChefHat size={20} />
                <span style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase' }}>Chef's Specials</span>
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>Signature Creations</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Daily rotating seasonal tasting menus crafted by our executive culinary master.
              </p>
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--gold-700)', fontWeight: 600 }}>
                Available All Day
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Digital Menu Section */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">
              <Sparkles size={14} /> Digital Menu
            </span>
            <h2>Artisanal Culinary Menu</h2>
            <p>
              Explore our curated offerings prepared with the finest ingredients and culinary craft.
            </p>
          </div>

          {/* Category Tabs & Dietary Filter Controls */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2.5rem',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '1rem'
            }}
          >
            {/* Category Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    backgroundColor: activeCategory === cat ? '#121820' : '#FFFFFF',
                    color: activeCategory === cat ? '#FFFFFF' : 'var(--text-primary)',
                    border: '1px solid var(--border-light)',
                    boxShadow: activeCategory === cat ? 'var(--shadow-sm)' : 'none'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Diet Filter Pills */}
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginRight: '0.3rem' }}>Filter:</span>
              {[
                { id: 'all', label: 'All Items' },
                { id: 'veg', label: '🌱 Vegetarian' },
                { id: 'non-veg', label: '🥩 Non-Veg' },
                { id: 'special', label: '⭐ Chef Specials' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setDietFilter(filter.id)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    backgroundColor: dietFilter === filter.id ? 'var(--gold-100)' : 'transparent',
                    color: dietFilter === filter.id ? 'var(--gold-800)' : 'var(--text-secondary)',
                    border: dietFilter === filter.id ? '1px solid var(--gold-400)' : '1px solid transparent'
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredMenu.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{
                  display: 'flex',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: item.isSpecial ? '1.5px solid rgba(197, 168, 128, 0.4)' : '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  backgroundColor: '#FFFFFF'
                }}
              >
                {/* Food Image */}
                <div
                  style={{
                    width: '130px',
                    position: 'relative',
                    flexShrink: 0,
                    cursor: 'pointer'
                  }}
                  onClick={() => openLightbox([item.image], 0, item.name)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {item.isSpecial && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '0.5rem',
                        left: '0.5rem',
                        backgroundColor: 'var(--gold-600)',
                        color: '#FFFFFF',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        padding: '0.15rem 0.4rem',
                        borderRadius: '3px'
                      }}
                    >
                      CHEF'S PICK
                    </span>
                  )}
                </div>

                {/* Dish Details */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem', gap: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.25 }}>
                      {item.name}
                    </h4>
                    <span
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-serif)',
                        color: 'var(--gold-700)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {formatCurrency(item.price)}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      marginBottom: '0.85rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {item.description}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        backgroundColor: item.diet === 'veg' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.08)',
                        color: item.diet === 'veg' ? '#047857' : '#B91C1C'
                      }}
                    >
                      {item.diet === 'veg' ? '🌱 Vegetarian' : '🥩 Non-Vegetarian'}
                    </span>

                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reserve Table CTA Bar */}
          <div
            style={{
              marginTop: '4rem',
              backgroundColor: '#121820',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem',
              color: '#FFFFFF'
            }}
          >
            <div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginBottom: '0.35rem' }}>
                Planning a Special Dining Evening?
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>
                Reserve your favorite table in advance for intimate candlelit dinners or private gatherings.
              </p>
            </div>

            <button
              onClick={() => setReservationModalOpen(true)}
              className="btn btn-primary"
              style={{ fontSize: '1rem', padding: '0.85rem 1.8rem' }}
            >
              <Calendar size={18} /> Reserve a Table Now
            </button>
          </div>
        </div>
      </section>

      {/* Table Reservation Modal */}
      <TableReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />
    </div>
  );
};
