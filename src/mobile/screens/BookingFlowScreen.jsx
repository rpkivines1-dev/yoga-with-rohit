import React, { useState } from 'react';
import { Sparkles, Sun, Flame, CheckCircle2, ShieldCheck, CreditCard, Lock, Calendar, Clock, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { useMobileAuth } from '../context/MobileAuthContext';
import { useMobileClasses } from '../context/MobileClassContext';
import { YOGA_PROGRAMS } from '../../data/yogaData';

export default function BookingFlowScreen({ initialData = {}, onBookingComplete, onCancel }) {
  const { currentUser } = useMobileAuth();
  const { createBooking } = useMobileClasses();

  // Wizard state
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProgramId, setSelectedProgramId] = useState(initialData.programId || 'traditional-hatha');
  const [selectedPackage, setSelectedPackage] = useState(initialData.plan || 'demo'); // 'demo', 'monthly', 'daily'
  const [selectedBatch, setSelectedBatch] = useState(initialData.batch || '6:30 AM EST');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState('stripe'); // 'stripe' | 'paypal'
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '4242 •••• •••• 4242',
    expiry: '12/28',
    cvc: '888',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const currentProgram = YOGA_PROGRAMS.find((p) => p.id === selectedProgramId) || YOGA_PROGRAMS[0];

  const handleProgramSelect = (progId) => {
    setSelectedProgramId(progId);
    const prog = YOGA_PROGRAMS.find((p) => p.id === progId) || YOGA_PROGRAMS[0];
    setSelectedBatch(prog.batches[0].timeEST);
  };

  const getPackageTitle = () => {
    if (selectedPackage === 'monthly') return 'Monthly Yoga Package ($50 / Month - 12 Classes)';
    if (selectedPackage === 'daily') return 'Daily Yoga Class ($5 / Class)';
    return 'Free Demo Yoga Class ($0)';
  };

  const getPrice = () => {
    if (selectedPackage === 'monthly') return 50;
    if (selectedPackage === 'daily') return 5;
    return 0;
  };

  const handleNextStep = () => {
    if (currentStep === 4 && getPrice() === 0) {
      // Free Demo skips payment step
      executeBooking();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const executeBooking = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const booking = createBooking({
        studentId: currentUser?.id || 'student-guest',
        studentName: currentUser?.name || 'Sarah Jenkins',
        studentEmail: currentUser?.email || 'sarah@example.com',
        studentPhone: currentUser?.phone || '+1 555-019-2834',
        programId: currentProgram.id,
        programName: currentProgram.name,
        batch: selectedBatch,
        packageType: getPackageTitle(),
        date: selectedDate,
        paymentMethod: getPrice() > 0 ? (paymentMethod === 'paypal' ? 'PayPal' : 'Stripe (Credit Card)') : 'Free Demo',
      });
      setConfirmedBooking(booking);
      setCurrentStep(6); // Confirmation screen
    }, 900);
  };

  return (
    <div style={{ padding: '16px 16px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Top Header & Step Progress */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={() => {
            if (currentStep > 1 && currentStep < 6) setCurrentStep(currentStep - 1);
            else if (onCancel) onCancel();
          }}
          style={{ background: 'none', border: 'none', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
        >
          <ArrowLeft size={16} />
          <span>{currentStep === 1 || currentStep === 6 ? 'Back' : 'Previous'}</span>
        </button>

        <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--text-muted)' }}>
          {currentStep < 6 ? `Step ${currentStep} of ${getPrice() === 0 ? 4 : 5}` : 'Confirmed'}
        </span>
      </div>

      {/* STEP 1: Choose Yoga Program */}
      {currentStep === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary-dark)', margin: '0 0 4px' }}>
              Step 1: Choose Yoga Program
            </h3>
            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: 0 }}>
              Select the yogic discipline that matches your lifestyle and goals.
            </p>
          </div>

          <div
            onClick={() => handleProgramSelect('traditional-hatha')}
            className="mobile-card"
            style={{
              padding: '16px',
              cursor: 'pointer',
              border: selectedProgramId === 'traditional-hatha' ? '2px solid var(--primary)' : '1px solid rgba(194, 94, 26, 0.15)',
              backgroundColor: selectedProgramId === 'traditional-hatha' ? 'var(--primary-50)' : '#FFFFFF',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'var(--primary)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sun size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  Traditional Hatha Yoga
                </h4>
                <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700 }}>
                  3 Morning Batches (6:30, 7:45, 9:00 AM EST)
                </span>
              </div>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
              Gentle joint opening, steady posture holds, spinal mobility, and morning pranayama.
            </p>
          </div>

          <div
            onClick={() => handleProgramSelect('ashtanga-vinyasa')}
            className="mobile-card"
            style={{
              padding: '16px',
              cursor: 'pointer',
              border: selectedProgramId === 'ashtanga-vinyasa' ? '2px solid var(--accent)' : '1px solid rgba(180, 83, 9, 0.2)',
              backgroundColor: selectedProgramId === 'ashtanga-vinyasa' ? '#FEF3C7' : '#FFFFFF',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'var(--accent)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Flame size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  Ashtanga Vinyasa Primary Series
                </h4>
                <span style={{ fontSize: '11px', color: 'var(--accent-hover)', fontWeight: 700 }}>
                  3 Evening Batches (7:30, 8:45, 10:00 PM EST)
                </span>
              </div>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
              Breath-synchronized dynamic flow, core stamina, and evening workday de-stress.
            </p>
          </div>

          <button
            onClick={() => setCurrentStep(2)}
            className="btn btn-primary w-full"
            style={{ padding: '13px', fontSize: '14px', borderRadius: '14px', marginTop: '8px' }}
          >
            <span>Continue to Package Selection</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* STEP 2: Choose Class Package */}
      {currentStep === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary-dark)', margin: '0 0 4px' }}>
              Step 2: Choose Class Package
            </h3>
            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: 0 }}>
              Pick a free demo or choose an enrollment plan.
            </p>
          </div>

          {/* Package 1: Monthly $50 */}
          <div
            onClick={() => setSelectedPackage('monthly')}
            className="mobile-card"
            style={{
              padding: '16px',
              cursor: 'pointer',
              border: selectedPackage === 'monthly' ? '2.5px solid var(--primary)' : '1px solid rgba(194, 94, 26, 0.15)',
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '-10px',
                right: '16px',
                backgroundColor: 'var(--primary)',
                color: '#FFF',
                fontSize: '10px',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '9999px',
                textTransform: 'uppercase',
              }}
            >
              Most Popular
            </span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
              <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>Monthly Package</span>
              <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-dark)' }}>$50 <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>/mo</span></span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
              Unlimited live daily classes, access to all 6 batches, and Sunday community yoga.
            </p>
          </div>

          {/* Package 2: Daily $5 */}
          <div
            onClick={() => setSelectedPackage('daily')}
            className="mobile-card"
            style={{
              padding: '16px',
              cursor: 'pointer',
              border: selectedPackage === 'daily' ? '2.5px solid var(--accent)' : '1px solid rgba(194, 94, 26, 0.15)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
              <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>Daily Class Pass</span>
              <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--accent-hover)' }}>$5 <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>/class</span></span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
              Single drop-in pass for any one live morning or evening class.
            </p>
          </div>

          {/* Package 3: Free Demo $0 */}
          <div
            onClick={() => setSelectedPackage('demo')}
            className="mobile-card"
            style={{
              padding: '16px',
              cursor: 'pointer',
              border: selectedPackage === 'demo' ? '2.5px solid #16A34A' : '1px solid rgba(194, 94, 26, 0.15)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
              <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>Free Demo Class</span>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#16A34A' }}>$0 <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Free</span></span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
              Experience one full 60-minute live session with Rohit with zero commitment.
            </p>
          </div>

          <button
            onClick={() => setCurrentStep(3)}
            className="btn btn-primary w-full"
            style={{ padding: '13px', fontSize: '14px', borderRadius: '14px', marginTop: '6px' }}
          >
            <span>Continue to Batch Timing</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* STEP 3: Select Batch */}
      {currentStep === 3 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary-dark)', margin: '0 0 4px' }}>
              Step 3: Choose Preferred Batch
            </h3>
            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: 0 }}>
              Available timings for <strong>{currentProgram.name}</strong> (EST).
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {currentProgram.batches.map((batch) => (
              <div
                key={batch.id}
                onClick={() => setSelectedBatch(batch.timeEST)}
                className="mobile-card"
                style={{
                  padding: '14px 16px',
                  cursor: 'pointer',
                  border: selectedBatch === batch.timeEST ? '2.5px solid var(--primary)' : '1px solid rgba(194, 94, 26, 0.15)',
                  backgroundColor: selectedBatch === batch.timeEST ? 'var(--primary-50)' : '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
                    {batch.batchNumber}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: '2px 0' }}>
                    {batch.timeEST}
                  </div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                    {batch.tag}
                  </div>
                </div>

                {selectedBatch === batch.timeEST && (
                  <CheckCircle2 size={20} style={{ color: 'var(--primary)' }} />
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentStep(4)}
            className="btn btn-primary w-full"
            style={{ padding: '13px', fontSize: '14px', borderRadius: '14px', marginTop: '6px' }}
          >
            <span>Continue to Date Selection</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* STEP 4: Select Date */}
      {currentStep === 4 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary-dark)', margin: '0 0 4px' }}>
              Step 4: Select Class Date
            </h3>
            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: 0 }}>
              Choose the date you wish to start your live practice.
            </p>
          </div>

          <div className="mobile-card" style={{ padding: '16px' }}>
            <label className="form-label" style={{ fontSize: '13px' }}>Class Start Date</label>
            <input
              type="date"
              className="form-input"
              value={selectedDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ fontSize: '14px', fontWeight: 700 }}
            />

            <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'var(--bg-sand)', borderRadius: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
              <strong>Booking Summary:</strong> {currentProgram.name} at {selectedBatch} on {selectedDate} ({getPackageTitle()}).
            </div>
          </div>

          <button
            onClick={handleNextStep}
            className="btn btn-primary w-full"
            style={{ padding: '13px', fontSize: '14px', borderRadius: '14px', marginTop: '6px' }}
          >
            <span>{getPrice() === 0 ? 'Confirm Free Demo Booking' : `Proceed to Payment ($${getPrice()})`}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* STEP 5: Payment Gateway (For Paid Plans) */}
      {currentStep === 5 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary-dark)', margin: '0 0 4px' }}>
              Step 5: Secure Payment
            </h3>
            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: 0 }}>
              Total Tuition: <strong>${getPrice()}.00 USD</strong>
            </p>
          </div>

          {/* Payment Method Selector */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button
              onClick={() => setPaymentMethod('stripe')}
              style={{
                padding: '12px',
                borderRadius: '14px',
                border: paymentMethod === 'stripe' ? '2px solid var(--primary)' : '1px solid rgba(0,0,0,0.1)',
                backgroundColor: paymentMethod === 'stripe' ? 'var(--primary-50)' : '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontWeight: 800,
                fontSize: '13px',
                color: 'var(--text-main)',
              }}
            >
              <CreditCard size={18} />
              <span>Credit Card (Stripe)</span>
            </button>

            <button
              onClick={() => setPaymentMethod('paypal')}
              style={{
                padding: '12px',
                borderRadius: '14px',
                border: paymentMethod === 'paypal' ? '2px solid #0070BA' : '1px solid rgba(0,0,0,0.1)',
                backgroundColor: paymentMethod === 'paypal' ? '#EFF6FF' : '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontWeight: 800,
                fontSize: '13px',
                color: '#0070BA',
              }}
            >
              <span>PayPal</span>
            </button>
          </div>

          {/* Card Form */}
          {paymentMethod === 'stripe' ? (
            <div className="mobile-card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label className="form-label" style={{ fontSize: '12px' }}>Card Number</label>
                <input
                  type="text"
                  className="form-input"
                  value={cardDetails.cardNumber}
                  onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                  style={{ fontSize: '13px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label className="form-label" style={{ fontSize: '12px' }}>Expiry</label>
                  <input
                    type="text"
                    className="form-input"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                    style={{ fontSize: '13px' }}
                  />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: '12px' }}>CVC</label>
                  <input
                    type="text"
                    className="form-input"
                    value={cardDetails.cvc}
                    onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                    style={{ fontSize: '13px' }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="mobile-card" style={{ padding: '20px', textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                You will be redirected to PayPal to complete your purchase of <strong>${getPrice()}.00 USD</strong>.
              </p>
            </div>
          )}

          <button
            onClick={executeBooking}
            disabled={isProcessing}
            className="btn btn-primary w-full"
            style={{ padding: '14px', fontSize: '15px', borderRadius: '14px', marginTop: '6px' }}
          >
            {isProcessing ? (
              <span>Verifying Payment...</span>
            ) : (
              <>
                <Lock size={16} />
                <span>Pay ${getPrice()}.00 & Confirm Booking</span>
              </>
            )}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--text-muted)' }}>
            <ShieldCheck size={14} style={{ color: 'var(--primary)' }} />
            <span>256-Bit SSL Encrypted & Verified Transaction</span>
          </div>
        </div>
      )}

      {/* STEP 6: Confirmation Screen */}
      {currentStep === 6 && confirmedBooking && (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px', padding: '12px 0' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#DCFCE7',
              color: '#16A34A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}
          >
            <CheckCircle2 size={36} />
          </div>

          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
              Booking Confirmed!
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
              Booking Ref: <strong>{confirmedBooking.id}</strong>
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '16px',
              border: '1px solid rgba(194, 94, 26, 0.15)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Program:</span>
              <strong style={{ color: 'var(--primary-dark)' }}>{confirmedBooking.programName}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Batch Time:</span>
              <strong style={{ color: 'var(--primary)' }}>{confirmedBooking.batch}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Date:</span>
              <strong>{confirmedBooking.date}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Platform:</span>
              <strong>{confirmedBooking.platform}</strong>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href={`https://wa.me/918077570122?text=Hi%20Rohit!%20I%20just%20booked%20my%20session%20for%20${encodeURIComponent(confirmedBooking.programName)}%20(${encodeURIComponent(confirmedBooking.batch)}).`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm w-full"
              style={{ backgroundColor: '#25D366', color: '#FFFFFF', padding: '12px' }}
            >
              <MessageCircle size={16} />
              <span>Notify Rohit on WhatsApp</span>
            </a>

            <button
              onClick={() => onBookingComplete()}
              className="btn btn-primary btn-sm w-full"
              style={{ padding: '12px' }}
            >
              Go to My Classes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
