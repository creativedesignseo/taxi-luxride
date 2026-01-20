import { useTranslation } from 'react-i18next';
import { Phone } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ onNavClick, onCall, phoneDisplay = "+34 625 03 00 00" }) => {
  const { t } = useTranslation();
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5">
      <div className="container mx-auto px-8 h-[85px] flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavClick && onNavClick('top')}
        >
          <div className="w-10 h-10 bg-[#ffc629] rounded-[14px] flex items-center justify-center">
            <span className="text-[#030213] font-bold text-lg font-['Arimo',sans-serif]">TL</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[#0a0a0a] font-bold text-lg font-['Arimo',sans-serif]">Taxi</span>
            <span className="text-[#ffc629] font-bold text-lg font-['Arimo',sans-serif]">Lux</span>
            <span className="text-[#0a0a0a] font-bold text-lg font-['Arimo',sans-serif]">Ride</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onNavClick && onNavClick('servicios')}
            className="text-[#0a0a0a] font-normal text-base font-['Arimo',sans-serif] hover:text-[#ffc629] transition-colors"
          >
            {t('nav.services')}
          </button>
          <button 
            onClick={() => onNavClick && onNavClick('reservar')}
            className="text-[#0a0a0a] font-normal text-base font-['Arimo',sans-serif] hover:text-[#ffc629] transition-colors"
          >
            {t('nav.rates')}
          </button>
          <button 
            onClick={() => onNavClick && onNavClick('nosotros')}
            className="text-[#0a0a0a] font-normal text-base font-['Arimo',sans-serif] hover:text-[#ffc629] transition-colors"
          >
            {t('nav.about')}
          </button>
          <button 
            onClick={() => onNavClick && onNavClick('contacto')}
            className="text-[#0a0a0a] font-normal text-base font-['Arimo',sans-serif] hover:text-[#ffc629] transition-colors"
          >
            {t('nav.contact')}
          </button>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Phone Link */}
          <button 
            onClick={onCall}
            className="flex items-center gap-2 text-[#0a0a0a] font-normal text-base font-['Arimo',sans-serif] hover:text-[#ffc629] transition-colors"
          >
            <Phone size={16} />
            <span>{t('phone_display')}</span>
          </button>
          
          {/* CTA Button */}
          <button 
            onClick={() => onNavClick && onNavClick('reservar')}
            className="bg-[#ffc629] text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-[#e6b324] transition-colors font-['Inter',sans-serif]"
          >
            {t('hero.requestButton')}
          </button>
          
          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#0a0a0a]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
