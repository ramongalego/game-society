import React, { Component } from 'react'
import './Header.css';
import MenuItems from './MenuItems';

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
      <button className='primary-button'>PLAY NOW</button>
    </div>
    );
  }
};

export default Header;
