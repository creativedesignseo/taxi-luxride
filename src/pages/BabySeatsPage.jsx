import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Clock, Users, MapPin, Check, Calendar, Heart, Shield, Star, ArrowRight } from 'lucide-react';

const BabySeatsPage = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    // Get current language (default to 'es' if not found)
    const currentLang = i18n.language ? i18n.language.split('-')[0] : 'es';
    const lang = ['es', 'en', 'it', 'de', 'fr'].includes(currentLang) ? currentLang : 'es';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const PHONE_NUMBER = "+34600707174";

    const handleCall = () => {
        window.location.href = `tel:${PHONE_NUMBER}`;
    };

    const handleWhatsApp = () => {
        const text = encodeURIComponent("Hola, quiero reservar un taxi con sillas para bebé (Maxicosi / Grupo 0+).");
        window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
    };

    // SEO Data
    const seoData = {
        title: {
            es: "Taxi con Silla para Bebé Barcelona - Maxicosi y Grupo 0+ | Taxi Lux Ride",
            en: "Barcelona Taxi with Baby Seat - Maxicosi & Group 0+ | Taxi Lux Ride",
            it: "Taxi con Seggiolino per Bambini Barcellona - Maxicosi | Taxi Lux Ride"
        },
        description: {
            es: "Servicio de Taxi en Barcelona con sillas para bebé homologadas. Maxicosi, Grupo 0+ y elevadores. Viaja seguro con tus hijos. Reserva 24h con confirmación inmediata.",
            en: "Barcelona Taxi service with approved baby seats. Maxicosi, Group 0+, and boosters. Travel safely with your children. 24h booking with instant confirmation.",
            it: "Servizio Taxi a Barcellona con seggiolini per bambini omologati. Maxicosi, Gruppo 0+ e rialzi. Viaggia in sicurezza con i tuoi figli. Prenotazione 24 ore su 24."
        }
    };

    // Page Content
    const content = {
        badge: {
            es: "Seguridad Infantil Garantizada",
            en: "Guaranteed Child Safety",
            it: "Sicurezza dei Bambini Garantita"
        },
        title: {
            es: "Taxis con Sillas para Bebé",
            en: "Taxis with Baby Seats",
            it: "Taxi con Seggiolini per Bambini"
        },
        subtitle: {
            es: "Especialistas en transporte familiar. Ofrecemos sillas homologadas para todas las edades: desde Maxicosi para recién nacidos hasta elevadores para niños mayores.",
            en: "Family transport specialists. We offer approved seats for all ages: from Maxicosi for newborns to boosters for older children.",
            it: "Specialisti nel trasporto familiare. Offriamo seggiolini omologati per tutte le età: dai Maxicosi per i neonati ai rialzi per i bambini più grandi."
        },
        features: [
            { icon: <Shield />, text: { es: "Sillas Homologadas (ECE R44/04)", en: "Approved Seats (ECE R44/04)", it: "Seggiolini Omologati (ECE R44/04)" } },
            { icon: <Heart />, text: { es: "Maxicosi y Grupo 0+ disponibles", en: "Maxicosi & Group 0+ available", it: "Maxicosi e Gruppo 0+ disponibili" } },
            { icon: <Users />, text: { es: "Vehículos XL para familias", en: "XL Vehicles for families", it: "Veicoli XL per famiglie" } },
            { icon: <Star />, text: { es: "Conductores con experiencia familiar", en: "Family-experienced drivers", it: "Autunisti con esperienza familiare" } }
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans pt-[85px]">
            <Helmet>
                <title>{seoData.title[lang] || seoData.title.es}</title>
                <meta name="description" content={seoData.description[lang] || seoData.description.es} />
                <meta name="keywords" content="taxi silla bebe barcelona, taxi maxicosi barcelona, taxi grupo 0 barcelona, taxi elevador niño barcelona, transfer bebe barcelona" />
                <link rel="canonical" href="https://taxiluxride.com/sillas-bebe" />
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
                        src="/img/optimized/Sillas-para-Bebé-hero.webp" 
                        alt="Taxi con Silla de Bebé" 
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {e.target.onerror = null; e.target.src="/img/hero-bg.jpg"}}
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
                            {content.badge[lang] || content.badge.es}
                        </span>

                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            {content.title[lang] || content.title.es}
                        </h1>

                        <p className="hidden md:block text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
                            {content.subtitle[lang] || content.subtitle.es}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 md:mt-4">
                            {content.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-white bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                    <div className="text-yellow-400">{feature.icon}</div>
                                    <span className="font-medium text-sm md:text-base">{feature.text[lang] || feature.text.es}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button 
                                onClick={handleWhatsApp}
                                className="flex items-center gap-2 bg-[#FFDB3A] hover:bg-[#e5c534] text-black px-8 py-4 rounded-xl font-bold transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <Calendar size={20} />
                                {lang === 'es' ? 'Reservar con Silla' : lang === 'it' ? 'Prenota con Seggiolino' : 'Book with Seat'}
                            </button>
                            <button 
                                onClick={handleCall}
                                className="hidden md:flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold transition-all text-lg shadow-lg hover:bg-gray-100"
                            >
                                <Phone size={20} />
                                {lang === 'es' ? 'Llamar 24h' : lang === 'it' ? 'Chiama 24h' : 'Call 24h'}
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
                                {lang === 'es' ? 'Viaja seguro con tus hijos' : lang === 'it' ? 'Viaggia sicuro con i tuoi figli' : 'Travel safe with your children'}
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Sillas Higienizadas' : 'Sanitized Seats'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es' 
                                                ? "Limpiamos y desinfectamos cada silla después de su uso. La higiene de los más pequeños es nuestra prioridad."
                                                : "We clean and disinfect each seat after use. The hygiene of the little ones is our priority."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Todas las Categorías' : 'All Categories'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Disponemos de Grupos 0, 1, 2 y 3. Solo indícanos la edad o peso del niño al hacer tu reserva por WhatsApp."
                                                : "We have Groups 0, 1, 2, and 3. Just let us know the child's age or weight when booking via WhatsApp."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Disponibilidad Inmediata' : 'Immediate Availability'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Aunque recomendamos reservar con antelación, solemos tener taxis con sillas listos en el área metropolitana."
                                                : "Although we recommend booking in advance, we usually have taxis with seats ready in the metropolitan area."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Shield className="text-black" />
                                {lang === 'es' ? 'Compromiso Lux Ride' : lang === 'it' ? 'Impegno Lux Ride' : 'Lux Ride Commitment'}
                            </h3>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">{lang === 'es' ? 'Sillas ISOFIX' : 'ISOFIX Seats'}</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                                <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">{lang === 'es' ? 'Instalación por profesionales' : 'Professional Installation'}</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                                <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">{lang === 'es' ? 'Sin Suplementos Ocultos' : 'No Hidden Fees'}</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#1C1F23]">
                                    <Heart className="text-[#FFDB3A]" size={20} />
                                    {lang === 'es' ? 'Seguridad y Confort' : 'Safety & Comfort'}
                                </h4>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                    {lang === 'es' 
                                        ? 'Nuestros vehículos XL garantizan espacio suficiente para el carrito del bebé y todo vuestro equipaje.'
                                        : 'Our XL vehicles guarantee enough space for the baby stroller and all your luggage.'}
                                </p>
                            </div>

                            <button 
                                onClick={handleWhatsApp}
                                className="w-full mt-6 bg-black text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                            >
                                {lang === 'es' ? 'Consultar Disponibilidad' : lang === 'it' ? 'Controlla Disponibilità' : 'Check Availability'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BabySeatsPage;
