'use client';

import { ArrowUp01Icon } from 'hugeicons-react';

import { useCursor } from '@/providers/CursorProvider';

import Magnetic from './Magnetic';
import Github from './ui/socials/Github';
import Gmail from './ui/socials/Gmail';
import Linkedin from './ui/socials/Linkedin';
import Whatsapp from './ui/socials/Whatsapp';

const SocialLinks = () => {
  const { updateCursor, resetCursor } = useCursor();
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='pointer-events-none sticky bottom-0 left-0 z-[999] w-full'>
      <div className='mx-auto flex max-w-screen-2xl items-center justify-between px-10 pb-8'>
        <div
          onMouseEnter={() =>
            updateCursor({
              size: 40
            })
          }
          onMouseLeave={resetCursor}
          className='pointer-events-auto relative flex w-fit space-x-2 sm:-space-x-7 sm:hover:space-x-3'
        >
          <Github />
          <Linkedin />
          <Whatsapp />
          <Gmail />
        </div>

        <div className='pointer-events-auto'>
          <Magnetic>
            <button
              onClick={handleScrollTop}
              type='button'
              className='group relative h-14 w-14 overflow-hidden rounded-full bg-dark text-white shadow-lg shadow-black/30'
            >
              <ArrowUp01Icon
                size={28}
                className='absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 transition-all group-hover:top-0 group-hover:-translate-y-full'
              />
              <ArrowUp01Icon
                size={28}
                className='absolute left-1/2 top-1/2 inline-block -translate-x-1/2 translate-y-[110%] transition-all group-hover:-translate-y-1/2'
              />
            </button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
