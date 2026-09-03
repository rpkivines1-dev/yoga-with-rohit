// ==========================================================================
// WELCOME HOTEL - ADMIN RESTAURANT & TABLE RESERVATION MANAGEMENT
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { formatCurrency } from '../../utils/helpers';
import { 
  UtensilsCrossed, 
  Calendar, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  CheckCircle2, 
  Clock, 
  Users 
} from 'lucide-react';

export const AdminRestaurant = () => {
  const { menu, addMenuItem, updateMenuItem, deleteMenuItem, tableReservations } = useHotel();
  const [activeSubTab, setActiveSubTab] = useState('menu'); // 'menu' | 'tables'
  const [editingItem, setEditingItem] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newItem, setNewItem] = useState({
    name: 'New Signature Dish',
    category: 'Main Course',
    description: 'Fresh artisanal ingredients prepared with expert culinary care.',
    price: 32,
    diet: 'veg',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  });

  const handleCreate = (e) => {
    e.preventDefault();
    addMenuItem(newItem);
    setIsAddingNew(false);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    updateMenuItem(editingItem);
    setEditingItem(null);
  };

  return (
    <div>
      {/* Sub Tabs */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
        <button
          onClick={() => setActiveSubTab('menu')}
          style={{
            padding: '0.5rem 1.25rem',
            fontWeight: 600,
            color: activeSubTab === 'menu' ? 'var(--gold-700)' : 'var(--text-secondary)',
            borderBottom: activeSubTab === 'menu' ? '2px solid var(--gold-600)' : 'none'
          }}
        >
          Digital Menu Management ({menu.length} Dishes)
        </button>

        <button
          onClick={() => setActiveSubTab('tables')}
          style={{
            padding: '0.5rem 1.25rem',
            fontWeight: 600,
            color: activeSubTab === 'tables' ? 'var(--gold-700)' : 'var(--text-secondary)',
            borderBottom: activeSubTab === 'tables' ? '2px solid var(--gold-600)' : 'none'
          }}
        >
          Table Reservations ({tableReservations.length})
        </button>
      </div>

      {/* SUBTAB 1: DIGITAL MENU CRUD */}
      {activeSubTab === 'menu' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Digital Menu Items</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Add dishes, edit descriptions, adjust prices, and toggle chef specials.
              </p>
            </div>

            <button
              onClick={() => setIsAddingNew(true)}
              className="btn btn-primary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <Plus size={15} /> Add Menu Item
            </button>
          </div>

          {/* Add New Dish Form */}
          {isAddingNew && (
            <div
              className="card"
              style={{
                padding: '2rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                marginBottom: '2rem',
                border: '2px solid var(--gold-500)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.2rem' }}>Add New Dish to Menu</h4>
                <button onClick={() => setIsAddingNew(false)}><X size={18} /></button>
              </div>

              <form onSubmit={handleCreate}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Dish Name *</label>
                    <input
                      type="text"
                      required
                      value={newItem.name}
                      onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Category *</label>
                    <select
                      value={newItem.category}
                      onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                      className="form-select"
                    >
                      <option value="Starters">Starters</option>
                      <option value="Main Course">Main Course</option>
                      <option value="Desserts">Desserts</option>
                      <option value="Beverages">Beverages</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Price ($) *</label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={newItem.price}
                      onChange={(e) => setNewItem({ ...newItem, price: Number(e.target.value) })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Dietary</label>
                    <select
                      value={newItem.diet}
                      onChange={(e) => setNewItem({ ...newItem, diet: e.target.value })}
                      className="form-select"
                    >
                      <option value="veg">Vegetarian</option>
                      <option value="non-veg">Non-Vegetarian</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Food Image URL</label>
                  <input
                    type="url"
                    value={newItem.image}
                    onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    rows={2}
                    value={newItem.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button type="button" onClick={() => setIsAddingNew(false)} className="btn btn-secondary btn-sm">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary btn-sm">
                    <Save size={14} /> Add to Menu
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Edit Modal */}
          {editingItem && (
            <div className="modal-overlay" onClick={() => setEditingItem(null)}>
              <div
                className="card"
                style={{ width: '100%', maxWidth: '580px', padding: '2rem', backgroundColor: '#FFFFFF', position: 'relative' }}
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setEditingItem(null)} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
                  <X size={18} />
                </button>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Edit Dish: {editingItem.name}</h3>

                <form onSubmit={handleSaveEdit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Dish Name</label>
                      <input
                        type="text"
                        value={editingItem.name}
                        onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Price ($)</label>
                      <input
                        type="number"
                        value={editingItem.price}
                        onChange={(e) => setEditingItem({ ...editingItem, price: Number(e.target.value) })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea
                      rows={3}
                      value={editingItem.description}
                      onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                    <button type="button" onClick={() => setEditingItem(null)} className="btn btn-secondary btn-sm">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary btn-sm">
                      <Save size={14} /> Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Menu Table */}
          <div className="card" style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border-light)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.85rem 1rem' }}>Item</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Category</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Price</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Diet</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((dish) => (
                  <tr key={dish.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <img src={dish.image} alt={dish.name} style={{ width: '42px', height: '36px', borderRadius: '4px', objectFit: 'cover' }} />
                        <div>
                          <div style={{ fontWeight: 600 }}>{dish.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{dish.description.slice(0, 45)}...</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '0.85rem 1rem' }}>{dish.category}</td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--gold-700)' }}>{formatCurrency(dish.price)}</td>
                    <td style={{ padding: '0.85rem 1rem' }}>{dish.diet === 'veg' ? '🌱 Veg' : '🥩 Non-Veg'}</td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'flex-end' }}>
                        <button onClick={() => setEditingItem(dish)} className="btn btn-secondary btn-sm" style={{ padding: '0.25rem 0.5rem' }}>
                          <Edit size={13} />
                        </button>
                        <button onClick={() => deleteMenuItem(dish.id)} className="btn btn-sm" style={{ padding: '0.25rem 0.5rem', color: 'var(--danger)', backgroundColor: 'var(--danger-bg)' }}>
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUBTAB 2: TABLE RESERVATIONS */}
      {activeSubTab === 'tables' && (
        <div className="card" style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border-light)', textAlign: 'left', color: 'var(--text-muted)' }}>
                <th style={{ padding: '1rem' }}>Reservation ID</th>
                <th style={{ padding: '1rem' }}>Guest Name</th>
                <th style={{ padding: '1rem' }}>Date & Time</th>
                <th style={{ padding: '1rem' }}>Party Size / Seating</th>
                <th style={{ padding: '1rem' }}>Contact</th>
                <th style={{ padding: '1rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableReservations.map((tr) => (
                <tr key={tr.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem', fontWeight: 700, fontFamily: 'monospace', color: 'var(--gold-700)' }}>
                    #{tr.id}
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>{tr.name}</td>
                  <td style={{ padding: '1rem' }}>{tr.date} at {tr.time}</td>
                  <td style={{ padding: '1rem' }}>{tr.guests} Guests ({tr.seating})</td>
                  <td style={{ padding: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {tr.phone} • {tr.email}
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span className="badge badge-available">Confirmed</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
