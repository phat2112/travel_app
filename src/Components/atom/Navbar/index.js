import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Input, Menu, Dropdown, Button } from 'antd';
import * as storageToken from '../../../Utils/StorageToken'
import { useHistory } from 'react-router-dom';

const { Search } = Input;

const Navbar = props => {
  const history = useHistory()

  const logoutHandler = () => {
    storageToken.eraseCookie('token')
    history.push('/login')
  }

    const menu = (
        <Menu>
          <Menu.Item>
            <span>
              Profile
            </span>
          </Menu.Item>
          <Menu.Item>
            <span onClick={() => logoutHandler()}>
              Sign out
            </span>
          </Menu.Item>
        </Menu>
      );
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <h1>Fast travel</h1>
            </div>
            <div className="navbar-search">
                <Search
                    placeholder="type any place"
                    onSearch={value => console.log(value)}
                />
            </div>
            <div className="navbar-user-profile">
            <Dropdown overlay={menu} placement="bottomCenter">
                <Button className='profile-button'>Hello Admin</Button>
            </Dropdown>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;