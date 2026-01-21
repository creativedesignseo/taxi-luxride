import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import CookieConsent from './components/CookieConsent';

// Pages
import HomePage from './pages/HomePage';
import { LegalNotice, PrivacyPolicy, CookiesPolicy } from './pages/LegalPages';
import BookingPage from './pages/BookingPage';
import ToursPage from './pages/ToursPage';

// Supported languages
const SUPPORTED_LANGUAGES = ['es', 'en', 'de', 'fr', 'pt', 'zh', 'ja', 'ar', 'hi', 'ru'];

const App = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Phone configuration
  const PHONE_NUMBER = "+34631806645";
  const PHONE_DISPLAY = "+34 625 03 00 00";

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle WhatsApp booking
  const handleWhatsAppBooking = (customMsg = null) => {
    const text = customMsg 
      ? encodeURIComponent(customMsg)
      : encodeURIComponent("Hola, quiero reservar un taxi.");
    
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
  };

  // Handle phone call
  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  // Handle navigation clicks
  const handleNavClick = (sectionId) => {
    const currentLang = i18n.language.split('-')[0];
    const isDefaultLang = currentLang === 'es' || !SUPPORTED_LANGUAGES.includes(currentLang);
    const basePath = isDefaultLang ? '/' : `/${currentLang}`;

    if (sectionId === 'top') {
      if (location.pathname !== basePath && location.pathname !== basePath + '/') {
        navigate(basePath);
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Section navigation
    if (location.pathname !== basePath && location.pathname !== basePath + '/') {
      navigate(basePath);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }

    setMobileMenuOpen(false);
  };

  // Route definitions
  const routeDefs = [
    { path: "", element: <HomePage /> },
    { path: "reservar", element: <BookingPage /> },
    { path: "tours", element: <ToursPage /> },
    { 
      path: "aviso-legal", 
      element: (
        <>
          <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
          <LegalNotice />
        </>
      ) 
    },
    { 
      path: "privacidad", 
      element: (
        <>
          <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
          <PrivacyPolicy />
        </>
      ) 
    },
    { 
      path: "cookies", 
      element: (
        <>
          <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
          <CookiesPolicy />
        </>
      ) 
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      
      {/* Header */}
      {!location.pathname.includes('/reservar') && (
        <Header 
          onNavClick={handleNavClick}
          onCall={handleCall}
          onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          phoneDisplay={PHONE_DISPLAY}
        />
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-6 md:hidden">
          <button 
            onClick={() => { setMobileMenuOpen(false); handleNavClick('top'); }}
            className="text-2xl font-bold text-white border-b border-gray-800 pb-4"
          >
            {t('nav.home')}
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); handleNavClick('servicios'); }}
            className="text-2xl font-bold text-white border-b border-gray-800 pb-4"
          >
            {t('nav.services')}
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); handleNavClick('reservar'); }}
            className="text-2xl font-bold text-white border-b border-gray-800 pb-4"
          >
            {t('nav.rates')}
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); handleNavClick('contacto'); }}
            className="text-2xl font-bold text-white border-b border-gray-800 pb-4"
          >
            {t('nav.contact')}
          </button>
          
          <div className="border-b border-gray-800 pb-4">
            <LanguageSwitcher />
          </div>

          <button 
            onClick={handleCall} 
            className="mt-4 w-full bg-[#1C1F23] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#34373C] transition-all"
          >
            <Phone /> Llamar
          </button>
        </div>
      )}

      {/* Routes */}
      <Routes>
        {/* Default Routes (No prefix) */}
        {routeDefs.map((route, index) => (
          <Route 
            key={`default-${index}`} 
            path={`/${route.path}`} 
            element={route.element} 
          />
        ))}

        {/* Language Prefixed Routes */}
        {SUPPORTED_LANGUAGES.map(lang => (
          routeDefs.map((route, index) => (
            <Route 
              key={`${lang}-${index}`} 
              path={`/${lang}/${route.path}`} 
              element={route.element} 
            />
          ))
        ))}
      </Routes>

      {/* Footer */}
      <Footer phoneDisplay={PHONE_DISPLAY} />

      {/* Mobile Action Bar */}
      {!location.pathname.includes('/reservar') && (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden flex gap-3">
          <button
            onClick={handleCall}
            className="flex-1 bg-[#1C1F23] text-white py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 border border-gray-800"
          >
            <Phone size={20} /> Llamar
          </button>
          <button
            onClick={() => handleWhatsAppBooking()}
            className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} /> WhatsApp
          </button>
        </div>
      )}

      <CookieConsent />
    </div>
  );
};

export default App;


