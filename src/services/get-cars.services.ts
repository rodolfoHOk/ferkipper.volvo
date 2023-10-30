import { Car } from '@/model/car.model';

export async function getCars(): Promise<Car[]> {
  const API_URL = 'http://localhost:3000/api';
  const response = await fetch(`${API_URL}/cars`, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}
