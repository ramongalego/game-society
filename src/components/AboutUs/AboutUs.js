import React, { Component } from 'react';
import BackgroundCopy from '../BackgroundCopy';
import './AboutUs.css';

class AboutUs extends Component {
  state = {
    members: [{
      name: 'Justin Ireland',
      position: 'Founder',
      bio: `Praesent in rhoncus ante. Ut in turpis eros. Duis erat enim, suscipit ac rutrum at, consectetur sed nulla. In et nibh porta, sodales urna ut, viverra eros. Proin sollicitudin sem eu augue ultrices, a venenatis nisi eleifend. Phasellus dignissim vulputate ultricies. Praesent in rhoncus ante. Ut in turpis eros. Duis erat enim, suscipit ac rutrum at, consectetur sed nulla. In et nibh porta, sodales urna ut, viverra eros. Proin sollicitudin sem eu augue ultrices, a venenatis nisi eleifend. Phasellus dignissim vulputate ultricies. Sed at nibh egestas, cursus quam eget, hendrerit urna.`,
      avatar: 'https://via.placeholder.com/160'
    }, {
      name: 'Jared Eden',
      position: 'Founder',
      bio: 'Praesent in rhoncus ante. Ut in turpis eros. Duis erat enim, suscipit ac rutrum at, consectetur sed nulla. In et nibh porta, sodales urna ut, viverra eros. Proin sollicitudin sem eu augue ultrices, a venenatis nisi eleifend. Phasellus dignissim vulputate ultricies. Praesent in rhoncus ante. Ut in turpis eros. Duis erat enim, suscipit ac rutrum at, consectetur sed nulla. In et nibh porta, sodales urna ut, viverra eros. Proin sollicitudin sem eu augue ultrices, a venenatis nisi eleifend. Phasellus dignissim vulputate ultricies. Sed at nibh egestas, cursus quam eget, hendrerit urna.',
      avatar: 'https://via.placeholder.com/160'
    }]
  }

  render() {
    const { members } = this.state;

    return (
      <section className='section-about'>
        <BackgroundCopy 
          bgCopy='About Us' 
          overlayCopy='About Us' />
        <ul className='members-list'>
          {members.map(member => (
            <li className='members-item'>
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
  }
};

export default AboutUs;
