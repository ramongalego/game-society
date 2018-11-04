import React, { Fragment } from 'react';
import './Welcome.css';
import Carousel from '../Carousel';
import BackgroundCopy from '../BackgroundCopy';
import { Element } from 'react-scroll';

const Welcome = () => (
  <Fragment>
    <section className='section-welcome-one'>
        <Carousel copyTop />
      </section>
    <Element name='what is game society?' className='element'>
      <BackgroundCopy 
        bgCopy='GameSociety' 
        overlayCopy='Welcome to GameSociety'
        overlayCta='Are you ready?' />
    </Element>
  </Fragment>
);

export default Welcome;
