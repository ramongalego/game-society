import React, { Fragment }  from 'react';
import './Welcome.css';
import Carousel from '../Carousel';

const Welcome = () => (
  <Fragment>
    <section className='section-one'>
      <Carousel />
    </section>
  </Fragment>
);

export default Welcome;
