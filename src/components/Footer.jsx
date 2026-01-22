import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = ({ phoneDisplay = "+34 625 030 000" }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleScrollNav = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tourLinks = [
    { name: 'Barcelona City & Miradores', to: '/tours' },
    { name: 'Sagrada Familia & Gaudí', to: '/tours' },
    { name: 'Camp Nou & Museos', to: '/tours' },
    { name: 'Barcelona Nocturna', to: '/tours' },
  ];

  const destinationLinks = [
    { name: 'Costa Brava: Lloret', to: '/tour/costa-brava' },
    { name: 'Montserrat', to: '/tour/montserrat' },
    { name: 'Sitges & Tarragona', to: '/tour/costa-dorada' },
    { name: 'Girona Medieval', to: '/tour/dali-museum' }, // Closest match, or keep /tours
  ];

  const companyLinks = [
    { name: t('nav.home'), id: 'top' },
    { name: t('nav.services'), id: 'servicios' },
    { name: t('nav.rates'), id: 'reservar' },
    { name: t('nav.contact'), id: 'contacto' },
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
                <Facebook size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin size={16} className="text-white" />
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
            <h4 className="text-white font-bold text-base font-['Arimo',sans-serif] mb-6">{t('footer.legal')}</h4>
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
                  <a href="tel:+34631806645" className="text-white/70 text-sm font-['Arimo',sans-serif] hover:text-white transition-colors block">
                    {t('phone_display')}
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


