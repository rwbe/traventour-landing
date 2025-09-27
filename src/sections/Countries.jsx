import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaStar, FaEye, FaCompass, FaGlobeAmericas } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import countries from '../data/countries.json';
import SectionTag from '../components/SectionTag';

function CountrySample() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Hook para detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Tradução dos dados para português
  const destinosTuristicos = countries.map(country => ({
    ...country,
    nome: country.name,
    localizacao: country.location,
    imagem: country.backgroundImage,
    bandeira: country.flag,
    descricao: `Descubra as maravilhas de ${country.name} e viva experiências inesquecíveis neste destino único.`,
    avaliacao: '4.8'
  }));

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === destinosTuristicos.length - 1 ? 0 : prevIndex + 1
    );
  }, [destinosTuristicos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? destinosTuristicos.length - 1 : prevIndex - 1
    );
  }, [destinosTuristicos.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Touch/Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50;
    
    if (isSwipe) {
      setIsAutoPlaying(false);
      if (distance > 0) {
        // Swipe left - próximo
        nextSlide();
      } else {
        // Swipe right - anterior
        prevSlide();
      }
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
        setIsAutoPlaying(false);
      } else if (event.key === 'ArrowRight') {
        nextSlide();
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const getSlidePosition = (index) => {
    const diff = index - currentIndex;
    const total = destinosTuristicos.length;
    
    if (diff === 0) return 0; // centro
    if (diff === 1 || diff === -(total - 1)) return 1; // direita
    if (diff === -1 || diff === total - 1) return -1; // esquerda
    
    return diff > 0 ? 2 : -2; // fora da vista
  };

  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-traventour-light/5 to-traventour-medium/10 overflow-hidden" id="destinations">
      {/* Modern geometric decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-traventour-light/20 to-traventour-medium/20 rounded-full -translate-y-80 translate-x-80 opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-traventour-medium/15 to-traventour-light/15 rounded-full translate-y-60 -translate-x-60 opacity-60 blur-3xl"></div>
      
      {/* Floating travel elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-traventour-medium to-traventour-light rounded-2xl rotate-12 opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-12 h-12 bg-gradient-to-r from-traventour-light to-traventour-medium rounded-full opacity-30 animate-bounce"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with modern design */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-3 text-center"
        >
          <SectionTag variant="travel" icon="compass" className="mb-8">
            Para onde você quer ir
          </SectionTag>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-traventour-dark via-traventour-medium to-traventour-light bg-clip-text text-transparent leading-tight mb-6">
            Destinos Populares
          </h2>
          
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-traventour-medium to-traventour-light rounded-full mb-6 mx-auto"
          ></motion.div>
          
          <p className="text-xl md:text-2xl text-traventour-dark/70 max-w-3xl mx-auto leading-relaxed font-medium">
            Descubra os marcos mais icônicos do mundo com experiências autênticas e memórias inesquecíveis
          </p>
        </motion.div>

        {/* Carrossel Moderno de Destinos */}
        <div className="relative">
          {/* Carousel Container */}
          <div 
            className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              {destinosTuristicos.map((destino, index) => {
                const position = getSlidePosition(index);
                
                // Em mobile, mostrar apenas o cartão central
                if (isMobile && position !== 0) return null;
                // Em desktop, não renderizar cartões muito distantes
                if (!isMobile && Math.abs(position) > 1) return null;
                
                return (
                  <motion.div
                    key={destino.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      x: isMobile ? 0 : position * 280, // Sem offset em mobile
                      scale: isMobile || position === 0 ? 1 : 0.8,
                      opacity: isMobile || position === 0 ? 1 : 0.6,
                      filter: isMobile || position === 0 ? 'blur(0px)' : 'blur(2px)',
                      zIndex: position === 0 ? 10 : 5,
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.8, 0.25, 1],
                    }}
                    className="absolute"
                  >
                    <div className="w-80 md:w-96 h-[500px] md:h-[600px] group relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white to-traventour-light/5 border border-traventour-light/30">
                      {/* Image container */}
                      <div className="relative h-72 md:h-80 overflow-hidden">
                        <img
                          src={destino.imagem}
                          alt={`Destino turístico: ${destino.nome}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-traventour-dark/70 via-traventour-dark/20 to-transparent opacity-80"></div>
                        
                        {/* Popular badge */}
                        <div className="absolute top-5 right-5 bg-gradient-to-r from-traventour-medium to-traventour-light text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 backdrop-blur-sm border border-white/20">
                          <FaEye className="text-white" />
                          Popular
                        </div>

                        {/* Rating */}
                        <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/95 px-3 py-2 rounded-full backdrop-blur-sm shadow-lg border border-traventour-light/30">
                          <FaStar className="text-yellow-500 text-sm" />
                          <span className="text-sm font-bold text-traventour-dark">{destino.avaliacao}</span>
                        </div>

                        {/* Compass icon for center card */}
                        {(isMobile || position === 0) && (
                          <motion.div 
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="absolute bottom-5 right-5 w-12 h-12 bg-gradient-to-r from-traventour-light to-traventour-medium rounded-full flex items-center justify-center shadow-lg"
                          >
                            <FaCompass className="text-white text-lg animate-pulse" />
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Content section */}
                      <div className="p-6 md:p-8 bg-gradient-to-br from-white to-traventour-light/5 h-full">
                        {/* Country info */}
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-traventour-light/40 mr-4 flex-shrink-0 shadow-lg">
                            <img 
                              src={destino.bandeira} 
                              alt={`Bandeira de ${destino.nome}`}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl md:text-2xl font-bold text-traventour-dark mb-2 truncate">
                              {destino.nome}
                            </h3>
                            
                            <div className="flex items-center text-traventour-medium/80">
                              <FaMapMarkerAlt className="w-4 h-4 mr-2 flex-shrink-0" />
                              <p className="text-sm font-medium truncate">{destino.localizacao}</p>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-traventour-dark/70 text-sm md:text-base leading-relaxed mb-6 md:mb-8 font-medium">
                          {destino.descricao}
                        </p>
                        
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8 mt-16">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                prevSlide();
                setIsAutoPlaying(false);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-traventour-medium to-traventour-light hover:from-traventour-dark hover:to-traventour-medium text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
              aria-label="Destino anterior"
            >
              <FaChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-200" />
            </motion.button>

            {/* Indicators */}
            <div className="flex items-center gap-3">
              {destinosTuristicos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    goToSlide(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-12 h-4 bg-gradient-to-r from-traventour-medium to-traventour-light'
                      : 'w-4 h-4 bg-traventour-light/50 hover:bg-traventour-medium/50'
                  }`}
                  aria-label={`Ir para destino ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                nextSlide();
                setIsAutoPlaying(false);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-traventour-medium to-traventour-light hover:from-traventour-dark hover:to-traventour-medium text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
              aria-label="Próximo destino"
            >
              <FaChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </div>
        
        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-traventour-dark to-traventour-medium hover:from-traventour-medium hover:to-traventour-light text-white py-6 px-12 rounded-3xl font-bold text-lg transition-all duration-500 shadow-2xl hover:shadow-traventour-medium/40 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-traventour-light/20 to-traventour-medium/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            
            <FaGlobeAmericas className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Ver Todos os Destinos</span>
            <FaChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
          
          <p className="mt-6 text-traventour-dark/60 text-lg font-medium">
            Descubra mais de 100 destinos incríveis ao redor do mundo
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CountrySample;
