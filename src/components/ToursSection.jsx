import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const ToursSection = () => {
  const tours = [
    {
      title: 'Barcelona City Tour',
      price: 'Desde 45€',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
      duration: '4 horas'
    },
    {
      title: 'Sagrada Familia & Park Güell',
      price: 'Desde 60€',
      image: 'https://images.unsplash.com/photo-1562883676-8c7c748f49f6?w=800&q=80',
      duration: '5 horas'
    },
    {
      title: 'Camp Nou Experience',
      price: 'Desde 40€',
      image: 'https://images.unsplash.com/photo-1563299796-b729d0af54a5?w=800&q=80',
      duration: '3 horas'
    },
    {
      title: 'Montserrat Excursión',
      price: 'Desde 120€',
      image: 'https://images.unsplash.com/photo-1564858882888-294b07fb8d36?w=800&q=80',
      duration: '6 horas'
    }
  ];

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-sm font-medium text-[rgba(3,2,19,0.5)] uppercase tracking-wider font-['Arimo',sans-serif]">Descubre Barcelona</span>
            <h2 className="text-[48px] font-bold text-[#030213] mt-4 leading-tight font-['Inter',sans-serif]">
              Tours Exclusivos
            </h2>
            <p className="text-lg text-[rgba(3,2,19,0.7)] mt-4 font-['Arimo',sans-serif]">
              Conoce los lugares más emblemáticos de la ciudad con nuestros conductores expertos. Servicio personalizado y sin esperas.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#030213] font-bold font-['Arimo',sans-serif] hover:text-[#ffc629] transition-colors">
            Ver todos los tours <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <span className="text-sm font-bold text-[#030213] font-['Arimo',sans-serif]">{tour.price}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#030213] mb-1 font-['Arimo',sans-serif] group-hover:text-[#ffc629] transition-colors">
                {tour.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[rgba(3,2,19,0.5)] font-['Arimo',sans-serif]">{tour.duration}</span>
                <ChevronRight size={20} className="text-[#ffc629] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        <button className="md:hidden w-full mt-8 flex items-center justify-center gap-2 border border-[rgba(3,2,19,0.1)] py-4 rounded-xl text-[#030213] font-bold font-['Arimo',sans-serif] hover:bg-gray-50">
          Ver todos los tours <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ToursSection;
