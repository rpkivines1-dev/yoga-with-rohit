import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Video as VideoIcon, VideoOff, MessageSquare, PhoneOff, Users, Hand, Award, Sun, Sparkles, Send } from 'lucide-react';

export default function LiveClassRoomScreen({ classInfo, onClose }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [activeTab, setActiveTab] = useState('video'); // 'video' | 'chat'
  const [secondsElapsed, setSecondsElapsed] = useState(120);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Rohit (Instructor)', text: 'Namaste Sarah! Please adjust your mat so I can see your hip alignment in the forward fold.', time: '06:32 AM', isTeacher: true },
    { sender: 'Sarah (You)', text: 'Namaste Rohit! Adjusted the camera now. Ready.', time: '06:33 AM', isTeacher: false },
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    const msg = {
      sender: 'Sarah (You)',
      text: newMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isTeacher: false,
    };
    setChatMessages((prev) => [...prev, msg]);
    setNewMessage('');
  };

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#18110D',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 300,
        overflow: 'hidden',
      }}
    >
      {/* Top Classroom Bar */}
      <div
        style={{
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(35, 22, 13, 0.95)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444', animation: 'pulse 1.5s infinite' }} />
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#FDE68A', textTransform: 'uppercase' }}>
              Live Class • {formatTimer(secondsElapsed)}
            </span>
          </div>
          <h4 style={{ fontSize: '14px', fontWeight: 800, margin: 0, color: '#FFFFFF' }}>
            {classInfo?.programName || 'Traditional Hatha Yoga'}
          </h4>
        </div>

        <button
          onClick={onClose}
          style={{
            backgroundColor: '#DC2626',
            color: '#FFFFFF',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '10px',
            fontSize: '11.5px',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <PhoneOff size={14} />
          <span>Leave</span>
        </button>
      </div>

      {/* Main Classroom View */}
      {activeTab === 'video' ? (
        <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column' }}>
          {/* Main Teacher Video Feed (Rohit) */}
          <div
            style={{
              flex: 1,
              position: 'relative',
              backgroundColor: '#000000',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/rohit-waterfall-meditation.jpg"
              alt="Rohit Yoga Instruction Stream"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.92,
              }}
            />

            {/* Teacher Name & Certified Badge */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                backgroundColor: 'rgba(35, 22, 13, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '6px 12px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Award size={14} style={{ color: '#FDE68A' }} />
              <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#FFFFFF' }}>
                Rohit (Teacher • Rishikesh)
              </span>
            </div>

            {/* Live Alignment Coaching Ticker */}
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                right: '12px',
                backgroundColor: 'rgba(35, 22, 13, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '8px 12px',
                borderRadius: '12px',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                fontSize: '11.5px',
                color: '#FDE68A',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Sparkles size={14} style={{ color: '#FDE68A', flexShrink: 0 }} />
              <span>
                <strong>Live Cue:</strong> Lengthen your spine on inhalation; sink hips on exhalation.
              </span>
            </div>

            {/* Student PiP Camera (Self View) */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '90px',
                height: '120px',
                borderRadius: '14px',
                backgroundColor: '#2D241E',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isVideoOn ? (
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
                  alt="Student Self View"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center' }}>
                  Camera Off
                </div>
              )}
              <div style={{ position: 'absolute', bottom: '4px', left: '6px', fontSize: '9px', fontWeight: 800, color: '#FFF' }}>
                You
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* In-Class Live Chat */
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#23160D', padding: '12px' }}>
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  padding: '8px 12px',
                  borderRadius: '12px',
                  backgroundColor: msg.isTeacher ? 'rgba(194, 94, 26, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                  border: msg.isTeacher ? '1px solid rgba(194, 94, 26, 0.4)' : 'none',
                  fontSize: '12px',
                  maxWidth: '85%',
                  alignSelf: msg.isTeacher ? 'flex-start' : 'flex-end',
                }}
              >
                <div style={{ fontSize: '10px', fontWeight: 800, color: msg.isTeacher ? '#FDE68A' : '#FFFFFF', marginBottom: '2px' }}>
                  {msg.sender} • {msg.time}
                </div>
                <div style={{ color: '#FFFFFF' }}>{msg.text}</div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
            <input
              type="text"
              placeholder="Ask Rohit a question..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.2)',
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                fontSize: '12px',
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: 'var(--primary)',
                color: '#FFFFFF',
                border: 'none',
                padding: '8px 14px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}

      {/* Bottom Classroom Controls Bar */}
      <div
        style={{
          height: '70px',
          backgroundColor: '#1F150F',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '0 12px',
        }}
      >
        {/* Mute Toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            background: 'none',
            border: 'none',
            color: isMuted ? '#EF4444' : '#FFFFFF',
            cursor: 'pointer',
          }}
        >
          <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: isMuted ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
          </div>
          <span style={{ fontSize: '10px', fontWeight: 700 }}>{isMuted ? 'Unmute' : 'Mute'}</span>
        </button>

        {/* Video Toggle */}
        <button
          onClick={() => setIsVideoOn(!isVideoOn)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            background: 'none',
            border: 'none',
            color: !isVideoOn ? '#EF4444' : '#FFFFFF',
            cursor: 'pointer',
          }}
        >
          <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: !isVideoOn ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {!isVideoOn ? <VideoOff size={18} /> : <VideoIcon size={18} />}
          </div>
          <span style={{ fontSize: '10px', fontWeight: 700 }}>{isVideoOn ? 'Stop Video' : 'Start Video'}</span>
        </button>

        {/* Chat / Video Switcher */}
        <button
          onClick={() => setActiveTab(activeTab === 'video' ? 'chat' : 'video')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            background: 'none',
            border: 'none',
            color: activeTab === 'chat' ? 'var(--primary)' : '#FFFFFF',
            cursor: 'pointer',
          }}
        >
          <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: activeTab === 'chat' ? 'var(--primary-50)' : 'rgba(255, 255, 255, 0.15)', color: activeTab === 'chat' ? 'var(--primary)' : '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MessageSquare size={18} />
          </div>
          <span style={{ fontSize: '10px', fontWeight: 700 }}>{activeTab === 'video' ? 'Chat' : 'Video'}</span>
        </button>
      </div>
    </div>
  );
}
