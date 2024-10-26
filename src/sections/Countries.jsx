import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import countries from '../data/countries.json';

function CountrySample() {
  return (
    <div className="container" id="destinations">
      <div className="mb-12 flex flex-col items-center justify-between text-center lg:flex-row">
        <div className="flex flex-col items-center gap-2 lg:items-start">
        <span className="subtitle text-white">Para onde você quer ir</span>
        <h2 className="text-gray-700">Destinos populares</h2>
        </div>
        <Link
          to="#"
          className="mt-4 flex items-center gap-2 font-semibold text-blue-600 lg:mt-0"
        >
          Ver mais <FaChevronRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {countries.slice(0, 8).map((country) => (
          <div key={country.id} className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:rotate-3">
            <div className="relative">
              <div className="bg-black opacity-20 absolute inset-0"></div>
              <img
                src={country.backgroundImage}
                alt=""
                className="w-full h-64 object-cover"
              />
              {/* Adicionar sobreposição de gradiente dentro do elemento de imagem */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 inset-x-0 z-20">
              <div className="p-4 relative">
                {/* Adicionando a bandeira em formato circular na frente do nome do país */}
                <div className="flex items-center mb-2">
                  <div className="border-4 border-white rounded-full overflow-hidden w-12 h-12 flex justify-center items-center mr-2">
                    <img src={country.flag} alt="Flag" className="w-full h-full rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{country.name}</h3>
                    <p className="text-sm text-white mb-0">{country.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountrySample;
