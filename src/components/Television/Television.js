import React from 'react';
import PropTypes from 'prop-types';
import './Television.css';

const Television = ({ currentImage }) => (
  <div className='tv-outer'>
    <img 
      src={`/assets/tv-${currentImage}.png`} 
      alt={`tv-${currentImage}`} 
      className='tv-inner' />
  </div>
);

Television.propTypes = {
  currentImage: PropTypes.string.isRequired
}

export default Television;
