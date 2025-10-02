import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import SectionTag from '../components/SectionTag';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "Empresário e Viajante",
      image: "/testimonials/user1.png",
      rating: 5,
      location: "Rio de Janeiro, Brasil",
      text: "Fiz uma viagem inesquecível para o Rio de Janeiro com minha família. As paisagens são de tirar o fôlego, e o atendimento foi impecável! Mal posso esperar para voltar.",
      gradient: "from-traventour-medium to-traventour-light"
    },
    {
      id: 2,
      name: "Maria Oliveira", 
      role: "Blogger de Viagem",
      image: "/testimonials/user2.png",
      rating: 5,
      location: "Machu Picchu, Peru",
      text: "Minha aventura por Machu Picchu foi surreal! Tudo foi organizado perfeitamente, desde os guias até os detalhes da viagem. Super recomendo para quem ama explorar.",
      gradient: "from-traventour-light to-traventour-medium"
    },
    {
      id: 3,
      name: "Lucas Fernandes",
      role: "Aventureiro",
      image: "/testimonials/user3.png", 
      rating: 5,
      location: "Patagônia, Argentina",
      text: "Viajar para a Patagônia foi uma experiência única! A natureza é incrível e as atividades ao ar livre são perfeitas para quem busca aventura. Valeu cada segundo!",
      gradient: "from-traventour-dark to-traventour-medium"
    }
  ];

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
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-traventour-light/8 via-white to-traventour-medium/10" id="testimonials">
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-traventour-light/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-52 h-52 bg-traventour-medium/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <SectionTag variant="travel" icon="star" className="mb-8">
            Depoimentos
          </SectionTag>
          
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-traventour-dark via-traventour-medium to-traventour-light bg-clip-text text-transparent leading-tight mb-8">
            O que nossos clientes dizem
          </h2>
          
          <p className="text-xl text-traventour-dark/70 max-w-3xl mx-auto leading-relaxed font-medium">
            Histórias reais de viajantes que confiaram em nós para criar experiências inesquecíveis
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-10 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative p-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-traventour-light/30 hover:border-traventour-medium/40 overflow-hidden"
            >
              {/* Enhanced gradient top line */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${testimonial.gradient} rounded-t-3xl`}></div>
              
              {/* Enhanced quote icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}
              >
                <FaQuoteLeft className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                  >
                    <FaStar className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced testimonial text */}
              <p className="text-traventour-dark/80 text-lg leading-relaxed mb-10 font-medium">
                "{testimonial.text}"
              </p>
              
              {/* Location */}
              <div className="flex items-center gap-3 mb-8 text-traventour-medium">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span className="text-sm font-medium">{testimonial.location}</span>
              </div>
              
              {/* Enhanced user info */}
              <div className="flex items-center gap-5">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img 
                    src={testimonial.image} 
                    className="w-20 h-20 rounded-2xl object-cover ring-4 ring-white shadow-lg" 
                    alt={testimonial.name}
                  />
                  <div className={`absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </motion.div>
                
                <div>
                  <h5 className="text-xl font-bold text-traventour-dark">{testimonial.name}</h5>
                  <p className="text-traventour-dark/70 font-medium">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Enhanced hover effect */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.4 }}
                className={`absolute top-6 right-6 w-40 h-40 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-2xl`}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;