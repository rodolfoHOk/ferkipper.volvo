import { Flex, IconButton } from 'vcc-ui';

interface DesktopPaginationProps {
  position: 'start' | 'end' | 'other' | 'start-end';
  onClickLeft: () => void;
  onClickRight: () => void;
}

export function DesktopPagination({
  position,
  onClickLeft,
  onClickRight,
}: DesktopPaginationProps) {
  return (
    <Flex
      extend={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <IconButton
        aria-label="Close overlay"
        iconName="navigation-chevronback"
        variant="outline"
        onClick={onClickLeft}
        disabled={position === 'start' || position === 'start-end'}
      />
      <IconButton
        aria-label="Close overlay"
        iconName="navigation-chevronforward"
        variant="outline"
        onClick={onClickRight}
        disabled={position === 'end' || position === 'start-end'}
      />
    </Flex>
  );
}
