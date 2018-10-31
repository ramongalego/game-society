import React from 'react';
import BackgroundCopy from '../BackgroundCopy';
import './NewsLetter.css';

const NewsLetter = () => (
  <div className='newsletter-container'>
    <BackgroundCopy bgCopy='NewsLetter' copyColour='#fff' />
    <div className='newsletter-content'>
      <div className='newsletter-copy'>
        <h1>INTERESTED IN WHAT WE'RE UP TO?</h1>
        <p>Sign up now for our newsletter</p>
      </div>
      <form>
        <input 
          type='text'
          placeholder='ENTER YOUR EMAIL ADDRESS' />
        <button>SUBMIT <i className="fas fa-envelope"></i></button>
      </form>
    </div>
  </div>
);

export default NewsLetter;