import React, { FC } from 'react';
import { Favorites } from './Favorites';
import styles from './Heading.module.scss';
import { BsChevronLeft } from 'react-icons/bs';
import { BackButton } from './BackButton';
import { useSession } from 'next-auth/react';

export const Heading: FC<{ _id: string }> = ({ _id }) => {
  const { data } = useSession();
  return (
    <div className={styles.wrapper}>
      <BackButton />
      {data && <Favorites _id={_id} />}
    </div>
  );
};
