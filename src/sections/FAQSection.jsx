import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import faqs from '../data/faq.json';
import SectionTag from '../components/SectionTag';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-traventour-light/5 to-traventour-medium/10" id="faq">
      
      {/* Enhanced decorative elements with new colors */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-traventour-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-traventour-medium/25 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between mb-16 lg:flex-row"
        >
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <SectionTag variant="travel" icon="star">
              Perguntas frequentes
            </SectionTag>
            
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-traventour-dark via-traventour-medium to-traventour-light bg-clip-text text-transparent leading-tight">
              Perguntas Comuns
            </h2>
            
            <p className="text-xl text-traventour-dark/70 max-w-2xl leading-relaxed font-medium">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="#" 
              className="mt-8 lg:mt-0 inline-flex items-center gap-3 bg-gradient-to-r from-traventour-medium to-traventour-light hover:from-traventour-dark hover:to-traventour-medium text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-traventour-medium/30 transform hover:-translate-y-1"
            >
              Mais perguntas <FaChevronRight className="text-sm" />
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <FAQItem
                index={index}
                question={faq.question}
                answer={faq.answer}
                activeIndex={activeIndex}
                toggleActive={toggleActive}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-traventour-medium to-traventour-light hover:from-traventour-dark hover:to-traventour-medium text-white py-4 px-8 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-traventour-medium/30"
          >
            Ainda tem dúvidas? Fale conosco
          </motion.button>
        </motion.div>
      </div>
    </div>
  );  
};

const FAQItem = ({ index, question, answer, activeIndex, toggleActive }) => {
  const isActive = activeIndex === index;

  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-traventour-light/30 hover:border-traventour-medium/40 transition-all duration-300"
      whileHover={{ shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
    >
      <motion.button
        className={`flex justify-between items-center p-8 w-full focus:outline-none transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-r from-traventour-medium to-traventour-light text-white' 
            : 'bg-white/50 hover:bg-white/80 text-traventour-dark'
        }`}
        onClick={() => toggleActive(index)}
        whileHover={!isActive ? { backgroundColor: "rgba(255, 255, 255, 0.9)" } : {}}
      >
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ 
              rotate: isActive ? 360 : 0,
              scale: isActive ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
            className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
              isActive 
                ? 'bg-white/20 text-white' 
                : 'bg-gradient-to-r from-traventour-medium to-traventour-light text-white'
            }`}
          >
            <FaQuestionCircle className="w-5 h-5" />
          </motion.div>
          
          <span className="font-bold text-lg text-left">{question}</span>
        </div>
        
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <FaChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-8 pt-0"
            >
              <div className="bg-gradient-to-r from-traventour-light/10 to-traventour-medium/5 rounded-2xl p-6 border border-traventour-light/20">
                <p className="text-traventour-dark/80 text-lg leading-relaxed font-medium">{answer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQSection;