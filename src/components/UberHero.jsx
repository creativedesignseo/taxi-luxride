import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Briefcase, Calendar, Clock, MapPin, Loader2, Plus, Trash2, GripVertical } from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';
import { getPlaceSuggestions, getPlaceDetails, getRouteData, reverseGeocode, generateSessionToken } from '../lib/mapbox';
import { getCurrentLocation } from '../lib/whatsapp';

const UberHero = ({ onBooking }) => {
  const { t } = useTranslation();
  // --- STATE ---
  const [origin, setOrigin] = useState('');
  const [originCoords, setOriginCoords] = useState(null);
  const [locationLabel, setLocationLabel] = useState(t('hero.immediate') === 'Ahora' ? 'Detectando...' : 'Detecting...');
  
  // Multiple stops support (Uber-style)
  const [stops, setStops] = useState([{ id: 'stop-' + Date.now(), address: '', coords: null }]);
  const MAX_STOPS = 3;
  
  // Search / Autocomplete
  const [suggestions, setSuggestions] = useState([]);
  const [activeInput, setActiveInput] = useState(null); // 'origin' | 'stop-0' | 'stop-1' | etc
  const [sessionToken] = useState(generateSessionToken());
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [isRouting, setIsRouting] = useState(false);

  // Booking Options
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(0);
  const [bookingType, setBookingType] = useState('now'); // 'now' | 'scheduled'
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  // Modals
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showPassengersModal, setShowPassengersModal] = useState(false);
  // Vehicle Options Data
  const vehicles = [
    { id: 'ride', name: 'Taxi Standard', desc: 'Viajes rápidos y económicos', price: '25€-30€', img: 'https://mobile-content.uber.com/launch-experience/top_bar_rides_3d.png' },
    { id: 'eco', name: 'Taxi Eco', desc: 'Vehículos híbridos o eléctricos', price: '25€-30€', img: 'https://mobile-content.uber.com/launch-experience/top_bar_rides_3d.png' }, // Placeholder img
    { id: 'van', name: 'Taxi Van', desc: 'Grupos de hasta 8 personas', price: '45€-55€', img: 'https://mobile-content.uber.com/launch-experience/top_bar_rides_3d.png' },
    { id: 'pet', name: 'Taxi Pets', desc: 'Viaja con tu mascota', price: '30€-35€', img: 'https://mobile-content.uber.com/launch-experience/top_bar_rides_3d.png' },
    { id: 'assist', name: 'Taxi Assist', desc: 'Ayuda extra certificada', price: '28€-33€', img: 'https://mobile-content.uber.com/launch-experience/top_bar_rides_3d.png' },
  ];

  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].id);

  // ... (existing helper functions) ...

  // Update render to include the list
  // I will append this new UI segment *before* the "Ver tarifas sugeridas" button in the form/content area.


  // Helper to extract City, Country Code from Mapbox Context
  const updateLocationLabel = (feature) => {
    if (!feature || !feature.context) return;
    
    const city = feature.context.find(c => c.id.startsWith('place'))?.text;
    const country = feature.context.find(c => c.id.startsWith('country'))?.short_code?.toUpperCase();
    
    if (city && country) {
      setLocationLabel(`${city}, ${country}`);
    } else if (country) {
      setLocationLabel(feature.text || `España, ${country}`);
    } else {
       setLocationLabel(feature.text || 'Ubicación seleccionada');
    }
  };

  // Fetch initial location
  useEffect(() => {
    const initLocation = async () => {
       try {
          const position = await getCurrentLocation();
          const { longitude, latitude } = position;
          const feature = await reverseGeocode(longitude, latitude);
          if (feature) {
             updateLocationLabel(feature);
             // Optionally set origin input if you want auto-fill:
             // setOrigin(feature.place_name); 
             // setOriginCoords([longitude, latitude]);
          } else {
             setLocationLabel('España, ES');
          }
       } catch (error) {
          console.log("Loc error", error);
          setLocationLabel('España, ES'); // Fallback
       }
    };
    initLocation();
  }, []);

  // --- AUTOCOMPLETE DEBOUNCE ---
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (activeInput === 'origin' && origin.length > 2) {
        const results = await getPlaceSuggestions(origin, sessionToken);
        setSuggestions(results);
      } else if (activeInput?.startsWith('stop-')) {
        const stopIndex = parseInt(activeInput.split('-')[1]);
        const stopAddress = stops[stopIndex]?.address || '';
        if (stopAddress.length > 2) {
          const results = await getPlaceSuggestions(stopAddress, sessionToken);
          setSuggestions(results);
        } else {
          setSuggestions([]);
        }
      } else {
        setSuggestions([]);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [origin, stops, activeInput, sessionToken]);

  // --- HANDLERS ---

  const handleSelectPlace = async (feature) => {
    let coords = null;
    let placeName = feature.place_name;

    // Retrieve details if coordinate is missing (Search Box API flow)
    if (feature.action === 'retrieve') {
      const details = await getPlaceDetails(feature.id, sessionToken);
      if (details) {
        coords = details.center;
        placeName = details.place_name || feature.place_name;
      }
    } else {
      coords = feature.center;
    }

    if (!coords) return; 

    if (activeInput === 'origin') {
      setOrigin(placeName);
      setOriginCoords(coords);
      // Update top label context based on new origin
      const newContext = await reverseGeocode(coords[0], coords[1]);
      if (newContext) updateLocationLabel(newContext);
    } else if (activeInput?.startsWith('stop-')) {
      // Find index by ID or keep using index from activeInput string if it matches rendered order? 
      // activeInput is set as `stop-${index}` in render.
      // So retrieving by index is still correct as long as we update state immutably.
      const stopIndex = parseInt(activeInput.split('-')[1]);
      setStops(prev => {
        const newStops = [...prev];
        newStops[stopIndex] = { ...newStops[stopIndex], address: placeName, coords };
        return newStops;
      });
    }
    setSuggestions([]);
    setActiveInput(null);
  };

  // Add/Remove stops handlers
  const addStop = () => {
    if (stops.length < MAX_STOPS) {
      setStops(prev => [...prev, { id: 'stop-' + Date.now() + Math.random(), address: '', coords: null }]);
    }
  };

  const removeStop = (index) => {
    if (stops.length > 1) {
      setStops(prev => prev.filter((_, i) => i !== index));
    }
  };

  const updateStopAddress = (index, address) => {
    setStops(prev => {
      const newStops = [...prev];
      newStops[index] = { ...newStops[index], address, coords: null };
      return newStops;
    });
  };

  // Reorder stops
  const moveStopUp = (index) => {
    if (index > 0) {
      setStops(prev => {
        const newStops = [...prev];
        [newStops[index - 1], newStops[index]] = [newStops[index], newStops[index - 1]];
        return newStops;
      });
    }
  };

  const swapStops = (index1, index2) => {
    if (index1 >= 0 && index2 >= 0 && index1 < stops.length && index2 < stops.length) {
      setStops(prev => {
        const newStops = [...prev];
        [newStops[index1], newStops[index2]] = [newStops[index2], newStops[index1]];
        return newStops;
      });
    }
  };

  const handleUseMyLocation = async () => {
    setIsLoadingLocation(true);
    try {
      const position = await getCurrentLocation();
      const { longitude, latitude } = position;
      const coords = [longitude, latitude];
      
      const place = await reverseGeocode(longitude, latitude);
      
      if (place) {
        setOrigin(place.place_name);
        setOriginCoords(coords);
      } else {
        setOrigin(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        setOriginCoords(coords);
      }
      setSuggestions([]);
      setActiveInput(null);
    } catch (error) {
      console.error('Error getting location:', error);
      alert('No se pudo obtener tu ubicación. Por favor, verifica los permisos del navegador.');
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const handleBookingClick = async () => {
     // Validate: origin + at least first stop must have coords
     const finalStop = stops[stops.length - 1];
     const hasAllCoords = originCoords && finalStop?.coords;
     
     if (!hasAllCoords) {
        alert("Por favor selecciona origen y destino de la lista");
        return;
     }

     setIsRouting(true);
     
     // Build waypoints array for route calculation
     const allCoords = [originCoords, ...stops.filter(s => s.coords).map(s => s.coords)];
     
     // Calculate route (origin -> waypoints -> final destination)
     const routeData = await getRouteData(allCoords[0], allCoords[allCoords.length - 1], allCoords.slice(1, -1));
     
     setIsRouting(false);

     if (!routeData) {
        alert("No se pudo calcular la ruta. Intenta de nuevo.");
        return;
     }

     // Prepare Booking Data with all stops
     const bookingData = {
        origin: { address: origin, coordinates: originCoords },
        stops: stops.filter(s => s.coords).map(s => ({ address: s.address, coordinates: s.coords })),
        destination: { address: finalStop.address, coordinates: finalStop.coords },
        date: bookingType === 'now' ? 'Ahora' : selectedDate,
        time: bookingType === 'now' ? 'Inmediato' : selectedTime,
        passengers,
        luggage,
        vehicle: vehicles.find(v => v.id === selectedVehicle)?.name || 'Standard',
        price: 'Approx',
        timeEstimate: Math.round(routeData.durationSeconds / 60)
     };

     // 3. Call Parent Handler
     onBooking({
        bookingData,
        routeGeometry: routeData.geometry,
        originCoords,
        destCoords: finalStop.coords
     });
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const isToday = selectedDate === todayStr;
    
    for (let hour = 0; hour < 24; hour++) {
      for (let minutes = 0; minutes < 60; minutes += 30) {
        const slotTime = new Date();
        slotTime.setHours(hour, minutes, 0, 0);
        if (isToday) {
          const bufferTime = new Date(now.getTime() + 30 * 60000);
          if (slotTime <= bufferTime) continue;
        }
        const timeStr = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        slots.push(timeStr);
      }
    }
    return slots;
  };
  const timeSlots = generateTimeSlots();


  return (
    <section id="inicio" className="w-full bg-white font-sans text-black relative min-h-[calc(100vh-85px)] lg:min-h-[490px] lg:h-[490px] flex flex-col justify-start lg:justify-center pt-5 lg:pt-0">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-16 pb-8 relative">
        
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-24 relative z-10">
          
          {/* Left Column Content */}
          <div className="flex-1 max-w-[480px]">
             
             {/* Location Selector */}
             <div className="mb-6 flex items-center text-black">
                <svg aria-hidden="true" fill="currentColor" focusable="false" height="14" width="14" viewBox="0 0 14 14" color="black" className="mr-2">
                   <path d="M10.9081 2.21665C8.74974 0.0583171 5.24974 0.0583171 3.09141 2.21665C0.933073 4.37498 0.933073 7.93332 3.09141 10.0917L6.99974 14L10.9081 10.0333C13.0664 7.93332 13.0664 4.37498 10.9081 2.21665ZM6.99974 7.29165C6.35807 7.29165 5.83307 6.76665 5.83307 6.12498C5.83307 5.48332 6.35807 4.95832 6.99974 4.95832C7.64141 4.95832 8.16641 5.48332 8.16641 6.12498C8.16641 6.76665 7.64141 7.29165 6.99974 7.29165Z"></path>
                </svg>
                <span className="text-sm mr-1">, {locationLabel}</span>
                <button 
                  onClick={() => {
                    const input = document.querySelector('input[placeholder="Ingresa una ubicación"]');
                    if (input) {
                      input.focus();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-sm font-medium hover:underline transition-all"
                >
                  {t('hero.changeCity')}
                </button>
             </div>

             {/* Heading */}
             <h1 className="text-[36px] md:text-[52px] font-bold leading-[1.15] mb-8 font-['Inter',sans-serif] tracking-tight text-black">
                 {t('hero.title')}
             </h1>

             {/* Form Container */}
             <div className="flex flex-col gap-4">
                
                {/* Options Row */}
                <div className="flex flex-wrap gap-2 md:gap-3 relative z-30">
                  {/* Time Selector */}
                  <div className="relative">
                    <button 
                      onClick={() => {
                        const newState = !showTimeModal;
                        setShowTimeModal(newState);
                        if (newState) setShowPassengersModal(false); // Close other modal
                      }}
                      className="flex items-center gap-2 bg-[#EEEEEE] hover:bg-[#E2E2E2] transition-colors rounded-full pl-3 pr-4 py-2 text-black font-medium text-sm"
                    >
                       <div className="w-5 h-5 flex items-center justify-center">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                           <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm6 13h-8V4h3v7h5v3Z" fill="currentColor"></path>
                         </svg>
                       </div>
                       <span>{bookingType === 'now' ? t('hero.timeNow') : `${selectedDate} ${selectedTime}`}</span>
                       <div className="w-5 h-5 flex items-center justify-center">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                           <path d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z" fill="currentColor"></path>
                         </svg>
                       </div>
                    </button>
                    {showTimeModal && (
                      <>
                        {/* Mobile Backdrop */}
                        <div 
                           className="fixed inset-0 bg-black/50 z-[60] md:hidden"
                           onClick={() => setShowTimeModal(false)}
                        />
                        
                        {/* Modal Content */}
                        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[320px] bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-[70] md:absolute md:top-full md:left-0 md:translate-x-0 md:translate-y-0 md:w-auto md:min-w-[280px] md:mt-2">
                          <h3 className="font-bold mb-3 text-lg">¿Cuándo quieres viajar?</h3>
                          <div className="space-y-2">
                             <button 
                               onClick={() => { setBookingType('now'); setShowTimeModal(false); }}
                               className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${bookingType === 'now' ? 'bg-black text-white' : 'hover:bg-gray-50'}`}
                             >
                               <Clock size={18} />
                               <span>{t('hero.timeNow')}</span>
                             </button>
                             <button 
                               onClick={() => { setBookingType('scheduled'); setShowCalendarModal(true); setShowTimeModal(false); }}
                               className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${bookingType === 'scheduled' ? 'bg-black text-white' : 'hover:bg-gray-50'}`}
                             >
                               <Calendar size={18} />
                               <span>{t('hero.timeLater')}</span>
                             </button>
                          </div>
                      </div>
                      </>
                    )}
                  </div>

                  {/* Passengers Selector */}
                  <div className="relative">
                     <button 
                       onClick={() => {
                         const newState = !showPassengersModal;
                         setShowPassengersModal(newState);
                         if (newState) setShowTimeModal(false); // Close other modal
                       }}
                       className="flex items-center gap-2 bg-[#EEEEEE] hover:bg-[#E2E2E2] transition-colors rounded-full pl-3 pr-4 py-2 text-black font-medium text-sm"
                     >
                       <Users size={16} />
                       <span>{passengers}</span>
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                           <path d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z" fill="currentColor"></path>
                       </svg>
                     </button>
                     
                     {showPassengersModal && (
                       <>
                         {/* Mobile Backdrop */}
                         <div 
                           className="fixed inset-0 bg-black/50 z-[60] md:hidden"
                           onClick={() => setShowPassengersModal(false)}
                         />
                         
                         {/* Modal Content */}
                         <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[320px] bg-white rounded-xl shadow-xl border border-gray-100 p-6 z-[70] md:absolute md:top-full md:left-0 md:translate-x-0 md:translate-y-0 md:w-auto md:min-w-[300px] md:mt-2">
                          <div className="mb-6">
                            <label className="text-sm font-bold text-gray-500 mb-2 block uppercase">Pasajeros</label>
                            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                               <button 
                                 onClick={() => setPassengers(Math.max(1, passengers - 1))}
                                 disabled={passengers <= 1}
                                 className="w-10 h-10 bg-white rounded-md shadow-sm flex items-center justify-center font-bold hover:bg-gray-100 disabled:opacity-50"
                               >
                                 -
                               </button>
                               <span className="text-xl font-bold w-12 text-center">{passengers}</span>
                               <button 
                                 onClick={() => setPassengers(Math.min(15, passengers + 1))}
                                 className="w-10 h-10 bg-white rounded-md shadow-sm flex items-center justify-center font-bold hover:bg-gray-100"
                               >
                                 +
                               </button>
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-bold text-gray-500 mb-2 block uppercase">Equipaje (Maletas)</label>
                            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                               <button 
                                 onClick={() => setLuggage(Math.max(0, luggage - 1))}
                                 disabled={luggage <= 0}
                                 className="w-10 h-10 bg-white rounded-md shadow-sm flex items-center justify-center font-bold hover:bg-gray-100 disabled:opacity-50"
                               >
                                 -
                               </button>
                               <span className="text-xl font-bold w-12 text-center">{luggage}</span>
                               <button 
                                 onClick={() => setLuggage(Math.min(10, luggage + 1))}
                                 className="w-10 h-10 bg-white rounded-md shadow-sm flex items-center justify-center font-bold hover:bg-gray-100"
                               >
                                 +
                               </button>
                            </div>
                          </div>
                          <button 
                             onClick={() => setShowPassengersModal(false)}
                             className="w-full mt-6 bg-black text-white py-3 rounded-lg font-bold hover:bg-black/90"
                          >
                             Listo
                          </button>
                       </div>
                       </>
                     )}
                  </div>
                </div>

                {/* Inputs Wrapper */}
                <div className="relative isolate">
                   {/* Visual Connector Line */}
                   <div className="absolute left-[23px] top-[32px] bottom-[32px] w-[2px] bg-black z-20"></div>

                   <div className="flex flex-col gap-3">
                      <div className={`relative group ${activeInput === 'origin' ? 'z-20' : 'z-10'}`}>
                         <div className="w-full min-h-[56px] bg-[#F3F3F3] rounded-xl flex items-center relative transition-colors cursor-text hover:bg-[#E8E8E8] border border-transparent focus-within:bg-white focus-within:ring-2 focus-within:ring-[#FFDB3A]">
                            <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center z-10">
                               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-black">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor"></path>
                               </svg>
                            </div>
                            <input 
                               type="text" 
                               value={origin}
                               onChange={(e) => { setOrigin(e.target.value); setOriginCoords(null); }}
                               onFocus={() => setActiveInput('origin')}
                               placeholder={t('hero.pickupPlaceholder')}
                               className="w-full h-full bg-transparent border-none outline-none text-base font-normal text-black placeholder:text-[#5E5E5E] font-['Inter',sans-serif] pl-12 pr-12 py-3.5"
                            />
                            {/* My Location / Clear */}
                            {origin && !originCoords ? (
                               <div onClick={() => setOrigin('')} className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center z-10 cursor-pointer text-gray-500 hover:text-black">✕</div>
                            ) : (
                               <div 
                                 onClick={handleUseMyLocation}
                                 className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center z-10 cursor-pointer text-black hover:opacity-70"
                               >
                                 {isLoadingLocation ? <Loader2 className="animate-spin text-black" size={18} /> : (
                                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                     <path d="M10.5 13.5.5 11 21 3l-8 20.5-2.5-10Z" fill="currentColor"></path>
                                   </svg>
                                 )}
                               </div>
                            )}
                         </div>
                         
                         {/* Origin Suggestions */}
                         {activeInput === 'origin' && suggestions.length > 0 && (
                            <div className="absolute top-full left-0 right-0 z-50 bg-white shadow-xl rounded-b-lg border border-t-0 border-gray-100 max-h-[300px] overflow-y-auto">
                               {suggestions.map(s => (
                                  <div 
                                    key={s.id} 
                                    onClick={() => handleSelectPlace(s)}
                                    className="p-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer flex items-center gap-3"
                                  >
                                     <div className="bg-[#EEE] p-2 rounded-full">
                                        <MapPin size={16} />
                                     </div>
                                     <div>
                                        <p className="text-sm font-bold">{s.name}</p>
                                        <p className="text-xs text-gray-500">{s.full_address}</p>
                                     </div>
                                  </div>
                               ))}
                            </div>
                         )}
                      </div>

                      {/* Stops Inputs (Multiple Destinations) */}
                      {stops.map((stop, index) => (
                        <div key={stop.id} className={`relative group ${activeInput === `stop-${index}` ? 'z-20' : 'z-0'}`}>
                          <div className="w-full min-h-[56px] bg-[#F3F3F3] rounded-xl flex items-center relative transition-colors cursor-text hover:bg-[#E8E8E8] border border-transparent focus-within:bg-white focus-within:ring-2 focus-within:ring-[#FFDB3A]">
                             <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center z-10">
                                {/* Square icon for last stop, number for intermediate */}
                                {index === stops.length - 1 ? (
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-black">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22 2H2v20h20V2Zm-7 7H9v6h6V9Z" fill="currentColor"></path>
                                  </svg>
                                ) : (
                                  <span className="w-5 h-5 bg-black text-white rounded-sm text-xs font-bold flex items-center justify-center">{index + 1}</span>
                                )}
                             </div>
                             <input 
                                type="text" 
                                value={stop.address}
                                onChange={(e) => updateStopAddress(index, e.target.value)}
                                onFocus={() => setActiveInput(`stop-${index}`)}
                                placeholder={index === 0 ? t('hero.destinationPlaceholder') : t('hero.addStopPlaceholder', 'Añadir parada')}
                                className="w-full h-full bg-transparent border-none outline-none text-base font-normal text-black placeholder:text-[#5E5E5E] font-['Inter',sans-serif] pl-12 pr-16 py-3.5"
                             />
                             <div className="absolute right-0 top-0 bottom-0 flex items-center gap-0 pr-2 z-10">
                               {/* Reorder grip (only for intermediate stops, not first) */}
                               {stops.length > 1 && index > 0 && (
                                 <button 
                                   onClick={() => moveStopUp(index)} 
                                   className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black transition-colors cursor-grab active:cursor-grabbing"
                                   title="Mover parada arriba"
                                 >
                                   <GripVertical size={18} />
                                 </button>
                               )}
                               {/* Clear/Remove button */}
                               {stops.length > 1 && (
                                 <button 
                                   onClick={() => removeStop(index)} 
                                   className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
                                   title="Eliminar parada"
                                 >
                                   <Trash2 size={16} />
                                 </button>
                               )}
                               {/* Add stop button (only on last stop) */}
                               {index === stops.length - 1 && stops.length < MAX_STOPS && (
                                 <button 
                                   onClick={addStop} 
                                   className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
                                   title="Añadir parada intermedia"
                                 >
                                   <Plus size={22} strokeWidth={2.5} />
                                 </button>
                               )}
                             </div>
                          </div>

                          {/* Stop Suggestions */}
                          {activeInput === `stop-${index}` && suggestions.length > 0 && (
                             <div className="absolute top-full left-0 right-0 z-50 bg-white shadow-xl rounded-b-lg border border-t-0 border-gray-100 max-h-[300px] overflow-y-auto">
                                {suggestions.map(s => (
                                   <div 
                                     key={s.id} 
                                     onClick={() => handleSelectPlace(s)}
                                     className="p-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer flex items-center gap-3"
                                   >
                                      <div className="bg-[#EEE] p-2 rounded-full">
                                         <MapPin size={16} />
                                      </div>
                                      <div>
                                         <p className="text-sm font-bold">{s.name}</p>
                                         <p className="text-xs text-gray-500">{s.full_address}</p>
                                      </div>
                                   </div>
                                ))}
                             </div>
                          )}
                       </div>
                      ))}
                   </div>
                </div>

                {/* Vehicle Selector */}
                {/* Vehicle Selector (Temporarily Disabled) */}
                {/* 
                <div className="mt-4 max-h-[350px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                   {vehicles.map((v) => (
                      <div 
                         key={v.id}
                         onClick={() => setSelectedVehicle(v.id)}
                         className={`flex items-center gap-4 p-3 rounded-xl shadow-sm border cursor-pointer transition-all
                            ${selectedVehicle === v.id 
                               ? 'bg-[#F3F3F3] border-black ring-1 ring-black' 
                               : 'bg-white border-black/5 hover:bg-gray-50 hover:border-black/20'
                            }
                         `}
                      >
                         <div className="w-16 h-16 shrink-0">
                            <img 
                               src={v.img} 
                               alt={v.name}
                               className="w-full h-full object-contain"
                            />
                         </div>
                         <div className="flex-1">
                            <div className="flex items-center justify-between">
                               <p className="font-bold text-base font-['Inter',sans-serif] text-black">{v.name}</p>
                               <p className="font-bold text-base font-['Inter',sans-serif] text-black">{v.price}</p>
                            </div>
                            <p className="text-xs text-gray-500">{v.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
                */}

                {/* CTA Button */}
                <div className="mt-4">
                   <button 
                     onClick={handleBookingClick}
                     disabled={isRouting}
                     className="bg-black text-white px-6 py-3.5 rounded-lg font-bold text-base hover:bg-black/90 transition-all font-['Inter',sans-serif] w-fit flex items-center gap-2"
                   >
                     {isRouting ? <Loader2 className="animate-spin" size={20} /> : null}
                     {t('hero.seeRates')}
                   </button>
                </div>
             </div>
          </div>
        </div>
        
        {/* Right Content - Image (Desktop Only) */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[50%] max-w-[800px] pointer-events-none pr-4 z-0">
           <img 
              src="/img/Coche de lujo.png" 
              alt="Taxi Lux Ride - Luxury Car"
              className="w-full h-auto object-contain transform scale-110 translate-x-10"
           />
        </div>

      </div>

      {/* Calendar Modal */}
      {showCalendarModal && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
           <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl relative">
              <button 
                 onClick={() => setShowCalendarModal(false)}
                 className="absolute right-4 top-4 text-gray-400 hover:text-black"
              >
                ✕
              </button>
              <h3 className="text-xl font-bold mb-4 text-black">{t('hero.selectDate')}</h3>
              
              <CustomDatePicker 
                 selectedDate={selectedDate}
                 onChange={setSelectedDate}
              />
              
              {selectedDate && (
                 <div className="mt-4">
                    <label className="text-sm font-bold text-gray-500 mb-2 block">{t('hero.selectTime')}</label>
                    <select 
                       value={selectedTime}
                       onChange={(e) => setSelectedTime(e.target.value)}
                       className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-black"
                    >
                       <option value="">{t('hero.selectTimePlaceholder')}</option>
                       {timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                       ))}
                    </select>
                 </div>
              )}

              <button 
                 disabled={!selectedDate || !selectedTime}
                 onClick={() => {
                    setShowCalendarModal(false);
                 }}
                 className="w-full mt-6 bg-black text-white py-3 rounded-lg font-bold hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                  {t('hero.confirmSchedule')}
              </button>
           </div>
        </div>
      )}

    </section>
  );
};

export default UberHero;

