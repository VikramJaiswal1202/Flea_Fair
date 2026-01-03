import React from 'react';
import { CityEvent } from './types';

interface CityCardProps {
  city: CityEvent;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  const isGrayscale = city.status === 'coming-soon';

  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-200 transition-all duration-500 ease-in-out">
        <img
          src={city.image}
          alt={city.name}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110
          filter ${isGrayscale ? 'grayscale group-hover:grayscale-0' : 'grayscale-0'}`}
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

      {/* Optional Top Location Tag */}
      {city.locationLabel && (
        <div className="absolute top-4 right-12 z-10">
          <span className="bg-white/90 text-brand-purple text-[0.6rem] md:text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide shadow-sm backdrop-blur-sm">
            {city.locationLabel}
          </span>
        </div>
      )}

      {/* Bottom Center Name Badge */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <div className="bg-white px-6 py-1 md:py-2 rounded-lg shadow-xl transform transition-transform duration-300 group-hover:-translate-y-1">
          <span className="text-xl md:text-3xl font-black text-brand-purple uppercase tracking-widest">
            {city.name}
          </span>
        </div>
      </div>

    </div>
  );
};

export default CityCard;
