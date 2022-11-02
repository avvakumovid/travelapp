import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import styles from './Search.module.scss';
import { IPlace } from 'types/plcae';
import { TypeSetState } from 'types/common';

interface ISearch {
  setPlaces: TypeSetState<IPlace[]>;
  initialPlaces: IPlace[];
  setIsLoading: TypeSetState<boolean>;
}

const Search: FC<ISearch> = ({ initialPlaces, setIsLoading, setPlaces }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setPlaces(
          initialPlaces.filter(
            place =>
              place.location.city.toLowerCase().includes(value.toLowerCase()) ||
              place.location.country.toLowerCase().includes(value.toLowerCase())
          )
        );
      }, 600);
    } else {
      setPlaces(initialPlaces);
    }
  };

  return (
    <div className={styles.search}>
      <span className='material-icons-outlined'>search</span>
      <input
        type='text'
        value={searchTerm}
        placeholder='Search place...'
        onChange={searchHandler}
      />
    </div>
  );
};

export default Search;
