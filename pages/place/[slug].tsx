import React from 'react';
import { API_URL } from './../../app/constans';
import { IPlace } from './../../app/types/plcae';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Place } from '../../app/components/screens/place/Place';

interface IPlacePage {
  place: IPlace;
}

const PlacePage: NextPage<IPlacePage> = ({ place }) => {
  return <Place place={place} />;
};

export default Place;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/places`);
  const places = await res.json();

  const paths = places.map((place: IPlace) => ({
    params: { slug: place.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${API_URL}/places/${params.slug}`);
  const place = await res.json();
  return {
    props: {
      place,
    },
  };
};
