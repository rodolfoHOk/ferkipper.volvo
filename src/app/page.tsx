import { getCars } from '@/services/get-cars.services';
import { CarCard } from '@/components/car-card';
import '../../public/css/styles.css';
import { Flex } from 'vcc-ui';

export default async function Home() {
  const cars = await getCars();

  return (
    <Flex extend={{ margin: 32, flexDirection: 'row', gap: 24 }}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </Flex>
  );
}
