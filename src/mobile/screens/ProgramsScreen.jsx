import React, { useState } from 'react';
import { Sun, Flame, CheckCircle2, Clock, Sparkles, ArrowRight, ShieldCheck, Video, Heart } from 'lucide-react';
import { YOGA_PROGRAMS } from '../../data/yogaData';

export default function ProgramsScreen({ initialProgramId = 'traditional-hatha', onBookProgram }) {
  const [activeProgId, setActiveProgId] = useState(initialProgramId);

  const activeProg = YOGA_PROGRAMS.find((p) => p.id === activeProgId) || YOGA_PROGRAMS[0];
  const isHatha = activeProg.id === 'traditional-hatha';

  return (
    <div style={{ padding: '16px 16px 28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Top Segmented Selector */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          backgroundColor: '#EAE5DB',
          padding: '4px',
          borderRadius: '16px',
        }}
      >
        <button
          onClick={() => setActiveProgId('traditional-hatha')}
          style={{
            padding: '10px 8px',
            borderRadius: '13px',
            border: 'none',
            fontSize: '12.5px',
            fontWeight: 800,
            backgroundColor: isHatha ? 'var(--primary)' : 'transparent',
            color: isHatha ? '#FFFFFF' : 'var(--text-muted)',
            boxShadow: isHatha ? '0 3px 10px rgba(194, 94, 26, 0.3)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <Sun size={15} />
          <span>Hatha (Morning)</span>
        </button>

        <button
          onClick={() => setActiveProgId('ashtanga-vinyasa')}
          style={{
            padding: '10px 8px',
            borderRadius: '13px',
            border: 'none',
            fontSize: '12.5px',
            fontWeight: 800,
            backgroundColor: !isHatha ? 'var(--accent)' : 'transparent',
            color: !isHatha ? '#FFFFFF' : 'var(--text-muted)',
            boxShadow: !isHatha ? '0 3px 10px rgba(217, 119, 6, 0.3)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <Flame size={15} />
          <span>Ashtanga (Evening)</span>
        </button>
      </div>

      {/* Program Banner */}
      <div
        style={{
          backgroundColor: isHatha ? 'var(--primary-50)' : '#FEF3C7',
          borderRadius: '24px',
          padding: '20px 18px',
          border: isHatha ? '1.5px solid var(--primary-100)' : '1.5px solid rgba(245, 158, 11, 0.4)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              backgroundColor: isHatha ? 'var(--primary)' : 'var(--accent)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {isHatha ? <Sun size={20} /> : <Flame size={20} />}
          </div>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: isHatha ? 'var(--primary)' : 'var(--accent-hover)' }}>
              {activeProg.tag} • {activeProg.level}
            </span>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              {activeProg.name}
            </h3>
          </div>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, margin: '8px 0 0' }}>
          {activeProg.description}
        </p>
      </div>

      {/* Available Batches */}
      <div>
        <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
          Available Live Batches (EST)
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {activeProg.batches.map((batch) => (
            <div
              key={batch.id}
              className="mobile-card"
              style={{
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderLeft: batch.popular ? `4px solid ${isHatha ? 'var(--primary)' : 'var(--accent)'}` : '1px solid rgba(194, 94, 26, 0.12)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--bg-sand)',
                    color: isHatha ? 'var(--primary)' : 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--text-main)' }}>
                      {batch.timeEST}
                    </span>
                    {batch.popular && (
                      <span style={{ fontSize: '10px', fontWeight: 800, color: '#FFFFFF', backgroundColor: isHatha ? 'var(--primary)' : 'var(--accent)', padding: '2px 6px', borderRadius: '6px' }}>
                        Popular
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                    {batch.batchNumber} • {batch.tag}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onBookProgram(activeProg.id, batch.timeEST)}
                className={`btn ${isHatha ? 'btn-primary' : 'btn-accent'} btn-sm`}
                style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '10px' }}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Program Highlights */}
      <div className="mobile-card" style={{ padding: '16px' }}>
        <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
          What You Will Learn & Practice:
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {activeProg.highlights.map((h, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: 'var(--text-main)' }}>
              <CheckCircle2 size={14} style={{ color: isHatha ? 'var(--primary)' : 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Sticky-style CTA Button */}
      <button
        onClick={() => onBookProgram(activeProg.id, activeProg.batches[0].timeEST)}
        className={`btn ${isHatha ? 'btn-primary' : 'btn-accent'} w-full`}
        style={{ padding: '14px', fontSize: '14.5px', borderRadius: '16px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
      >
        <Sparkles size={16} />
        <span>Book {activeProg.name}</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
