// ==========================================================================
// WELCOME HOTEL - ADMIN DASHBOARD SHELL
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { AdminOverview } from './AdminOverview';
import { AdminRooms } from './AdminRooms';
import { AdminBookings } from './AdminBookings';
import { AdminCalendar } from './AdminCalendar';
import { AdminGuests } from './AdminGuests';
import { AdminRestaurant } from './AdminRestaurant';
import { AdminSettings } from './AdminSettings';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Bed, 
  Calendar, 
  CalendarRange, 
  Users, 
  UtensilsCrossed, 
  Settings, 
  LogOut, 
  ArrowLeft,
  Sparkles,
  Lock,
  User
} from 'lucide-react';

export const AdminDashboard = ({ onOpenAuth }) => {
  const { currentUser, logout, navigateTo, quickDemoLogin } = useHotel();
  const [activeTab, setActiveTab] = useState('overview'); // overview | rooms | bookings | calendar | guests | restaurant | settings

  const isAdmin = currentUser && currentUser.role === 'admin';

  if (!isAdmin) {
    return (
      <div style={{ padding: '6rem 1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-main)' }}>
        <div className="container" style={{ maxWidth: '520px' }}>
          <div
            className="card"
            style={{
              padding: '3rem 2rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(197, 168, 128, 0.4)'
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#121820',
                color: 'var(--gold-400)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <Lock size={28} />
            </div>

            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Welcome Hotel Management Portal
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              This portal is restricted to authorized hotel staff, general managers, and front-desk receptionists.
            </p>

            <button
              onClick={() => quickDemoLogin('admin')}
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: '1rem', fontSize: '0.95rem', fontWeight: 600 }}
            >
              <ShieldCheck size={16} /> Instant One-Click Demo Admin Login
            </button>

            <button
              onClick={() => navigateTo('home')}
              className="btn btn-secondary"
              style={{ width: '100%', fontSize: '0.9rem' }}
            >
              <ArrowLeft size={15} /> Return to Public Website
            </button>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview & KPIs', icon: <LayoutDashboard size={18} /> },
    { id: 'rooms', label: '10-Room Inventory', icon: <Bed size={18} /> },
    { id: 'bookings', label: 'Bookings & Stays', icon: <Calendar size={18} /> },
    { id: 'calendar', label: 'Visual Timeline Calendar', icon: <CalendarRange size={18} /> },
    { id: 'guests', label: 'Guest Directory', icon: <Users size={18} /> },
    { id: 'restaurant', label: 'Dining & Menu CMS', icon: <UtensilsCrossed size={18} /> },
    { id: 'settings', label: 'CMS & Settings', icon: <Settings size={18} /> }
  ];

  return (
    <div style={{ minHeight: '90vh', backgroundColor: '#F8F9FA', paddingBottom: '6rem' }}>
      {/* Top Admin Header Bar */}
      <div
        style={{
          backgroundColor: '#121820',
          color: '#FFFFFF',
          padding: '1.25rem 0',
          borderBottom: '1px solid rgba(197, 168, 128, 0.25)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'var(--gold-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}
            >
              <ShieldCheck size={20} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-brand)', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                WELCOME HOTEL ADMIN
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold-400)' }}>
                General Manager Console • 10-Room Boutique Control
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => navigateTo('home')}
              className="btn btn-secondary btn-sm"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#E0E6ED',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <ArrowLeft size={14} /> Back to Live Website
            </button>

            <button
              onClick={logout}
              className="btn btn-sm"
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                color: '#EF4444',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}
            >
              <LogOut size={14} /> Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Admin Navigation Bar Tabs */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--border-light)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
          position: 'sticky',
          top: '74px',
          zIndex: 800
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              padding: '0.5rem 0'
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  backgroundColor: activeTab === tab.id ? 'var(--gold-100)' : 'transparent',
                  color: activeTab === tab.id ? 'var(--gold-800)' : 'var(--text-secondary)',
                  border: activeTab === tab.id ? '1px solid var(--gold-300)' : '1px solid transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content Canvas */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        {activeTab === 'overview' && <AdminOverview setActiveTab={setActiveTab} />}
        {activeTab === 'rooms' && <AdminRooms />}
        {activeTab === 'bookings' && <AdminBookings />}
        {activeTab === 'calendar' && <AdminCalendar />}
        {activeTab === 'guests' && <AdminGuests />}
        {activeTab === 'restaurant' && <AdminRestaurant />}
        {activeTab === 'settings' && <AdminSettings />}
      </div>
    </div>
  );
};
