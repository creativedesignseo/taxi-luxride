import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Phone, Clock, Users, MapPin, Check, Calendar } from 'lucide-react';
import { toursData } from '../data/toursData';

const TourDetailPage = () => {
    const { i18n } = useTranslation();
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
        <div className="bg-white min-h-screen font-sans">
            <Helmet>
                <title>{`${tour.highlight} - Taxi Lux Ride`}</title>
                <meta name="description" content={tour.description[lang] || tour.description.es} />
            </Helmet>

            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[750px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <div 
                        className="absolute inset-0 z-10"
                        style={{ 
                            background: 'linear-gradient(152deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.7) 50%, rgba(10, 10, 10, 0.8) 100%)' 
                        }}
                    />
                    <img 
                        src={tour.image} 
                        alt={tour.highlight} 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 container mx-auto px-4 md:px-16 lg:px-[70px] py-[50px]">
                    <div className="flex flex-col gap-8 max-w-2xl">
                        <button 
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors w-fit"
                        >
                            <ArrowLeft size={16} />
                            <span className="text-base">
                                {lang === 'es' ? 'Volver a inicio' : lang === 'it' ? 'Torna alla home' : 'Back to home'}
                            </span>
                        </button>

                        <span className="inline-block w-fit px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-bold">
                            {tour.badge[lang] || tour.badge.es}
                        </span>

                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                {tour.title[lang] || tour.title.es}
                            </h1>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400 leading-tight">
                                {tour.highlight}
                            </h1>
                        </div>

                        <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                            {tour.description[lang] || tour.description.es}
                        </p>

                        <div className="flex flex-wrap gap-6 md:gap-10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-white/10">
                                    <Clock size={20} className="text-yellow-400" />
                                </div>
                                <div className="text-white">
                                    <p className="opacity-60 text-xs uppercase tracking-wider">
                                        {lang === 'es' ? 'Duración' : lang === 'it' ? 'Durata' : 'Duration'}
                                    </p>
                                    <p className="font-bold">{tour.duration}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-white/10">
                                    <Users size={20} className="text-yellow-400" />
                                </div>
                                <div className="text-white">
                                    <p className="opacity-60 text-xs uppercase tracking-wider">
                                        {lang === 'es' ? 'Capacidad' : lang === 'it' ? 'Capacità' : 'Capacity'}
                                    </p>
                                    <p className="font-bold">{tour.capacity}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <button 
                                onClick={handleWhatsApp}
                                className="flex items-center gap-2 bg-[#1C1F23] hover:bg-[#34373C] text-white px-6 py-3 rounded-xl font-bold transition-all"
                            >
                                <Phone size={18} />
                                {lang === 'es' ? 'Reservar Ahora' : lang === 'it' ? 'Prenota Ora' : 'Book Now'}
                            </button>
                            <button 
                                onClick={handleCall}
                                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold border border-white/20 transition-all"
                            >
                                <Calendar size={18} />
                                {lang === 'es' ? 'Consultar' : lang === 'it' ? 'Verifica' : 'Check'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Price Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-16 lg:px-[70px]">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                {lang === 'es' ? 'Precio del Tour' : lang === 'it' ? 'Prezzo del Tour' : 'Tour Price'}
                            </h2>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-2xl font-bold text-slate-900">
                                    {lang === 'es' ? 'Consultar Precio' : lang === 'it' ? 'Consultare Prezzo' : 'Consult Price'}
                                </span>
                            </div>
                            <p className="text-gray-500 text-sm">
                                {lang === 'es' ? '* Hasta 8 personas.' : lang === 'it' ? '* Fino a 8 persone.' : '* Up to 8 people.'}
                            </p>
                        </div>
                        <div>
                             <h3 className="text-xl font-bold text-slate-900 mb-6">
                                {lang === 'es' ? 'Incluido:' : lang === 'it' ? 'Incluso:' : 'Included:'}
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                     <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                         <Check size={14} className="text-green-600" />
                                     </div>
                                     <span className="text-gray-700">WiFi & Water</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Itinerary Section */}
             {tour.itinerary && (
                <section className="py-16 md:py-24 bg-slate-50">
                    <div className="container mx-auto px-4 md:px-16 lg:px-[70px]">
                         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                                {lang === 'es' ? 'Itinerario' : lang === 'it' ? 'Itinerario' : 'Itinerary'}
                        </h2>
                        <div className="max-w-2xl mx-auto">
                            {tour.itinerary.map((item, i) => (
                                <div key={i} className="flex gap-6 md:gap-8 py-5 border-b border-gray-200">
                                    <span className="text-xl font-bold text-slate-900 w-20 flex-shrink-0">{item.time}</span>
                                    <p className="text-gray-600">{item.desc[lang] || item.desc.es}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default TourDetailPage;
