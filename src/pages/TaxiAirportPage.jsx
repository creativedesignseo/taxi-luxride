import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Clock, Users, MapPin, Check, Calendar, Plane, ArrowRight } from 'lucide-react';

const TaxiAirportPage = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    // Get current language (default to 'es' if not found)
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
        const text = encodeURIComponent("Hola, quiero reservar un taxi para el Aeropuerto de Barcelona.");
        window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
    };

    // SEO Data
    const seoData = {
        title: {
            es: "Taxi Aeropuerto Barcelona - Servicio Oficial T1 y T2 | Taxi Lux Ride",
            en: "Barcelona Airport Taxi - Official Service T1 & T2 | Taxi Lux Ride",
            it: "Taxi Aeroporto Barcellona - Servizio Ufficiale T1 e T2 | Taxi Lux Ride"
        },
        description: {
            es: "Reserva tu Taxi Aeropuerto Barcelona con precio fijo o taxímetro. Recogida en T1 y T2 con cartel (Meet & Greet). Servicio 24h, minivans para grupos y pago con tarjeta.",
            en: "Book your Barcelona Airport Taxi with fixed price or meter. Pickup at T1 & T2 with Meet & Greet. 24h service, group minivans, and card payment accepted.",
            it: "Prenota il tuo Taxi Aeroporto Barcellona a prezzo fisso o tassametro. Ritiro al T1 e T2 con cartello (Meet & Greet). Servizio 24h, minivan per gruppi e pagamento con carta."
        }
    };

    // Page Content
    const content = {
        badge: {
            es: "Servicio Aeropuerto 24/7",
            en: "Airport Service 24/7",
            it: "Servizio Aeroporto 24/7"
        },
        title: {
            es: "Taxi Aeropuerto Barcelona",
            en: "Taxi Barcelona Airport",
            it: "Taxi Aeroporto Barcellona"
        },
        subtitle: {
            es: "La forma más rápida y cómoda de ir o volver del Aeropuerto Josep Tarradellas Barcelona-El Prat (BCN). Sin colas, sin esperas.",
            en: "The fastest and most comfortable way to get to or from Josep Tarradellas Barcelona-El Prat Airport (BCN). No queues, no waiting.",
            it: "Il modo più veloce e comodo per andare o tornare dall'Aeroporto Josep Tarradellas Barcellona-El Prat (BCN). Niente code, niente attese."
        },
        features: [
            { icon: <MapPin />, text: { es: "Recogida en Terminal 1 y 2", en: "Pickup at Terminal 1 & 2", it: "Ritiro al Terminal 1 e 2" } },
            { icon: <Clock />, text: { es: "Monitorizamos tu vuelo", en: "We monitor your flight", it: "Monitoriamo il tuo volo" } },
            { icon: <Users />, text: { es: "Taxi XL hasta 8 pasajeros", en: "XL Taxi up to 8 passengers", it: "Taxi XL fino a 8 passeggeri" } },
            { icon: <Check />, text: { es: "Pago con Tarjeta / Efectivo", en: "Card / Cash Payment", it: "Pagamento con Carta / Contanti" } }
        ],
        pricing: {
            title: { es: "Destinos Frecuentes", en: "Frequent Destinations", it: "Destinazioni Frequenti" },
            items: [
                { route: "Aeropuerto ↔ Barcelona Centro" },
                { route: "Aeropuerto ↔ Puerto Cruceros" },
                { route: "Aeropuerto ↔ Fira Gran Via" },
                { route: "Aeropuerto ↔ Toda España" }
            ]
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans pt-[85px]">
            <Helmet>
                <title>{seoData.title[lang] || seoData.title.es}</title>
                <meta name="description" content={seoData.description[lang] || seoData.description.es} />
                <meta name="keywords" content="taxi aeropuerto barcelona, taxi barcelona airport, transfer barcelona airport, taxi bcn airport, precio taxi aeropuerto barcelona" />
                <link rel="canonical" href="https://taxiluxride.com/taxi-aeropuerto-barcelona" />
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
                        src="/img/optimized/aeroport-de-barcelona-hero.webp" 
                        alt="Taxi Aeropuerto Barcelona" 
                        className="absolute inset-0 w-full h-full object-cover"
                        // Fallback image if specific airport image is missing, assuming standard hero background exists
                        onError={(e) => {e.target.onerror = null; e.target.src="/img/hero-bg.jpg"}}
                    />
                </div>

                <div className="relative z-20 container mx-auto px-6 md:px-16 py-[50px] pt-24 md:pt-[50px] pb-32 md:pb-[50px]">
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
                                onClick={() => navigate('/#inicio')}
                                className="flex items-center gap-2 bg-[#FFDB3A] hover:bg-[#e5c534] text-black px-8 py-4 rounded-xl font-bold transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <Calendar size={20} />
                                {lang === 'es' ? 'Reservar Taxi Ahora' : lang === 'it' ? 'Prenota Taxi Ora' : 'Book Taxi Now'}
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
                                {lang === 'es' ? '¿Por qué elegir Taxi Lux Ride?' : lang === 'it' ? 'Perché scegliere Taxi Lux Ride?' : 'Why choose Taxi Lux Ride?'}
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Plane size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Control de Vuelos' : 'Flight Monitoring'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es' 
                                                ? "Monitorizamos tu vuelo en tiempo real. Si se retrasa, te esperamos sin coste adicional."
                                                : "We monitor your flight in real-time. If it's delayed, we wait for you at no extra cost."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Meet & Greet' : 'Meet & Greet'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Tu chófer te esperará en la sala de llegadas con un cartel con tu nombre. Servicio VIP incluido."
                                                : "Your driver will wait for you in the arrivals hall with a name sign. VIP service included."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Check size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Precio Cerrado Disponible' : 'Fixed Price Available'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Si reservas online, sabrás el precio aproximado. Sin sorpresas ni suplementos ocultos."
                                                : "If you book online, you'll know the approximate price. No surprises or hidden fees."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Box */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <MapPin className="text-black" />
                                {content.pricing.title[lang] || content.pricing.title.es}
                            </h3>
                            <div className="space-y-4">
                                {content.pricing.items.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                        <span className="font-medium text-slate-700">{item.route}</span>
                                        <ArrowRight size={16} className="text-gray-400" />
                                    </div>
                                ))}
                            </div>

                            <button 
                                onClick={handleWhatsApp}
                                className="w-full mt-6 bg-black text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors"
                            >
                                {lang === 'es' ? 'Solicitar Presupuesto' : 'Request Quote'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TaxiAirportPage;
