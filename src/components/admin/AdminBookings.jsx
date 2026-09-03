// ==========================================================================
// WELCOME HOTEL - ADMIN BOOKING MANAGEMENT
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { formatCurrency } from '../../utils/helpers';
import { 
  Calendar, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Eye, 
  X,
  FileText
} from 'lucide-react';

export const AdminBookings = () => {
  const { bookings, updateBookingStatus, navigateTo } = useHotel();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedBookingDetails, setSelectedBookingDetails] = useState(null);

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.guestEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.roomNumber.includes(searchTerm);

    const matchesStatus = statusFilter === 'all' || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      {/* Header & Filter Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>
            Bookings & Reservations Manager ({bookings.length})
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Search bookings, inspect guest records, update stay statuses (Confirmed, Checked-In, Checked-Out, Cancelled).
          </p>
        </div>

        {/* Search & Status Filters */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '240px' }}>
            <input
              type="text"
              placeholder="Search Guest or Ref ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.2rem', paddingRight: '0.75rem', height: '40px', fontSize: '0.85rem' }}
            />
            <Search size={15} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="form-select"
            style={{ height: '40px', fontSize: '0.85rem' }}
          >
            <option value="all">All Statuses</option>
            <option value="confirmed">Confirmed</option>
            <option value="checked_in">Checked In</option>
            <option value="checked_out">Checked Out</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Bookings Table */}
      <div
        className="card"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid var(--border-light)'
        }}
      >
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border-light)', textAlign: 'left', color: 'var(--text-muted)' }}>
                <th style={{ padding: '1rem' }}>Booking ID</th>
                <th style={{ padding: '1rem' }}>Guest Name</th>
                <th style={{ padding: '1rem' }}>Room #</th>
                <th style={{ padding: '1rem' }}>Dates & Nights</th>
                <th style={{ padding: '1rem' }}>Total Amount</th>
                <th style={{ padding: '1rem' }}>Payment</th>
                <th style={{ padding: '1rem' }}>Stay Status</th>
                <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                    No bookings found matching your search criteria.
                  </td>
                </tr>
              ) : (
                filteredBookings.map((b) => (
                  <tr key={b.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, fontFamily: 'monospace', color: 'var(--gold-700)' }}>
                      #{b.id}
                    </td>

                    <td style={{ padding: '1rem' }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{b.guestName}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{b.guestEmail}</div>
                    </td>

                    <td style={{ padding: '1rem' }}>
                      <span style={{ backgroundColor: '#121820', color: '#FFF', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
                        {b.roomNumber}
                      </span>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        {b.roomCategory}
                      </div>
                    </td>

                    <td style={{ padding: '1rem' }}>
                      <div>{b.checkIn} → {b.checkOut}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {b.nights} {b.nights === 1 ? 'Night' : 'Nights'} ({b.adults}p)
                      </div>
                    </td>

                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {formatCurrency(b.totalAmount)}
                    </td>

                    <td style={{ padding: '1rem' }}>
                      <span className={b.paymentStatus === 'paid' ? 'badge badge-available' : 'badge badge-pending'}>
                        {b.paymentStatus === 'paid' ? 'Paid Online' : 'Pay at Hotel'}
                      </span>
                    </td>

                    <td style={{ padding: '1rem' }}>
                      <select
                        value={b.status}
                        onChange={(e) => updateBookingStatus(b.id, e.target.value)}
                        className="form-select"
                        style={{
                          fontSize: '0.78rem',
                          padding: '0.25rem 0.5rem',
                          fontWeight: 600,
                          backgroundColor:
                            b.status === 'confirmed'
                              ? 'var(--success-bg)'
                              : b.status === 'checked_in'
                              ? 'var(--info-bg)'
                              : b.status === 'checked_out'
                              ? 'var(--bg-secondary)'
                              : 'var(--danger-bg)',
                          color:
                            b.status === 'confirmed'
                              ? 'var(--success)'
                              : b.status === 'checked_in'
                              ? 'var(--info)'
                              : b.status === 'checked_out'
                              ? '#4B5563'
                              : 'var(--danger)'
                        }}
                      >
                        <option value="confirmed">Confirmed</option>
                        <option value="checked_in">Checked In</option>
                        <option value="checked_out">Checked Out</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>

                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => setSelectedBookingDetails(b)}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '0.35rem 0.6rem' }}
                          title="View Details"
                        >
                          <Eye size={13} />
                        </button>
                        <button
                          onClick={() => navigateTo('confirmation', { bookingId: b.id })}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '0.35rem 0.6rem' }}
                          title="View Receipt"
                        >
                          <FileText size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Details Modal */}
      {selectedBookingDetails && (
        <div className="modal-overlay" onClick={() => setSelectedBookingDetails(null)}>
          <div
            className="card"
            style={{
              width: '100%',
              maxWidth: '560px',
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBookingDetails(null)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>
              Booking #{selectedBookingDetails.id}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Created on {selectedBookingDetails.createdAt ? new Date(selectedBookingDetails.createdAt).toLocaleString() : 'Recent'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', marginBottom: '2rem' }}>
              <div><strong>Guest Name:</strong> {selectedBookingDetails.guestName}</div>
              <div><strong>Guest Email:</strong> {selectedBookingDetails.guestEmail}</div>
              <div><strong>Guest Phone:</strong> {selectedBookingDetails.guestPhone}</div>
              <div><strong>Guest Address:</strong> {selectedBookingDetails.guestAddress}</div>
              <div><strong>Room:</strong> Room {selectedBookingDetails.roomNumber} ({selectedBookingDetails.roomCategory})</div>
              <div><strong>Check-In:</strong> {selectedBookingDetails.checkIn}</div>
              <div><strong>Check-Out:</strong> {selectedBookingDetails.checkOut} ({selectedBookingDetails.nights} Nights)</div>
              <div><strong>Total Amount:</strong> {formatCurrency(selectedBookingDetails.totalAmount)}</div>
              <div><strong>Payment:</strong> {selectedBookingDetails.paymentMethod} ({selectedBookingDetails.paymentStatus})</div>
              <div><strong>Special Requests:</strong> {selectedBookingDetails.specialRequests || 'None provided'}</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                onClick={() => {
                  setSelectedBookingDetails(null);
                  navigateTo('confirmation', { bookingId: selectedBookingDetails.id });
                }}
                className="btn btn-primary btn-sm"
              >
                Open Full Printable Voucher
              </button>
              <button onClick={() => setSelectedBookingDetails(null)} className="btn btn-secondary btn-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
