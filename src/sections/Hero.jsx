import Button from '../components/Button';
import Compass from '/hero/compass.svg';
import Arrow from '/hero/arrow.svg';

function Hero() {
  return (
    <div className='bg-gradient-to-br from-gray-50 via-traventour-light/10 to-traventour-medium/15 py-16 lg:py-22' id='home'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center gap-12 lg:grid lg:grid-cols-2 lg:gap-16'>
          <div className='flex flex-col items-center lg:items-start space-y-6'>
            <span className='inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-traventour-medium to-traventour-light rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-traventour-dark hover:to-traventour-medium'>
              <img src={Compass} alt='Novas Aventuras' className='w-5 h-5 mr-2' />
              Novas Aventuras
            </span>
            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-tight text-center lg:text-left leading-tight'>
              Explore e aproveite <span className='bg-gradient-to-r from-traventour-medium to-traventour-light bg-clip-text text-transparent'>novos destinos</span> ao redor do mundo
            </h1>
            <p className='text-lg lg:text-xl text-traventour-dark/70 font-medium text-center lg:text-left max-w-2xl leading-relaxed'>
              Descubra as maravilhas do mundo e embarque em jornadas inesquecíveis para destinos novos e emocionantes.
            </p>
            <div className='flex flex-col items-center gap-4 pt-4 sm:flex-row sm:gap-2'>
              <Button href='/' type='link' color='traventour'>
                <div className="flex items-center">
                  <span>Comece Agora</span>
                  <img src={Arrow} alt='Seta' className='w-5 h-5 ml-2' />
                </div>
              </Button>
              <Button type='play'>Assistir Demonstração</Button>
            </div>
          </div>
          <div className='items-center justify-center hidden lg:flex'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-traventour-medium/30 to-traventour-light/30 rounded-full blur-3xl opacity-60 animate-pulse'></div>
              <img src='/hero/hero-image-2.svg' alt='Imagem Principal' className='relative w-full max-w-lg h-auto drop-shadow-2xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;