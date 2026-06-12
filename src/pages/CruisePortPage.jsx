import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Calendar, Ship, MapPin, Check, Anchor, ArrowRight, Clock } from 'lucide-react';

const CruisePortPage = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const currentLang = i18n.language ? i18n.language.split('-')[0] : 'es';
    const lang = ['es', 'en', 'it'].includes(currentLang) ? currentLang : 'es';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const PHONE_NUMBER = "+34600707174";

    const handleWhatsApp = () => {
        const text = encodeURIComponent("Hola, quiero reservar un traslado al/del Puerto de Cruceros.");
        window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
    };

    const seoData = {
        title: {
            es: "Taxi Puerto Cruceros Barcelona - Traslados Muelle Adosado | Taxi Lux Ride",
            en: "Barcelona Cruise Port Taxi - Terminal Transfers | Taxi Lux Ride",
            it: "Taxi Porto Crociere Barcellona - Trasferimenti Terminal | Taxi Lux Ride"
        },
        description: {
            es: "Traslados directos al Puerto de Cruceros de Barcelona (Muelle Adosado). Conexión Aeropuerto-Puerto. Recogida a pie de barco para MSC, Costa, Royal Caribbean.",
            en: "Direct transfers to Barcelona Cruise Port (Moll Adossat). Airport-Port connection. Ship-side pickup for MSC, Costa, Royal Caribbean.",
            it: "Trasferimenti diretti al Porto Crociere di Barcellona (Moll Adossat). Collegamento Aeroporto-Porto. Ritiro sottobordo per MSC, Costa, Royal Caribbean."
        }
    };

    const content = {
        badge: { es: "Especial Cruceristas", en: "Cruise Special", it: "Speciale Crociere" },
        title: { es: "Traslados Puerto de Cruceros", en: "Cruise Port Transfers", it: "Trasferimenti Porto Crociere" },
        subtitle: {
            es: "La conexión más fiable entre el Aeropuerto, la Ciudad y tu Crucero. Te dejamos en la misma puerta de la terminal de embarque.",
            en: "The most reliable connection between the Airport, the City, and your Cruise. We drop you off right at the terminal gate.",
            it: "Il collegamento più affidabile tra l'Aeroporto, la Città e la tua Crociera. Ti lasciamo proprio al gate del terminal."
        },
        features: [
            { icon: <Anchor />, text: { es: "Muelle Adosado (A, B, C, D, E)", en: "Moll Adossat Terminals", it: "Terminal Moll Adossat" } },
            { icon: <Ship />, text: { es: "Recogida a pie de barco", en: "Ship-side pickup", it: "Ritiro sottobordo" } },
            { icon: <Check />, text: { es: "Espacio para mucho equipaje", en: "Space for lots of luggage", it: "Spazio per molti bagagli" } },
            { icon: <MapPin />, text: { es: "Conexión directa Aeropuerto", en: "Direct Airport Connection", it: "Collegamento diretto Aeroporto" } }
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans pt-[85px]">
            <Helmet>
                <title>{seoData.title[lang] || seoData.title.es}</title>
                <meta name="description" content={seoData.description[lang] || seoData.description.es} />
            </Helmet>

            <section className="relative min-h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 z-10 bg-black/40" />
                    <img 
                        src="/img/optimized/taxi-puerto-crucero-barcelona.webp" 
                        alt="Cruise Port" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 container mx-auto px-6 md:px-16 py-12">
                    <div className="flex flex-col gap-6 max-w-3xl">
                        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-white/90 hover:text-white transition-colors w-fit mb-2">
                            <ArrowLeft size={16} />
                            <span>{lang === 'es' ? 'Volver' : 'Back'}</span>
                        </button>
                        <span className="inline-block w-fit px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-bold uppercase tracking-wide">
                            {content.badge[lang] || content.badge.es}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            {content.title[lang] || content.title.es}
                        </h1>
                        <p className="hidden md:block text-white/90 text-xl leading-relaxed max-w-2xl">
                            {content.subtitle[lang] || content.subtitle.es}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {content.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-white bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                    <div className="text-yellow-400">{feature.icon}</div>
                                    <span className="font-medium">{feature.text[lang] || feature.text.es}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <button onClick={handleWhatsApp} className="flex items-center gap-2 bg-[#FFDB3A] hover:bg-[#e5c534] text-black px-8 py-4 rounded-xl font-bold transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <Calendar size={20} />
                                {lang === 'es' ? 'Reservar Traslado' : 'Book Transfer'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* ===== INFO SECTION ===== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 md:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                {lang === 'es' ? '¿Por qué elegirnos para tu Crucero?' : lang === 'it' ? 'Perché sceglierci per la tua Crociera?' : 'Why choose us for your Cruise?'}
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Acceso a Terminales' : 'Terminal Access'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es' 
                                                ? "Tenemos acceso autorizado hasta la misma puerta de la terminal de embarque del Muelle Adosado."
                                                : "We have authorized access right to the boarding terminal gate at Moll Adossat."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Puntualidad de Embarque' : 'Boarding Punctuality'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Garantizamos tu llegada a tiempo. Conocemos perfectamente los horarios y accesos del puerto."
                                                : "We guarantee punctual arrival. We know the port schedules and access points perfectly."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Check size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Servicio Integral' : 'Full Service'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Gestionamos tu traslado desde el Aeropuerto o tu hotel directamente al barco."
                                                : "We manage your transfer from the Airport or your hotel directly to the ship."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Anchor className="text-black" />
                                {lang === 'es' ? 'Conexiones Principales' : lang === 'it' ? 'Principali Collegamenti' : 'Main Connections'}
                            </h3>
                            
                            <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">Puerto ↔ Aeropuerto BCN</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">Puerto ↔ Hoteles Centro</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">Puerto ↔ Sants Estació</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#1C1F23]">
                                    <Ship className="text-[#FFDB3A]" size={20} />
                                    {lang === 'es' ? 'Cruceros' : 'Cruises'}
                                </h4>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        {lang === 'es' 
                                        ? 'Servicio para MSC, Costa Cruceros, Royal Caribbean, Norwegian y todas las navieras.'
                                        : 'Service for MSC, Costa Cruises, Royal Caribbean, Norwegian and all cruise lines.'}
                                </p>
                            </div>

                            <button 
                                onClick={handleWhatsApp}
                                className="w-full mt-6 bg-black text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                            >
                                {lang === 'es' ? 'Reservar Taxi Puerto' : 'Book Port Taxi'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CruisePortPage;
