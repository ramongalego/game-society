import React, { Component } from 'react'
import './Header.css';
import MenuItems from './MenuItems';
import { socialMedia } from '../../util/constants';

class Header extends Component {
  state = {
    selectedItem: 'HOME'
  }

  handleSelectItem = (item) => {
    this.setState({ selectedItem: item });
  }
  
  render() {
    const { selectedItem } = this.state;

    return (
    <div className='header-container'>
      <div className='main-logo' />
      <MenuItems 
        onSelectItem={this.handleSelectItem}
        selectedItem={selectedItem} />
      <div className='social-header'>
        {socialMedia.map(social => (
          <a 
            key={social.icon}
            href={social.link}>
            <i className={`fab fa-${social.icon}`} />
          </a>
        ))}
      </div>
      <a href='http://www.playgs.tv'><button className='primary-button'>PLAY NOW</button></a>
    </div>
    );
  }
};

export default Header;
