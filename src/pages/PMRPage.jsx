import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Calendar, Accessibility, Check, Heart, UserCheck, ArrowRight } from 'lucide-react';

const PMRPage = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const currentLang = i18n.language ? i18n.language.split('-')[0] : 'es';
    const lang = ['es', 'en', 'it'].includes(currentLang) ? currentLang : 'es';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const PHONE_NUMBER = "+34631806645";

    const handleWhatsApp = () => {
        const text = encodeURIComponent("Hola, necesito reservar un Taxi Adaptado (Eurotaxi/PMR).");
        window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
    };

    const seoData = {
        title: {
            es: "Taxi Adaptado PMR Barcelona - Eurotaxi Silla de Ruedas | Taxi Lux Ride",
            en: "Wheelchair Accessible Taxi Barcelona - PMR Service | Taxi Lux Ride",
            it: "Taxi Accessibile PMR Barcellona - Eurotaxi Sedia a Rotelle | Taxi Lux Ride"
        },
        description: {
            es: "Servicio de Eurotaxi adaptado en Barcelona. Vehículos con rampa homologada para sillas de ruedas. Prioridad, seguridad y confort para personas con movilidad reducida.",
            en: "Adapted Eurotaxi service in Barcelona. Vehicles with certified ramps for wheelchairs. Priority, safety, and comfort for people with reduced mobility.",
            it: "Servizio Eurotaxi adattato a Barcellona. Veicoli con rampa omologata per sedie a rotelle. Priorità, sicurezza e comfort per persone con mobilità ridotta."
        }
    };

    const content = {
        badge: { es: "Servicio Adaptado (PMR)", en: "Accessible Service", it: "Servizio Accessibile" },
        title: { es: "Eurotaxi / Taxi Adaptado", en: "Eurotaxi / Wheelchair Taxi", it: "Eurotaxi / Taxi Adattato" },
        subtitle: {
            es: "Transporte inclusivo sin barreras. Flota adaptada con rampas homologadas y conductores sensibilizados para garantizar tu seguridad y confort.",
            en: "Inclusive transport without barriers. Fleet adapted with certified ramps and sensitized drivers to ensure your safety and comfort.",
            it: "Trasporto inclusivo senza barriere. Flotta adattata con rampe omologate e autisti sensibilizzati per garantire la tua sicurezza e comfort."
        },
        features: [
            { icon: <Accessibility />, text: { es: "Rampa Homologada", en: "Certified Ramp", it: "Rampa Omologata" } },
            { icon: <UserCheck />, text: { es: "Sin transferencia al asiento", en: "Travel in your wheelchair", it: "Viaggia sulla tua sedia" } },
            { icon: <Heart />, text: { es: "Asistencia Personalizada", en: "Personalized Assistance", it: "Assistenza Personalizzata" } },
            { icon: <Check />, text: { es: "Reserva Prioritaria", en: "Priority Booking", it: "Prenotazione Prioritaria" } }
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
                        src="/img/optimized/pmr-hero.webp" 
                        alt="PMR Taxi" 
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
                                {lang === 'es' ? 'Reservar Taxi Adaptado' : 'Book Accessible Taxi'}
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
                                {lang === 'es' ? 'Garantía de Accesibilidad' : lang === 'it' ? 'Garanzia di Accessibilità' : 'Accessibility Guarantee'}
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Accessibility size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Vehículos Homologados' : 'Certified Vehicles'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es' 
                                                ? "Nuestros Eurotaxis cumplen con todas las normativas de accesibilidad y seguridad vigentes."
                                                : "Our Eurotaxis comply with all current accessibility and safety regulations."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <UserCheck size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Confort Total' : 'Total Comfort'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Viaja sentado en tu propia silla de ruedas sin necesidad de transferencias incómodas."
                                                : "Travel seated in your own wheelchair without the need for uncomfortable transfers."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Servicio Humano' : 'Human Service'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Conductores formados para asistirte en todo momento con la máxima amabilidad."
                                                : "Drivers trained to assist you at all times with the utmost kindness."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Check className="text-black" />
                                {lang === 'es' ? 'Servicios Habituales' : lang === 'it' ? 'Servizi Abituali' : 'Common Services'}
                            </h3>
                            
                            <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">Traslados Aeropuerto PMR</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">Visitas Médicas / Rehabilitación</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">Turismo Accesible</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#1C1F23]">
                                    <Accessibility className="text-[#FFDB3A]" size={20} />
                                    {lang === 'es' ? 'Tarifas Oficiales' : 'Official Rates'}
                                </h4>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        {lang === 'es' 
                                        ? 'Aplicamos las tarifas oficiales de taxi sin suplementos abusivos. Precio justo garantizado.'
                                        : 'We apply official taxi rates without abusive surcharges. Fair price guaranteed.'}
                                </p>
                            </div>

                            <button 
                                onClick={handleWhatsApp}
                                className="w-full mt-6 bg-black text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                            >
                                {lang === 'es' ? 'Solicitar Eurotaxi' : 'Request Eurotaxi'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PMRPage;
