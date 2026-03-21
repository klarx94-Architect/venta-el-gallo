import React, { createContext, useContext, useState } from 'react';
import BookingAgentModal from '../features/booking/BookingAgentModal';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const openBooking = (initialData = null) => {
    setBookingData(initialData);
    setIsBookingOpen(true);
    // Lock body scroll to prevent interaction with background
    document.body.style.overflow = 'hidden';
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    // Restore body scroll after exit animation
    setTimeout(() => {
      document.body.style.overflow = 'unset';
    }, 400); 
  };

  return (
    <BookingContext.Provider value={{ isBookingOpen, openBooking, closeBooking, bookingData, setBookingData }}>
      {children}
      <BookingAgentModal />
    </BookingContext.Provider>
  );
};
