import React from 'react';
import PropTypes from 'prop-types';
import './Phone.css';

const Phone = ({ currentImage }) => (
  <div className='phone-outer'>
    <img 
      src={`/assets/mobile-${currentImage}.png`} 
      alt={`mobile-${currentImage}`} 
      className='phone-inner' />
  </div>
);

Phone.propTypes = {
  currentImage: PropTypes.string.isRequired
}

export default Phone;
