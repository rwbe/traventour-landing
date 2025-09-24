import { motion } from 'framer-motion';
import { FaStar, FaGem, FaPlane, FaGlobeAmericas, FaCompass, FaMapMarkedAlt } from 'react-icons/fa';

function SectionTag({ children, className = "", variant = "default", icon = null }) {
  const variants = {
    default: {
      container: "relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-traventour-light/20 via-traventour-medium/15 to-traventour-light/20 backdrop-blur-sm border-2 border-traventour-light/40 text-traventour-dark font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:from-traventour-light/30 hover:via-traventour-medium/25 hover:to-traventour-light/30 transition-all duration-500 group overflow-hidden",
      background: "absolute inset-0 bg-gradient-to-r from-traventour-medium/10 via-traventour-light/10 to-traventour-medium/10 rounded-full blur-sm group-hover:blur-none transition-all duration-500",
      icon: "text-traventour-medium group-hover:text-traventour-dark transition-colors duration-300"
    },
    premium: {
      container: "relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-2 border-amber-300 text-amber-800 font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:border-amber-400 hover:from-amber-100 hover:to-amber-100 transition-all duration-500 group overflow-hidden",
      background: "absolute inset-0 bg-gradient-to-r from-amber-300/20 via-yellow-300/20 to-amber-300/20 rounded-full blur-sm group-hover:blur-none transition-all duration-500",
      icon: "text-amber-500 group-hover:text-amber-600 transition-colors duration-300"
    },
    modern: {
      container: "relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-traventour-dark/95 via-traventour-medium/95 to-traventour-dark/95 border border-traventour-medium/50 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:shadow-traventour-light/25 transition-all duration-500 group overflow-hidden backdrop-blur-sm",
      background: "absolute inset-0 bg-gradient-to-r from-traventour-light/30 via-traventour-medium/30 to-traventour-light/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500",
      icon: "text-traventour-light group-hover:text-white transition-colors duration-300"
    },
    travel: {
      container: "relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-white via-traventour-light/10 to-white border-2 border-traventour-medium/30 text-traventour-dark font-bold text-sm rounded-2xl shadow-lg hover:shadow-xl hover:border-traventour-medium/50 hover:from-traventour-light/5 hover:to-traventour-light/5 transition-all duration-500 group overflow-hidden backdrop-blur-sm",
      background: "absolute inset-0 bg-gradient-to-r from-traventour-medium/5 via-traventour-light/10 to-traventour-medium/5 rounded-2xl opacity-50 group-hover:opacity-100 transition-all duration-500",
      icon: "text-traventour-medium group-hover:text-traventour-dark transition-colors duration-300"
    }
  };

  const currentVariant = variants[variant] || variants.default;
  
  const getIcon = () => {
    if (icon === "star") return <FaStar className={currentVariant.icon} />;
    if (icon === "gem") return <FaGem className={currentVariant.icon} />;
    if (icon === "plane") return <FaPlane className={currentVariant.icon} />;
    if (icon === "globe") return <FaGlobeAmericas className={currentVariant.icon} />;
    if (icon === "compass") return <FaCompass className={currentVariant.icon} />;
    if (icon === "map") return <FaMapMarkedAlt className={currentVariant.icon} />;
    if (icon) return <span className={currentVariant.icon}>{icon}</span>;
    return <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-traventour-medium to-traventour-light group-hover:animate-pulse ${currentVariant.icon}`}></div>;
  };

  return (
    <motion.span 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${currentVariant.container} ${className}`}
    >
      {/* Animated background */}
      <div className={currentVariant.background}></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        {getIcon()}
        <span className="font-bold">{children}</span>
      </span>
    </motion.span>
  );
}

export default SectionTag;