import React from 'react';

import Banner from '@/components/Banner';
import Layout from '@/components/layout/Layout';
import Main from '@/components/Main';
import Seo from '@/components/Seo';

const Home = () => {
  return (
    <Layout>
      <Seo />
      <Banner />
      <Main />
    </Layout>
  );
};

export default Home;
