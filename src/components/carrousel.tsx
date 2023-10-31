'use client';

import { Flex } from 'vcc-ui';
import { CarCard } from './car-card';
import { DesktopPagination } from './desktop-pagination';
import { Car } from '@/model/car.model';

interface CarrouselProps {
  cars: Car[];
}

export function Carrousel({ cars }: CarrouselProps) {
  function paginationClick(dir: 'left' | 'right') {
    let cardList = document.getElementById('card-list');
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollPosition = cardList?.scrollLeft ?? 0;
    if (dir === 'left') {
      cardList?.scrollTo({ left: scrollPosition - cardSize });
    } else {
      cardList?.scrollTo({ left: scrollPosition + cardSize });
    }
  }

  return (
    <Flex
      extend={{
        width: '100%',
        maxWidth: '80%',
        margin: '0 auto',
        flexDirection: 'column',
      }}
    >
      <Flex
        id="card-list"
        extend={{
          width: '100%',
          flexDirection: 'row',
          gap: 24,
          overflow: 'hidden',
        }}
      >
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </Flex>

      <DesktopPagination
        onClickLeft={() => paginationClick('left')}
        onClickRight={() => paginationClick('right')}
      />
    </Flex>
  );
}
