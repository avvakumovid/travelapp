import styles from './Filters.module.scss';
import cn from 'classnames';
import React, { FC, useState } from 'react';

const cities = [
  {
    location: 'Paris',
  },
  {
    location: 'Bora Bora',
  },
  {
    location: 'Maui',
  },
  {
    location: 'Brazil',
  },
  {
    location: 'Norway',
  },
];

const Filters: FC = () => {
  const [filter, setFilter] = useState('');

  return (
    <div className={styles.wrapper}>
      {cities.map(city => {
        return (
          <button
            onClick={() => {
              setFilter(city.location);
            }}
            key={city.location}
            className={cn({ [styles.active]: city.location == filter })}
          >
            {city.location}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
