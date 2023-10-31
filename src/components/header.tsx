import { Block, Flex, Logo } from 'vcc-ui';

export function Header() {
  return (
    <header>
      <Flex
        extend={{
          width: '100%',
          height: 40,
          justifyContent: 'center',
          paddingLeft: 32,
        }}
      >
        <Block extend={{ width: 150, height: 'auto' }}>
          <Logo />
        </Block>
      </Flex>
    </header>
  );
}
