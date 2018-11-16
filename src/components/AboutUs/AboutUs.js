import React from 'react';
import BackgroundCopy from '../BackgroundCopy';
import './AboutUs.css';
import { members } from '../../util/constants';
import { Element } from 'react-scroll';

const AboutUs = () => (
  <Element name='about' className='element'>
    <section className='section-about'>
      <BackgroundCopy 
        bgCopy='About Us' 
        overlayCopy='About Us' />
      <ul className='members-list'>
        {members.map((member, index) => (
          <li 
            key={index} 
            className='members-item'
          >
            <div>
              <h3>{member.name}</h3>
              <p className='member-position'>{member.position}</p>
              <p className='member-bio'>{member.bio}</p>
            </div>
            <img src={member.avatar} alt={member.name} />
          </li>
        ))}
      </ul>
    </section>
  </Element>
);

export default AboutUs;
