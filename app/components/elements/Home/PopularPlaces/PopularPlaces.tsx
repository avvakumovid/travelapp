import React, { FC } from 'react';
import styles from './PopularPlaces.module.scss';
import mapImg from '../../../../../assets/images/map.png';
import { IPlace } from './../../../../types/plcae';
import Link from 'next/link';

interface IPopularPlaces {
  places: IPlace[];
}

const PopularPlaces: FC<IPopularPlaces> = ({ places }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Popular Places</h2>
      {places.map(place => {
        return (
          <Link key={place.slug} href={`place/${place.slug}`}>
            <a
              className={styles.item}
              style={{ backgroundImage: `url(${place.imagePath})` }}
            >
              <div className={styles.heading}>
                {place.location.city}, {place.location.country}
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default PopularPlaces;
