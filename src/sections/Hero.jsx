import Button from '../components/Button';
import Compass from '/hero/compass.svg';
import Arrow from '/hero/arrow.svg';

function Hero() {
  return (
    <div className='bg-gray-100 mt-16 mb-4 lg:mt-0' id='home'>
      <div className='container'>
        <div className='flex items-center gap-8 lg:grid lg:grid-cols-2'>
          <div className='flex flex-col items-center lg:items-start'>
          <span className='inline-flex items-center px-4 py-2 mb-3 text-sm font-bold text-white bg-blue-400 rounded-full'>
              <img src={Compass} alt='Novas Aventuras' className='w-5 h-5 mr-2' />
              Novas Aventuras
            </span>
            <h1 className='text-6xl tracking-tighter text-center lg:text-6xl lg:text-left'>
              Explore e aproveite <span className='text-blue-400'>novos destinos </span>ao redor do mundo
            </h1>
            <p className='w-4/5 my-4 font-medium text-center lg:text-left'>Descubra as maravilhas do mundo e embarque em jornadas inesquecíveis para destinos novos e emocionantes.</p>
            <div className='flex flex-col items-center gap-4 sm:flex-row'>
              <Button href='/' type='link' color='blue'>
              <div className="flex items-center">
                <span>Comece Agora</span>
                <img src={Arrow} alt='Seta' className='w-5 h-5 ml-1' />
              </div>
              </Button>
              <Button type='play'>Assistir Demonstração</Button>
            </div>
          </div>
          <div className='items-center justify-center hidden lg:flex'>
           <img src='/hero/hero-image-2.svg' alt='Imagem Principal' className='w-174 h-68 mb-8' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
