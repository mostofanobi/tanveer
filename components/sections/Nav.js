import React from 'react';

import ThemeSwitch from '../ThemeSwitch';
import Github from '../ui/socials/Github';
import Menu from './Menu';

const Nav = () => {
  return (
    <nav className='pointer-events-none fixed bottom-0 left-0 right-0 top-auto z-50 mb-6 flex items-center justify-between px-10'>
      <ThemeSwitch />
      <Menu />
    </nav>
  );
};

export default Nav;
