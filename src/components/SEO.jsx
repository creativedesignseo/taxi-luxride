import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SUPPORTED_LANGUAGES = ['es', 'en', 'de', 'fr', 'pt', 'zh', 'ja', 'ar', 'hi', 'ru'];
const DOMAIN = 'https://taxiluxride.com';

const SEO = ({ title, description, lang, image, schema }) => {
    const location = useLocation();

    // Determine current canonical URL
    const getCurrentCanonical = () => {
        let path = location.pathname.endsWith('/')
            ? location.pathname.slice(0, -1)
            : location.pathname;
        return `${DOMAIN}${path}`;
    };

    const ogImage = image || `${DOMAIN}/img/Desktop_hero_4.webp`;

    return (
        <Helmet>
            <html lang={lang} />
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Canonical URL - self referencing */}
            <link rel="canonical" href={getCurrentCanonical()} />

            {/* Hreflang for Multilingual SEO */}
            <link rel="alternate" href={`${DOMAIN}/`} hreflang="x-default" />

            {SUPPORTED_LANGUAGES.map((language) => (
                <link
                    key={language}
                    rel="alternate"
                    href={language === 'es' ? `${DOMAIN}/` : `${DOMAIN}/${language}`}
                    hreflang={language}
                />
            ))}

            {/* Open Graph (Facebook/LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Taxi Lux Ride" />
            <meta property="og:url" content={getCurrentCanonical()} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content={lang === 'es' ? 'es_ES' : lang === 'en' ? 'en_GB' : lang} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD Structured Data */}
            {schema && (Array.isArray(schema) ? schema : [schema]).map((s, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(s)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
