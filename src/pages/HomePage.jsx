import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Hero Section - Uber Style Redesign (Pixel Perfect)
import UberHero from '../components/UberHero';
import ToursSection from '../components/ToursSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import BookingCTA from '../components/BookingCTA';

// Main HomePage Component
const HomePage = () => {
  const navigate = useNavigate();

  const handleBooking = (data) => {
    // Determine if we received the wrapped data object from UberHero or a direct/event object
    // UberHero sends: { bookingData: {...}, routeGeometry: ..., ... }
    const payload = data && data.bookingData ? data : { bookingData: data };
    const bookingDetails = payload.bookingData;

    // Check if we have valid booking data (origin/destination) to navigate to the BookingPage
    if (bookingDetails && (bookingDetails.origin || bookingDetails.destination)) {
      navigate('/reservar', { state: payload });
    } else {
      // Fallback for buttons without specific data (like generic CTA or calls from BookingCTA)
      // This preserves the "WhatsApp" behavior for generic interactions
      const PHONE_NUMBER = "+34631806645";
      const message = encodeURIComponent("Hola, quiero reservar un taxi.");
      window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+34631806648";
  };

  return (
    <main className="pt-[85px]">
      <UberHero onBooking={handleBooking} />
      <ServicesSection />
      <ToursSection />
      <FeaturesSection />
      <BookingCTA onBooking={handleBooking} />
    </main>
  );
};

export default HomePage;

