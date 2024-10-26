import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function TravelBenefits() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [controls]);

  return (
    <div className="container my-20" id="benefits">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="flex flex-col justify-center gap-4 lg:col-span-2">
          <span className="subtitle text-xl font-semibold text-gray-700">Nossos benefícios</span>
          <h2 className="text-3xl font-bold text-gray-900 text-left">Descubra as vantagens de viajar conosco</h2>
        </div>
        
        {/* Item 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="flex flex-col justify-center gap-8 h-auto border-gray-300 border rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="grid gap-8 lg:grid-cols-1">
            <div className="flex items-center gap-4 p-4 rounded-lg">
              <div className="size-28">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  src="/benefits/Exclusive.svg"
                  className="w-full"
                  alt="Ícone Guia 1"
                />
              </div>
              <div className="flex flex-col items-start">
                <h6 className="text-lg font-bold inline-block">Destinos Exclusivos</h6>
                <p className="w-full">Descubra os melhores destinos ao redor do mundo com acesso exclusivo aos lugares mais incríveis.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="flex flex-col justify-center gap-8 h-auto border-gray-300 border rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="grid gap-8 lg:grid-cols-1">
            <div className="flex items-center gap-4 p-4 rounded-lg">
              <div className="size-28">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  src="/benefits/Assistance.svg"
                  className="w-full"
                  alt="Ícone Guia 2"
                />
              </div>
              <div className="flex flex-col items-start">
                <h6 className="text-lg font-bold inline-block">Assistência 24/7</h6>
                <p className="w-full">Estamos sempre disponíveis para ajudá-lo durante sua viagem, seja para resolver problemas ou oferecer recomendações.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="flex flex-col justify-center gap-8 h-auto border-gray-300 border rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="grid gap-8 lg:grid-cols-1">
            <div className="flex items-center gap-4 p-4 rounded-lg">
              <div className="size-28">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  src="/benefits/Memorable.svg"
                  className="w-full"
                  alt="Ícone Guia 3"
                />
              </div>
              <div className="flex flex-col items-start">
                <h6 className="text-lg font-bold inline-block">Experiências Memoráveis</h6>
                <p className="w-full">Crie memórias duradouras explorando culturas, paisagens e experiências diversas juntos.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Item 4 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="flex flex-col justify-center gap-8 h-auto border-gray-300 border rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="grid gap-8 lg:grid-cols-1">
            <div className="flex items-center gap-4 p-4 rounded-lg">
              <div className="size-28">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  src="/benefits/Rewards.svg"
                  className="w-full"
                  alt="Ícone Guia 4"
                />
              </div>
              <div className="flex flex-col items-start">
                <h6 className="text-lg font-bold inline-block">Recompensas de Viagem</h6>
                <p className="w-full">Ganhe recompensas emocionantes ao viajar conosco. Desbloqueie benefícios especiais e descontos em sua próxima viagem.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TravelBenefits;
