import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Hero Section - Uber Style Redesign (Pixel Perfect)
import UberHero from '../components/UberHero';
import ToursSection from '../components/ToursSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import BookingCTA from '../components/BookingCTA';
import SEO from '../components/SEO';

const HOME_SEO = {
  title: {
    es: 'Taxi Barcelona 24h — Precio Fijo, Sin Esperas | Taxi Lux Ride',
    en: 'Barcelona Taxi 24h — Fixed Price, No Waiting | Taxi Lux Ride',
    de: 'Taxi Barcelona 24h — Festpreis, Keine Wartezeit | Taxi Lux Ride',
    fr: 'Taxi Barcelone 24h — Prix Fixe, Sans Attente | Taxi Lux Ride',
    pt: 'Táxi Barcelona 24h — Preço Fixo, Sem Esperas | Taxi Lux Ride',
    it: 'Taxi Barcellona 24h — Prezzo Fisso, Senza Attese | Taxi Lux Ride',
  },
  description: {
    es: 'Taxi Barcelona disponible 24h. Servicio de taxi en Barcelona con precio fijo: aeropuerto, puerto de cruceros, grupos y largo recorrido. Llama o reserva online.',
    en: 'Barcelona Taxi available 24h. Fixed price taxi service in Barcelona: airport, cruise port, groups and long distance. Call or book online.',
    de: 'Taxi Barcelona 24h verfügbar. Festpreis-Taxiservice in Barcelona: Flughafen, Kreuzfahrthafen, Gruppen und Langstrecke. Anrufen oder online buchen.',
    fr: 'Taxi Barcelone disponible 24h. Service taxi Barcelone à prix fixe : aéroport, port de croisière, groupes et longue distance. Appelez ou réservez en ligne.',
    pt: 'Táxi Barcelona disponível 24h. Serviço de táxi em Barcelona a preço fixo: aeroporto, porto de cruzeiros, grupos e longa distância. Ligue ou reserve online.',
    it: 'Taxi Barcellona disponibile 24h. Servizio taxi a Barcellona a prezzo fisso: aeroporto, porto crociere, gruppi e lunga distanza. Chiama o prenota online.',
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  name: 'Taxi Lux Ride',
  alternateName: 'Taxi Luxride Barcelona',
  description: 'Servicio de taxi en Barcelona disponible 24h. Traslados al aeropuerto, puerto de cruceros, taxi XL para grupos y largo recorrido a toda España.',
  url: 'https://taxiluxride.com',
  telephone: '+34600707174',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressRegion: 'Cataluña',
    postalCode: '08001',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.3851,
    longitude: 2.1734,
  },
  areaServed: [
    { '@type': 'City', name: 'Barcelona' },
    { '@type': 'City', name: 'Sabadell' },
    { '@type': 'City', name: 'Badalona' },
    { '@type': 'City', name: 'Hospitalet de Llobregat' },
    { '@type': 'City', name: 'El Prat de Llobregat' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Taxi Barcelona',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Taxi Aeropuerto Barcelona' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Taxi Puerto de Cruceros Barcelona' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Taxi XL Barcelona — Hasta 8 Pasajeros' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Taxi Business Barcelona' } },
    ],
  },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Es posible agendar un traslado al Aeropuerto con anticipación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Recomendamos reservar con antelación para asegurar tu plaza, especialmente en horas punta. Tu conductor te esperará puntual, controlando el horario de tu vuelo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hasta dónde llegan vuestros servicios de taxi Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cubrimos toda el Área Metropolitana de Barcelona y realizamos traslados de larga distancia a cualquier punto de Cataluña o ciudades nacionales (Girona, Tarragona, Andorra, etc.).',
      },
    },
    {
      '@type': 'Question',
      name: 'Somos un grupo o llevamos equipaje voluminoso, ¿tenéis solución?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Disponemos de una flota versátil que incluye vehículos monovolumen de hasta 8 plazas (Taxi XL). Avísanos al reservar para asignarte el vehículo adecuado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El servicio de taxi Barcelona está operativo de noche o en festivos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Operamos ininterrumpidamente 24 horas al día, 365 días al año. Ya sea un vuelo de madrugada o una salida nocturna, siempre estamos disponibles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué métodos de pago aceptáis en el taxi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aceptamos efectivo, tarjetas de crédito (Visa, Mastercard) y tarjetas de débito directamente en el taxi. Sin costes adicionales por pago con tarjeta.',
      },
    },
  ],
};

// Main HomePage Component
const HomePage = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language ? i18n.language.split('-')[0] : 'es';
  const seoLang = ['es', 'en', 'de', 'fr', 'pt', 'it'].includes(lang) ? lang : 'es';

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
      const PHONE_NUMBER = "+34600707174";
      const message = encodeURIComponent("Hola, quiero reservar un taxi.");
      window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+34600707174";
  };

  return (
    <>
      <SEO
        title={HOME_SEO.title[seoLang] || HOME_SEO.title.es}
        description={HOME_SEO.description[seoLang] || HOME_SEO.description.es}
        lang={seoLang}
        schema={[LOCAL_BUSINESS_SCHEMA, FAQ_SCHEMA]}
      />
      <main className="pt-[85px]">
        <UberHero onBooking={handleBooking} />
        <ServicesSection />
        <ToursSection />
        <FeaturesSection />
        <BookingCTA onBooking={handleBooking} />
      </main>
    </>
  );
};

export default HomePage;

