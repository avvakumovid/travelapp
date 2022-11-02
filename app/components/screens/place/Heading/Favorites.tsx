import React, { FC, useState } from 'react';
import styles from './Heading.module.scss';
import { BsBookmarkStar } from 'react-icons/bs';
import { IFav } from '@/types/plcae';
import Link from 'next/link';

const data: IFav[] = [
  { slug: 'Rome', name: 'Italy, Rome' },
  { slug: 'Rome', name: 'Italy, Rome' },
  { slug: 'Tokyo', name: 'Japan, Toky' },
  { slug: 'Tokyo', name: 'Japan, Toky' },
];

export const Favorites: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.bookMark}>
      <button
        onClick={() => {
          setIsOpen(prev => !prev);
        }}
      >
        <span className={styles.buttonWrapper}>
          <BsBookmarkStar color='#e8e8e8' size={20} />
        </span>
      </button>
      {isOpen && (
        <ul>
          {data.map(fav => {
            return (
              <li key={fav.slug}>
                <Link href={`place/${fav.slug}`}>
                  <a>{fav.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
