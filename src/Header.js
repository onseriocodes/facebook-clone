import React from 'react';
import './Header.css';
import {
  Search,
  Home,
  Flag,
  SubscriptionsOutlined,
  StorefrontOutlined,
  SupervisedUserCircle,
  Add,
  Forum,
  ExpandMore,
  NotificationsActive
} from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
          alt=''
        />
        <div className='header__input'>
          <Search />
          <input type='text' placeholder='Seach Facebook' />
        </div>
      </div>
      <div className='header__center'>
        <div className='header__option header__option--active'>
          <Home fontSize='large' />
        </div>
        <div className='header__option'>
          <Flag fontSize='large' />
        </div>
        <div className='header__option'>
          <SubscriptionsOutlined fontSize='large' />
        </div>
        <div className='header__option'>
          <StorefrontOutlined fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircle fontSize='large' />
        </div>
      </div>
      <div className='header__right'>
        <div className='header__info'>
          <Avatar />
          <h4>Tony Onserio</h4>
        </div>

        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
