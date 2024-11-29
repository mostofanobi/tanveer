'use client';

import { useState } from 'react';

import classNames from 'classnames';

import Button from '../ui/Button';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      onClick={!isMenuOpen && openMenu}
      onMouseLeave={isMenuOpen && closeMenu}
      className={classNames({
        'h-96 w-60': isMenuOpen,
        'flex h-10 w-24 cursor-pointer duration-300 hover:ring-4 hover:ring-white/25 active:scale-95':
          !isMenuOpen,
        'group pointer-events-auto absolute right-0 top-0 rounded-3xl bg-white text-dark-blue transition-all duration-700': true
      })}
    >
      {/* <h1
          className={classNames({
            'pointer-events-auto opacity-100 transition-opacity delay-700':
              isMenuOpen,
            'pointer-events-none opacity-0': !isMenuOpen
          })}
        >
          Hello
        </h1> */}
      {!isMenuOpen && (
        <div className='flex w-full items-center justify-center'>
          <div className='relative inline-block overflow-hidden text-right text-xs font-medium leading-none tracking-wide'>
            <div className='relative transition-transform group-hover:-translate-y-full'>
              Menu
            </div>
            <div className='absolute w-full transition-transform group-hover:-translate-y-full'>
              Menu
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
