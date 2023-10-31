import { Flex, Spacer, Text } from 'vcc-ui';
import { getCars } from '@/services/get-cars.services';
import { CarCard } from '@/components/car-card';
import '../../public/css/styles.css';

export default async function Home() {
  const cars = await getCars();

  return (
    <Flex
      extend={{
        width: '100vw',
        height: '100vh',
        paddingTop: 64,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Text variant="ootah" subStyle="emphasis">
        Todos os modelos Recharge
      </Text>
      <Spacer size={8} />

      <Flex
        extend={{
          maxWidth: '80%',
          width: '100%',
          margin: '0 auto',
          flexDirection: 'row',
          gap: 24,
          overflow: 'hidden',
        }}
      >
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </Flex>
    </Flex>
  );
}
