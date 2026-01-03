import React from 'react';
import CityCard from './CityCard';
import { CityEvent } from './types';

const CITIES: CityEvent[] = [
  { id: 1, name: "Jaipur", image: "/jaipur.jpg", status: 'active' },
  { id: 2, name: "Nagpur", image: "/nagpur.avif", status: 'active' },
  { id: 3, name: "Ahmedabad", image: "/ahmedabad.jpeg", status: 'coming-soon' },
  { id: 4, name: "Pune", image: "/pune.webp", status: 'coming-soon' },
  { id: 5, name: "Raipur", image: "/Raipur.png", offsetY: "translate-y-4", status: 'coming-soon' },
  { id: 6, name: "Indore", image: "/indore.webp", status: 'coming-soon' },
];

const GridSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {CITIES.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
};

export default GridSection;
