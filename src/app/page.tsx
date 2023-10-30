import { Block, Button } from 'vcc-ui';
import '../../public/css/styles.css';

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Block extend={{ padding: 20 }}>
        <Button>Click me!</Button>
      </Block>
    </main>
  );
}
