import { Layout } from '../app/components/common/Layout';
import React, { useState } from 'react';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { IPlace } from 'types/plcae';
import Search from '../app/components/elements/Search/Search';
import Filters from '../app/components/elements/Filters/Filters';
import { API_URL } from './../app/constans';
import PopularPlaces from '../app/components/elements/Home/PopularPlaces/PopularPlaces';
import HeadingSection from '../app/components/elements/Home/HeadingSection/HeadingSection';
import Meta from '../app/utils/Meta';
import { sanityClient } from './../app/sanity';
import { queries } from '@/components/queries';

interface IHome {
  initialPlaces: IPlace[];
}
const Home: NextPage<IHome> = ({ initialPlaces }) => {
  const [places, setPlaces] = useState(initialPlaces);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout>
      <Meta
        title='Book your future trip'
        description='Best routes for travelling'
      />
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
  const result = await sanityClient.fetch(queries.getPlaces);

  return {
    props: {
      initialPlaces: result,
    },
  };
};

export default Home;
