import React, { FC, useState } from 'react';
import styles from './Heading.module.scss';
import { BsChevronLeft } from 'react-icons/bs';
import Link from 'next/link';

export const BackButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.bookMark}>
      <Link href={'/'}>
        <span className={styles.buttonWrapper}>
          <BsChevronLeft color='#e8e8e8' size={20} />
        </span>
      </Link>
    </div>
  );
};
