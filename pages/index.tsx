import { Layout } from '../app/components/common/Layout';
import React, { useState } from 'react';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { IPlace } from 'types/plcae';
import Search from '../app/components/elements/Search/Search';
import Filters from '../app/components/elements/Filters/Filters';
import { API_URL } from './../app/constans';
import PopularPlaces from '../app/components/elements/Home/PopularPlaces/PopularPlaces';
import HeadingSection from '../app/components/elements/Home/HeadingSection/HeadingSection';

interface IHome {
  initialPlaces: IPlace[];
}
const Home: NextPage<IHome> = ({ initialPlaces }) => {
  const [places, setPlaces] = useState(initialPlaces);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout>
      <HeadingSection />
      <div style={{ width: '80%', margin: '0 auto', paddingBottom: '100px' }}>
        <Search
          setPlaces={setPlaces}
          initialPlaces={initialPlaces}
          setIsLoading={setIsLoading}
        />
        <Filters setPlaces={setPlaces} initialPlaces={initialPlaces} />
        <PopularPlaces
          places={places}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch(`${API_URL}/places`);
  const initialPlaces: IPlace[] = await result.json();

  return {
    props: {
      initialPlaces,
    },
  };
};

export default Home;
