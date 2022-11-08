import React, { FC } from 'react';
import styles from './PopularPlaces.module.scss';
import mapImg from 'assets/images/map.png';
import { IPlace } from 'types/plcae';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { TypeSetState } from 'types/common';
import { urlFor } from './../../../../sanity';
import { PlaceItem } from './PlaceItem';
interface IPopularPlaces {
  places: IPlace[];
  isLoading: boolean;
  setIsLoading: TypeSetState<boolean>;
}

const PopularPlaces: FC<IPopularPlaces> = ({ places, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Popular Places</h2>
      {isLoading ? (
        <div
          style={{
            marginTop: '-2rem',
          }}
        >
          <Skeleton
            count={1}
            height={200}
            borderRadius='20px'
            baseColor='#1b1b1b'
            highlightColor='#2c2c2e'
          />
        </div>
      ) : places.length ? (
        places.map(place => {
          return <PlaceItem key={place._id} place={place} />;
        })
      ) : (
        <span
          style={{
            marginTop: '-2rem',
            opacity: '.6',
            fontStyle: 'italic',
          }}
        >
          Not Found
        </span>
      )}
    </div>
  );
};

export default PopularPlaces;
