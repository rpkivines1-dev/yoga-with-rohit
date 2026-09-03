import React, { useState, useEffect } from 'react';
import { 
  X, Calendar, Clock, Video, Plus, Edit2, Trash2, Copy, AlertTriangle, 
  CheckCircle2, ShieldCheck, Sun, Flame, Search, Filter, RefreshCw, 
  Send, Users, DollarSign, Settings, ExternalLink, Globe, Lock, Eye, EyeOff 
} from 'lucide-react';
import { ClassSchedulingService } from '../../services/classSchedulingService';
import { ZoomGoogleMeetService } from '../../services/zoomGoogleMeetService';
import { YOGA_PROGRAMS, BRAND } from '../../data/yogaData';

export default function AdminClassScheduler({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('classes'); // 'classes', 'calendar', 'bookings', 'integrations', 'reminders'
  const [classes, setClasses] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [integrations, setIntegrations] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgramFilter, setSelectedProgramFilter] = useState('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('all');

  // Calendar View State: 'month', 'week', 'day'
  const [calendarView, setCalendarView] = useState('week');

  // Create / Edit Class Form State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingClassId, setEditingClassId] = useState(null);
  const [formData, setFormData] = useState({
    programId: 'traditional-hatha',
    batchTitle: 'Batch 1 — 6:30 AM EST',
    title: 'Traditional Hatha Morning Flow & Pranayama',
    description: 'Classical asanas, spinal alignment, and breathing techniques taught from Rishikesh.',
    date: new Date().toISOString().split('T')[0],
    startTime: '06:30',
    endTime: '07:30',
    timezone: 'America/New_York',
    platform: 'Zoom',
    manualMeetingLink: '',
    recurrence: 'none', // 'none', 'daily', 'weekly', 'monthly'
    recurringDays: ['Monday', 'Wednesday', 'Friday'],
    recurrenceEndDate: '',
    maxOccurrences: 8,
    capacity: 25,
    // Zoom Settings
    zoomPasscode: 'ROHIT2026',
    zoomWaitingRoom: true,
    zoomParticipantVideo: true,
    zoomHostVideo: true,
    zoomJoinBeforeHost: false,
    zoomAutoRecording: 'cloud',
  });

  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load and subscribe to live data
  const loadData = () => {
    setClasses(ClassSchedulingService.getClasses());
    setBookings(ClassSchedulingService.getBookings());
    setIntegrations(ZoomGoogleMeetService.getIntegrations());
  };

  useEffect(() => {
    loadData();
    window.addEventListener('ywr_classes_updated', loadData);
    window.addEventListener('ywr_bookings_updated', loadData);
    return () => {
      window.removeEventListener('ywr_classes_updated', loadData);
      window.removeEventListener('ywr_bookings_updated', loadData);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle Form Change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleProgramChange = (e) => {
    const pId = e.target.value;
    if (pId === 'ashtanga-vinyasa') {
      setFormData((prev) => ({
        ...prev,
        programId: pId,
        batchTitle: 'Batch 1 — 7:30 PM EST',
        startTime: '19:30',
        endTime: '20:45',
        title: 'Ashtanga Vinyasa Primary Series Flow',
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        programId: pId,
        batchTitle: 'Batch 1 — 6:30 AM EST',
        startTime: '06:30',
        endTime: '07:30',
        title: 'Traditional Hatha Morning Flow & Pranayama',
      }));
    }
  };

  const handleDayToggle = (day) => {
    setFormData((prev) => {
      const exists = prev.recurringDays.includes(day);
      return {
        ...prev,
        recurringDays: exists 
          ? prev.recurringDays.filter((d) => d !== day)
          : [...prev.recurringDays, day],
      };
    });
  };

  // Open Create / Edit Modal
  const openCreateModal = () => {
    setEditingClassId(null);
    setFormError(null);
    setFormSuccess(null);
    setFormData({
      programId: 'traditional-hatha',
      batchTitle: 'Batch 1 — 6:30 AM EST',
      title: 'Traditional Hatha Morning Flow & Pranayama',
      description: 'Classical asanas, spinal alignment, and breathing techniques taught from Rishikesh.',
      date: new Date().toISOString().split('T')[0],
      startTime: '06:30',
      endTime: '07:30',
      timezone: 'America/New_York',
      platform: 'Zoom',
      manualMeetingLink: '',
      recurrence: 'none',
      recurringDays: ['Monday', 'Wednesday', 'Friday'],
      recurrenceEndDate: '',
      maxOccurrences: 8,
      capacity: 25,
      zoomPasscode: 'ROHIT2026',
      zoomWaitingRoom: true,
      zoomParticipantVideo: true,
      zoomHostVideo: true,
      zoomJoinBeforeHost: false,
      zoomAutoRecording: 'cloud',
    });
    setIsFormOpen(true);
  };

  const openEditModal = (cls) => {
    setEditingClassId(cls.id);
    setFormError(null);
    setFormSuccess(null);
    setFormData({
      programId: cls.programId,
      batchTitle: cls.batchTitle,
      title: cls.title,
      description: cls.description,
      date: cls.date,
      startTime: cls.startTime,
      endTime: cls.endTime,
      timezone: cls.timezone || 'America/New_York',
      platform: cls.platform || 'Zoom',
      manualMeetingLink: cls.joinUrl || '',
      recurrence: 'none',
      recurringDays: ['Monday', 'Wednesday', 'Friday'],
      recurrenceEndDate: '',
      maxOccurrences: 8,
      capacity: cls.capacity || 25,
      zoomPasscode: cls.passcode || 'ROHIT2026',
      zoomWaitingRoom: true,
      zoomParticipantVideo: true,
      zoomHostVideo: true,
      zoomJoinBeforeHost: false,
      zoomAutoRecording: 'cloud',
    });
    setIsFormOpen(true);
  };

  // Submit Form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);
    setIsSubmitting(true);

    try {
      if (editingClassId) {
        // Update existing class
        ClassSchedulingService.updateClass(editingClassId, {
          programId: formData.programId,
          batchTitle: formData.batchTitle,
          title: formData.title,
          description: formData.description,
          date: formData.date,
          startTime: formData.startTime,
          endTime: formData.endTime,
          timezone: formData.timezone,
          capacity: Number(formData.capacity) || 25,
        });
        setFormSuccess('Class updated successfully!');
      } else {
        // Create single or recurring class
        await ClassSchedulingService.createClass({
          programId: formData.programId,
          batchTitle: formData.batchTitle,
          title: formData.title,
          description: formData.description,
          date: formData.date,
          startTime: formData.startTime,
          endTime: formData.endTime,
          timezone: formData.timezone,
          platform: formData.platform,
          manualMeetingLink: formData.manualMeetingLink,
          zoomSettings: {
            passcode: formData.zoomPasscode,
            waitingRoom: formData.zoomWaitingRoom,
            participantVideo: formData.zoomParticipantVideo,
            hostVideo: formData.zoomHostVideo,
            joinBeforeHost: formData.zoomJoinBeforeHost,
            autoRecording: formData.zoomAutoRecording,
          },
          recurrence: formData.recurrence,
          recurringDays: formData.recurringDays,
          recurrenceEndDate: formData.recurrenceEndDate,
          maxOccurrences: formData.maxOccurrences,
          capacity: formData.capacity,
        });
        setFormSuccess('Class created and meeting link generated successfully!');
      }

      loadData();
      setTimeout(() => {
        setIsFormOpen(false);
      }, 1000);
    } catch (err) {
      setFormError(err.message || 'Failed to save class.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Actions on existing classes
  const handleCancelClass = (classId) => {
    const reason = prompt('Please enter the cancellation reason to notify students:');
    if (reason !== null) {
      ClassSchedulingService.cancelClass(classId, reason || 'Instructor scheduling update');
      loadData();
    }
  };

  const handleDuplicateClass = (classId) => {
    ClassSchedulingService.duplicateClass(classId);
    loadData();
  };

  const handleDeleteClass = (classId) => {
    if (confirm('Are you sure you want to delete this class? All associated records will be removed.')) {
      ClassSchedulingService.deleteClass(classId);
      loadData();
    }
  };

  // Filtered Classes
  const filteredClasses = classes.filter((cls) => {
    const matchesSearch = cls.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cls.programName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cls.batchTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProg = selectedProgramFilter === 'all' || cls.programId === selectedProgramFilter;
    const matchesStatus = selectedStatusFilter === 'all' || cls.status === selectedStatusFilter;
    return matchesSearch && matchesProg && matchesStatus;
  });

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '1080px',
          width: '96%',
          maxHeight: '92vh',
          backgroundColor: '#FAF6F0',
          borderRadius: '28px',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Header Close */}
        <button
          onClick={onClose}
          aria-label="Close Admin Scheduler"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(194, 94, 26, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-main)',
          }}
        >
          <X size={20} />
        </button>

        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '14px', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #23160D, #451A03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FDE68A',
                boxShadow: '0 8px 20px rgba(35, 22, 13, 0.3)',
              }}
            >
              <Calendar size={26} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                  Master Class Scheduling & Meeting Center
                </h2>
                <span className="badge badge-accent" style={{ fontSize: '11px' }}>Admin (Rohit)</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
                Manage Traditional Hatha & Ashtanga Vinyasa batches, Zoom & Google Meet integrations, and student enrollments.
              </p>
            </div>
          </div>

          <button
            onClick={openCreateModal}
            className="btn btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 18px', fontSize: '13.5px' }}
          >
            <Plus size={16} />
            <span>Create New Class</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid rgba(194, 94, 26, 0.15)',
            paddingBottom: '12px',
            marginBottom: '16px',
            overflowX: 'auto',
          }}
        >
          <button
            onClick={() => setActiveTab('classes')}
            style={{
              padding: '7px 16px',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '13px',
              fontWeight: 800,
              backgroundColor: activeTab === 'classes' ? 'var(--primary)' : '#FFFFFF',
              color: activeTab === 'classes' ? '#FFFFFF' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Calendar size={14} />
            <span>Class List ({classes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('calendar')}
            style={{
              padding: '7px 16px',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '13px',
              fontWeight: 800,
              backgroundColor: activeTab === 'calendar' ? 'var(--primary)' : '#FFFFFF',
              color: activeTab === 'calendar' ? '#FFFFFF' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Clock size={14} />
            <span>Visual Calendar</span>
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            style={{
              padding: '7px 16px',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '13px',
              fontWeight: 800,
              backgroundColor: activeTab === 'bookings' ? 'var(--primary)' : '#FFFFFF',
              color: activeTab === 'bookings' ? '#FFFFFF' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Users size={14} />
            <span>Student Bookings ({bookings.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('integrations')}
            style={{
              padding: '7px 16px',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '13px',
              fontWeight: 800,
              backgroundColor: activeTab === 'integrations' ? 'var(--primary)' : '#FFFFFF',
              color: activeTab === 'integrations' ? '#FFFFFF' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Video size={14} />
            <span>Zoom & Google Integrations</span>
          </button>

          <button
            onClick={() => setActiveTab('reminders')}
            style={{
              padding: '7px 16px',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '13px',
              fontWeight: 800,
              backgroundColor: activeTab === 'reminders' ? 'var(--primary)' : '#FFFFFF',
              color: activeTab === 'reminders' ? '#FFFFFF' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Send size={14} />
            <span>Reminders & Alerts</span>
          </button>
        </div>

        {/* TAB 1: CLASSES TABLE VIEW */}
        {activeTab === 'classes' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Filter Bar */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
                <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="Search classes, programs, batches..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input"
                  style={{ paddingLeft: '34px', fontSize: '13px', padding: '8px 12px 8px 34px' }}
                />
              </div>

              <select
                value={selectedProgramFilter}
                onChange={(e) => setSelectedProgramFilter(e.target.value)}
                className="input"
                style={{ width: 'auto', fontSize: '13px', padding: '8px 12px' }}
              >
                <option value="all">All Yoga Programs</option>
                <option value="traditional-hatha">Traditional Hatha (Morning)</option>
                <option value="ashtanga-vinyasa">Ashtanga Vinyasa (Evening)</option>
              </select>

              <select
                value={selectedStatusFilter}
                onChange={(e) => setSelectedStatusFilter(e.target.value)}
                className="input"
                style={{ width: 'auto', fontSize: '13px', padding: '8px 12px' }}
              >
                <option value="all">All Statuses</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Completed">Completed</option>
                <option value="Rescheduled">Rescheduled</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            {/* Classes Table */}
            <div style={{ flex: 1, overflowY: 'auto', backgroundColor: '#FFFFFF', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.15)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-sand)', borderBottom: '1.5px solid rgba(194, 94, 26, 0.15)' }}>
                    <th style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--primary-dark)' }}>Class Title & Program</th>
                    <th style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--primary-dark)' }}>Date & Batch Timing</th>
                    <th style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--primary-dark)' }}>Platform</th>
                    <th style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--primary-dark)' }}>Capacity</th>
                    <th style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--primary-dark)' }}>Status</th>
                    <th style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--primary-dark)', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClasses.length === 0 ? (
                    <tr>
                      <td colSpan={6} style={{ padding: '30px', textAlign: 'center', color: 'var(--text-muted)' }}>
                        No classes match the selected filters.
                      </td>
                    </tr>
                  ) : (
                    filteredClasses.map((cls) => (
                      <tr key={cls.id} style={{ borderBottom: '1px solid rgba(194, 94, 26, 0.08)' }}>
                        <td style={{ padding: '12px 16px' }}>
                          <div style={{ fontWeight: 800, color: 'var(--text-main)' }}>{cls.title}</div>
                          <div style={{ fontSize: '11.5px', color: cls.programId === 'ashtanga-vinyasa' ? '#B45309' : 'var(--primary)' }}>
                            {cls.programName}
                          </div>
                        </td>

                        <td style={{ padding: '12px 16px' }}>
                          <div style={{ fontWeight: 600 }}>{cls.date}</div>
                          <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                            {cls.batchTitle} ({cls.startTime} - {cls.endTime} EST)
                          </div>
                        </td>

                        <td style={{ padding: '12px 16px' }}>
                          <span
                            style={{
                              padding: '3px 8px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: 700,
                              backgroundColor: cls.platform === 'Google Meet' ? '#E0F2F1' : '#E3F2FD',
                              color: cls.platform === 'Google Meet' ? '#00796B' : '#1565C0',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            <Video size={12} />
                            <span>{cls.platform}</span>
                          </span>
                        </td>

                        <td style={{ padding: '12px 16px' }}>
                          <span style={{ fontWeight: 700, color: cls.enrolledCount >= cls.capacity ? '#DC2626' : 'var(--text-main)' }}>
                            {cls.enrolledCount} / {cls.capacity}
                          </span>
                        </td>

                        <td style={{ padding: '12px 16px' }}>
                          <span
                            style={{
                              padding: '3px 8px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: 700,
                              backgroundColor: cls.status === 'Cancelled' ? '#FEE2E2' : cls.status === 'Completed' ? '#F3F4F6' : '#DCFCE7',
                              color: cls.status === 'Cancelled' ? '#DC2626' : cls.status === 'Completed' ? '#6B7280' : '#16A34A',
                            }}
                          >
                            {cls.status}
                          </span>
                        </td>

                        <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: '6px' }}>
                            <button
                              onClick={() => openEditModal(cls)}
                              title="Edit Class"
                              style={{ width: '30px', height: '30px', borderRadius: '6px', border: '1px solid #EAE5DB', backgroundColor: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                              <Edit2 size={13} color="var(--primary)" />
                            </button>

                            <button
                              onClick={() => handleDuplicateClass(cls.id)}
                              title="Duplicate Class"
                              style={{ width: '30px', height: '30px', borderRadius: '6px', border: '1px solid #EAE5DB', backgroundColor: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                              <Copy size={13} color="var(--text-muted)" />
                            </button>

                            {cls.status !== 'Cancelled' && (
                              <button
                                onClick={() => handleCancelClass(cls.id)}
                                title="Cancel Class"
                                style={{ width: '30px', height: '30px', borderRadius: '6px', border: '1px solid #FEE2E2', backgroundColor: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                              >
                                <AlertTriangle size={13} color="#DC2626" />
                              </button>
                            )}

                            <button
                              onClick={() => handleDeleteClass(cls.id)}
                              title="Delete Class"
                              style={{ width: '30px', height: '30px', borderRadius: '6px', border: '1px solid #FEE2E2', backgroundColor: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                              <Trash2 size={13} color="#DC2626" />
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
        )}

        {/* TAB 2: VISUAL CALENDAR VIEW */}
        {activeTab === 'calendar' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                Weekly Schedule Overview (EST Timezone)
              </h3>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span className="badge" style={{ backgroundColor: '#F4EBE1', color: 'var(--primary-dark)' }}>🌅 Traditional Hatha (Morning)</span>
                <span className="badge" style={{ backgroundColor: '#FEF3C7', color: '#B45309' }}>🌙 Ashtanga Vinyasa (Evening)</span>
              </div>
            </div>

            {/* 7-Day Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                <div
                  key={day}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '12px 10px',
                    border: '1px solid rgba(194, 94, 26, 0.15)',
                    minHeight: '260px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--primary-dark)', borderBottom: '1px solid #EAE5DB', paddingBottom: '4px' }}>
                    {day}
                  </div>

                  {/* Sample Batches on this day */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ backgroundColor: '#F4EBE1', borderRadius: '8px', padding: '6px 8px', fontSize: '11px', textAlign: 'left', borderLeft: '3px solid var(--primary)' }}>
                      <strong>6:30 AM EST</strong>
                      <div>Hatha Batch 1</div>
                    </div>

                    <div style={{ backgroundColor: '#F4EBE1', borderRadius: '8px', padding: '6px 8px', fontSize: '11px', textAlign: 'left', borderLeft: '3px solid var(--primary)' }}>
                      <strong>7:45 AM EST</strong>
                      <div>Hatha Batch 2</div>
                    </div>

                    <div style={{ backgroundColor: '#F4EBE1', borderRadius: '8px', padding: '6px 8px', fontSize: '11px', textAlign: 'left', borderLeft: '3px solid var(--primary)' }}>
                      <strong>9:00 AM EST</strong>
                      <div>Hatha Batch 3</div>
                    </div>

                    <div style={{ backgroundColor: '#FEF3C7', borderRadius: '8px', padding: '6px 8px', fontSize: '11px', textAlign: 'left', borderLeft: '3px solid var(--accent)' }}>
                      <strong>7:30 PM EST</strong>
                      <div>Ashtanga B1</div>
                    </div>

                    <div style={{ backgroundColor: '#FEF3C7', borderRadius: '8px', padding: '6px 8px', fontSize: '11px', textAlign: 'left', borderLeft: '3px solid var(--accent)' }}>
                      <strong>8:45 PM EST</strong>
                      <div>Ashtanga B2</div>
                    </div>

                    <div style={{ backgroundColor: '#FEF3C7', borderRadius: '8px', padding: '6px 8px', fontSize: '11px', textAlign: 'left', borderLeft: '3px solid var(--accent)' }}>
                      <strong>10:00 PM EST</strong>
                      <div>Ashtanga B3</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: STUDENT BOOKINGS MANAGEMENT */}
        {activeTab === 'bookings' && (
          <div style={{ flex: 1, overflowY: 'auto', backgroundColor: '#FFFFFF', borderRadius: '18px', border: '1px solid rgba(194, 94, 26, 0.15)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-sand)', borderBottom: '1.5px solid rgba(194, 94, 26, 0.15)' }}>
                  <th style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--primary-dark)' }}>Student & Contact</th>
                  <th style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--primary-dark)' }}>Program & Batch</th>
                  <th style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--primary-dark)' }}>Package & Amount</th>
                  <th style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--primary-dark)' }}>Payment Verification</th>
                  <th style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--primary-dark)' }}>Status</th>
                  <th style={{ padding: '12px 16px', fontWeight: 800, color: 'var(--primary-dark)', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} style={{ borderBottom: '1px solid rgba(194, 94, 26, 0.08)' }}>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ fontWeight: 800 }}>{b.studentName}</div>
                      <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>{b.studentEmail} • {b.studentPhone}</div>
                    </td>

                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ fontWeight: 600 }}>{b.programName}</div>
                      <div style={{ fontSize: '11.5px', color: 'var(--primary)', fontWeight: 700 }}>{b.batch} ({b.date})</div>
                    </td>

                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ fontWeight: 700 }}>{b.packageType}</div>
                      <div style={{ fontSize: '11.5px', color: '#16A34A', fontWeight: 800 }}>${b.amount} USD</div>
                    </td>

                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '6px', backgroundColor: '#DCFCE7', color: '#16A34A', fontWeight: 700 }}>
                        ✓ {b.paymentStatus || 'Verified'}
                      </span>
                    </td>

                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '6px', backgroundColor: b.status === 'Confirmed' ? '#DCFCE7' : '#FEF3C7', color: b.status === 'Confirmed' ? '#16A34A' : '#B45309', fontWeight: 700 }}>
                        {b.status}
                      </span>
                    </td>

                    <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                      {b.status === 'Confirmed' ? (
                        <button
                          onClick={() => {
                            ClassSchedulingService.updateBookingStatus(b.id, 'Cancelled');
                            loadData();
                          }}
                          className="btn btn-outline btn-sm"
                          style={{ fontSize: '11px', padding: '4px 8px', color: '#DC2626', borderColor: '#FEE2E2' }}
                        >
                          Cancel
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            ClassSchedulingService.updateBookingStatus(b.id, 'Confirmed');
                            loadData();
                          }}
                          className="btn btn-primary btn-sm"
                          style={{ fontSize: '11px', padding: '4px 8px' }}
                        >
                          Confirm
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 4: INTEGRATIONS (ZOOM & GOOGLE MEET) */}
        {activeTab === 'integrations' && (
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
            {/* Zoom Integration Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '24px',
                border: '1.5px solid rgba(45, 140, 255, 0.2)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '14px', backgroundColor: '#2D8CFF', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Video size={28} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 style={{ fontSize: '17px', fontWeight: 800, margin: 0 }}>Zoom API & OAuth Connection</h4>
                    <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '9999px', backgroundColor: integrations.zoom?.connected ? '#DCFCE7' : '#FEE2E2', color: integrations.zoom?.connected ? '#16A34A' : '#DC2626', fontWeight: 800 }}>
                      {integrations.zoom?.connected ? '● Connected' : '● Disconnected'}
                    </span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: '4px 0 0' }}>
                    Account: <strong>{integrations.zoom?.accountEmail}</strong> • Auto-generates meetings with waiting rooms & secure passcodes.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  ZoomGoogleMeetService.toggleZoomConnection(!integrations.zoom?.connected);
                  loadData();
                }}
                className={`btn btn-sm ${integrations.zoom?.connected ? 'btn-outline' : 'btn-primary'}`}
              >
                {integrations.zoom?.connected ? 'Disconnect Zoom' : 'Connect Zoom via OAuth'}
              </button>
            </div>

            {/* Google Meet & Calendar Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '24px',
                border: '1.5px solid rgba(0, 137, 123, 0.2)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '14px', backgroundColor: '#00897B', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Calendar size={28} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 style={{ fontSize: '17px', fontWeight: 800, margin: 0 }}>Google Meet & Google Calendar Integration</h4>
                    <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '9999px', backgroundColor: integrations.google?.connected ? '#DCFCE7' : '#FEE2E2', color: integrations.google?.connected ? '#16A34A' : '#DC2626', fontWeight: 800 }}>
                      {integrations.google?.connected ? '● Connected' : '● Disconnected'}
                    </span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: '4px 0 0' }}>
                    Account: <strong>{integrations.google?.accountEmail}</strong> • Syncs class events with Google Calendar.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  ZoomGoogleMeetService.toggleGoogleConnection(!integrations.google?.connected);
                  loadData();
                }}
                className={`btn btn-sm ${integrations.google?.connected ? 'btn-outline' : 'btn-primary'}`}
              >
                {integrations.google?.connected ? 'Disconnect Google' : 'Connect Google via OAuth'}
              </button>
            </div>
          </div>
        )}

        {/* TAB 5: AUTOMATED REMINDERS */}
        {activeTab === 'reminders' && (
          <div style={{ flex: 1, overflowY: 'auto', textAlign: 'left' }}>
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', padding: '20px', marginBottom: '16px', border: '1px solid rgba(194, 94, 26, 0.15)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>Automated Notification Schedule</h4>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
                    The system automatically sends student reminders at 24 hours, 1 hour, and 15 minutes before class.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const dispatched = ClassSchedulingService.triggerAutomatedReminders();
                    alert(`Dispatched ${dispatched.length} automated reminders to all confirmed students!`);
                  }}
                  className="btn btn-primary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Send size={14} />
                  <span>Send Test Reminders Now</span>
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '16px' }}>
                <div style={{ backgroundColor: 'var(--bg-sand)', padding: '14px', borderRadius: '14px' }}>
                  <div style={{ fontWeight: 800, color: 'var(--primary-dark)', fontSize: '13px' }}>1. 24 Hours Before</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Class preparation reminder & batch time confirmation.</div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-sand)', padding: '14px', borderRadius: '14px' }}>
                  <div style={{ fontWeight: 800, color: 'var(--primary-dark)', fontSize: '13px' }}>2. 1 Hour Before</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Mat setup, water bottle, and login preparation.</div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-sand)', padding: '14px', borderRadius: '14px' }}>
                  <div style={{ fontWeight: 800, color: 'var(--primary-dark)', fontSize: '13px' }}>3. 15 Minutes Before</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Active "Join Live Class" link notification.</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CREATE / EDIT CLASS MODAL */}
        {isFormOpen && (
          <div className="modal-overlay active" style={{ zIndex: 1000 }} onClick={() => setIsFormOpen(false)}>
            <div
              className="modal-container admin-modal-card"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '680px',
                width: '94%',
                maxHeight: '88vh',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                textAlign: 'left',
                overflowY: 'auto',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setIsFormOpen(false)}
                style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>

              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-dark)', margin: '0 0 16px' }}>
                {editingClassId ? 'Edit Yoga Class' : 'Create New Yoga Class'}
              </h3>

              {formError && (
                <div style={{ padding: '10px 14px', backgroundColor: '#FEE2E2', color: '#DC2626', borderRadius: '10px', fontSize: '13px', marginBottom: '14px' }}>
                  ⚠️ {formError}
                </div>
              )}

              {formSuccess && (
                <div style={{ padding: '10px 14px', backgroundColor: '#DCFCE7', color: '#16A34A', borderRadius: '10px', fontSize: '13px', marginBottom: '14px' }}>
                  ✓ {formSuccess}
                </div>
              )}

              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* 1. Yoga Program & Batch */}
                <div className="form-grid-2">
                  <div>
                    <label className="label">Yoga Program</label>
                    <select
                      name="programId"
                      value={formData.programId}
                      onChange={handleProgramChange}
                      className="input"
                    >
                      <option value="traditional-hatha">Traditional Hatha Yoga (Morning)</option>
                      <option value="ashtanga-vinyasa">Ashtanga Vinyasa Primary Series (Evening)</option>
                    </select>
                  </div>

                  <div>
                    <label className="label">Batch Timing</label>
                    <select
                      name="batchTitle"
                      value={formData.batchTitle}
                      onChange={handleInputChange}
                      className="input"
                    >
                      {formData.programId === 'ashtanga-vinyasa' ? (
                        <>
                          <option value="Batch 1 — 7:30 PM EST">Batch 1 — 7:30 PM EST</option>
                          <option value="Batch 2 — 8:45 PM EST">Batch 2 — 8:45 PM EST</option>
                          <option value="Batch 3 — 10:00 PM EST">Batch 3 — 10:00 PM EST</option>
                        </>
                      ) : (
                        <>
                          <option value="Batch 1 — 6:30 AM EST">Batch 1 — 6:30 AM EST</option>
                          <option value="Batch 2 — 7:45 AM EST">Batch 2 — 7:45 AM EST</option>
                          <option value="Batch 3 — 9:00 AM EST">Batch 3 — 9:00 AM EST</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* 2. Title & Description */}
                <div>
                  <label className="label">Class Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>

                {/* 3. Date & Time */}
                <div className="form-grid-3">
                  <div>
                    <label className="label">Class Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="input"
                    />
                  </div>

                  <div>
                    <label className="label">Start Time</label>
                    <input
                      type="time"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleInputChange}
                      required
                      className="input"
                    />
                  </div>

                  <div>
                    <label className="label">End Time</label>
                    <input
                      type="time"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleInputChange}
                      required
                      className="input"
                    />
                  </div>
                </div>

                {/* 4. Recurrence System */}
                {!editingClassId && (
                  <div style={{ backgroundColor: 'var(--bg-sand)', padding: '14px', borderRadius: '16px', border: '1px solid rgba(194, 94, 26, 0.12)' }}>
                    <label className="label" style={{ marginBottom: '6px' }}>Recurring Class Generator</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '10px' }}>
                      {['none', 'daily', 'weekly', 'monthly'].map((rec) => (
                        <button
                          key={rec}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, recurrence: rec }))}
                          style={{
                            padding: '6px',
                            borderRadius: '8px',
                            border: '1px solid #EAE5DB',
                            fontSize: '12px',
                            fontWeight: 800,
                            textTransform: 'capitalize',
                            backgroundColor: formData.recurrence === rec ? 'var(--primary)' : '#FFF',
                            color: formData.recurrence === rec ? '#FFF' : 'var(--text-main)',
                            cursor: 'pointer',
                          }}
                        >
                          {rec === 'none' ? 'One-time' : rec}
                        </button>
                      ))}
                    </div>

                    {formData.recurrence === 'weekly' && (
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((d) => (
                          <button
                            key={d}
                            type="button"
                            onClick={() => handleDayToggle(d)}
                            style={{
                              padding: '4px 8px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: 700,
                              border: 'none',
                              backgroundColor: formData.recurringDays.includes(d) ? 'var(--primary-dark)' : '#EAE5DB',
                              color: formData.recurringDays.includes(d) ? '#FFF' : 'var(--text-muted)',
                              cursor: 'pointer',
                            }}
                          >
                            {d.slice(0, 3)}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 5. Meeting Platform & Automatic Creation */}
                <div>
                  <label className="label">Meeting Platform</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '10px' }}>
                    {['Zoom', 'Google Meet', 'Manual Link'].map((plt) => (
                      <button
                        key={plt}
                        type="button"
                        onClick={() => setFormData((p) => ({ ...p, platform: plt }))}
                        style={{
                          padding: '10px',
                          borderRadius: '12px',
                          border: '1.5px solid',
                          borderColor: formData.platform === plt ? 'var(--primary)' : 'rgba(194, 94, 26, 0.15)',
                          backgroundColor: formData.platform === plt ? 'var(--primary-50)' : '#FFF',
                          color: formData.platform === plt ? 'var(--primary-dark)' : 'var(--text-muted)',
                          fontSize: '13px',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                        }}
                      >
                        <Video size={15} />
                        <span>{plt}</span>
                      </button>
                    ))}
                  </div>

                  {formData.platform === 'Manual Link' && (
                    <input
                      type="url"
                      name="manualMeetingLink"
                      placeholder="https://zoom.us/j/... or https://meet.google.com/..."
                      value={formData.manualMeetingLink}
                      onChange={handleInputChange}
                      required
                      className="input"
                    />
                  )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="btn btn-outline"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    {isSubmitting ? 'Generating Meeting...' : editingClassId ? 'Save Changes' : 'Create Class & Meeting Link'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .admin-modal-card {
          padding: 28px;
        }
        @media (max-width: 640px) {
          .admin-modal-card {
            padding: 20px 14px !important;
            border-radius: 18px !important;
          }
        }
      `}</style>
    </div>
  );
}
