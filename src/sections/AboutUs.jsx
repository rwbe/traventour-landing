import { motion } from 'framer-motion';
import { FaArrowRight, FaGlobeAmericas, FaHeart, FaStar } from 'react-icons/fa';
import SectionTag from '../components/SectionTag';

function AboutUs() {
  const features = [
    {
      icon: <FaGlobeAmericas className="w-6 h-6" />,
      title: "Descubra novos destinos",
      description: "Explore locais únicos ao redor do mundo"
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Acomodações para todos os estilos", 
      description: "Do econômico ao luxuoso, temos a opção perfeita"
    },
    {
      icon: <FaStar className="w-6 h-6" />,
      title: "Experiências inesquecíveis",
      description: "Momentos que ficam gravados para sempre"
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

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-traventour-light/5 to-traventour-medium/8" id="about-us">
      {/* Decorative elements with new colors */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-traventour-light/15 rounded-full blur-3xl -translate-x-40 -translate-y-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-traventour-medium/20 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Text content first */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10 order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <SectionTag variant="travel" icon="globe">
                Sobre nós
              </SectionTag>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-traventour-dark via-traventour-medium to-traventour-light bg-clip-text text-transparent leading-tight">
                Conheça mais sobre a Traventour
              </h2>
              
              <p className='text-lg md:text-xl text-traventour-dark/70 leading-relaxed font-medium'>
                Bem-vindo à Traventour, onde cada estadia é uma aventura e cada destino é uma descoberta. Nossa paixão por viagens nos
                impulsiona a oferecer experiências únicas e memoráveis para todos os nossos viajantes.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div variants={itemVariants} className='space-y-6'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className='flex items-start gap-5 p-6 md:p-6 bg-gradient-to-r from-white via-traventour-light/5 to-white backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-traventour-light/30 hover:border-traventour-medium/40'
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-traventour-medium to-traventour-light rounded-2xl flex items-center justify-center text-white shadow-lg">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h6 className='text-lg md:text-xl font-bold text-traventour-dark'>{feature.title}</h6>
                    <p className="text-traventour-dark/70 font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced image with new styling */}
         <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative overflow-hidden p-1">
              <img 
                src='/about/about-image-2.png' 
                className='w-full h-[500px] md:h-[700px] lg:h-[530px] object-cover' // Usando object-cover para manter a proporção
                alt='About Us Image' 
              />

              {/* Enhanced decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-r from-traventour-light to-traventour-medium rounded-2xl opacity-90 rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-traventour-medium to-traventour-light rounded-full opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
