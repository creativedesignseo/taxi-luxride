import React from 'react';
import { Check, MapPin, ChevronRight, Phone } from 'lucide-react';

const BookingCTA = ({ onBooking }) => {
  return (
    <section id="reservar" className="py-12 md:py-20 bg-[#FBFBFB]">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
            <span className="text-sm font-medium text-[rgba(3,2,19,0.5)] uppercase tracking-wider font-['Arimo',sans-serif]">Reservas</span>
            <h2 className="text-[32px] md:text-[48px] font-bold text-[#030213] leading-tight font-['Inter',sans-serif]">
              Reserva tu taxi<br />en segundos
            </h2>
            <p className="text-base md:text-lg text-[rgba(3,2,19,0.7)] font-['Arimo',sans-serif]">
              Completa el formulario o llámanos y un taxi estará contigo en minutos. Sin esperas, sin complicaciones.
            </p>
            <ul className="space-y-3 md:space-y-4 inline-block text-left">
              {['Confirmación inmediata', 'Sin cargos de reserva', 'Cancelación gratuita'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#030213] rounded-full flex items-center justify-center shrink-0">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-[#030213] font-['Arimo',sans-serif]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Form */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[rgba(3,2,19,0.05)]">
              <h3 className="text-xl font-bold text-[#030213] mb-6 font-['Arimo',sans-serif]">Detalles de tu viaje</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#030213] mb-2 font-['Arimo',sans-serif]">Origen</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717182]" />
                    <input 
                      type="text" 
                      placeholder="¿Dónde te recogemos?"
                      className="w-full pl-10 pr-4 py-3 border border-[rgba(3,2,19,0.1)] rounded-xl focus:ring-2 focus:ring-[#ffc629] focus:border-transparent outline-none font-['Arimo',sans-serif]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#030213] mb-2 font-['Arimo',sans-serif]">Destino</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717182]" />
                    <input 
                      type="text" 
                      placeholder="¿A dónde vas?"
                      className="w-full pl-10 pr-4 py-3 border border-[rgba(3,2,19,0.1)] rounded-xl focus:ring-2 focus:ring-[#ffc629] focus:border-transparent outline-none font-['Arimo',sans-serif]"
                    />
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={onBooking}
                  className="w-full bg-[#ffc629] text-[#030213] py-4 rounded-xl font-bold hover:bg-[#e6b324] transition-colors flex items-center justify-center gap-2 font-['Inter',sans-serif]"
                >
                  Solicitar Taxi
                  <ChevronRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
