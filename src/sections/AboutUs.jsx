function AboutUs() {
  return (
    <div className='container my-16' id='about-us'>
      <div className='grid items-center gap-4 lg:grid-cols-2'>
        <div>
          <img src='/about/about-image-2.png' className='w-full object-cover rounded-lg' alt='About Us Image' />
        </div>
        <div>
          <div className='flex flex-col gap-6'>
            <h2 className="text-4xl font-bold text-blue-950">Conheça mais sobre a Traventour</h2>
          </div>
          <p className='text-lg mt-4 mb-6'>
            Bem-vindo à Traventour, onde cada estadia é uma aventura e cada destino é uma descoberta. Nossa paixão por viagens nos
            impulsiona a oferecer experiências únicas e memoráveis para todos os nossos viajantes. 
          </p>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <div>
                {/* Ícone para o primeiro tópico */}
                <img src='/about/arrow.svg' className='w-6 h-7' alt='Topic Icon 1' />
              </div>
              <div>
                <h6 className='text-lg font-semibold'>Descubra novos destinos</h6>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div>
                {/* Ícone para o segundo tópico */}
                <img src='/about/arrow.svg' className='w-6 h-7' alt='Topic Icon 2' />
              </div>
              <div>
                <h6 className='text-lg font-semibold'>Acomodações para todos os estilos</h6>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div>
                {/* Ícone para o terceiro tópico */}
                <img src='/about/arrow.svg' className='w-6 h-7' alt='Topic Icon 3' />
              </div>
              <div>
                <h6 className='text-lg font-semibold'>Experiências inesquecíveis</h6>
              </div>
            </div>
          </div>
          <button className='btn btn-primary bg-blue-400 hover:bg-blue-500 text-white py-2 px-5 rounded-lg mt-8'>
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
