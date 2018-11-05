import React from 'react';
import './Footer.css';
import MenuItems from '..//Header/MenuItems';
import { socialMedia } from '../../util/constants';

const Footer = () => (
  <footer className='footer-container'>
    <section className='footer-top'>
      <div className='main-logo' />
      <div className='footer-content'>
        <MenuItems />
        <p>Aliquam condimentum, urna vitae semper finibus, dolor nisl fringilla eros, vel hendrerit metus orci in urna.</p>
        <div className='social-footer'>
          {socialMedia.map(social => (
            <a 
              key={social.icon}
              href={social.link}>
              <i className={`fab fa-${social.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
    
    <section className='footer-bottom'>
      <p>&copy; Copyright 2018</p>
      <p>All Rights Reserved</p>
    </section>
  </footer>
);

export default Footer;
