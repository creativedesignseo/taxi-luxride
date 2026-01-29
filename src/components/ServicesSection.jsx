import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Zap, Users, CreditCard, Clock, Star } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const services = [
    {
      image: "/img/optimized/aeroport-de-barcelona-4-card.webp",
      title: t('services.airport.title'),
      description: t('services.airport.desc'),
      tag: t('services.airport.tag'),
      link: '/taxi-aeropuerto-barcelona'
    },
    {
      image: "/img/optimized/Traslados-Puerto-de-Cruceros-2-card.webp",
      title: t('rates.port'),
      description: t('services.port.desc'),
      tag: t('services.port.tag'),
      link: '/puerto-cruceros'
    },
    {
      image: "/img/coches con maletero grandes.webp",
      title: t('rates.bigLuggage'),
      description: t('rates.bigLuggageDesc'),
      tag: t('booking.form.passengersLabel'),
      link: '/taxi-xl'
    },
    {
      image: "/img/optimized/Sillas-para-Bebé-card.webp",
      title: t('services.babySeats.title'),
      description: t('services.babySeats.desc'),
      tag: t('services.babySeats.tag'),
      link: '/sillas-bebe'
    },
    {
      image: "/img/Coche de lujo.png",
      title: t('services.business.title'),
      description: t('services.business.desc'),
      tag: t('services.business.tag'),
      link: '/servicio-business'
    },
    {
      image: "/img/optimized/pmr-card.webp",
      title: t('rates.pmr'),
      description: t('rates.pmrDesc'),
      tag: t('rates.pmr'),
      link: '/pmr'
    }
  ];

  /* New Hook for scrolling */
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
        const scrollAmount = window.innerWidth * 0.85; // Scroll 85% of screen width
        scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-6 md:py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-6 md:mb-16">
          <span className="text-sm font-medium text-[rgba(3,2,19,0.5)] uppercase tracking-wider font-['Arimo',sans-serif]">{t('nav.services')}</span>
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#1C1F23] mt-2 md:mt-4 leading-tight font-['Inter',sans-serif]">
            {t('services.title')}
          </h2>
          <p className="text-base md:text-lg text-[rgba(3,2,19,0.7)] mt-4 max-w-2xl mx-auto font-['Arimo',sans-serif]">
            {t('services.subtitle')}
          </p>
        </div>
        
        {/* Services Carousel Container */}
        <div className="relative group/carousel">
            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-10 px-2">
                <button 
                    onClick={(e) => { e.stopPropagation(); scroll('left'); }}
                    className="pointer-events-auto bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-[#1C1F23] hover:bg-white transition-all active:scale-95"
                    aria-label="Previous"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>
                <button 
                    onClick={(e) => { e.stopPropagation(); scroll('right'); }}
                    className="pointer-events-auto bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-[#1C1F23] hover:bg-white transition-all active:scale-95"
                    aria-label="Next"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>

            {/* Services Grid (Carousel on Mobile) */}
            <div 
                ref={scrollRef}
                className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 scrollo-hide scroll-smooth"
            >
              {services.map((service, index) => (
                <div 
                  key={index}
                  onClick={() => service.link ? navigate(service.link) : null}
                  className={`min-w-[85vw] md:min-w-0 snap-center group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300
                    ${service.link ? 'cursor-pointer' : 'cursor-default'}
                  `}
                >
                  {/* Image Container matching Tours style */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                    
                    {/* Tag overlaid on image */}
                    <div className="absolute top-4 left-4">
                       <span className="text-xs font-bold text-[#1C1F23] bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm font-['Arimo',sans-serif]">
                         {service.tag}
                       </span>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-[#1C1F23] font-['Arimo',sans-serif] group-hover:text-black transition-colors">
                        {service.title}
                      </h3>
                      {service.link && (
                        <div className="bg-[#FFDB3A] rounded-full p-1.5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                            <path d="M7 17l9.2-9.2M17 17V7H7"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-[rgba(3,2,19,0.7)] text-sm leading-relaxed font-['Arimo',sans-serif]">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

