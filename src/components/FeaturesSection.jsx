import React from 'react';
import { Shield, CreditCard, Clock, Star } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield size={28} />,
      stat: '100%',
      sublabel: 'Conductores Verificados',
      title: 'Conductores Verificados',
      description: 'Todos nuestros conductores cuentan con licencia oficial y verificación de antecedentes.'
    },
    {
      icon: <CreditCard size={28} />,
      stat: '0€',
      sublabel: 'Cargos ocultos',
      title: 'Precios Transparentes',
      description: 'Conoce el precio exacto de tu viaje antes de reservar. Sin sorpresas.'
    },
    {
      icon: <Clock size={28} />,
      stat: '5 min',
      sublabel: 'Tiempo medio',
      title: 'Siempre Puntuales',
      description: 'Llegamos a tiempo, siempre. Tu tiempo es valioso y lo respetamos.'
    },
    {
      icon: <Star size={28} />,
      stat: '4.9',
      sublabel: 'Puntuación media',
      title: 'Experiencia Premium',
      description: 'La valoración media de más de 2,500 clientes satisfechos.'
    }
  ];

  return (
    <section id="nosotros" className="py-12 md:py-20 bg-[#030213] text-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider font-['Arimo',sans-serif]">Por qué elegirnos</span>
          <h2 className="text-[32px] md:text-[48px] font-bold mt-2 md:mt-4 leading-tight font-['Inter',sans-serif]">
            La mejor elección<br />para moverte
          </h2>
          <p className="text-base md:text-lg text-white/60 mt-4 max-w-2xl mx-auto font-['Arimo',sans-serif]">
            Más de 10 años de experiencia nos avalan como el servicio de taxi líder en Barcelona.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-[rgba(3,2,19,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 bg-white/5">
              <div className="w-14 h-14 bg-[rgba(255,255,255,0.1)] rounded-xl flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <div className="mt-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[30px] font-bold font-['Arimo',sans-serif]">{feature.stat}</span>
                  <span className="text-sm text-white/60 font-['Arimo',sans-serif]">{feature.sublabel}</span>
                </div>
                <h3 className="text-xl font-bold font-['Arimo',sans-serif]">{feature.title}</h3>
                <p className="text-white/70 mt-2 text-sm font-['Arimo',sans-serif]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
