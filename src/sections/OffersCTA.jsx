import { FaArrowRight, FaClock, FaPercent, FaHotel, FaPlane } from "react-icons/fa6";
import { motion } from "framer-motion";

function OffersCTA() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-traventour-light/8 to-traventour-medium/12">
      {/* Modern geometric decorations with new colors */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-traventour-light/15 to-traventour-medium/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-traventour-medium/20 to-traventour-light/20 rounded-full blur-3xl"></div>
      
      {/* Floating elements */}
      <div className="absolute top-32 right-1/4 w-4 h-4 bg-traventour-medium rounded-full animate-ping opacity-20"></div>
      <div className="absolute bottom-40 left-1/3 w-6 h-6 bg-traventour-light rounded-full animate-pulse opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-traventour-light/20 to-traventour-medium/20 rounded-full mb-6">
            <FaPercent className="text-traventour-medium" />
            <span className="text-traventour-dark font-semibold">Ofertas Especiais</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-traventour-dark via-traventour-medium to-traventour-light bg-clip-text text-transparent mb-4">
            Ofertas Exclusivas de Viagem
          </h2>
          <p className="text-lg text-traventour-dark/70 max-w-2xl mx-auto font-medium">
            Aproveite descontos incríveis na sua próxima aventura com nossas ofertas limitadas
          </p>
        </motion.div>

        {/* Modern cards layout */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Hotel Discount Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-gradient-to-br from-traventour-medium via-traventour-medium-dark to-traventour-dark rounded-3xl overflow-hidden shadow-2xl hover:shadow-traventour-light/25 transition-all duration-500"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-24 translate-y-24"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-8 lg:p-10">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <FaHotel className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-traventour-light text-sm font-medium">Estadias de Hotel</p>
                    <h3 className="text-white text-2xl font-bold">30% OFF</h3>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                    <span className="text-white text-xs font-bold">OFERTA LIMITADA</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-3xl lg:text-4xl text-white font-bold mb-4 leading-tight">
                Acomodações Premium <span className="block">em todo o mundo</span>
              </h4>
              
              <p className="text-traventour-light/90 leading-relaxed mb-8 text-lg">
                Descubra hotéis e resorts de luxo com descontos exclusivos. Reserve agora e economize muito em sua próxima estadia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white text-traventour-dark px-6 py-3 rounded-2xl font-bold transition-all duration-300 hover:bg-traventour-light/10 group/btn"
                >
                  Reserve Agora
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
                
                <div className="flex items-center gap-2 text-white/90">
                  <FaClock className="text-sm" />
                  <span className="text-sm font-medium">Termina em 5 dias</span>
                </div>
              </div>
            </div>
            
            {/* Decorative image */}
            <div className="absolute top-4 right-4 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
              <img
                src="/offers/card1.png"
                alt="Hotel illustration"
                className="w-32 h-32 object-contain"
              />
            </div>
          </motion.div>

          {/* Travel Package Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-gradient-to-br from-traventour-dark via-traventour-dark-light to-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-traventour-medium/25 transition-all duration-500"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-56 h-56 bg-traventour-light rounded-full -translate-x-28 -translate-y-28"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-traventour-medium rounded-full translate-x-36 translate-y-36"></div>
            </div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-traventour-medium/20 to-traventour-light/20"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 lg:p-10">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-traventour-medium to-traventour-light rounded-2xl flex items-center justify-center">
                    <FaPlane className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Pacotes de Viagem</p>
                    <h3 className="text-white text-2xl font-bold">20% OFF</h3>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-gradient-to-r from-traventour-medium to-traventour-light rounded-full px-4 py-2">
                    <span className="text-white text-xs font-bold">HOT DEAL</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-3xl lg:text-4xl text-white font-bold mb-4 leading-tight">
                Experiências completas <span className="block">de Viagem</span>
              </h4>
              
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Pacotes all-inclusive com voos, hotéis e atividades. Suas férias perfeitas estão esperando por você.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-gradient-to-r from-traventour-medium to-traventour-light text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 hover:from-traventour-dark hover:to-traventour-medium group/btn"
                >
                  Explorar Ofertas
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
                
                <div className="flex items-center gap-2 text-gray-400">
                  <FaClock className="text-sm" />
                  <span className="text-sm font-medium">Válido até o final do mês</span>
                </div>
              </div>
            </div>
            
            {/* Decorative image */}
            <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
              <img
                src="/offers/card2.png"
                alt="Travel illustration"
                className="w-32 h-32 object-contain"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-traventour-dark/70 mb-6 text-lg font-medium">
            Não perca essas oportunidades incríveis de economia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <span className="text-sm text-traventour-dark/60">✨ Sem taxas escondidas</span>
            <span className="text-sm text-traventour-dark/60">🔒 Reserva segura</span>
            <span className="text-sm text-traventour-dark/60">📞 Suporte 24/7</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OffersCTA;