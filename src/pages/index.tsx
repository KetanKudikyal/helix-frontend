import React from 'react';

import Banner from '@/components/Banner';
import Layout from '@/components/layout/Layout';
import Main from '@/components/Main';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Main />
    </Layout>
  );
};

export default Home;
