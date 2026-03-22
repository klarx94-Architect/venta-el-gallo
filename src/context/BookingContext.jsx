import React, { createContext, useContext, useState } from 'react';
import BookingAgentModal from '../features/booking/BookingAgentModal';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [contextData, setContextData] = useState({ origin: 'general', package: null });

  const openBooking = (initialData = null) => {
    // Determine context from initialData (e.g. { from: 'restaurant', pack: '55' })
    if (initialData) {
      setContextData({
        origin: initialData.from || 'general',
        package: initialData.pack || null
      });
      setBookingData(initialData);
    }
    
    setIsBookingOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setTimeout(() => {
      document.body.style.overflow = 'unset';
    }, 400); 
  };

  return (
    <BookingContext.Provider value={{ 
      isBookingOpen, 
      openBooking, 
      closeBooking, 
      bookingData, 
      setBookingData,
      contextData,
      setContextData 
    }}>
      {children}
      <BookingAgentModal />
    </BookingContext.Provider>
  );
};
