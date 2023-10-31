import { Flex, Spacer, Text } from 'vcc-ui';
import { getCars } from '@/services/get-cars.services';
import { Carrousel } from '@/components/carrousel';
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
        alignItems: 'center',
      }}
    >
      <Text variant="ootah" subStyle="emphasis">
        Todos os modelos Recharge
      </Text>
      <Spacer size={8} />

      <Carrousel cars={cars} />
    </Flex>
  );
}
