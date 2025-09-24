import Button from '../components/Button';
import Compass from '/hero/compass.svg';
import Arrow from '/hero/arrow.svg';

function Hero() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-24" id="home">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
          
          {/* Text and button */}
          <div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <img src={Compass} alt="Novas Aventuras" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Novas Aventuras
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
              Explore e aproveite <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">novos destinos</span> ao redor do mundo
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium max-w-xl lg:max-w-2xl leading-relaxed">
              Descubra as maravilhas do mundo e embarque em jornadas inesquecíveis para destinos novos e emocionantes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4 w-full sm:w-auto">
              <Button href="/" type="link" color="blue">
                <div className="flex items-center">
                  <span>Comece Agora</span>
                  <img src={Arrow} alt="Seta" className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </div>
              </Button>
              <Button type="play">Assistir Demonstração</Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex items-center justify-center w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-300 rounded-full blur-2xl sm:blur-3xl opacity-10 animate-pulse"></div>
              <img 
                src="/hero/hero-image-2.svg" 
                alt="Imagem Principal" 
                className="relative w-full h-auto drop-shadow-xl sm:drop-shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
