import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Phone, Clock, Users, MapPin, Check, Calendar, ArrowRight } from 'lucide-react';
import { toursData } from '../data/toursData';

const TourDetailPage = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { id } = useParams();

    // Get current language (default to 'es' if not found)
    const currentLang = i18n.language ? i18n.language.split('-')[0] : 'es';
    const lang = ['es', 'en', 'it'].includes(currentLang) ? currentLang : 'es';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const tour = toursData[id];

    // If tour not found, redirect to home or 404
    if (!tour) {
        return <Navigate to="/" replace />;
    }

    const PHONE_NUMBER = "+34631806645";

    const handleCall = () => {
        window.location.href = `tel:${PHONE_NUMBER}`;
    };

    const handleWhatsApp = () => {
        const text = encodeURIComponent(`Hola, quiero reservar el ${tour.title[lang] || tour.title.es} ${tour.highlight}.`);
        window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
    };

    return (
        <div className="bg-white min-h-screen font-sans pt-[85px]">
            <Helmet>
                <title>{`${tour.highlight} - Taxi Lux Ride`}</title>
                <meta name="description" content={tour.description[lang] || tour.description.es} />
            </Helmet>

            {/* ===== HERO SECTION ===== */}
            <section className="relative min-h-[750px] md:h-[650px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <div 
                        className="absolute inset-0 z-10"
                        style={{ 
                            background: 'linear-gradient(152deg, rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.6) 50%, rgba(10, 10, 10, 0.8) 100%)' 
                        }}
                    />
                    <img 
                        src={tour.image} 
                        alt={tour.highlight} 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 container mx-auto px-6 md:px-16 py-12">
                    <div className="flex flex-col gap-6 max-w-3xl">
                        <button 
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors w-fit mb-2"
                        >
                            <ArrowLeft size={16} />
                            <span className="text-base text-white">
                                {lang === 'es' ? 'Volver a inicio' : lang === 'it' ? 'Torna alla home' : 'Back to home'}
                            </span>
                        </button>

                        <span className="inline-block w-fit px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-bold uppercase tracking-wide">
                            {tour.badge[lang] || tour.badge.es}
                        </span>

                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            {tour.title[lang] || tour.title.es} <span className="text-yellow-400">{tour.highlight}</span>
                        </h1>

                        <p className="hidden md:block text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
                            {tour.description[lang] || tour.description.es}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 md:mt-4">
                            <div className="flex items-center gap-3 text-white bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                <div className="text-yellow-400"><Clock /></div>
                                <span className="font-medium text-sm md:text-base">{tour.duration}</span>
                            </div>
                            <div className="flex items-center gap-3 text-white bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                <div className="text-yellow-400"><Users /></div>
                                <span className="font-medium text-sm md:text-base">{tour.capacity}</span>
                            </div>
                            <div className="flex items-center gap-3 text-white bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                <div className="text-yellow-400"><Check /></div>
                                <span className="font-medium text-sm md:text-base">
                                    {lang === 'es' ? 'Transfer Privado' : 'Private Transfer'}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-white bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                <div className="text-yellow-400"><MapPin /></div>
                                <span className="font-medium text-sm md:text-base">{tour.distance}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button 
                                onClick={handleWhatsApp}
                                className="flex items-center gap-2 bg-[#FFDB3A] hover:bg-[#e5c534] text-black px-8 py-4 rounded-xl font-bold transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <Phone size={20} />
                                {lang === 'es' ? 'Reservar Tour' : lang === 'it' ? 'Prenota Tour' : 'Book Tour'}
                            </button>
                            <button 
                                onClick={handleCall}
                                className="hidden md:flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold transition-all text-lg shadow-lg hover:bg-gray-100"
                            >
                                <Phone size={20} />
                                {lang === 'es' ? 'Llamar' : lang === 'it' ? 'Chiama' : 'Call'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== INFO SECTION ===== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Why Choose */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                {lang === 'es' ? '¿Qué incluye este tour?' : lang === 'it' ? 'Cosa include questo tour?' : 'What does this tour include?'}
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Flexibilidad Total' : 'Total Flexibility'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es' 
                                                ? "Tú marcas el ritmo. Nos adaptamos a tus horarios y preferencias para que disfrutes sin prisas."
                                                : "You set the pace. We adapt to your schedule and preferences so you can enjoy without rushing."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Solo para tu Grupo' : 'Only for your Group'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Vehículo exclusivo para ti y tus acompañantes. Sin compartir con desconocidos."
                                                : "Exclusive vehicle for you and your companions. No sharing with strangers."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Puerta a Puerta' : 'Door to Door'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Te recogemos en tu hotel, apartamento o crucero y te dejamos exactamente donde nos digas."
                                                : "We pick you up at your hotel, apartment or cruise ship and drop you off exactly where you tell us."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Itinerary Card (Mimics "Destinations" card) */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 sticky top-24">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <MapPin className="text-black" />
                                {lang === 'es' ? 'Itinerario Sugerido' : lang === 'it' ? 'Itinerario Suggerito' : 'Suggested Itinerary'}
                            </h3>
                            
                            <div className="space-y-4">
                                {tour.itinerary && tour.itinerary.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-black text-sm mb-1">{item.time}</span>
                                            <span className="font-medium text-slate-700">{item.desc[lang] || item.desc.es}</span>
                                        </div>
                                        {i < tour.itinerary.length - 1 && <ArrowRight size={16} className="text-gray-400" />}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed italic">
                                     {lang === 'es' 
                                      ? '* El itinerario es flexible y puede modificarse según tus preferencias.'
                                      : '* The itinerary is flexible and can be modified according to your preferences.'}
                                </p>
                            </div>

                            <button 
                                onClick={handleWhatsApp}
                                className="w-full mt-2 bg-black text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                            >
                                {lang === 'es' ? 'Consultar Precio' : lang === 'it' ? 'Richiedi Prezzo' : 'Check Price'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TourDetailPage;
