import React from 'react';
import './Secrets.css';
import { secretsContent } from '../../util/constants';

const Secrets = ({ currentContent, onCarouselClick }) => (
  <div className='secrets-container'>
    <div className='secrets-left'>
      <h3>WHY JOIN US?</h3>
      <h2>{secretsContent[currentContent].title}</h2>
      <p>{secretsContent[currentContent].tagline}</p>
      <img src={`/assets/${secretsContent[currentContent].image}`} alt={secretsContent[currentContent].subtitle} />
      <div className='dot-container'>
        {secretsContent.map((content, index) => (
          <div
            key={index}
            className={`dot ${currentContent === index ? 'dot-selected': ''}`}
            onClick={() => onCarouselClick(index)} 
          />
        ))}
      </div>
    </div>
    <div className='secrets-right'>
      <h3>HOW IT WORKS | <span>WHAT IT IS</span></h3>
      <h2>{secretsContent[currentContent].rightContent[0]}</h2>
      <p>{secretsContent[currentContent].rightContent[1]}</p>
      <button>READ MORE</button>
    </div>
  </div>
);

export default Secrets;