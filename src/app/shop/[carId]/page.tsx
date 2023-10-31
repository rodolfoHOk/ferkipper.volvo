import Image from 'next/image';
import { getCarById } from '@/services/get-cars.services';
import { Block, Button, Flex, Row, Spacer, Text, View } from 'vcc-ui';

interface QueryParams {
  carId: string;
}

export default async function Shop({ params }: { params: QueryParams }) {
  const car = await getCarById(params.carId);

  return (
    <View
      extend={{
        padding: '32px 16px',
        display: 'flex',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
        background: '#f2f2f2',
      }}
    >
      <Text variant="ootah" subStyle="emphasis">
        Comprar o {car.modelName}
      </Text>

      <Image
        style={{ width: '100%', height: 'auto', maxWidth: 800 }}
        width={800}
        height={600}
        src={car.imageUrl}
        alt={car.id}
      />

      <Flex
        extend={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 32,
        }}
      >
        <Flex
          extend={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <Text variant="yang">{car.bodyType.toUpperCase()}</Text>
          <Text variant="ootah">{car.modelType}</Text>
        </Flex>

        <Block extend={{ width: 200 }}>
          <Button variant="outline">Comprar</Button>
        </Block>
      </Flex>
    </View>
  );
}
