import React, { Component } from 'react'
import './Header.css';
import MenuItems from './MenuItems';
import { socialMedia } from '../../util/constants';
import MobileMenu from './MobileMenu';

class Header extends Component {
  state = {
    selectedItem: 'HOME',
    isMenuVisible: false
  }

  handleSelectItem = (item) => {
    this.setState({ selectedItem: item });
  }

  handleToggleMobileMenu = () => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  }
  
  render() {
    const { selectedItem, isMenuVisible } = this.state;

    return (
      <div className='header-container'>
        <div className='main-logo' />
        <MenuItems 
          onSelectItem={this.handleSelectItem}
          selectedItem={selectedItem} />
        <div className='social-header'>
          {socialMedia.map((social, index) => (
            <a 
              key={index}
              href={social.link}>
              <i className={`fab fa-${social.icon}`} />
            </a>
          ))}
        </div>
        <a className='play-button' href='http://www.playgs.tv'><button className='primary-button'>PLAY NOW</button></a>
        <div
          className='burger-menu'
          onClick={this.handleToggleMobileMenu}
        >
          <h1><i className="fas fa-bars"></i></h1>
        </div>
        <MobileMenu 
          onSelectItem={this.handleSelectItem}
          selectedItem={selectedItem}
          onToggleMobileMenu={this.handleToggleMobileMenu}
          isMenuVisible={isMenuVisible}
        />
      </div>
    );
  }
};

export default Header;
