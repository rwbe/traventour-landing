import { FaArrowRight, FaClock } from "react-icons/fa6"; // Importando o ícone de cronômetro

function OffersCTA() {
  return (
    <div className="container my-32">
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Cartão de Desconto para Estadia */}
        <div className="relative bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg overflow-hidden lg:flex lg:items-center">
         <div className="absolute top-0 right-0 flex items-center justify-center h-full w-1/2">
            <img
              src="/offers/card1.png"
              alt="Ilustração de Hotel"
              className="object-cover opacity-70 h-2/3 lg:h-2/3"
            />
          </div>
          <div className="flex flex-col items-start gap-4 p-6 lg:p-8 text-blue-900 relative z-10">
            <h4 className="text-2xl text-white font-semibold">
             Aproveite 30% de DESCONTO <br /> na sua próxima estadia!
            </h4>
            <p className="w-3/4 text-blue-200 leading-7">
              Explore ofertas incríveis em <br /> acomodações nos melhores destinos.
            </p>
            <button
              className="flex items-center gap-2 font-semibold text-white bg-transparent border border-white rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 transform hover:scale-105"
            >
              Explore Agora <FaArrowRight className="mt-1 animate-bounce" />
            </button>
            <p className="flex items-center text-sm text-white">
              <FaClock className="mr-1" /> Oferta por tempo limitado
            </p>
          </div>
        </div>
        {/* Cartão de Desconto para Viagem */}
        <div className="relative bg-slate-900 rounded-lg overflow-hidden lg:flex lg:items-center">
          <div className="absolute top-0 right-0 flex items-center justify-center h-full w-1/2">
            <img
              src="/offers/card2.png"
              alt="Ilustração de Viagem"
              className="object-cover opacity-70 h-2/3 lg:h-2/3 mr-[-20px]" // Ajustando a margem à direita aqui
            />
          </div>
          <div className="flex flex-col items-start gap-4 p-6 lg:p-8 text-yellow-900 relative z-10"> 
            <h3 className="text-2xl text-white font-semibold">
              Economize 20% em <br /> pacotes de viagem
            </h3>
            <p className="text-gray-300 text-left leading-7">
              Descubra novos destinos e aproveite <br /> descontos exclusivos em pacotes de <br />passagens aéreas e atividades turísticas.
            </p>
            <button
              className="flex items-center gap-2 font-semibold text-white bg-transparent border border-white rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 transform hover:scale-105"
            >
              Explore Agora <FaArrowRight className="mt-1 animate-bounce" />
            </button>
            <p className="flex items-center text-sm text-white">
             <FaClock className="mr-1" /> Oferta por tempo limitado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersCTA;
