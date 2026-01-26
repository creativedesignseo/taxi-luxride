import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Clock, Briefcase, MapPin, Check, Calendar, ArrowRight, Shield, Globe } from 'lucide-react';

const BusinessPage = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const currentLang = i18n.language ? i18n.language.split('-')[0] : 'es';
    const lang = ['es', 'en', 'it', 'de', 'fr'].includes(currentLang) ? currentLang : 'es';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const PHONE_NUMBER = "+34631806645";

    const handleCall = () => {
        window.location.href = `tel:${PHONE_NUMBER}`;
    };

    const handleWhatsApp = () => {
        const text = encodeURIComponent("Hola, necesito información sobre el servicio Business / Corporativo.");
        window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
    };

    const seoData = {
        title: {
            es: "Taxi Business Barcelona - Servicio Corporativo VIP | Taxi Lux Ride",
            en: "Business Taxi Barcelona - VIP Corporate Service | Taxi Lux Ride",
            it: "Taxi Business Barcellona - Servizio Corporate VIP | Taxi Lux Ride"
        },
        description: {
            es: "Transporte ejecutivo en Barcelona. Mercedes Clase E/V para empresas, eventos y congresos. Facturación mensual, conductores trajeados y discreción total.",
            en: "Executive transport in Barcelona. Mercedes E/V Class for companies, events, and congresses. Monthly billing, suited drivers, and total discretion.",
            it: "Trasporto esecutivo a Barcellona. Mercedes Classe E/V per aziende, eventi e congressi. Fatturazione mensile, autisti in abito e totale discrezione."
        }
    };

    const content = {
        badge: { es: "Servicio Premium", en: "Premium Service", it: "Servizio Premium" },
        title: { es: "Transporte Corporativo y Business", en: "Corporate & Business Transport", it: "Trasporto Corporate e Business" },
        subtitle: {
            es: "Soluciones de movilidad para ejecutivos y empresas. Puntualidad, elegancia y discreción en cada trayecto.",
            en: "Mobility solutions for executives and companies. Punctuality, elegance, and discretion in every journey.",
            it: "Soluzioni di mobilità per dirigenti e aziende. Puntualità, eleganza e discrezione in ogni viaggio."
        },
        features: [
            { icon: <Briefcase />, text: { es: "Vehículos Mercedes-Benz", en: "Mercedes-Benz Vehicles", it: "Veicoli Mercedes-Benz" } },
            { icon: <Shield />, text: { es: "Conductores Profesionales", en: "Professional Drivers", it: "Autisti Professionisti" } },
            { icon: <Globe />, text: { es: "Cobertura MWC y Eventos", en: "MWC & Events Coverage", it: "Copertura MWC ed Eventi" } },
            { icon: <Check />, text: { es: "Facturación Mensual", en: "Monthly Billing", it: "Fatturazione Mensile" } }
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
                    <div className="absolute inset-0 z-10 bg-black/60" />
                    <img 
                        src="/img/Coche de lujo.png" 
                        alt="Business Service" 
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
                                {lang === 'es' ? 'Reservar Chófer' : 'Book Chauffeur'}
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
                                {lang === 'es' ? '¿Por qué elegir nuestro Servicio Business?' : lang === 'it' ? 'Perché scegliere il nostro Servizio Business?' : 'Why choose our Business Service?'}
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Puntualidad Absoluta' : 'Absolute Punctuality'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es' 
                                                ? "Sabemos que el tiempo es oro. Nuestros conductores llegan siempre con antelación."
                                                : "We know time is money. Our drivers always arrive ahead of schedule."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Discreción y Confort' : 'Discretion & Comfort'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Vehículos de alta gama (Mercedes Clase E/V) oscurecidos y conductores de confianza."
                                                : "High-end vehicles (Mercedes E/V Class) with tinted windows and trusted drivers."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Check size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Gestión Flexible' : 'Flexible Management'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Cambios de última hora, facturación mensual y atención personalizada para empresas."
                                                : "Last-minute changes, monthly billing, and personalized corporate support."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Briefcase className="text-black" />
                                {lang === 'es' ? 'Servicios Frecuentes' : lang === 'it' ? 'Servizi Frequenti' : 'Frequent Services'}
                            </h3>
                            
                            <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">Disposición por Horas</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">Eventos / Congresos (MWC)</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">Aeropuerto ↔ Oficinas</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#1C1F23]">
                                    <Check className="text-[#FFDB3A]" size={20} />
                                    {lang === 'es' ? 'Soluciones Corporativas' : 'Corporate Solutions'}
                                </h4>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        {lang === 'es' 
                                        ? 'Ofrecemos cuentas para empresas con facturación mensual simplificada y gestión prioritaria.'
                                        : 'We offer corporate accounts with simplified monthly billing and priority management.'}
                                </p>
                            </div>

                            <button 
                                onClick={handleWhatsApp}
                                className="w-full mt-6 bg-black text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                            >
                                {lang === 'es' ? 'Consultar Presupuesto' : 'Request Quote'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessPage;
