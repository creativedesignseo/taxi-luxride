import React from 'react';

const BookingWidget = ({ onBooking }) => {
  return (
    <div className="w-full max-w-[500px] bg-white p-6 md:p-10 rounded-xl shadow-none md:shadow-lg flex flex-col gap-6 font-sans">
      
      {/* 1. Header & Title */}
      <div>
        <h1 className="text-[36px] md:text-[52px] font-bold text-black leading-tight mb-8 font-['Inter',sans-serif] tracking-tight">
          Solicita un viaje
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        {/* 2. Time Selector pill */}
        <div className="w-fit">
           <button className="flex items-center gap-2 bg-[#EEEEEE] hover:bg-[#E2E2E2] transition-colors rounded-full px-4 py-2 text-black font-medium text-sm">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-black">
               <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm6 13h-8V4h3v7h5v3Z" fill="currentColor"></path>
             </svg>
             <span>Pedir para llevar ahora</span>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-black">
               <path d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z" fill="currentColor"></path>
             </svg>
           </button>
        </div>

        {/* 3. Inputs Container */}
        <div className="relative">
          {/* Connector Line - positioned visually between the icon centers */}
          <div className="absolute left-[22px] top-[45px] bottom-[45px] w-[2px] bg-black z-10 pointer-events-none"></div>

          <div className="flex flex-col gap-3">
             {/* Origin Input */}
             <div className="relative group">
                <div className="w-full min-h-[56px] bg-[#F3F3F3] rounded-lg flex items-center relative transition-colors cursor-text group-hover:bg-[#E8E8E8]">
                   {/* Icon Container */}
                   <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center z-10">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-black">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor"></path>
                      </svg>
                   </div>
                   
                   {/* Input */}
                   <input 
                      type="text" 
                      placeholder="Ingresa una ubicación"
                      className="w-full h-full bg-transparent border-none outline-none text-base font-normal text-black placeholder:text-[#5E5E5E] font-['Inter',sans-serif] pl-12 pr-12 py-3.5"
                   />

                   {/* Right Action (Location Fetch) */}
                   <div className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center z-10 cursor-pointer text-[#5E5E5E] hover:text-black">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M10.5 13.5.5 11 21 3l-8 20.5-2.5-10Z" fill="currentColor"></path>
                      </svg>
                   </div>
                </div>
             </div>

             {/* Destination Input */}
             <div className="relative group">
                <div className="w-full min-h-[56px] bg-[#F3F3F3] rounded-lg flex items-center relative transition-colors cursor-text group-hover:bg-[#E8E8E8]">
                   {/* Icon Container */}
                   <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center z-10">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-black">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22 2H2v20h20V2Zm-7 7H9v6h6V9Z" fill="currentColor"></path>
                      </svg>
                   </div>
                   
                   {/* Input */}
                   <input 
                      type="text" 
                      placeholder="Ingresa un destino"
                      className="w-full h-full bg-transparent border-none outline-none text-base font-normal text-black placeholder:text-[#5E5E5E] font-['Inter',sans-serif] pl-12 pr-4 py-3.5"
                   />
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 4. CTA Button */}
      <div className="mt-2">
        <button 
          onClick={onBooking}
          className="bg-black text-white px-8 py-3.5 rounded-lg font-bold text-base hover:bg-black/90 transition-all font-['Inter',sans-serif] w-fit"
        >
          Ver tarifas sugeridas
        </button>
      </div>
    </div>
  );
};

export default BookingWidget;
