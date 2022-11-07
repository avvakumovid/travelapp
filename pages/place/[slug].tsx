import React from 'react';
import { API_URL } from './../../app/constans';
import { IPlace } from './../../app/types/plcae';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Place } from '../../app/components/screens/place/Place';
import { sanityClient } from './../../app/sanity';
import { queries } from '@/components/queries';

interface IPlacePage {
  place: IPlace;
}

const PlacePage: NextPage<IPlacePage> = ({ place }) => {
  return <Place place={place} />;
};

export default Place;

export const getStaticPaths: GetStaticPaths = async () => {
  const places = await sanityClient.fetch(`${queries.getPlaces}{slug}`);

  const paths = places.map((place: any) => ({
    params: { slug: place.slug.current },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const place = await sanityClient.fetch(
    queries.getPlace(String(params?.slug))
  );
  return {
    props: {
      place,
    },
  };
};
