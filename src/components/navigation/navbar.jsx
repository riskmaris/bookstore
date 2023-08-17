import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import avatar from '../images/users/avatar.svg';

const Navigation = () => (
  <div className="nav-container">
    <div className="app-logo">
      <h2>
        <NavLink className="logo-title" to="/">
          BookStore CMS
        </NavLink>
      </h2>
    </div>
    <ul className="nav-link">
      <li>
        <NavLink className="list" to="books">
          Books
        </NavLink>
      </li>
      <li>
        <NavLink className="list" to="categories">
          CATEGORIES
        </NavLink>
      </li>
    </ul>
    <div className="user-logo">
      <NavLink to="#">
        <img className="login-logo" src={avatar} alt="user" />
      </NavLink>
    </div>
  </div>
);

export default Navigation;
