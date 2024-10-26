
function Partners() {
  return (
    <div className='container my-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        <div className='partner'>
          <img src='./partners/Turkish.svg' className='object-contain mx-auto hover:scale-110 transition duration-300 ease-in-out' alt='Logo Sponsor 1' />
        </div>
        <div className='partner'>
          <img src='./partners/Fly.svg' className='object-contain mx-auto hover:rotate-12 transition duration-300 ease-in-out' alt='Logo Sponsor 2' />
        </div>
        <div className='partner'>
          <img src='./partners/Airbnb.svg' className='object-contain mx-auto hover:brightness-125 hover:contrast-125 transition duration-300 ease-in-out' alt='Logo Sponsor 3' />
        </div>
        <div className='partner'>
          <img src='./partners/Trivago.svg' className='object-contain mx-auto hover:grayscale hover:invert transition duration-300 ease-in-out' alt='Logo Sponsor 4' />
        </div>
      </div>
    </div>
  );
}

export default Partners;
