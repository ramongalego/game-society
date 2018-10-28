import React from 'react';
import './Phone.css';

const Phone = ({ currentImage }) => (
  <div className='phone-outer'>
    <img 
      src={`/assets/mobile-${currentImage}.png`} 
      alt={`mobile-${currentImage}`} 
      className='phone-inner' />
  </div>
);

export default Phone;
