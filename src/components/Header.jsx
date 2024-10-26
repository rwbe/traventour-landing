import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoGlobeOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function LanguageSelector({ closeSelector }) {
  const languages = [
    { name: 'Português', flag: '/countries/flags/BR.svg' },
    { name: 'English', flag: '/countries/flags/US.svg' },
    { name: 'Español', flag: '/countries/flags/ES.svg' },
    { name: 'Français', flag: '/countries/flags/FR.svg' },
  ];

  return (
    <div className="absolute top-14 right-16 lg:right-44 bg-white border border-gray-300 p-4 rounded-lg shadow-lg w-52 z-10">
      <p className="text-gray-700 font-medium mb-2">Selecione um idioma:</p>
      <ul className="space-y-1">
        {languages.map((lang, index) => (
          <li key={index} className="flex items-center cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-200 rounded p-2" onClick={closeSelector}>
            <img src={lang.flag} alt={`${lang.name} flag`} className="w-6 h-6 rounded-full mr-2" />
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  const toggleLanguageSelector = () => {
    setShowLanguageSelector(!showLanguageSelector);
  }

  return (
    <header className='bg-gray-100 relative w-full py-4'>
      {/* Header para dispositivos móveis */}
      <nav className='container fixed top-0 z-50 flex items-center justify-between px-4 py-4 bg-white lg:hidden'>
        <Link to='/'>
          <img src='/header/Logo.png' alt='Logo' className='w-2/5' />
        </Link>
        <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className='p-3 text-white bg-blue-600 rounded-md'>
          <FaBars />
        </button>
      </nav>

      {/* Menu dropdown para dispositivos móveis */}
      <AnimatePresence>
        {openMobileMenu && (
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className='container fixed z-50 flex flex-col items-center justify-center w-full h-auto py-4 bg-white mt-14'>
            <a href='#' className='inline-flex justify-center w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md'>
              Início
            </a>
            <a href='#about-us' className='inline-flex justify-center w-full px-4 py-2 font-semibold '>
              Sobre nós
            </a>
            <a href='#benefits' className='inline-flex justify-center w-full px-4 py-2 font-semibold '>
              Benefícios
            </a>
            <a href='#destinations' className='inline-flex justify-center w-full px-4 py-2 font-semibold '>
              Destinos
            </a>
            <a href='#reviews' className='inline-flex justify-center w-full px-4 py-2 font-semibold '>
              Avaliações
            </a>
            <a href='#faq' className='inline-flex justify-center w-full px-4 py-2 font-semibold '>
              FAQ
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header para dispositivos desktop */}
      <nav className='container flex items-center justify-between mb-4 lg:flex border-t-transparent'>
        <Link to='/'>
          <img src='/header/Logo.png' alt='' className='pr-2 w-44' />
        </Link>

        {/* Menu de navegação desktop */}
        <div className='flex text-gray-600 font-medium items-center gap-6 mt-4'>
          <NavLink to='/' activeClassName='text-blue-600 font-bold' className="hover:bg-gray-200 rounded-full p-2 transition-colors duration-200">
            Início
          </NavLink>
          <a href='#about-us' className='hover:bg-gray-200 rounded-full p-2 font-medium text-gray-600 transition-colors duration-200'>
            Sobre nós
          </a>
          <a href='#benefits' className='hover:bg-gray-200 rounded-full p-2 font-medium text-gray-600 transition-colors duration-200'>
            Benefícios
          </a>
          <a href='#destinations' className='hover:bg-gray-200 rounded-full p-2 font-medium text-gray-600 transition-colors duration-200'>
            Destinos
          </a>
          <a href='#testimonials' className='hover:bg-gray-200 rounded-full p-2 font-medium text-gray-600 transition-colors duration-200'>
            Avaliações
          </a>
          <a href='#faq' className='hover:bg-gray-200 rounded-full p-2 font-medium text-gray-600 transition-colors duration-200'>
            FAQ
          </a>
        </div>

        {/* Contêiner flexível para elementos de localização e botão de contato */}
        <div className='flex items-center gap-8 relative'>
          {/* Ícone e texto de localização */}
          <div className='flex items-center mt-4'>
            <IoGlobeOutline className='text-2xl text-gray-600 cursor-pointer' onClick={toggleLanguageSelector} />
            <p className='text-md font-medium ml-2 cursor-pointer' onClick={toggleLanguageSelector}>Português</p>
            {showLanguageSelector && <LanguageSelector closeSelector={toggleLanguageSelector} />}
          </div>

          {/* Botão de contato */}
          <button className='flex items-center font-medium justify-center rounded-lg bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 mt-4 transition-colors duration-200'>
            Contato
            <img src='/header/phone.svg' alt='Ícone de contato' className='w-5 h-5 ml-1' />
          </button>
        </div>
      </nav>

      <div className='hidden w-full lg:flex'>
      </div>
    </header>
  );
}

export default Header;
