import { Flex, IconButton } from 'vcc-ui';

interface DesktopPaginationProps {
  onClickLeft: () => void;
  onClickRight: () => void;
}

export function DesktopPagination({
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
      />
      <IconButton
        aria-label="Close overlay"
        iconName="navigation-chevronforward"
        variant="outline"
        onClick={onClickRight}
      />
    </Flex>
  );
}
