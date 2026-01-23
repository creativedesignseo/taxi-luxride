import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Zap, Users, CreditCard, Clock, Star } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const services = [
    {
      icon: <MapPin size={28} />,
      title: t('services.cityTour.title'),
      description: t('services.cityTour.desc'),
      tag: t('services.cityTour.tag'),
      link: '/tours'
    },
    {
      icon: <img src="/img/optimized/aeroport-de-barcelona-card.webp" alt="Taxi Aeropuerto" className="w-full h-full object-cover rounded-lg" />,
      title: t('services.airport.title'),
      description: t('services.airport.desc'),
      tag: t('services.airport.tag'),
      link: '/taxi-aeropuerto-barcelona'
    },
    {
      icon: <Users size={28} />,
      title: t('rates.bigLuggage'),
      description: t('rates.bigLuggageDesc'),
      tag: t('booking.form.passengersLabel')
    },
    {
      icon: <CreditCard size={28} />,
      title: t('services.business.title'),
      description: t('services.business.desc'),
      tag: t('services.business.tag')
    },
    {
      icon: <img src="https://api.iconify.design/noto:passenger-ship.svg" className="w-7 h-7" alt="Cruise" />,
      title: t('rates.port'),
      description: t('services.port.desc'),
      tag: t('services.port.tag')
    },
    {
      icon: <Star size={28} />,
      title: t('services.business.tag'),
      description: t('rates.pmrDesc'),
      tag: t('rates.pmr')
    }
  ];

  return (
    <section id="servicios" className="py-12 md:py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium text-[rgba(3,2,19,0.5)] uppercase tracking-wider font-['Arimo',sans-serif]">{t('nav.services')}</span>
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#1C1F23] mt-2 md:mt-4 leading-tight font-['Inter',sans-serif]">
            {t('services.title')}
          </h2>
          <p className="text-base md:text-lg text-[rgba(3,2,19,0.7)] mt-4 max-w-2xl mx-auto font-['Arimo',sans-serif]">
            {t('services.subtitle')}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => service.link ? navigate(service.link) : null}
              className={`bg-white border border-black/[0.03] rounded-2xl p-6 transition-all group relative overflow-hidden
                ${service.link ? 'cursor-pointer hover:shadow-xl hover:shadow-black/[0.03] hover:border-[#FFDB3A]/30 hover:-translate-y-1' : 'cursor-default'}
              `}
            >
              <div className="w-14 h-14 bg-[rgba(3,2,19,0.05)] rounded-xl flex items-center justify-center text-[#1C1F23] group-hover:bg-gray-200 transition-colors">
                {service.icon}
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-[rgba(3,2,19,0.5)] bg-[rgba(3,2,19,0.05)] px-2 py-1 rounded font-['Arimo',sans-serif]">{service.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1F23] font-['Arimo',sans-serif] flex items-center gap-2">
                  {service.title}
                  {service.link && <span className="text-xs text-[#FFDB3A] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>}
                </h3>
                <p className="text-[rgba(3,2,19,0.7)] mt-2 font-['Arimo',sans-serif]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

