import React, { Component } from 'react'
import './Header.css';
import MenuItems from './MenuItems';
import { socialMedia } from '../../util/constants';

class MobileMenu extends Component {
  render() {
    const { onSelectItem, selectedItem, onToggleMobileMenu } = this.props;

    return (
      <div 
        className='mobile-menu-container'
      >
        <section className='mobile-menu-top'>
          <h1 onClick={onToggleMobileMenu}>
            <i className="fas fa-chevron-right"></i>
          </h1>
        </section>
        <section className='mobile-menu-middle'>
          <MenuItems 
            onSelectItem={onSelectItem}
            selectedItem={selectedItem} 
          />
        </section>
        <section className='mobile-menu-bottom'>
          <div className='social-header'>
            {socialMedia.map((social, index) => (
              <a 
                key={index}
                href={social.link}>
                <i className={`fab fa-${social.icon}`} />
              </a>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default MobileMenu;