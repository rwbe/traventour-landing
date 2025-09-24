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

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

    const navigationLinks = [
    { label: 'Sobre nós', href: '#about-us' },
    { label: 'Benefícios', href: '#benefits' },
    { label: 'Destinos', href: '#destinations' },
    { label: 'Avaliações', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 w-full relative">
      {/* Mobile Header */}
      <nav className="flex items-center justify-between px-4 py-3 sm:py-4 lg:hidden">
        <Link to="/" className="flex items-center">
          <img src="/header/Logo.png" alt="Traventour" className="h-8 sm:h-10 w-auto" />
        </Link>
        <button
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
          className="p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
        >
          {openMobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {openMobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 z-50"
          >
            <div className="py-4 space-y-1 max-h-96 overflow-y-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center w-full px-6 py-3 text-left transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
                onClick={() => setOpenMobileMenu(false)}
              >
                Início
              </NavLink>
              
             {navigationLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center w-full px-6 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  {label}
                </a>
              ))}
              {/* Mobile Language & Contact */}
              <div className="border-t border-gray-100 pt-4 px-6 space-y-4">
                <div className="flex items-center gap-3">
                  <IoGlobeOutline className="text-gray-600 text-lg" />
                  <span className="text-sm text-gray-600">Idioma: {currentLanguage.name}</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  Contato
                  <img src="/header/phone.svg" alt="Ícone de contato" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Header */}
      <nav className="container hidden lg:flex items-center justify-between h-[96px]">
        {/* Logo */}
        <Link to="/" className="flex items-center mb-4">
          <img src="/header/Logo.png" alt="Traventour" className="w-36 xl:w-44 h-auto" />
        </Link>

         {/* Navigation Links */}
        <div className="flex items-center space-x-4 xl:space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg transition-all duration-200 font-medium text-sm xl:text-base ${
                isActive
                  ? 'text-blue-600 font-semibold bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`
            }
          >
            Início
          </NavLink>

          {navigationLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-gray-700 font-medium px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 text-sm xl:text-base whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </div>

         {/* Language Selector + Contact */}
        <div className="flex items-center gap-3 xl:gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              onClick={toggleLanguageSelector}
              aria-label="Select language"
            >
              <img
                src={currentLanguage.flag}
                alt={`Bandeira de ${currentLanguage.name}`}
                className="w-5 h-5 xl:w-6 xl:h-6 rounded-full"
              />
            </button>

            {showLanguageSelector && (
              <LanguageSelector
                closeSelector={toggleLanguageSelector}
                onSelect={setCurrentLanguage}
                currentLanguage={currentLanguage}
              />
            )}
          </div>

          {/* Contact Button */}
          <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 xl:px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 text-sm xl:text-base whitespace-nowrap">
            Contato
            <img src="/header/phone.svg" alt="Ícone de contato" className="w-4 h-4 ml-2" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
