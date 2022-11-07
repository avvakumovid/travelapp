import React from 'react';
import { NextPageAuth } from 'types/auth';
import { Layout } from '../app/components/common/Layout';

const Profile: NextPageAuth = () => {
  return <Layout>Profile</Layout>;
};

Profile.isOnlyUser = true;

export default Profile;
