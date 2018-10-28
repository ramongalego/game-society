import React, { Fragment }  from 'react';
import './Welcome.css';
import Carousel from '../Carousel';
import BackgroundCopy from '../BackgroundCopy';

const firstCopy = 'Mauris convallis mi ipsum, facilisis varius risus ultrices eu. Praesent magna felis, viverra mollis imperdiet non, fringilla nec dolor. Cras eget pulvinar metus. Nam rutrum nisl id imperdiet placerat.';

const Welcome = () => (
  <Fragment>
    <section className='section-one'>
      <Carousel copyTop={firstCopy} />
    </section>
    <BackgroundCopy 
      bgCopy='GameSociety' 
      overlayCopy='Welcome to GameSociety'
      overlayCta='Are you ready?' />
  </Fragment>
);

export default Welcome;
