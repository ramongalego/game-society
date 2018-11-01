import React, { Fragment } from 'react'
import './Header.css';
import { menuItems } from '../../util/constants';

const MenuItems = ({ selectedItem, onSelectItem }) => (
  <Fragment>
    <ul>
      {menuItems.map(item => (
        <li 
          onClick={() => onSelectItem(item)}
          className={selectedItem === item ? 'selected-menu' : ''}
          key={item}>
          {item}
        </li>
      ))}
    </ul>
  </Fragment>
);

export default MenuItems;