import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Market } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Market />
    </div>
  );
};

export default Home;
