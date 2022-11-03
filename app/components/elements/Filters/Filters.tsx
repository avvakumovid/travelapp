import styles from './Filters.module.scss';
import cn from 'classnames';
import React, { FC, useState } from 'react';
import { TypeSetState } from 'types/common';
import { IPlace } from 'types/plcae';
import uniqBy from 'lodash/uniqBy';

const countries = [
  {
    location: 'France',
  },
  {
    location: 'USA',
  },
  {
    location: 'Sweden',
  },
  {
    location: 'Brazil',
  },
  {
    location: 'Italy',
  },
  { location: 'Japan' },
];

interface IFilters {
  setPlaces: TypeSetState<IPlace[]>;
  initialPlaces: IPlace[];
}

const Filters: FC<IFilters> = ({ setPlaces, initialPlaces }) => {
  const [filter, setFilter] = useState('');

  const handleFilter = (country: string) => {
    if (filter === country) {
      setFilter('');
      setPlaces(initialPlaces);
    } else {
      setFilter(country);
      setPlaces(
        initialPlaces.filter(place => {
          return place.location.country.toLowerCase() === country.toLowerCase();
        })
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      {uniqBy(initialPlaces, 'location.country').map(place => {
        const country = place.location.country;
        return (
          <button
            onClick={() => {
              handleFilter(country);
            }}
            key={country}
            className={cn({
              [styles.active]: country == filter,
            })}
          >
            {country}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
