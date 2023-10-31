'use client';

import { Flex } from 'vcc-ui';
import { CarCard } from './car-card';
import { DesktopPagination } from './desktop-pagination';
import { Car } from '@/model/car.model';
import { MobilePagination } from './mobile-pagination';
import { useEffect, useState } from 'react';

interface CarrouselProps {
  cars: Car[];
}

export function Carrousel({ cars }: CarrouselProps) {
  const [selected, setSelected] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setPageWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  function navigationClick(index: number) {
    let cardList = document.getElementById('card-list');
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    cardList?.scrollTo({ left: index * cardSize });

    setSelected(index);

    console.log(window.innerWidth);
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

      {pageWidth >= 1024 ? (
        <DesktopPagination
          onClickLeft={() => paginationClick('left')}
          onClickRight={() => paginationClick('right')}
        />
      ) : (
        <MobilePagination
          total={cars.length}
          selected={selected}
          onClickNavigation={navigationClick}
        />
      )}
    </Flex>
  );
}
