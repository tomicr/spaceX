/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import rocket from '../style/asetss/rocket.jpg';

const Header = function Header() {
  return (
    <div>
      <header>
        <div className="header">
          <img className="logo" src={rocket} alt="logo" />
        </div>
      </header>
    </div>
  );
};
export default Header;
