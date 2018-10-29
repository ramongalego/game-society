import React, { Fragment }  from 'react';
import './Welcome.css';
import Carousel from '../Carousel';
import BackgroundCopy from '../BackgroundCopy';

const Welcome = () => (
  <Fragment>
    <section className='section-welcome-one'>
      <Carousel copyTop />
    </section>
    <BackgroundCopy 
      bgCopy='GameSociety' 
      overlayCopy='Welcome to GameSociety'
      overlayCta='Are you ready?' />
  </Fragment>
);

export default Welcome;
