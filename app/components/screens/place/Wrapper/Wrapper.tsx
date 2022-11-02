import React, { FC } from 'react';
import styles from './Wrapper.module.scss';

export const Wrapper: FC<{ imagePath: string; children: any }> = ({
  imagePath,
  children,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      {children}
    </div>
  );
};
