import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import ServicesSection from '../components/ServicesSection';
import BookingCTA from '../components/BookingCTA';

const ServicesPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-[85px]">
            <Helmet>
                <title>Servicios de Taxi Barcelona - Aeropuerto, Tours y Business | Taxi Lux Ride</title>
                <meta name="description" content="Descubre nuestros servicios de taxi en Barcelona. Traslados al Aeropuerto, Tours Turísticos, Servicio Business y soluciones para grupos." />
            </Helmet>

            <ServicesSection />
            
            <div className="bg-slate-50">
                <BookingCTA />
            </div>
        </div>
    );
};

export default ServicesPage;
