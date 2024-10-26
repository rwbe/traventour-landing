import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import places from '../data/places.json';

function FavoriteDestination() {
  const [likedPlaces, setLikedPlaces] = useState({});

  const handleLikeClick = (placeId) => {
    setLikedPlaces((prevState) => ({
      ...prevState,
      [placeId]: !prevState[placeId],
    }));
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const truncated = text.substring(0, maxLength).trimEnd();
    return truncated + (truncated.length < text.length ? '...' : '');
  };

  return (
    <div className="container mx-auto px-2 py-6" id="places">
      <header className="mb-6 flex flex-col items-center justify-between text-center lg:flex-row">
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <span className="text-gray-700 subtitle font-semibold text-base">Seus locais favoritos</span>
          <h2 className="text-3xl lg:text-3xl text-blue-950 font-bold">Garanta já o seu espaço!</h2>
        </div>
        <Link to="#" className="mt-4 flex items-center gap-2 font-semibold text-blue-600 lg:mt-0">
          Mais lugares <FaChevronRight />
        </Link>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {places.map((place) => (
          <div key={place.id} className="relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 w-full">
            <div className="h-56 w-full">
              <img
                src={`/travel-card/places/place${place.id}.png`}
                alt={place.name}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/travel-card/places/default.png'; // Fallback image
                }}
              />
              <button
                className={`absolute top-2 right-2 h-10 w-10 flex items-center justify-center transition-colors ${
                  likedPlaces[place.id] ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                }`}
                onClick={() => handleLikeClick(place.id)}
              >
                <img src="/travel-card/heart.svg" alt="Heart Icon" className="h-6 w-6" />
              </button>
            </div>

            <div className="bg-white p-4 rounded-b-xl">
              <div className="flex items-center gap-2 mb-2">
                <img src="/travel-card/star.svg" alt="Star Icon" className="w-4 h-4" />
                <p><span className="font-semibold">{place.rating}</span></p>
              </div>
              <h3 className="text-lg font-semibold mb-1">{truncateText(place.name, 25)}</h3>
              <p className="text-sm text-gray-600 mb-2">{truncateText(place.location, 30)}</p>

              <div className="border border-gray-200 my-2" />

              <div className="flex flex-wrap items-center gap-4 text-sm mb-2">
                <div className="flex items-center gap-2">
                  <img src="/travel-card/calendar.svg" alt="Calendar Icon" className="w-4 h-4" />
                  <p>{place.days} dias</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/travel-card/people.svg" alt="Person Icon" className="w-4 h-4" />
                  <p>{place.people} pessoas</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/travel-card/location.svg" alt="Location Icon" className="w-4 h-4" />
                  <p className="truncate max-w-[80px]">{place.continent}</p>
                </div>
              </div>

              <div className="border border-gray-200 my-2" />

              <p className="text-sm text-gray-600 mt-2">{truncateText(place.description, 120)}</p>
              <Link
                to="/"
                className="btn btn-primary bg-blue-500 text-white flex justify-center items-center mt-4 py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Explorar agora <FaChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteDestination;
