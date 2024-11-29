'use client';

import React, { useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

const FixedLogo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed -left-3 top-10 z-50 cursor-pointer select-none transition-transform ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className='gooey-text bg-dark pb-2 pt-1 font-antonio text-2xl leading-none text-white dark:bg-white dark:font-normal dark:text-dark'>
        <span className='relative pl-8'>
          mostofa&nbsp;&nbsp;&nbsp;
          <br />
        </span>
        <span className='relative pl-8'>nobi&nbsp;&nbsp;</span>
      </div>
    </div>
  );
};

export default FixedLogo;
