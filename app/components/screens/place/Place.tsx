import React, { FC } from 'react';
import { IPlace } from 'types/plcae';
import { Layout } from '@/common/Layout';
import { BookTrip } from './BookTrip/BookTrip';
import { Detail } from './Detail/Detail';
import { Heading } from './Heading/Heading';
import styles from './Place.module.scss';
import { Wrapper } from './Wrapper/Wrapper';
import Meta from 'utils/Meta';

interface IPlacePage {
  place: IPlace;
}
export const Place: FC<IPlacePage> = ({ place }) => {
  return (
    <Layout isMaxWidth={false}>
      <Meta
        title={`${place.location.city} - ${place.location.country}`}
        description={`Best routes for travelling - ${place.location.city}`}
        image={place.imagePath}
      />
      <Wrapper imagePath={place.imagePath}>
        <div className={styles.wrapper}>
          <Heading />
          <Detail place={place} />
          <BookTrip />
        </div>
      </Wrapper>
    </Layout>
  );
};
