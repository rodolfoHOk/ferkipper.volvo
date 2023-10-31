import { Block, Click, Flex } from 'vcc-ui';

interface MobilePaginationProps {
  total: number;
  selected: number;
  onClickNavigation: (index: number) => void;
}

export function MobilePagination({
  total,
  selected,
  onClickNavigation,
}: MobilePaginationProps) {
  return (
    <Flex
      extend={{
        marginTop: 32,
        flexDirection: 'row',
        gap: 18,
        justifyContent: 'center',
      }}
    >
      {Array.from({ length: total }).map((_, index) => (
        <Click key={index} onClick={() => onClickNavigation(index)}>
          <Block
            extend={{
              width: 16,
              height: 16,
              backgroundColor: index === selected ? '#181818' : '#d5d5d5',
              borderRadius: 16,
            }}
          ></Block>
        </Click>
      ))}
    </Flex>
  );
}
