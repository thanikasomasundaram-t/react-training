import React from 'react';
import Destinations from '../components/Destinations';
import Explore from '../components/Explore';
import Header from '../components/Header';
import Contact from '../components/Contact';

const Home = () => {
  return(
    <>
      <Header/>
      <Explore />
      <Destinations />
      <Contact />
    </>
  );
}

export default Home;