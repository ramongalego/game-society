import React, { Component, Fragment } from 'react'
import './Header.css';
import { menuItems } from '../../util/constants';
import { Link, Events, animateScroll as scroller } from 'react-scroll';

class MenuItems extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    const { onSelectItem, selectedItem } = this.props;

    return (
      <Fragment>
        <ul className='menu-list'>
          {menuItems.map(item => (
            <li
              className={`menu-items ${selectedItem === item ? 'selected-menu' : ''}`}
              key={item}>
              <Link 
                onClick={() => onSelectItem(item)} 
                activeClass='active' 
                className={item} 
                to={item} 
                spy={true} 
                smooth={true} 
                duration={500}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  } 
};

export default MenuItems;
