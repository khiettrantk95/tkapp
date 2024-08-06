import React from 'react';
import { Link } from 'react-router-dom';

import UserBar from './UserBar';

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/applications">Applications</Link></li>
          <li className='userbar'><UserBar /></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
