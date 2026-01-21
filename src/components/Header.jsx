import { useTranslation } from 'react-i18next';
import { Phone, Menu } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ onNavClick, onCall, onMenuClick, phoneDisplay = "+34 625 03 00 00" }) => {
  const { t } = useTranslation();
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1C1F23] md:bg-white border-b border-white/10 md:border-black/5">
      <div className="container mx-auto px-4 md:px-8 h-[85px] flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavClick && onNavClick('top')}
        >
          {/* Dark logo for mobile (dark bg), Light logo for desktop (white bg) */}
          <img 
            src="/img/logo-dark.svg" 
            alt="Taxi Lux Ride" 
            className="h-10 w-auto md:hidden"
          />
          <img 
            src="/img/logo-light.svg" 
            alt="Taxi Lux Ride" 
            className="h-10 w-auto hidden md:block"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onNavClick && onNavClick('servicios')}
            className="text-[#1C1F23] font-normal text-base font-['Arimo',sans-serif] hover:text-[#FFDB3A] transition-colors"
          >
            {t('nav.services')}
          </button>
          <button 
            onClick={() => onNavClick && onNavClick('reservar')}
            className="text-[#1C1F23] font-normal text-base font-['Arimo',sans-serif] hover:text-[#FFDB3A] transition-colors"
          >
            {t('nav.rates')}
          </button>
          <button 
            onClick={() => onNavClick && onNavClick('nosotros')}
            className="text-[#1C1F23] font-normal text-base font-['Arimo',sans-serif] hover:text-[#FFDB3A] transition-colors"
          >
            {t('nav.about')}
          </button>
          <button 
            onClick={() => onNavClick && onNavClick('contacto')}
            className="text-[#1C1F23] font-normal text-base font-['Arimo',sans-serif] hover:text-[#FFDB3A] transition-colors"
          >
            {t('nav.contact')}
          </button>
        </nav>

        {/* Right Side - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {/* Phone Link */}
          <button 
            onClick={onCall}
            className="flex items-center gap-2 text-[#1C1F23] font-normal text-base font-['Arimo',sans-serif] hover:text-[#FFDB3A] transition-colors"
          >
            <Phone size={16} />
            <span>{t('phone_display')}</span>
          </button>
          
          {/* CTA Button */}
          <button 
            onClick={() => onNavClick && onNavClick('reservar')}
            className="bg-[#FFDB3A] text-[#1C1F23] font-bold text-sm px-4 py-2 rounded-lg hover:bg-[#E5C434] transition-colors font-['Inter',sans-serif]"
          >
            {t('hero.requestButton')}
          </button>
          
          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={onMenuClick}
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
