// ==========================================================================
// WELCOME HOTEL - ADMIN SETTINGS & CONTENT MANAGEMENT SYSTEM (CMS)
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { 
  Settings, 
  Save, 
  RotateCcw, 
  ShieldAlert, 
  CheckCircle2, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Percent 
} from 'lucide-react';

export const AdminSettings = () => {
  const { hotelInfo, updateHotelInfo, resetDemoData } = useHotel();
  const [formData, setFormData] = useState({ ...hotelInfo });
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    updateHotelInfo(formData);
  };

  const handleFactoryReset = () => {
    resetDemoData();
    setResetConfirmOpen(false);
    setFormData({ ...hotelInfo });
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>
          Website CMS & Global Configuration
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Update hotel marketing slogans, address, phone numbers, check-in/out policies, tax rate, and database state.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem'
        }}
      >
        {/* Left: Hotel Information CMS Form */}
        <div
          className="card"
          style={{
            padding: '2.5rem',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <h4 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Globe size={18} color="var(--gold-600)" /> Hotel Branding & Contact Info
          </h4>

          <form onSubmit={handleSave}>
            <div className="form-group">
              <label className="form-label">Hotel Brand Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Homepage Headline Text</label>
              <textarea
                rows={2}
                value={formData.headline}
                onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                className="form-textarea"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Contact Phone</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Hotel Physical Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="form-input"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Check-In Time</label>
                <input
                  type="text"
                  value={formData.checkInTime}
                  onChange={(e) => setFormData({ ...formData, checkInTime: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Check-Out Time</label>
                <input
                  type="text"
                  value={formData.checkOutTime}
                  onChange={(e) => setFormData({ ...formData, checkOutTime: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              <Save size={16} /> Save Hotel Configuration
            </button>
          </form>
        </div>

        {/* Right: Data Management & Reset */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Tax & Pricing Config */}
          <div
            className="card"
            style={{
              padding: '2rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Percent size={18} color="var(--gold-600)" /> Taxes & Promo Codes
            </h4>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Current Occupancy Tax Rate: <strong>{(formData.taxRate * 100).toFixed(0)}%</strong>
            </p>

            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.4rem' }}>Active Promo Codes:</div>
              <div>• <code>WELCOME10</code> — 10% Discount</div>
              <div>• <code>LUXURY50</code> — $50 Instant Credit</div>
            </div>
          </div>

          {/* Factory Reset Card */}
          <div
            className="card"
            style={{
              padding: '2rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--danger-bg)'
            }}
          >
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RotateCcw size={18} /> Reset to Demo Defaults
            </h4>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Restore the initial 10-room inventory (5 Deluxe + 5 Premium), sample reservations, dining menu, and seed users back to factory default state.
            </p>

            <button
              onClick={() => setResetConfirmOpen(true)}
              className="btn btn-sm"
              style={{
                backgroundColor: 'var(--danger-bg)',
                color: 'var(--danger)',
                fontWeight: 600,
                border: '1px solid var(--danger)'
              }}
            >
              <RotateCcw size={14} /> Reset Demo Data
            </button>
          </div>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {resetConfirmOpen && (
        <div className="modal-overlay" onClick={() => setResetConfirmOpen(false)}>
          <div
            className="card"
            style={{ width: '100%', maxWidth: '440px', padding: '2rem', textAlign: 'center', backgroundColor: '#FFFFFF' }}
            onClick={(e) => e.stopPropagation()}
          >
            <ShieldAlert size={42} color="var(--danger)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Reset All Demo Data?</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              This will erase any newly added rooms, bookings, or menu edits and restore the original 10-room dataset.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <button onClick={() => setResetConfirmOpen(false)} className="btn btn-secondary btn-sm">
                Cancel
              </button>
              <button
                onClick={handleFactoryReset}
                className="btn btn-sm"
                style={{ backgroundColor: 'var(--danger)', color: '#FFFFFF', fontWeight: 600 }}
              >
                Yes, Reset Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
