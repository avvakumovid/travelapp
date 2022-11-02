import React from 'react';
import styles from './BookTrip.module.scss';
import { AiFillCaretRight } from 'react-icons/ai';

export const BookTrip = () => {
  const bookTrip = () => {
    console.log('Ok');
  };

  return (
    <button className={styles.button} onClick={bookTrip}>
      <span className={styles.text}>Book a trip</span>
      <span className={styles.icon}>
        <AiFillCaretRight size={18} />
      </span>
    </button>
  );
};
