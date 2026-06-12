import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = ({ phoneDisplay = "+34 600 70 71 74" }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  /* Improved scroll navigation with language support */
  const handleScrollNav = (sectionId) => {
    const currentLang = i18n.language ? i18n.language.split('-')[0] : 'es';
    const SUPPORTED_LANGUAGES = ['es', 'en', 'de', 'fr', 'pt', 'zh', 'ja', 'ar', 'hi', 'ru', 'it'];
    const isDefaultLang = currentLang === 'es' || !SUPPORTED_LANGUAGES.includes(currentLang);
    const basePath = isDefaultLang ? '/' : `/${currentLang}`;
    
    // Normalize paths for comparison
    const normalizedPath = location.pathname.replace(/\/$/, '') || '/';
    const normalizedBasePath = basePath.replace(/\/$/, '') || '/';

    if (normalizedPath !== normalizedBasePath) {
      navigate(basePath);
      // Wait for navigation and rendering
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback for ID 'top' or 'inicio' if not found
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 500);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const tourLinks = [
    { name: 'Costa Brava', to: '/tour/costa-brava' },
    { name: 'Monasterio de Montserrat', to: '/tour/montserrat' },
    { name: 'Sitges & Tarragona', to: '/tour/costa-dorada' },
    { name: 'Museo Dalí (Figueres)', to: '/tour/dali-museum' },
  ];

  const destinationLinks = [
    { name: 'Costa Brava: Lloret', to: '/tour/costa-brava' },
    { name: 'Montserrat', to: '/tour/montserrat' },
    { name: 'Sitges & Tarragona', to: '/tour/costa-dorada' },
    { name: 'Girona Medieval', to: '/tour/dali-museum' }, // Closest match, or keep /tours
  ];

  const companyLinks = [
    { name: t('nav.services'), id: 'servicios' },
    { name: t('nav.tours'), id: 'tours' },
    { name: t('nav.about'), id: 'nosotros' },
  ];

  return (
    <footer id="contacto" className="bg-[#1C1F23] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/img/logo-dark.svg" 
                alt="Taxi Lux Ride" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm font-['Arimo',sans-serif] leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Destinations Links */}
          <div>
            <h4 className="text-white font-bold text-base font-['Arimo',sans-serif] mb-6">Taxi Excursiones</h4>
            <ul className="space-y-3">
              {destinationLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.to}
                    className="text-white/70 text-sm font-['Arimo',sans-serif] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-base font-['Arimo',sans-serif] mb-6">{t('footer.explore')}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <button 
                    onClick={() => handleScrollNav(link.id)}
                    className="text-white/70 text-sm font-['Arimo',sans-serif] hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-base font-['Arimo',sans-serif] mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#FFDB3A] mt-1 shrink-0" />
                <div>
                  <a href="tel:+34600707174" className="text-white/70 text-sm font-['Arimo',sans-serif] hover:text-white transition-colors block">
                    +34 600 70 71 74
                  </a>
                  <span className="text-white/40 text-xs">24h disponible</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#FFDB3A] mt-1 shrink-0" />
                <a href="mailto:info@taxiluxride.com" className="text-white/70 text-sm font-['Arimo',sans-serif] hover:text-white transition-colors">
                  {t('footer.email')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FFDB3A] mt-1 shrink-0" />
                <div className="text-white/70 text-sm font-['Arimo',sans-serif]">
                  <span className="block">{t('footer.location')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-8 py-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/50 text-sm font-['Arimo',sans-serif]">
            © 2026 Taxi Lux Ride. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <button 
              onClick={() => navigate('/privacidad')}
              className="text-white/50 text-sm font-['Arimo',sans-serif] hover:text-white transition-colors"
            >
              {t('footer.privacy')}
            </button>
            <button 
              onClick={() => navigate('/aviso-legal')}
              className="text-white/50 text-sm font-['Arimo',sans-serif] hover:text-white transition-colors"
            >
              {t('footer.legalNotice')}
            </button>
            <button 
              onClick={() => navigate('/cookies')}
              className="text-white/50 text-sm font-['Arimo',sans-serif] hover:text-white transition-colors"
            >
              {t('footer.cookies')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


