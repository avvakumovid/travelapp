import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../app/components/common/Layout';

const Place = () => {
  const { query } = useRouter();
  return <Layout>Place {query.slug}</Layout>;
};

export default Place;
