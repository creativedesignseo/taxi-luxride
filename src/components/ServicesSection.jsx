import React from 'react';
import { MapPin, Zap, Users, CreditCard, Clock, Star } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <MapPin size={28} />,
      title: 'Traslados Urbanos',
      description: 'Moverte por Barcelona con comodidad. Conoce el precio desde el inicio sin sorpresas.',
      tag: 'Rápido'
    },
    {
      icon: <img src="/img/suitcases.svg" alt="Equipaje" className="w-7 h-7" />,
      title: 'Aeropuerto',
      description: 'Traslados a El Prat. Terminal 1 y T2. Puntualidad garantizada.',
      tag: 'Popular'
    },
    {
      icon: <Users size={28} />,
      title: 'Grupos',
      description: 'Vehículos de hasta 7 plazas para viajar en grupo cómodamente.',
      tag: 'Hasta 7'
    },
    {
      icon: <CreditCard size={28} />,
      title: 'Empresas',
      description: 'Servicio corporativo con facturación mensual y tarifas especiales.',
      tag: 'Business'
    },
    {
      icon: <Clock size={28} />,
      title: 'Servicio 24/7',
      description: 'Disponibles las 24 horas del día, los 365 días del año.',
      tag: 'Siempre'
    },
    {
      icon: <Star size={28} />,
      title: 'Premium',
      description: 'Vehículos de alta gama para ocasiones especiales.',
      tag: 'Exclusivo'
    }
  ];

  return (
    <section id="servicios" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium text-[rgba(3,2,19,0.5)] uppercase tracking-wider font-['Arimo',sans-serif]">Nuestros Servicios</span>
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#030213] mt-2 md:mt-4 leading-tight font-['Inter',sans-serif]">
            Soluciones para<br />cada necesidad
          </h2>
          <p className="text-base md:text-lg text-[rgba(3,2,19,0.7)] mt-4 max-w-2xl mx-auto font-['Arimo',sans-serif]">
            Ofrecemos una amplia gama de servicios de transporte adaptados a cada situación.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[rgba(3,2,19,0.02)] border border-[rgba(3,2,19,0.05)] rounded-2xl p-6 hover:shadow-lg hover:border-[rgba(3,2,19,0.1)] transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 bg-[rgba(3,2,19,0.05)] rounded-xl flex items-center justify-center text-[#030213] group-hover:bg-[#ffc629] transition-colors">
                {service.icon}
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-[rgba(3,2,19,0.5)] bg-[rgba(3,2,19,0.05)] px-2 py-1 rounded font-['Arimo',sans-serif]">{service.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-[#030213] font-['Arimo',sans-serif]">{service.title}</h3>
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
