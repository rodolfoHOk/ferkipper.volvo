'use client';

import { Flex } from 'vcc-ui';
import { CarCard } from './car-card';
import { DesktopPagination } from './desktop-pagination';
import { Car } from '@/model/car.model';
import { MobilePagination } from './mobile-pagination';
import { useEffect, useState } from 'react';
import { Filter } from './filter';

interface CarrouselProps {
  cars: Car[];
}

export function Carrousel({ cars }: CarrouselProps) {
  const [selected, setSelected] = useState(0);
  const [pageWidth, setPageWidth] = useState(window ? window.innerWidth : 0);
  const [filteredCars, setFilteredCars] = useState<Car[]>([...cars]);
  const [position, setPosition] = useState<
    'start' | 'end' | 'other' | 'start-end'
  >('start');

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
      if (scrollPosition <= cardSize) {
        setPosition('start');
      } else {
        setPosition('other');
      }
    } else {
      cardList?.scrollTo({
        left: scrollPosition + cardSize,
        behavior: 'smooth',
      });
      if (
        cardList &&
        scrollPosition + cardList?.clientWidth + cardSize >=
          cardList.scrollWidth
      ) {
        setPosition('end');
      } else {
        setPosition('other');
      }
    }
  }

  function navigationClick(index: number) {
    const cardList = document.getElementById('card-list');
    const card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + (pageWidth > 480 ? 24 : 16);
    cardList?.scrollTo({ left: index * cardSize, behavior: 'smooth' });
    setSelected(index);
  }

  function checkWidths() {
    setTimeout(() => {
      const cardList = document.getElementById('card-list');
      const cardListSize = cardList?.clientWidth ?? 0;
      const scrollSize = cardList?.scrollWidth ?? 0;
      if (cardListSize < scrollSize) {
        setPosition('start');
      } else {
        setPosition('start-end');
      }
    }, 100);
  }

  function changeFilteredCars(cars: Car[]) {
    setFilteredCars(cars);
    checkWidths();
  }

  function calculateMobilePaginationLength(): number {
    const cardList = document.getElementById('card-list');
    const card = cardList?.firstElementChild;
    const listSize = cardList?.clientWidth ?? 0;
    const cardSize = (card?.clientWidth ?? 0) + (pageWidth > 480 ? 24 : 16);
    const numberOfCardInScreen = Math.trunc(listSize / cardSize);

    return filteredCars.length - numberOfCardInScreen + 1;
  }

  useEffect(() => {
    const handleResize = () =>
      setPageWidth(window !== undefined ? window.innerWidth : 0);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMobileScroll = () => {
      setTimeout(() => {
        const cardList = document.getElementById('card-list');
        const card = cardList?.firstElementChild;
        const cardSize = (card?.clientWidth ?? 0) + (pageWidth > 480 ? 24 : 16);
        const scrollLeft = cardList?.scrollLeft ?? 0;
        const numberOfScrolledCards = Math.ceil(scrollLeft / cardSize);
        setSelected(numberOfScrolledCards);
      }, 1000);
    };
    window.addEventListener('touchmove', handleMobileScroll);

    return () => window.removeEventListener('touchmove', handleMobileScroll);
  }, [pageWidth]);

  useEffect(() => {
    checkWidths();
  }, []);

  return (
    <Flex
      extend={{
        maxWidth: 1280,
        margin: pageWidth >= 1280 ? '0 auto' : '0 24px',
        flexDirection: 'column',
        gap: 32,
      }}
    >
      <Filter cars={cars} changeFilteredCars={changeFilteredCars} />

      <Flex
        id="card-list"
        extend={{
          flexDirection: 'row',
          gap: pageWidth > 480 ? 24 : 16,
          overflow: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} pageWidth={pageWidth} />
        ))}
      </Flex>

      {filteredCars.length > 0 &&
        (pageWidth >= 1024 ? (
          <DesktopPagination
            position={position}
            onClickLeft={() => paginationClick('left')}
            onClickRight={() => paginationClick('right')}
          />
        ) : (
          <MobilePagination
            total={calculateMobilePaginationLength()}
            selected={selected}
            onClickNavigation={navigationClick}
          />
        ))}
    </Flex>
  );
}
