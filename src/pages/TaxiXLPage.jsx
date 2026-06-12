import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Calendar, MapPin, Check, Users, Luggage, ArrowRight } from 'lucide-react';

const TaxiXLPage = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const currentLang = i18n.language ? i18n.language.split('-')[0] : 'es';
    const lang = ['es', 'en', 'it'].includes(currentLang) ? currentLang : 'es';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const PHONE_NUMBER = "+34600707174";

    const handleWhatsApp = () => {
        const text = encodeURIComponent("Hola, necesito un Taxi XL (Van) para grupo/equipaje.");
        window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
    };

    const seoData = {
        title: {
            es: "Taxi XL Barcelona - Minivan hasta 8 plazas | Taxi Lux Ride",
            en: "XL Taxi Barcelona - Minivan up to 8 seats | Taxi Lux Ride",
            it: "Taxi XL Barcellona - Minivan fino a 8 posti | Taxi Lux Ride"
        },
        description: {
            es: "Taxi grande para grupos y familias. Minivans Mercedes Clase V de hasta 8 pasajeros. Espacio extra para maletas, bicicletas y equipaje especial.",
            en: "Large taxi for groups and families. Mercedes V-Class minivans for up to 8 passengers. Extra space for suitcases, bicycles, and special luggage.",
            it: "Taxi grande per gruppi e famiglie. Minivan Mercedes Classe V fino a 8 passeggeri. Spazio extra per valigie, biciclette e bagagli speciali."
        }
    };

    const content = {
        badge: { es: "Grupos y Familias", en: "Groups & Families", it: "Gruppi e Famiglie" },
        title: { es: "Taxi XL y Minivans", en: "XL Taxi & Minivans", it: "Taxi XL e Minivan" },
        subtitle: {
            es: "La solución perfecta para viajes en grupo. Comodidad absoluta para hasta 8 pasajeros con equipaje voluminoso.",
            en: "The perfect solution for group travel. Absolute comfort for up to 8 passengers with bulky luggage.",
            it: "La soluzione perfetta per viaggi di gruppo. Comfort assoluto fino a 8 passeggeri con bagagli ingombranti."
        },
        features: [
            { icon: <Users />, text: { es: "Hasta 8 pasajeros", en: "Up to 8 passengers", it: "Fino a 8 passeggeri" } },
            { icon: <Luggage />, text: { es: "Gran capacidad de maletero", en: "Large luggage capacity", it: "Grande capacità bagagliaio" } },
            { icon: <Check />, text: { es: "Sillas infantiles disponibles", en: "Child seats available", it: "Seggiolini per bambini disponibili" } },
            { icon: <MapPin />, text: { es: "Ideal Aeropuerto/Puerto", en: "Ideal Airport/Port", it: "Ideale Aeroporto/Porto" } }
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
                    <div className="absolute inset-0 z-10 bg-black/50" />
                    <img 
                        src="/img/coches con maletero grandes.webp" 
                        alt="Taxi XL" 
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
                                {lang === 'es' ? 'Reservar Taxi XL' : 'Book XL Taxi'}
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
                                {lang === 'es' ? '¿Por qué elegir Taxi XL?' : lang === 'it' ? 'Perché scegliere Taxi XL?' : 'Why choose Taxi XL?'}
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Viajes en Grupo' : 'Group Travel'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es' 
                                                ? "Viaja junto a tu familia o amigos en un solo vehículo. Hasta 8 pasajeros con total comodidad."
                                                : "Travel together with family or friends in a single vehicle. Up to 8 passengers in total comfort."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Luggage size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Gran Capacidad' : 'Large Capacity'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Maletero espacioso para maletas grandes, carritos de bebé, palos de golf o bicicletas."
                                                : "Spacious trunk for large suitcases, strollers, golf clubs, or bicycles."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 text-white">
                                        <Check size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{lang === 'es' ? 'Precio Cerrado' : 'Fixed Price'}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {lang === 'es'
                                                ? "Ahorra dinero viajando juntos. Cotización previa sin sorpresas."
                                                : "Save money by traveling together. Upfront quote with no surprises."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <MapPin className="text-black" />
                                {lang === 'es' ? 'Trayectos Habituales' : lang === 'it' ? 'Tratte Comuni' : 'Common Routes'}
                            </h3>
                            
                            <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">Aeropuerto (Grupos)</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">Puerto Cruceros (Familias)</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="font-medium text-slate-700">Transfers Sitges / Costa Brava</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#1C1F23]">
                                    <Users className="text-[#FFDB3A]" size={20} />
                                    {lang === 'es' ? 'Capacidad Máxima' : 'Maximum Capacity'}
                                </h4>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        {lang === 'es' 
                                        ? 'Nuestros vehículos pueden llevar hasta 8 pasajeros + 8-10 maletas grandes cómodamente.'
                                        : 'Our vehicles can comfortably carry up to 8 passengers + 8-10 large suitcases.'}
                                </p>
                            </div>

                            <button 
                                onClick={handleWhatsApp}
                                className="w-full mt-6 bg-black text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                            >
                                {lang === 'es' ? 'Consultar Disponibilidad' : 'Check Availability'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TaxiXLPage;
