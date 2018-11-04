import React from 'react';
import './Games.css';
import Carousel from '../Carousel';
import BackgroundCopy from '../BackgroundCopy';
import { Element } from 'react-scroll';

const Games = () => (
  <Element name='games' className='element'>
    <BackgroundCopy bgCopy='Our Games' />
    <section className='section-game-one'>
      <Carousel copyBottom />
    </section>
  </Element>
);

export default Games;