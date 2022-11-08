import React, { FC } from 'react';
import Link from 'next/link';
import { IPlace } from 'types/plcae';
import styles from './PopularPlaces.module.scss';
import { urlFor } from './../../../../sanity';
import { TbHeartMinus } from 'react-icons/tb';

export const PlaceItem: FC<{
  place: IPlace;
  removeHandler?: (e: MouseEvent) => void;
}> = ({ place, removeHandler }) => {
  return (
    //@ts-ignore
    <Link key={place._id} href={`place/${place.slug.current}`}>
      <a
        className={styles.item}
        style={{
          backgroundImage: `url(${urlFor(place.imagePath).url()})`,
        }}
      >
        <span className={styles.heading}>
          {place.location.city}, {place.location.country}
        </span>
        {removeHandler && (
          <button onClick={removeHandler}>
            <TbHeartMinus color='#e8e8e8' size={20} />
            {/* <span className='material-icons-outlined'>delete</span> */}
          </button>
        )}
      </a>
    </Link>
  );
};
