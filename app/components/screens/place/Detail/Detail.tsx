import React, { FC } from 'react';
import styles from './Detail.module.scss';
import { IPlace } from '@/types/plcae';
import { FaMapMarkerAlt, FaStar, FaCalendar } from 'react-icons/fa';
import { Map } from './Map';
import { PortableText } from 'sanity';

export const Detail: FC<{ place: IPlace }> = ({ place }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <FaMapMarkerAlt color='#e8e8e8' size={20} />
        <h1>
          {place.location.city}, {place.location.country}
        </h1>
      </div>

      <p>{<PortableText value={place.description} />}</p>

      <div className={styles.additional}>
        <div className={styles.raitng}>
          <FaStar color='#FDAE32' size={18} className={styles.star} />
          <span>{place.raiting}/10</span>
        </div>
        <div className={styles.duration}>
          <FaCalendar color='#565658' size={18} className={styles.calendar} />
          <span>{place.duration} days</span>
        </div>
      </div>
      <Map location={place.location} />
    </div>
  );
};
