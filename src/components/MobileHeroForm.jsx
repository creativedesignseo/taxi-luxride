import React from 'react';
import { MapPin, Calendar, Clock, ChevronDown } from 'lucide-react';

const MobileHeroForm = ({ onBooking }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[rgba(3,2,19,0.05)] mt-8 md:hidden">
      <h3 className="text-xl font-bold text-[#1C1F23] mb-6 font-['Arimo',sans-serif]">Reservar Taxi</h3>
      
      <div className="space-y-4">
        {/* Origin */}
        <div>
          <label className="block text-sm font-medium text-[#1C1F23] mb-2 font-['Arimo',sans-serif]">Recogida</label>
          <div className="relative">
            <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717182]" />
            <input 
              type="text" 
              placeholder="Dirección de origen"
              className="w-full pl-10 pr-4 py-3 border border-[rgba(3,2,19,0.1)] rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none font-['Arimo',sans-serif] text-sm"
            />
          </div>
        </div>

        {/* Destination */}
        <div>
          <label className="block text-sm font-medium text-[#1C1F23] mb-2 font-['Arimo',sans-serif]">Destino</label>
          <div className="relative">
            <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717182]" />
            <input 
              type="text" 
              placeholder="Dirección de destino"
              className="w-full pl-10 pr-4 py-3 border border-[rgba(3,2,19,0.1)] rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none font-['Arimo',sans-serif] text-sm"
            />
          </div>
        </div>

        {/* Date & Time Row */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#1C1F23] mb-2 font-['Arimo',sans-serif]">Fecha</label>
            <div className="relative">
              <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717182]" />
              <input 
                type="text" 
                placeholder="Hoy"
                className="w-full pl-10 pr-4 py-3 border border-[rgba(3,2,19,0.1)] rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none font-['Arimo',sans-serif] text-sm"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#1C1F23] mb-2 font-['Arimo',sans-serif]">Hora</label>
            <div className="relative">
              <Clock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717182]" />
              <input 
                type="text" 
                placeholder="Ahora"
                className="w-full pl-10 pr-4 py-3 border border-[rgba(3,2,19,0.1)] rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none font-['Arimo',sans-serif] text-sm"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          onClick={onBooking}
          className="w-full bg-[#1C1F23] text-white py-4 rounded-xl font-bold hover:bg-[#1C1F23]/90 transition-all flex items-center justify-center gap-2 font-['Inter',sans-serif] mt-2 shadow-md"
        >
          Ver Tarifas
        </button>
      </div>
    </div>
  );
};

export default MobileHeroForm;

