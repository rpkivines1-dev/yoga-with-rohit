import React, { useState } from 'react';
import { Clock, Globe, Calendar, CheckCircle2, ArrowRight, Sparkles, Video, Users, MapPin, Sun, Flame } from 'lucide-react';
import { YOGA_PROGRAMS, TIMEZONE_OPTIONS } from '../../data/yogaData';

export default function ClassSchedule({ onSelectBatch }) {
  const [selectedTz, setSelectedTz] = useState('EST');
  const [selectedProgramId, setSelectedProgramId] = useState('all'); // 'all', 'traditional-hatha', 'ashtanga-vinyasa'

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

  const filteredPrograms = selectedProgramId === 'all'
    ? YOGA_PROGRAMS
    : YOGA_PROGRAMS.filter((p) => p.id === selectedProgramId);

  return (
    <section
      id="schedule"
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderTop: '1px solid rgba(194, 94, 26, 0.08)',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '44px' }}>
          <div className="section-tag">
            <Clock size={14} />
            <span>LIVE ONLINE YOGA SCHEDULE</span>
          </div>

          <h2 className="section-title">
            Class Schedule & <span style={{ color: 'var(--primary)' }}>Yoga Programs</span>
          </h2>

          <p className="section-subtitle">
            Choose between our morning <strong>Traditional Hatha Yoga</strong> batches and evening <strong>Ashtanga Vinyasa Primary Series</strong> batches. Taught live directly from Rishikesh.
          </p>

          {/* Timezone Note Banner */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '16px',
              padding: '10px 22px',
              backgroundColor: 'var(--primary-50)',
              borderRadius: '9999px',
              border: '1px solid var(--primary-100)',
              fontSize: '13.5px',
              color: 'var(--primary-dark)',
              fontWeight: 700,
            }}
          >
            <Globe size={16} style={{ color: 'var(--primary)' }} />
            <span>Official class timings are in <strong>EST (Eastern Standard Time)</strong>.</span>
          </div>
        </div>

        {/* Program Filter Tabs & Timezone Switcher Bar Centered */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto 48px',
            backgroundColor: 'var(--bg-sand)',
            borderRadius: '24px',
            border: '1.5px solid rgba(194, 94, 26, 0.14)',
          }}
          className="schedule-control-bar"
        >
          {/* Program Tabs Row Centered */}
          <div className="schedule-tabs-row">
            <button
              onClick={() => setSelectedProgramId('all')}
              className={`schedule-tab-btn ${selectedProgramId === 'all' ? 'active' : ''}`}
              style={{
                backgroundColor: selectedProgramId === 'all' ? 'var(--primary)' : '#FFFFFF',
                color: selectedProgramId === 'all' ? '#FFFFFF' : 'var(--text-main)',
                border: '1px solid rgba(194, 94, 26, 0.2)',
              }}
            >
              All 6 Batches
            </button>

            <button
              onClick={() => setSelectedProgramId('traditional-hatha')}
              className={`schedule-tab-btn ${selectedProgramId === 'traditional-hatha' ? 'active' : ''}`}
              style={{
                backgroundColor: selectedProgramId === 'traditional-hatha' ? 'var(--primary)' : '#FFFFFF',
                color: selectedProgramId === 'traditional-hatha' ? '#FFFFFF' : 'var(--text-main)',
                border: '1px solid rgba(194, 94, 26, 0.2)',
              }}
            >
              <Sun size={15} style={{ color: selectedProgramId === 'traditional-hatha' ? '#FDE68A' : '#D97706' }} />
              <span>Traditional Hatha (Morning)</span>
            </button>

            <button
              onClick={() => setSelectedProgramId('ashtanga-vinyasa')}
              className={`schedule-tab-btn ${selectedProgramId === 'ashtanga-vinyasa' ? 'active' : ''}`}
              style={{
                backgroundColor: selectedProgramId === 'ashtanga-vinyasa' ? 'var(--accent)' : '#FFFFFF',
                color: selectedProgramId === 'ashtanga-vinyasa' ? '#FFFFFF' : 'var(--text-main)',
                border: '1px solid rgba(180, 83, 9, 0.3)',
              }}
            >
              <Flame size={15} style={{ color: selectedProgramId === 'ashtanga-vinyasa' ? '#FFFFFF' : '#B45309' }} />
              <span>Ashtanga Vinyasa (Evening)</span>
            </button>
          </div>

          {/* Timezone Converter Centered */}
          <div className="schedule-tz-converter">
            <div className="schedule-tz-label">
              <Globe size={15} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <span>Convert Timezone:</span>
            </div>
            <select
              value={selectedTz}
              onChange={(e) => setSelectedTz(e.target.value)}
              className="schedule-tz-select"
              aria-label="Select Timezone"
            >
              {TIMEZONE_OPTIONS.map((tz) => (
                <option key={tz.code} value={tz.code}>
                  {tz.flag} {tz.code} - {tz.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Program Sections Display */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', marginBottom: '56px' }}>
          {filteredPrograms.map((prog) => {
            const isHatha = prog.id === 'traditional-hatha';

            return (
              <div key={prog.id} style={{ textAlign: 'left' }}>
                {/* Program Category Header Card */}
                <div
                  style={{
                    backgroundColor: isHatha ? 'var(--primary-50)' : '#FEF3C7',
                    borderRadius: '24px',
                    padding: '28px 32px',
                    border: isHatha ? '1.5px solid var(--primary-100)' : '1.5px solid rgba(245, 158, 11, 0.4)',
                    marginBottom: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px',
                  }}
                  className="schedule-prog-header"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '720px' }} className="schedule-prog-info">
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '16px',
                        backgroundColor: isHatha ? 'var(--primary)' : 'var(--accent)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: 'var(--shadow-md)',
                      }}
                      className="schedule-prog-icon"
                    >
                      {isHatha ? <Sun size={26} /> : <Flame size={26} />}
                    </div>

                    <div className="schedule-prog-text">
                      <div className="schedule-prog-tag-row" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: isHatha ? 'var(--primary)' : 'var(--accent-hover)',
                          }}
                        >
                          {prog.tag} • {prog.level}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                        {prog.name}
                      </h3>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '4px 0 0', lineHeight: 1.5 }}>
                        {prog.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className="badge schedule-prog-badge"
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: isHatha ? 'var(--primary-dark)' : 'var(--accent-hover)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      fontSize: '12px',
                      fontWeight: 800,
                    }}
                  >
                    📅 Schedule: Monday, Wednesday, Friday
                  </span>
                </div>

                {/* 3 Batches Grid for this Program */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                  }}
                  className="schedule-batch-grid"
                >
                  {prog.batches.map((batch, index) => {
                    const convertedTime = convertEST(batch.hourEST, selectedTz);

                    return (
                      <div
                        key={batch.id}
                        className="nicepage-card"
                        style={{
                          padding: '30px 24px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          borderRadius: '24px',
                          position: 'relative',
                          border: batch.popular ? (isHatha ? '2.5px solid var(--primary)' : '2.5px solid var(--accent)') : '1.5px solid rgba(194, 94, 26, 0.14)',
                          height: '100%',
                        }}
                      >
                        {/* Popular Badge */}
                        {batch.popular && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '-12px',
                              right: '20px',
                              backgroundColor: isHatha ? 'var(--primary)' : 'var(--accent)',
                              color: '#FFFFFF',
                              fontSize: '11px',
                              fontWeight: 800,
                              textTransform: 'uppercase',
                              letterSpacing: '0.08em',
                              padding: '4px 12px',
                              borderRadius: '9999px',
                            }}
                          >
                            Most Popular
                          </div>
                        )}

                        <div>
                          {/* Batch Header */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                            <div
                              style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '10px',
                                backgroundColor: isHatha ? 'var(--primary-50)' : '#FEF3C7',
                                color: isHatha ? 'var(--primary)' : 'var(--accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                              }}
                            >
                              <Video size={18} />
                            </div>
                            <div>
                              <div style={{ fontSize: '12px', fontWeight: 800, color: isHatha ? 'var(--primary)' : 'var(--accent)', textTransform: 'uppercase' }}>
                                {batch.batchNumber}
                              </div>
                              <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                                {batch.name}
                              </h4>
                            </div>
                          </div>

                          {/* Time Banner */}
                          <div
                            style={{
                              padding: '16px 14px',
                              backgroundColor: 'var(--bg-sand)',
                              borderRadius: '16px',
                              marginBottom: '16px',
                              border: '1px solid rgba(194, 94, 26, 0.1)',
                              textAlign: 'center',
                            }}
                          >
                            <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                              Official Class Time (EST)
                            </div>
                            <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--primary-dark)', fontFamily: 'var(--font-heading)' }}>
                              {batch.timeEST}
                            </div>

                            {selectedTz !== 'EST' && (
                              <div
                                style={{
                                  marginTop: '6px',
                                  paddingTop: '6px',
                                  borderTop: '1px dashed rgba(194, 94, 26, 0.2)',
                                  fontSize: '13px',
                                  fontWeight: 700,
                                  color: 'var(--accent)',
                                }}
                              >
                                Local: {convertedTime}
                              </div>
                            )}
                          </div>

                          {/* Description */}
                          <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px', minHeight: '44px' }}>
                            {batch.description}
                          </p>

                          {/* Feature points */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--text-main)' }}>
                              <CheckCircle2 size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                              <span>Live 60-Min Zoom Session</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--text-main)' }}>
                              <CheckCircle2 size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                              <span>Real-Time Feedback from Rohit</span>
                            </div>
                          </div>
                        </div>

                        {/* Select Batch CTA */}
                        <button
                          onClick={() => onSelectBatch({ ...batch, programId: prog.id, programName: prog.name })}
                          className={`btn ${isHatha ? 'btn-primary' : 'btn-accent'} w-full`}
                          style={{ padding: '12px 18px', fontSize: '13.5px' }}
                        >
                          <span>Select {batch.batchNumber} ({batch.timeEST})</span>
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule Summary Master Table */}
        <div
          style={{
            backgroundColor: '#FAF6F0',
            borderRadius: '24px',
            padding: '28px',
            border: '1.5px solid rgba(194, 94, 26, 0.14)',
            maxWidth: '920px',
            margin: '0 auto',
            overflowX: 'auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '8px' }}>
            <div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                Complete Live Class Schedule Overview
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
                All 6 Morning Hatha & Evening Ashtanga batches in Eastern Standard Time
              </p>
            </div>
            <span style={{ fontSize: '12.5px', color: 'var(--accent)', fontWeight: 700 }}>
              Monday, Wednesday & Friday Live Batches
            </span>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '580px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(194, 94, 26, 0.2)' }}>
                <th style={{ padding: '10px 14px', fontSize: '12.5px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Program</th>
                <th style={{ padding: '10px 14px', fontSize: '12.5px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Batch</th>
                <th style={{ padding: '10px 14px', fontSize: '12.5px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Official Time (EST)</th>
                <th style={{ padding: '10px 14px', fontSize: '12.5px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Local Time ({selectedTz})</th>
                <th style={{ padding: '10px 14px', fontSize: '12.5px', color: 'var(--text-muted)', textTransform: 'uppercase', textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Traditional Hatha Yoga Rows */}
              {YOGA_PROGRAMS[0].batches.map((b) => (
                <tr key={b.id} style={{ borderBottom: '1px solid rgba(194, 94, 26, 0.08)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--primary)' }}>
                    🧘 Traditional Hatha Yoga
                  </td>
                  <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--text-main)' }}>{b.batchNumber}</td>
                  <td style={{ padding: '12px 14px', fontWeight: 800, color: 'var(--primary-dark)' }}>{b.timeEST}</td>
                  <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--accent)' }}>{convertEST(b.hourEST, selectedTz)}</td>
                  <td style={{ padding: '12px 14px', textAlign: 'right' }}>
                    <button
                      onClick={() => onSelectBatch({ ...b, programId: YOGA_PROGRAMS[0].id, programName: YOGA_PROGRAMS[0].name })}
                      className="btn btn-outline btn-sm"
                      style={{ padding: '6px 14px', fontSize: '12px' }}
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}

              {/* Ashtanga Vinyasa Primary Series Rows */}
              {YOGA_PROGRAMS[1].batches.map((b) => (
                <tr key={b.id} style={{ borderBottom: '1px solid rgba(194, 94, 26, 0.08)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--accent)' }}>
                    🧘‍♂️ Ashtanga Vinyasa Primary Series
                  </td>
                  <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--text-main)' }}>{b.batchNumber}</td>
                  <td style={{ padding: '12px 14px', fontWeight: 800, color: 'var(--primary-dark)' }}>{b.timeEST}</td>
                  <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--accent)' }}>{convertEST(b.hourEST, selectedTz)}</td>
                  <td style={{ padding: '12px 14px', textAlign: 'right' }}>
                    <button
                      onClick={() => onSelectBatch({ ...b, programId: YOGA_PROGRAMS[1].id, programName: YOGA_PROGRAMS[1].name })}
                      className="btn btn-outline btn-sm"
                      style={{ padding: '6px 14px', fontSize: '12px' }}
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .schedule-control-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 14px;
          padding: 20px 24px;
          box-shadow: var(--shadow-sm);
        }
        .schedule-tabs-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          width: 100%;
        }
        .schedule-tab-btn {
          padding: 9px 18px;
          border-radius: 9999px;
          font-size: 13.5px;
          font-weight: 800;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }
        .schedule-tz-converter {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          width: 100%;
          padding-top: 12px;
          border-top: 1px solid rgba(194, 94, 26, 0.12);
        }
        .schedule-tz-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-muted);
        }
        .schedule-tz-select {
          padding: 8px 14px;
          font-size: 13px;
          font-weight: 700;
          background-color: #FFFFFF;
          border-radius: 12px;
          border: 1.5px solid var(--primary);
          color: var(--primary-dark);
          cursor: pointer;
          outline: none;
          max-width: 320px;
        }
        @media (max-width: 960px) {
          .schedule-batch-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 768px) {
          .schedule-prog-header {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 24px 18px !important;
            gap: 16px !important;
            border-radius: 20px !important;
          }
          .schedule-prog-info {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 12px !important;
            max-width: 100% !important;
          }
          .schedule-prog-icon {
            margin: 0 auto !important;
          }
          .schedule-prog-text {
            text-align: center !important;
          }
          .schedule-prog-tag-row {
            justify-content: center !important;
          }
          .schedule-prog-badge {
            margin: 0 auto !important;
            text-align: center !important;
            display: inline-flex !important;
            justify-content: center !important;
            width: auto !important;
            max-width: 100% !important;
            border-radius: 9999px !important;
            padding: 6px 16px !important;
          }
        }
        @media (max-width: 640px) {
          .schedule-control-bar {
            padding: 16px 12px !important;
            border-radius: 20px !important;
            gap: 12px !important;
          }
          .schedule-tabs-row {
            gap: 8px !important;
            justify-content: center !important;
          }
          .schedule-tab-btn {
            font-size: 12px !important;
            padding: 7px 12px !important;
          }
          .schedule-tz-converter {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 8px !important;
            width: 100% !important;
            padding-top: 10px !important;
          }
          .schedule-tz-label {
            justify-content: center !important;
            font-size: 12.5px !important;
          }
          .schedule-tz-select {
            width: 100% !important;
            max-width: 300px !important;
            text-align: center !important;
            text-align-last: center !important;
            font-size: 12.5px !important;
            padding: 8px 10px !important;
            border-radius: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
