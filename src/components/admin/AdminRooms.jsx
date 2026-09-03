// ==========================================================================
// WELCOME HOTEL - ADMIN ROOM MANAGEMENT (10 ROOM INVENTORY)
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { formatCurrency } from '../../utils/helpers';
import { 
  Bed, 
  Edit, 
  Trash2, 
  Plus, 
  Save, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  DollarSign,
  Maximize2,
  Users
} from 'lucide-react';

export const AdminRooms = () => {
  const { rooms, updateRoom, addRoom, deleteRoom } = useHotel();
  const [editingRoom, setEditingRoom] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newRoomData, setNewRoomData] = useState({
    roomNumber: '106',
    name: 'New Luxury Suite',
    category: 'Deluxe Luxury',
    price: 240,
    maxGuests: 3,
    adults: 2,
    children: 1,
    bedType: 'King Size Bed',
    size: '440 sq ft',
    floor: '1st Floor',
    view: 'Garden View',
    status: 'available',
    description: 'A beautifully appointed luxury suite featuring modern amenities and elegant decor.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    amenities: [
      'High-Speed Wi-Fi (1 Gbps)',
      'Air Conditioning',
      '55" 4K Smart TV',
      'King Size Bed',
      'Private Bathroom with Tub',
      '24/7 Hot Water',
      'Room Service',
      'Daily Housekeeping',
      'Wardrobe & Digital Safe',
      'Complimentary Mineral Water'
    ]
  });

  const handleEditClick = (room) => {
    setEditingRoom({ ...room });
    setIsAddingNew(false);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    updateRoom(editingRoom);
    setEditingRoom(null);
  };

  const handleCreateRoom = (e) => {
    e.preventDefault();
    const id = `room-${Date.now()}`;
    addRoom({ id, ...newRoomData });
    setIsAddingNew(false);
  };

  return (
    <div>
      {/* Header Bar */}
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
            Room Inventory Management ({rooms.length} Rooms)
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Manage room numbers, nightly pricing, categories (Deluxe Luxury / Premium), amenities, and status.
          </p>
        </div>

        <button
          onClick={() => {
            setIsAddingNew(true);
            setEditingRoom(null);
          }}
          className="btn btn-primary btn-sm"
          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <Plus size={16} /> Add New Room
        </button>
      </div>

      {/* Add New Room Form */}
      {isAddingNew && (
        <div
          className="card"
          style={{
            padding: '2rem',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            marginBottom: '2.5rem',
            border: '2px solid var(--gold-500)',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.3rem' }}>Add Room to Inventory</h4>
            <button onClick={() => setIsAddingNew(false)} style={{ color: 'var(--text-muted)' }}>
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleCreateRoom}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Room Number *</label>
                <input
                  type="text"
                  required
                  value={newRoomData.roomNumber}
                  onChange={(e) => setNewRoomData({ ...newRoomData, roomNumber: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Room Name *</label>
                <input
                  type="text"
                  required
                  value={newRoomData.name}
                  onChange={(e) => setNewRoomData({ ...newRoomData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category *</label>
                <select
                  value={newRoomData.category}
                  onChange={(e) => setNewRoomData({ ...newRoomData, category: e.target.value })}
                  className="form-select"
                >
                  <option value="Deluxe Luxury">Deluxe Luxury</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Price Per Night ($) *</label>
                <input
                  type="number"
                  required
                  min="50"
                  max="1000"
                  value={newRoomData.price}
                  onChange={(e) => setNewRoomData({ ...newRoomData, price: Number(e.target.value) })}
                  className="form-input"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Bed Type</label>
                <input
                  type="text"
                  value={newRoomData.bedType}
                  onChange={(e) => setNewRoomData({ ...newRoomData, bedType: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Room Size</label>
                <input
                  type="text"
                  value={newRoomData.size}
                  onChange={(e) => setNewRoomData({ ...newRoomData, size: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Max Guests</label>
                <input
                  type="number"
                  min="1"
                  max="4"
                  value={newRoomData.maxGuests}
                  onChange={(e) => setNewRoomData({ ...newRoomData, maxGuests: Number(e.target.value) })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Image URL</label>
                <input
                  type="url"
                  value={newRoomData.image}
                  onChange={(e) => setNewRoomData({ ...newRoomData, image: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Room Description</label>
              <textarea
                rows={2}
                value={newRoomData.description}
                onChange={(e) => setNewRoomData({ ...newRoomData, description: e.target.value })}
                className="form-textarea"
              />
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button type="button" onClick={() => setIsAddingNew(false)} className="btn btn-secondary btn-sm">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm">
                <Save size={14} /> Add Room
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Edit Room Modal */}
      {editingRoom && (
        <div className="modal-overlay" onClick={() => setEditingRoom(null)}>
          <div
            className="card"
            style={{
              width: '100%',
              maxWidth: '680px',
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setEditingRoom(null)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.45rem', marginBottom: '1.25rem' }}>
              Edit Room {editingRoom.roomNumber}
            </h3>

            <form onSubmit={handleSaveEdit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Room Number</label>
                  <input
                    type="text"
                    required
                    value={editingRoom.roomNumber}
                    onChange={(e) => setEditingRoom({ ...editingRoom, roomNumber: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select
                    value={editingRoom.category}
                    onChange={(e) => setEditingRoom({ ...editingRoom, category: e.target.value })}
                    className="form-select"
                  >
                    <option value="Deluxe Luxury">Deluxe Luxury</option>
                    <option value="Premium">Premium</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Room Title</label>
                  <input
                    type="text"
                    required
                    value={editingRoom.name}
                    onChange={(e) => setEditingRoom({ ...editingRoom, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Price Per Night ($)</label>
                  <input
                    type="number"
                    required
                    min="50"
                    max="1000"
                    value={editingRoom.price}
                    onChange={(e) => setEditingRoom({ ...editingRoom, price: Number(e.target.value) })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Bed Type</label>
                  <input
                    type="text"
                    value={editingRoom.bedType}
                    onChange={(e) => setEditingRoom({ ...editingRoom, bedType: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Room Size</label>
                  <input
                    type="text"
                    value={editingRoom.size}
                    onChange={(e) => setEditingRoom({ ...editingRoom, size: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select
                    value={editingRoom.status}
                    onChange={(e) => setEditingRoom({ ...editingRoom, status: e.target.value })}
                    className="form-select"
                  >
                    <option value="available">Available (Active)</option>
                    <option value="maintenance">Maintenance (Inactive)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Room Image URL</label>
                <input
                  type="url"
                  value={editingRoom.image}
                  onChange={(e) => setEditingRoom({ ...editingRoom, image: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  rows={3}
                  value={editingRoom.description}
                  onChange={(e) => setEditingRoom({ ...editingRoom, description: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" onClick={() => setEditingRoom(null)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <Save size={16} /> Save Room Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 10 Rooms Inventory Table */}
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
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border-light)', textAlign: 'left', color: 'var(--text-muted)' }}>
                <th style={{ padding: '1rem' }}>Room #</th>
                <th style={{ padding: '1rem' }}>Name & Image</th>
                <th style={{ padding: '1rem' }}>Category</th>
                <th style={{ padding: '1rem' }}>Bed / Size</th>
                <th style={{ padding: '1rem' }}>Price / Night</th>
                <th style={{ padding: '1rem' }}>Status</th>
                <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => {
                const isDeluxe = room.category === 'Deluxe Luxury';
                return (
                  <tr key={room.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '1rem', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                      <span style={{ backgroundColor: '#121820', color: '#FFFFFF', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                        {room.roomNumber}
                      </span>
                    </td>

                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <img
                          src={room.image}
                          alt={room.name}
                          style={{ width: '54px', height: '40px', borderRadius: '4px', objectFit: 'cover' }}
                        />
                        <div>
                          <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{room.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{room.floor}</div>
                        </div>
                      </div>
                    </td>

                    <td style={{ padding: '1rem' }}>
                      <span className={isDeluxe ? 'badge badge-deluxe' : 'badge badge-premium'}>
                        {room.category}
                      </span>
                    </td>

                    <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                      <div>{room.bedType}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{room.size} (Max {room.maxGuests}p)</div>
                    </td>

                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--gold-700)', fontSize: '1.05rem' }}>
                      {formatCurrency(room.price)}
                    </td>

                    <td style={{ padding: '1rem' }}>
                      <span className={room.status === 'available' ? 'badge badge-available' : 'badge badge-booked'}>
                        {room.status === 'available' ? 'Active' : 'Maintenance'}
                      </span>
                    </td>

                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => handleEditClick(room)}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '0.35rem 0.65rem' }}
                          title="Edit Room"
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete Room ${room.roomNumber}?`)) {
                              deleteRoom(room.id);
                            }
                          }}
                          className="btn btn-sm"
                          style={{ padding: '0.35rem 0.65rem', color: 'var(--danger)', backgroundColor: 'var(--danger-bg)' }}
                          title="Delete Room"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
