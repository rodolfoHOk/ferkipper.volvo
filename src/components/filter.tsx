'use client';
import { useEffect, useState } from 'react';
import { Flex, SelectInput } from 'vcc-ui';
import { Car } from '@/model/car.model';

interface FilterProps {
  cars: Car[];
  changeFilteredCars: (filteredCars: Car[]) => void;
}

export function Filter({ cars, changeFilteredCars }: FilterProps) {
  const [selected, setSelected] = useState('all');

  useEffect(() => {
    let filteredCars: Car[];
    if (selected === 'all') {
      filteredCars = cars;
    } else {
      filteredCars = cars.filter((cars) => cars.bodyType === selected);
    }
    changeFilteredCars(filteredCars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cars, selected]);

  return (
    <Flex extend={{ minWidth: 200, maxWidth: 200, alignSelf: 'center' }}>
      <SelectInput
        label={'Selecione o tipo...'}
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="all">Todos</option>
        <option value="suv">SUV</option>
        <option value="estate">Estate</option>
        <option value="sedan">Sedan</option>
      </SelectInput>
    </Flex>
  );
}
