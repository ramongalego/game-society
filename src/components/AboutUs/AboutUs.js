import React from 'react';
import BackgroundCopy from '../BackgroundCopy';
import './AboutUs.css';
import { members } from '../../util/constants';

const AboutUs = () => (
  <section className='section-about'>
    <BackgroundCopy 
      bgCopy='About Us' 
      overlayCopy='About Us' />
    <ul className='members-list'>
      {members.map(member => (
        <li key={member.name} className='members-item'>
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
);

export default AboutUs;
