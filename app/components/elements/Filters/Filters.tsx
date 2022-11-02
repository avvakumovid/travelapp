import styles from './Filters.module.scss';
import cn from 'classnames';
import React, { FC, useState } from 'react';
import { TypeSetState } from 'types/common';
import { IPlace } from 'types/plcae';

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
      {countries.map(country => {
        return (
          <button
            onClick={() => {
              handleFilter(country.location);
            }}
            key={country.location}
            className={cn({ [styles.active]: country.location == filter })}
          >
            {country.location}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
