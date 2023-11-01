import { Flex, Link, Spacer, Text } from 'vcc-ui';
import { Car } from '@/model/car.model';
import Image from 'next/image';

export interface CarCardProps {
  car: Car;
  pageWidth: number;
}

export function CarCard({ car, pageWidth }: CarCardProps) {
  return (
    <Flex
      extend={{
        minWidth:
          pageWidth > 1024 && pageWidth < 1280
            ? 'calc(25% - 18px)'
            : pageWidth >= 1280
            ? '300'
            : pageWidth <= 1024 && pageWidth > 480
            ? 'calc(40% - 24px)'
            : 'calc(80% - 16px)',
        maxWidth: 300,
        flexDirection: 'column',
      }}
    >
      <Text extend={{ color: 'rgba(0, 0, 0, 0.64)' }} subStyle="emphasis">
        {car.bodyType.toUpperCase()}
      </Text>

      <Flex
        extend={{
          flexDirection: pageWidth < 1024 ? 'column' : 'row',
          height: '100%',
        }}
      >
        <Text variant="amundsen">{car.modelName}</Text>
        <Spacer size={0.5} />
        <Text subStyle="inline-link">{car.modelType}</Text>
      </Flex>
      <Spacer />

      <Image
        style={{
          display: 'flex',
          width: '100%',
          height: 'auto',
          maxWidth: pageWidth >= 1024 ? 300 : 400,
        }}
        width={800}
        height={600}
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
        <Link href={`/learn/${car.id}`} arrow="right">
          LEARN
        </Link>
        <Link href={`/shop/${car.id}`} arrow="right">
          SHOP
        </Link>
      </Flex>
    </Flex>
  );
}
