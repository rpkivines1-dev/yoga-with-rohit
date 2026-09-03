import React, { createContext, useContext, useState, useEffect } from 'react';

const MobileAuthContext = createContext();

const DEFAULT_STUDENT = {
  id: 'student-1',
  name: 'Sarah Jenkins',
  email: 'sarah.jenkins@example.com',
  phone: '+1 (555) 234-5678',
  country: 'United States',
  timezone: 'EST',
  role: 'student', // 'student' | 'admin'
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
  activePackage: {
    name: 'Monthly Yoga Package (12 Classes)',
    type: 'monthly',
    price: 50,
    startDate: '2026-09-02',
    expiryDate: '2026-10-02',
    status: 'Active',
    program: 'Traditional Hatha Yoga',
    preferredBatch: '6:30 AM EST',
    classesRemaining: 12,
    totalClasses: 12,
  },
  registeredAt: '2026-08-15',
  demoBooked: true,
};

const DEFAULT_ADMIN = {
  id: 'admin-rohit',
  name: 'Rohit Kumar (Instructor & Admin)',
  email: 'rohit@yogawithrohit.com',
  phone: '+91 8077570122',
  country: 'India',
  timezone: 'IST',
  role: 'admin',
  avatar: '/images/certificates/trophy-award-honor.jpg',
};

export function MobileAuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('ywr_mobile_user');
    return saved ? JSON.parse(saved) : DEFAULT_STUDENT;
  });

  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(() => {
    return localStorage.getItem('ywr_mobile_onboarded') === 'true';
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('ywr_mobile_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('ywr_mobile_user');
    }
  }, [currentUser]);

  const login = (email, password, role = 'student') => {
    if (role === 'admin' || email.toLowerCase().includes('admin') || email.toLowerCase().includes('rohit')) {
      setCurrentUser(DEFAULT_ADMIN);
      return { success: true, user: DEFAULT_ADMIN };
    }
    const user = {
      ...DEFAULT_STUDENT,
      email,
      name: email.split('@')[0].replace('.', ' ').replace(/^\w/, (c) => c.toUpperCase()),
    };
    setCurrentUser(user);
    return { success: true, user };
  };

  const register = (data) => {
    const newUser = {
      id: `student-${Date.now()}`,
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      country: data.country || 'United States',
      timezone: data.timezone || 'EST',
      role: 'student',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      activePackage: null,
      registeredAt: new Date().toISOString().split('T')[0],
      demoBooked: false,
    };
    setCurrentUser(newUser);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const completeOnboarding = () => {
    setHasCompletedOnboarding(true);
    localStorage.setItem('ywr_mobile_onboarded', 'true');
  };

  const updateProfile = (updatedFields) => {
    setCurrentUser((prev) => ({
      ...prev,
      ...updatedFields,
    }));
  };

  const switchRole = (role) => {
    if (role === 'admin') {
      setCurrentUser(DEFAULT_ADMIN);
    } else {
      setCurrentUser(DEFAULT_STUDENT);
    }
  };

  return (
    <MobileAuthContext.Provider
      value={{
        currentUser,
        isAdmin: currentUser?.role === 'admin',
        isAuthenticated: !!currentUser,
        hasCompletedOnboarding,
        login,
        register,
        logout,
        completeOnboarding,
        updateProfile,
        switchRole,
      }}
    >
      {children}
    </MobileAuthContext.Provider>
  );
}

export function useMobileAuth() {
  return useContext(MobileAuthContext);
}
