import React from 'react';
import { Favorites } from './Favorites';
import styles from './Heading.module.scss';
import { BsChevronLeft } from 'react-icons/bs';
import { BackButton } from './BackButton';

export const Heading = () => {
  return (
    <div className={styles.wrapper}>
      <BackButton />
      <Favorites />
    </div>
  );
};
