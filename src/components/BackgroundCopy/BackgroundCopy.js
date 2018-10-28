import React from 'react';
import PropTypes from 'prop-types';
import './BackgroundCopy.css';

const BackgroundCopy = ({ bgCopy, overlayCopy, overlayCta }) => (
  <div className='bg-copy-container'>
    <h1 className='bg-copy'>{bgCopy}</h1>
    <div className='extra-copy'>
      {overlayCopy && <h2 className='overlay-copy'>{overlayCopy}</h2>}
      {overlayCta && <h2 className='overlay-cta'>{overlayCta}</h2>}
    </div>
  </div>
);

BackgroundCopy.propTypes = {
  bgCopy: PropTypes.string.isRequired,
  overlayCopy: PropTypes.string,
  overlayCta: PropTypes.string
}

export default BackgroundCopy;