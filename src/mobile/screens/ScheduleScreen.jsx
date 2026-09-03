import React, { useState } from 'react';
import { Clock, Globe, Calendar, Sun, Flame, ArrowRight, Video, CheckCircle2 } from 'lucide-react';
import { YOGA_PROGRAMS, TIMEZONE_OPTIONS } from '../../data/yogaData';

export default function ScheduleScreen({ onSelectBatch }) {
  const [selectedTz, setSelectedTz] = useState('EST');
  const [filterType, setFilterType] = useState('all'); // 'all', 'morning', 'evening'

  // Convert EST time to the selected timezone
  const convertEST = (hourDecimal, targetTzCode) => {
    const tzObj = TIMEZONE_OPTIONS.find((t) => t.code === targetTzCode) || TIMEZONE_OPTIONS[0];
    const diffHours = tzObj.offset + 5;
    let newHour = (hourDecimal + diffHours) % 24;
    if (newHour < 0) newHour += 24;

    const hours = Math.floor(newHour);
    const minutes = Math.round((newHour - hours) * 60);
    const isPM = hours >= 12;
    const formattedHour = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const ampm = isPM ? 'PM' : 'AM';

    return `${formattedHour}:${formattedMinutes} ${ampm} ${targetTzCode}`;
  };

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sun'];

  return (
    <div style={{ padding: '16px 16px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Timezone Converter Pill */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '12px 14px',
          border: '1px solid rgba(194, 94, 26, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Globe size={16} style={{ color: 'var(--primary)' }} />
          <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--text-main)' }}>Timezone:</span>
        </div>
        <select
          value={selectedTz}
          onChange={(e) => setSelectedTz(e.target.value)}
          className="form-select"
          style={{
            fontSize: '12px',
            fontWeight: 700,
            padding: '4px 8px',
            borderRadius: '8px',
            border: '1px solid var(--primary)',
            color: 'var(--primary-dark)',
            backgroundColor: 'var(--primary-50)',
          }}
        >
          {TIMEZONE_OPTIONS.map((t) => (
            <option key={t.code} value={t.code}>
              {t.flag} {t.code} ({t.name.split(' ')[0]})
            </option>
          ))}
        </select>
      </div>

      {/* Filter Tabs: All / Morning Hatha / Evening Ashtanga */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          backgroundColor: '#EAE5DB',
          padding: '4px',
          borderRadius: '14px',
        }}
      >
        <button
          onClick={() => setFilterType('all')}
          style={{
            padding: '8px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '11.5px',
            fontWeight: 800,
            backgroundColor: filterType === 'all' ? 'var(--primary)' : 'transparent',
            color: filterType === 'all' ? '#FFFFFF' : 'var(--text-muted)',
            cursor: 'pointer',
          }}
        >
          All 6 Batches
        </button>

        <button
          onClick={() => setFilterType('morning')}
          style={{
            padding: '8px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '11.5px',
            fontWeight: 800,
            backgroundColor: filterType === 'morning' ? 'var(--primary)' : 'transparent',
            color: filterType === 'morning' ? '#FFFFFF' : 'var(--text-muted)',
            cursor: 'pointer',
          }}
        >
          Morning (Hatha)
        </button>

        <button
          onClick={() => setFilterType('evening')}
          style={{
            padding: '8px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '11.5px',
            fontWeight: 800,
            backgroundColor: filterType === 'evening' ? 'var(--accent)' : 'transparent',
            color: filterType === 'evening' ? '#FFFFFF' : 'var(--text-muted)',
            cursor: 'pointer',
          }}
        >
          Evening (Ashtanga)
        </button>
      </div>

      {/* Program 1: Traditional Hatha Yoga */}
      {(filterType === 'all' || filterType === 'morning') && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Sun size={18} style={{ color: 'var(--primary)' }} />
            <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary-dark)' }}>
              Traditional Hatha Yoga (Morning)
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {YOGA_PROGRAMS[0].batches.map((batch) => {
              const localTime = convertEST(batch.hourEST, selectedTz);
              return (
                <div
                  key={batch.id}
                  className="mobile-card"
                  style={{
                    padding: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
                        {batch.batchNumber}
                      </span>
                      <span style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--text-main)' }}>
                        {batch.timeEST}
                      </span>
                    </div>

                    {selectedTz !== 'EST' && (
                      <div style={{ fontSize: '11.5px', color: 'var(--accent)', fontWeight: 700 }}>
                        Local: {localTime}
                      </div>
                    )}
                    <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                      {batch.tag}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectBatch('traditional-hatha', batch.timeEST)}
                    className="btn btn-primary btn-sm"
                    style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '10px' }}
                  >
                    Book
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Program 2: Ashtanga Vinyasa Primary Series */}
      {(filterType === 'all' || filterType === 'evening') && (
        <div style={{ marginTop: filterType === 'all' ? '10px' : '0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Flame size={18} style={{ color: 'var(--accent)' }} />
            <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--accent-hover)' }}>
              Ashtanga Vinyasa Primary Series (Evening)
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {YOGA_PROGRAMS[1].batches.map((batch) => {
              const localTime = convertEST(batch.hourEST, selectedTz);
              return (
                <div
                  key={batch.id}
                  className="mobile-card"
                  style={{
                    padding: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase' }}>
                        {batch.batchNumber}
                      </span>
                      <span style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--text-main)' }}>
                        {batch.timeEST}
                      </span>
                    </div>

                    {selectedTz !== 'EST' && (
                      <div style={{ fontSize: '11.5px', color: 'var(--accent-hover)', fontWeight: 700 }}>
                        Local: {localTime}
                      </div>
                    )}
                    <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                      {batch.tag}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectBatch('ashtanga-vinyasa', batch.timeEST)}
                    className="btn btn-accent btn-sm"
                    style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '10px' }}
                  >
                    Book
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
