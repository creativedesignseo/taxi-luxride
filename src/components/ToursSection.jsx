import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toursData } from '../data/toursData';

const ToursSection = () => {
  const { i18n } = useTranslation();
  // Safe language check
  const currentLang = i18n.language ? i18n.language.split('-')[0] : 'es';
  const lang = ['es', 'en', 'it'].includes(currentLang) ? currentLang : 'es';

  // Select 4 highlight tours to show on home
  const highlightToursIds = ['montserrat', 'portaventura', 'dali-museum', 'costa-brava'];
  const highlightTours = highlightToursIds.map(id => toursData[id]).filter(Boolean);

  return (
    <section id="tours" className="py-8 md:py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-end justify-between mb-6 md:mb-12 gap-6">
          <div className="max-w-xl">
             <span className="text-sm font-medium text-[rgba(3,2,19,0.5)] uppercase tracking-wider font-['Arimo',sans-serif]">
                {lang === 'es' ? 'Descubre Cataluña' : lang === 'it' ? 'Scopri la Catalogna' : 'Discover Catalonia'}
             </span>
            <h2 className="text-3xl md:text-[48px] font-bold text-[#1C1F23] mt-2 md:mt-4 leading-tight font-['Inter',sans-serif]">
               {lang === 'es' ? 'Tours Exclusivos' : lang === 'it' ? 'Tour Esclusivi' : 'Exclusive Tours'}
            </h2>
            <p className="text-base md:text-lg text-[rgba(3,2,19,0.7)] mt-2 md:mt-4 font-['Arimo',sans-serif]">
               {lang === 'es' 
                ? 'Conoce los lugares más emblemáticos con nuestros conductores expertos. Servicio personalizado.'
                : lang === 'it'
                ? 'Scopri i luoghi più emblematici con i nostri autisti esperti. Servizio personalizzato.'
                : 'Visit the most iconic places with our expert drivers. Personalized service.'}
            </p>
          </div>
          <Link to="/tours" className="hidden md:flex items-center gap-2 text-[#1C1F23] font-bold font-['Arimo',sans-serif] hover:opacity-70 transition-colors">
            {lang === 'es' ? 'Ver todos los tours' : lang === 'it' ? 'Vedi tutti i tour' : 'View all tours'} <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightTours.map((tour, index) => (
            <Link key={tour.id} to={`/tour/${tour.id}`} className="group cursor-pointer block">
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                <img 
                  src={tour.cardImage || tour.image} 
                  alt={tour.highlight}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <span className="text-sm font-bold text-[#1C1F23] font-['Arimo',sans-serif]">
                     {lang === 'es' ? 'Consultar' : lang === 'it' ? 'Consulta' : 'Consult'}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1C1F23] mb-1 font-['Arimo',sans-serif] group-hover:text-black transition-colors">
                {tour.highlight}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[rgba(3,2,19,0.5)] font-['Arimo',sans-serif]">{tour.duration}</span>
                <ChevronRight size={20} className="text-[#FFDB3A] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        <Link to="/tours" className="md:hidden w-full mt-8 flex items-center justify-center gap-2 border border-[rgba(3,2,19,0.1)] py-4 rounded-xl text-[#1C1F23] font-bold font-['Arimo',sans-serif] hover:bg-gray-50">
           {lang === 'es' ? 'Ver todos los tours' : lang === 'it' ? 'Vedi tutti i tour' : 'View all tours'} <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default ToursSection;
