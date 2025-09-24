import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoGlobeOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { name: 'Português', flag: '/countries/flags/BR.svg' },
  { name: 'English', flag: '/countries/flags/US.svg' },
  { name: 'Español', flag: '/countries/flags/ES.svg' },
  { name: 'Français', flag: '/countries/flags/FR.svg' },
];

function LanguageSelector({ closeSelector, onSelect, currentLanguage }) {
  return (
    <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-xl shadow-xl w-48 sm:w-52 z-50 overflow-hidden">
      <div className="p-3 bg-gray-50 border-b border-gray-200">
        <p className="text-gray-700 font-medium text-sm">Selecione um idioma</p>
      </div>
      <ul className="py-2 max-h-48 overflow-y-auto">
        {languages.map((lang, index) => (
          <li key={index}>
            <button
              className="flex items-center w-full cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 p-3 text-left"
              onClick={() => {
                onSelect(lang);
                closeSelector();
              }}
            >
              <img src={lang.flag} alt={`${lang.name} flag`} className="w-5 h-5 rounded-full mr-3 flex-shrink-0" />
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const toggleLanguageSelector = () => {
    setShowLanguageSelector(!showLanguageSelector);
  };

  const handleLanguageSelect = (language) => {
    setCurrentLanguage(language); // Atualiza o idioma selecionado
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 w-full relative">
        {/* Header for mobile devices */}
      <nav className="container fixed top-0 z-50 flex items-center justify-between px-4 py-4 bg-white/95 backdrop-blur-sm shadow-md lg:hidden border-b border-traventour-light/20">
        <Link to="/">
          <img src="/header/Logo.png" alt="Logo" className="w-2/5" />
        </Link>
        <button
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
          className="p-3 text-white bg-gradient-to-r from-traventour-medium to-traventour-light rounded-xl hover:from-traventour-dark hover:to-traventour-medium transition-all duration-300 shadow-md"
        >
          <FaBars />
        </button>
      </nav>
      
          {/* Dropdown menu for mobile devices */}
      <AnimatePresence>
        {openMobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container fixed z-40 w-full bg-white/95 backdrop-blur-sm shadow-lg border-t border-traventour-light/20 mt-[76px]"
          >
            <div className="py-4 space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center w-full px-6 py-3 text-traventour-medium font-semibold bg-traventour-light/10'
                    : 'flex items-center w-full px-6 py-3 text-traventour-dark font-medium hover:text-traventour-medium hover:bg-traventour-light/5'
                }
                onClick={() => setOpenMobileMenu(false)}
              >
                Início
              </NavLink>
              <a 
                href="#about-us" 
                className="flex items-center w-full px-6 py-3 text-traventour-dark font-medium hover:text-traventour-medium hover:bg-traventour-light/5"
                onClick={() => setOpenMobileMenu(false)}
              >
                Sobre nós
              </a>
              <a 
                href="#experience" 
                className="flex items-center w-full px-6 py-3 text-traventour-dark font-medium hover:text-traventour-medium hover:bg-traventour-light/5"
                onClick={() => setOpenMobileMenu(false)}
              >
                Experiências
              </a>
              <a 
                href="#destinations" 
                className="flex items-center w-full px-6 py-3 text-traventour-dark font-medium hover:text-traventour-medium hover:bg-traventour-light/5"
                onClick={() => setOpenMobileMenu(false)}
              >
                Destinos
              </a>
              <a 
                href="#testimonials" 
                className="flex items-center w-full px-6 py-3 text-traventour-dark font-medium hover:text-traventour-medium hover:bg-traventour-light/5"
                onClick={() => setOpenMobileMenu(false)}
              >
                Avaliações
              </a>
              <a 
                href="#faq" 
                className="flex items-center w-full px-6 py-3 text-traventour-dark font-medium hover:text-traventour-medium hover:bg-traventour-light/5"
                onClick={() => setOpenMobileMenu(false)}
              >
                FAQ
              </a>
              <div className="px-6 py-3">
                <button className="w-full bg-gradient-to-r from-traventour-medium to-traventour-light hover:from-traventour-dark hover:to-traventour-medium text-white font-medium py-3 px-4 rounded-xl transition-all duration-300">
                  Contato
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Header */}
      <nav className="container items-center justify-between py-4 lg:flex">
        {/* Logo */}
        <Link to="/" className="flex items-center mb-4">
          <img src="/header/Logo.png" alt="Traventour" className="w-44 h-auto" />
        </Link>

        {/* Desktop navigation menu */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-traventour-medium font-semibold px-4 py-2 rounded-xl bg-traventour-light/10 transition-all duration-200'
                : 'text-traventour-dark font-medium px-4 py-2 rounded-xl hover:text-traventour-medium hover:bg-traventour-light/5 transition-all duration-200'
            }
          >
            Início
          </NavLink>
          <a
            href="#about-us"
            className="text-traventour-dark font-medium px-4 py-2 rounded-xl hover:text-traventour-medium hover:bg-traventour-light/5 transition-all duration-200"
          >
            Sobre nós
          </a>
          <a
            href="#experiences"
            className="text-traventour-dark font-medium px-4 py-2 rounded-xl hover:text-traventour-medium hover:bg-traventour-light/5 transition-all duration-200"
          >
            Experiências
          </a>
          <a
            href="#destinations"
            className="text-traventour-dark font-medium px-4 py-2 rounded-xl hover:text-traventour-medium hover:bg-traventour-light/5 transition-all duration-200"
          >
            Destinos
          </a>
          <a
            href="#testimonials"
            className="text-traventour-dark font-medium px-4 py-2 rounded-xl hover:text-traventour-medium hover:bg-traventour-light/5 transition-all duration-200"
          >
            Avaliações
          </a>
          <a
            href="#faq"
            className="text-traventour-dark font-medium px-4 py-2 rounded-xl hover:text-traventour-medium hover:bg-traventour-light/5 transition-all duration-200"
          >
            FAQ
          </a>
        </div>

        {/* Container for location elements and contact button */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Language selector */}
          <div className="flex items-center cursor-pointer group relative" onClick={toggleLanguageSelector}>
            <IoGlobeOutline className="text-xl text-traventour-dark/70 group-hover:text-traventour-medium transition-colors duration-200" />
            <span className="ml-2 text-sm font-medium text-traventour-dark/70 group-hover:text-traventour-medium transition-colors duration-200 mr-4">
              {currentLanguage.name} 
            </span>
            {showLanguageSelector && <LanguageSelector closeSelector={toggleLanguageSelector} onSelect={handleLanguageSelect} />}
          </div>

          {/* Enhanced contact button */}
          <button className="flex items-center justify-center bg-gradient-to-r from-traventour-medium to-traventour-light hover:from-traventour-dark hover:to-traventour-medium text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
            Contato
            <img src="/header/phone.svg" alt="Ícone de contato" className="w-4 h-4 ml-2" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
