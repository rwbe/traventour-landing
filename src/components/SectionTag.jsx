import { motion } from 'framer-motion';
import { FaStar, FaGem } from 'react-icons/fa';

function SectionTag({ children, className = "", variant = "default", icon = null }) {
  const variants = {
    default: {
      container: "relative inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-blue-300 text-blue-500 font-bold text-sm rounded-3xl shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-500 group overflow-hidden", 
      background: "absolute inset-0 bg-gradient-to-r from-blue-100/10 via-blue-300/10 to-blue-500/10 rounded-3xl blur-sm group-hover:blur-none transition-all duration-500",
      icon: "text-blue-500 group-hover:text-blue-600 transition-colors duration-300"
    },
    premium: {
      container: "relative inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-amber-300 text-amber-500 font-bold text-sm rounded-3xl shadow-sm hover:shadow-lg hover:border-amber-400 transition-all duration-500 group overflow-hidden", 
      background: "absolute inset-0 bg-gradient-to-r from-amber-100/10 via-amber-200/10 to-amber-300/10 rounded-3xl blur-sm group-hover:blur-none transition-all duration-500",
      icon: "text-amber-500 group-hover:text-amber-600 transition-colors duration-300"
    },
    modern: {
      container: "relative inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-slate-500 text-slate-600 font-bold text-sm rounded-3xl shadow-sm hover:shadow-lg hover:border-slate-600 transition-all duration-500 group overflow-hidden", 
      icon: "text-slate-600 group-hover:text-slate-700 transition-colors duration-300"
    }
  };

  const currentVariant = variants[variant] || variants.default;

  const getIcon = () => {
    if (icon === "star") return <FaStar className={currentVariant.icon} />;
    if (icon === "gem") return <FaGem className={currentVariant.icon} />;
    if (icon) return <span className={currentVariant.icon}>{icon}</span>;
    return <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:animate-pulse ${currentVariant.icon}`}></div>;
  };

  return (
    <motion.span 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${currentVariant.container} ${className}`}
    >
      {/* Animated background */}
      <div className={currentVariant.background}></div>

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-3xl"></div>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {getIcon()}
        {children}
      </span>
    </motion.span>
  );
}

export default SectionTag;
