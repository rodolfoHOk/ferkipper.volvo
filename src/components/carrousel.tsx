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
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setPageWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function paginationClick(dir: 'left' | 'right') {
    const cardList = document.getElementById('card-list');
    const card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollPosition = cardList?.scrollLeft ?? 0;
    if (dir === 'left') {
      cardList?.scrollTo({
        left: scrollPosition - cardSize,
        behavior: 'smooth',
      });
    } else {
      cardList?.scrollTo({
        left: scrollPosition + cardSize,
        behavior: 'smooth',
      });
    }
  }

  function navigationClick(index: number) {
    const cardList = document.getElementById('card-list');
    const card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + (pageWidth > 480 ? 24 : 16);
    cardList?.scrollTo({ left: index * cardSize, behavior: 'smooth' });
    setSelected(index);
  }

  return (
    <Flex
      extend={{
        maxWidth: 1280,
        margin: pageWidth >= 1280 ? '0 auto' : '0 24px',
        flexDirection: 'column',
      }}
    >
      <Flex
        id="card-list"
        extend={{
          flexDirection: 'row',
          gap: pageWidth > 480 ? 24 : 16,
          overflow: 'hidden',
        }}
      >
        {cars.map((car) => (
          <CarCard key={car.id} car={car} pageWidth={pageWidth} />
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
