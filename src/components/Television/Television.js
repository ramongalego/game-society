import React from 'react';
import './Television.css';

const Television = ({ currentImage }) => (
  <div className='tv-outer'>
    <img 
      src={`/assets/tv-${currentImage}.png`} 
      alt={`tv-${currentImage}`} 
      className='tv-inner' />
  </div>
);

export default Television;
