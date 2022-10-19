import { Layout } from '../app/components/common/Layout';
import React from 'react';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { IPlace } from './../app/types/plcae';

interface IHome {
  places: IPlace[];
}
const Home: NextPage<IHome> = ({ places }) => {
  return <Layout>{places.map(place => place.location)}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch('http://localhost:3000/api/places');
  const places: IPlace[] = await result.json();
  return {
    props: {
      places,
    },
  };
};

export default Home;
