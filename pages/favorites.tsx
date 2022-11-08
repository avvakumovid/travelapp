import { PlaceItem } from '@/components/elements/Home/PopularPlaces/PlaceItem';
import React, { FC } from 'react';
import { Layout } from '../app/components/common/Layout';
import { IPlace } from 'types/plcae';
import Meta from './../app/utils/Meta';
import { sanityClient } from './../app/sanity';
import { queries } from '@/components/queries';
import { GetStaticProps } from 'next';
import Favorites from './../app/components/screens/favorites/Favorites';
import { NextPageAuth } from 'types/auth';


const FavoritesPage: NextPageAuth<{ places: IPlace[] }> = ({ places }) => {
  return <Favorites places={places} />;
};


export const getStaticProps: GetStaticProps = async () => {
  const result = await sanityClient.fetch(queries.getPlaces);

  return {
    props: {
      places: result,
    },
  };
};

FavoritesPage.isOnlyUser = true;

export default FavoritesPage;
