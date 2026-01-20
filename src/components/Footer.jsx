import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = ({ phoneDisplay = "+34 625 030 000" }) => {
  const navigate = useNavigate();
  
  const tourLinks = [
    { name: 'Barcelona City & Miradores', href: '#' },
    { name: 'Sagrada Familia & Gaudí', href: '#' },
    { name: 'Camp Nou & Museos', href: '#' },
    { name: 'Barcelona Nocturna', href: '#' },
  ];

  const destinationLinks = [
    { name: 'Costa Brava: Lloret', href: '#' },
    { name: 'Montserrat', href: '#' },
    { name: 'Sitges & Tarragona', href: '#' },
    { name: 'Girona Medieval', href: '#' },
  ];

  const companyLinks = [
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Tarifas', href: '#tarifas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-[#030213] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#ffc629] rounded-[14px] flex items-center justify-center">
                <span className="text-[#030213] font-bold text-lg font-['Arimo',sans-serif]">TL</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-white font-bold text-lg font-['Arimo',sans-serif]">Taxi</span>
                <span className="text-[#ffc629] font-bold text-lg font-['Arimo',sans-serif]">Lux</span>
                <span className="text-white font-bold text-lg font-['Arimo',sans-serif]">Ride</span>
              </div>
            </div>
            <p className="text-white/60 text-sm font-['Arimo',sans-serif] leading-relaxed">
              Tu servicio de taxi premium de confianza. Disponible 24/7 para llevarte a donde necesites.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffc629] transition-colors">
                <Facebook size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffc629] transition-colors">
                <Instagram size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffc629] transition-colors">
                <Twitter size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffc629] transition-colors">
                <Linkedin size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Tours Links */}
          <div>
            <h4 className="text-white font-bold text-base font-['Arimo',sans-serif] mb-6">Tours Urbanos</h4>
            <ul className="space-y-3">
              {tourLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className="text-white/70 text-sm font-['Arimo',sans-serif] hover:text-[#ffc629] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Links */}
          <div>
            <h4 className="text-white font-bold text-base font-['Arimo',sans-serif] mb-6">Taxi Excursiones</h4>
            <ul className="space-y-3">
              {destinationLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className="text-white/70 text-sm font-['Arimo',sans-serif] hover:text-[#ffc629] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-base font-['Arimo',sans-serif] mb-6">Empresa</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className="text-white/70 text-sm font-['Arimo',sans-serif] hover:text-[#ffc629] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-base font-['Arimo',sans-serif] mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#ffc629] mt-1 shrink-0" />
                <div>
                  <a href="tel:+34625030000" className="text-white/70 text-sm font-['Arimo',sans-serif] hover:text-[#ffc629] transition-colors block">
                    +34 625 030 000
                  </a>
                  <span className="text-white/40 text-xs">24h disponible</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#ffc629] mt-1 shrink-0" />
                <a href="mailto:info@taxiluxride.com" className="text-white/70 text-sm font-['Arimo',sans-serif] hover:text-[#ffc629] transition-colors">
                  info@taxiluxride.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#ffc629] mt-1 shrink-0" />
                <div className="text-white/70 text-sm font-['Arimo',sans-serif]">
                  <span className="block">España</span>
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
              Política de Privacidad
            </button>
            <button 
              onClick={() => navigate('/aviso-legal')}
              className="text-white/50 text-sm font-['Arimo',sans-serif] hover:text-white transition-colors"
            >
              Términos de Uso
            </button>
            <button 
              onClick={() => navigate('/cookies')}
              className="text-white/50 text-sm font-['Arimo',sans-serif] hover:text-white transition-colors"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
