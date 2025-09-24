import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import places from '../data/places.json';
import SectionTag from '../components/SectionTag';

function FavoriteDestination() {
  const [likedPlaces, setLikedPlaces] = useState({});

  const handleLikeClick = (placeId) => {
    setLikedPlaces((prevState) => ({
      ...prevState,
      [placeId]: !prevState[placeId],
    }));
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const truncated = text.substring(0, maxLength).trimEnd();
    return truncated + (truncated.length < text.length ? '...' : '');
  };

  // Valores reais baseados na pesquisa
  const realPrices = {
    1: 2290, // Rio de Janeiro - R$ 440/noite x 5 dias + extras
    2: 8500, // Nova York - US$ 250/noite x 7 dias convertido + extras
    3: 2880, // Paris - €180/noite x 3 dias convertido + extras
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-traventour-light/10 via-white to-traventour-medium/15" id="experiences">
      {/* Enhanced decorative elements */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-traventour-light/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-traventour-medium/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <SectionTag variant="travel" icon="star" className="mb-9">
            Seus locais favoritos
          </SectionTag>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl lg:text-6xl text-traventour-dark font-bold leading-tight mb-4"
          >
            Garanta já o seu{' '}
            <span className="bg-gradient-to-r from-traventour-medium via-traventour-light to-traventour-medium bg-clip-text text-transparent">
              espaço premium!
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-traventour-dark/70 max-w-2xl mx-auto mb-12 font-medium"
          >
            Destinos exclusivos com valores reais e experiências inesquecíveis
          </motion.p>
        </motion.header>

        {/* Places Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {places.map((place) => (
            <motion.div
              key={place.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-traventour-light/30 hover:border-traventour-medium/40 backdrop-blur-sm"
            >
              {/* Image and Overlay */}
              <div className="relative h-64 w-full overflow-hidden"> 
                <motion.img
                  src={`/travel-card/places/place${place.id}.png`}
                  alt={place.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/travel-card/places/default.png';
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-traventour-dark/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Like Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute top-6 right-6 h-12 w-12 flex items-center justify-center rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 ${
                    likedPlaces[place.id] ? 'text-red-500 bg-red-50' : 'text-traventour-dark/70 hover:text-red-500'
                  }`}
                  onClick={() => handleLikeClick(place.id)}
                >
                  <FaHeart className="h-5 w-5" />
                </motion.button>
                
                {/* Premium Badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-traventour-medium to-traventour-light text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-lg flex items-center gap-2 backdrop-blur-sm border border-white/20">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Premium
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-2">
                {/* Rating and Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-traventour-light/20">
                      <span className="text-yellow-500 text-lg">⭐</span>
                      <span className="font-bold text-traventour-dark text-sm">{place.rating}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-2xl font-bold bg-gradient-to-r from-traventour-medium to-traventour-light bg-clip-text text-transparent">
                      R$ {realPrices[place.id]?.toLocaleString() || '2.899'}
                    </span>
                    <div className="text-xs text-traventour-dark/60 font-medium">por pessoa</div>
                  </div>
                </div>

                {/* Place Name and Location */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-traventour-dark group-hover:text-traventour-medium transition-colors leading-tight">
                    {truncateText(place.name, 25)}
                  </h3>
                  
                  <p className="text-traventour-dark/70 flex items-center gap-3 font-medium text-sm">
                    <FaMapMarkerAlt className="text-traventour-medium w-4 h-4" />
                    {truncateText(place.location, 30)}
                  </p>
                </div>

                {/* Days and People Info */}
                <div className="flex items-center gap-6 text-traventour-dark/70">
                  <div className="flex items-center gap-2 bg-traventour-light/10 px-4 py-2 rounded-xl text-sm">
                    <FaCalendarAlt className="text-traventour-medium w-4 h-4" />
                    <span className="font-medium">{place.days} dias</span>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-traventour-light/10 px-4 py-2 rounded-xl text-sm">
                    <FaUsers className="text-traventour-medium w-4 h-4" />
                    <span className="font-medium">{place.people} pessoas</span>
                  </div>
                </div>

                {/* Description and Explore Button */}
                <div className="border-t border-traventour-light/20 pt-6 space-y-5">
                  <p className="text-traventour-dark/70 leading-relaxed text-sm">
                    {truncateText(place.description, 90)}
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/"
                      className="w-full inline-flex justify-center items-center bg-gradient-to-r from-traventour-medium to-traventour-light hover:from-traventour-dark hover:to-traventour-medium text-white font-bold py-4 px-6 rounded-2xl transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-traventour-medium/30 transform hover:-translate-y-1"
                    >
                      Explorar agora <FaChevronRight className="ml-3 text-sm" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default FavoriteDestination;
