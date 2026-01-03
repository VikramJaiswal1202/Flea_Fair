export interface CityEvent {
  id: number;
  name: string;
  image: string;
  status: 'active' | 'coming-soon';
  offsetY?: string;
  date?: string;
  locationLabel?: string;
}
