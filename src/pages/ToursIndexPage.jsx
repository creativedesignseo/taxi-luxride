import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight, MapPin } from 'lucide-react';
import { toursData } from '../data/toursData';

const ToursIndexPage = () => {
    const { t, i18n } = useTranslation();
    
    // Get current language (default to 'es' if not found)
    const currentLang = i18n.language ? i18n.language.split('-')[0] : 'es';
    const lang = ['es', 'en', 'it'].includes(currentLang) ? currentLang : 'es';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen font-sans pt-[85px]">
            <Helmet>
                <title>
                    {lang === 'es' ? 'Tours y Excursiones - Taxi Lux Ride' 
                     : lang === 'it' ? 'Tour ed Escursioni - Taxi Lux Ride' 
                     : 'Tours & Excursions - Taxi Lux Ride'}
                </title>
                <meta 
                    name="description" 
                    content={
                        lang === 'es' ? 'Descubre Cataluña con nuestros tours privados. Montserrat, Costa Brava, Dalí y más.'
                        : lang === 'it' ? 'Scopri la Catalogna con i nostri tour privati. Montserrat, Costa Brava, Dalí e altro ancora.'
                        : 'Discover Catalonia with our private tours. Montserrat, Costa Brava, Dalí and more.'
                    } 
                />
            </Helmet>

            {/* Header Section */}
            <header className="bg-[#1C1F23] text-white py-12 md:py-28 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0 opacity-40">
                     <img 
                        src="/img/Sagrada-familia-02.webp" 
                        alt="Background" 
                        className="w-full h-full object-cover"
                    />
                     <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
                        {lang === 'es' ? 'Tour Barcelona y Cataluña' : lang === 'it' ? 'Tour Barcellona e Catalogna' : 'Barcelona & Catalonia Tours'}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {lang === 'es' ? 'Viaja con comodidad y estilo a los destinos más emblemáticos de Cataluña.'
                        : lang === 'it' ? 'Viaggia con comfort e stile verso le destinazioni più iconiche della Catalogna.'
                        : 'Travel in comfort and style to Catalonia\'s most iconic destinations.'}
                    </p>
                </div>
            </header>

            {/* Tours Grid */}
            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.values(toursData).map((tour) => (
                        <div key={tour.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
                            {/* Card Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img 
                                    src={tour.cardImage || tour.image} 
                                    alt={tour.highlight}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {tour.badge[lang] || tour.badge.es}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-1 leading-tight">
                                    {tour.title[lang] || tour.title.es}
                                </h3>
                                <h4 className="text-xl font-bold text-yellow-500 mb-4">
                                     {tour.highlight}
                                </h4>
                                
                                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                    {tour.description[lang] || tour.description.es}
                                </p>

                                {/* Meta Info */}
                                <div className="border-t border-gray-100 pt-4 mt-auto">
                                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={16} className="text-yellow-500" />
                                            <span>{tour.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Users size={16} className="text-yellow-500" />
                                            <span>{tour.capacity}</span>
                                        </div>
                                    </div>
                                    
                                    <Link 
                                        to={`/tour/${tour.id}`} 
                                        className="w-full flex items-center justify-center gap-2 bg-[#1C1F23] hover:bg-[#34373C] text-white font-bold py-3 rounded-xl transition-colors"
                                    >
                                        {lang === 'es' ? 'Ver Detalles' : lang === 'it' ? 'Vedi Dettagli' : 'View Details'}
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToursIndexPage;
