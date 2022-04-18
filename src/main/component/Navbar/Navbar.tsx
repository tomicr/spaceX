/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Switch } from 'antd';
import rocket from '../../style/asetss/logo-space.png';
import { useTheme } from '../../contexts/ThemeContext';

const Header = function Header() {
  const { toggleDarkMode } = useTheme();

  return (
    <div>
      <header>
        <div className="header">
          <img
            className="logo"
            height="40px"
            width="40px"
            src={rocket}
            alt="logo"
          />
          <Switch
            defaultChecked
            data-testid="switch"
            onClick={toggleDarkMode}
          />
        </div>
      </header>
    </div>
  );
};
export default Header;
