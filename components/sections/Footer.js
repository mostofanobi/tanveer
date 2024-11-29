'use client';

import { PiArrowUpBold } from 'react-icons/pi';

import { useCursor } from '@/providers/CursorProvider';

import Magnetic from '../Magnetic';

const Footer = () => {
  const { updateCursor, resetCursor } = useCursor();
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer
      // onMouseEnter={() =>
      //   updateCursor({
      //     size: 150,
      //     content: <LiaTelegramPlane className='relative h-20 w-20 text-dark' />
      //   })
      // }
      // onMouseLeave={resetCursor}
      className='relative z-10 h-screen bg-[#F0EFEF] text-dark'
    >
      <div className='mx-auto h-full max-w-screen-2xl px-10 py-8'>
        <div className='grid h-full grid-rows-[.25fr_1fr_.25fr]'>
          <div className='grid grid-cols-1 md:grid-cols-[.5fr_auto_.5fr]'>
            <h6 className='text-center text-2xl font-medium md:order-1'>
              Mostofa nobi
            </h6>
            <div className='text-center md:text-start'>
              <h6>Frontend Developer</h6>
              <p className='text-xs text-zinc-500'>
                Portfolio @{new Date().getFullYear()}
              </p>
            </div>
            <p className='text-center text-sm md:order-1 md:text-end'>
              <span className='relative mr-3 inline-flex h-2.5 w-2.5 mix-blend-normal'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400'></span>
              </span>
              Available for freelance work{' '}
            </p>
          </div>
          <div className='grid content-center'>
            <h1 className='text-center text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tight'>
              Ready for your <br /> next project?
            </h1>
          </div>
          <div className='flex items-end justify-end'>
            <Magnetic>
              <button
                onClick={handleScrollTop}
                type='button'
                className='group relative h-14 w-14 overflow-hidden rounded-full bg-dark text-white shadow-lg shadow-black/30'
              >
                <PiArrowUpBold className='absolute left-1/2 top-1/2 inline-block h-6 w-6 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:top-0 group-hover:-translate-y-full' />
                <PiArrowUpBold className='absolute left-1/2 top-1/2 inline-block h-6 w-6 -translate-x-1/2 translate-y-[110%] transition-all group-hover:-translate-y-1/2' />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
