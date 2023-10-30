import { Flex, Link, Spacer, Text } from 'vcc-ui';
import { Car } from '@/model/car.model';
import Image from 'next/image';

export interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Flex extend={{ width: 300 }}>
      <Text extend={{ color: 'rgba(0, 0, 0, 0.64)' }} subStyle="emphasis">
        {car.bodyType.toUpperCase()}
      </Text>

      <Flex extend={{ flexDirection: 'row' }}>
        <Text variant="amundsen">{car.modelName}</Text>
        <Spacer size={0.5} />
        <Text subStyle="inline-link">{car.modelType}</Text>
      </Flex>
      <Spacer />

      <Image
        width={300}
        height={225}
        src={car.imageUrl}
        alt={`image: ${car.modelName}`}
      />
      <Spacer size={2} />

      <Flex
        extend={{
          flexDirection: 'row',
          gap: 24,
          justifyContent: 'center',
        }}
      >
        <Link href="" arrow="right">
          LEARN
        </Link>
        <Link href="" arrow="right">
          SHOP
        </Link>
      </Flex>
    </Flex>
  );
}
