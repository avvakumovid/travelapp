import React, { FC, useState } from 'react';
import styles from './Heading.module.scss';
import { TbHeartMinus, TbHeartPlus } from 'react-icons/tb';
//@ts-ignore
import { IFav } from '@/types/plcae';
import Link from 'next/link';
import { useFavorites } from '../../favorites/useFavorites';
import { useDocumentOperation } from '@sanity/react-hooks';

export const Favorites: FC<{ _id: string }> = ({ _id }) => {
  const { checkFavorite, toggleFavorite, isLoading } = useFavorites(_id);
  return (
    <div className={styles.bookMark}>
      <button onClick={toggleFavorite} disabled={isLoading}>
        <span className={styles.buttonWrapper}>
          {checkFavorite(_id) ? <TbHeartMinus /> : <TbHeartPlus />}
        </span>
      </button>
    </div>
  );
};
