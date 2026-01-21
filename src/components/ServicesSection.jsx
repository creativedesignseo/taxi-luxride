import { useTranslation } from 'react-i18next';
import { MapPin, Zap, Users, CreditCard, Clock, Star } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <MapPin size={28} />,
      title: t('services.cityTour.title'),
      description: t('services.cityTour.desc'),
      tag: t('services.cityTour.tag')
    },
    {
      icon: <img src="/img/suitcases.svg" alt="Equipaje" className="w-7 h-7" />,
      title: t('services.airport.title'),
      description: t('services.airport.desc'),
      tag: t('services.airport.tag')
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
      icon: <Clock size={28} />,
      title: t('hero.badge'),
      description: t('hero.subtitle'),
      tag: t('hero.immediate')
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
              className="bg-white border border-black/[0.03] rounded-2xl p-6 hover:shadow-xl hover:shadow-black/[0.03] hover:border-[#FFDB3A]/30 transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 bg-[rgba(3,2,19,0.05)] rounded-xl flex items-center justify-center text-[#1C1F23] group-hover:bg-[#FFDB3A] transition-colors">
                {service.icon}
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-[rgba(3,2,19,0.5)] bg-[rgba(3,2,19,0.05)] px-2 py-1 rounded font-['Arimo',sans-serif]">{service.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1F23] font-['Arimo',sans-serif]">{service.title}</h3>
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

