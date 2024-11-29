import { BsCircleFill, BsDot } from 'react-icons/bs';

import Link from 'next/link';

import Magnetic from '@/components/Magnetic';
import Button from '@/components/ui/Button';

import Menu from './Menu';

const Header = () => {
  return (
    <header className='w-full'>
      <div className='relative py-6'>
        <div className='center-container flex items-center justify-between'>
          <Link
            href='/'
            className='group relative inline-block overflow-hidden text-right text-xl leading-none tracking-wide'
          >
            <div className='relative transition-transform group-hover:-translate-y-full'>
              Mostofa nobi
            </div>
            <div className='absolute w-full transition-transform group-hover:-translate-y-full'>
              Mostofa nobi
            </div>
          </Link>
          <Menu />
          {/* <Button label='Navigate' /> */}
          {/* <div className='flex items-center gap-3 text-xs font-extralight tracking-wide'>
            <BsCircleFill className='h-1.5 w-1.5 text-slime-green' />
            Available for freelance work.
          </div> */}
          {/* <Link
            href='/about'
            className='group relative inline-block overflow-hidden'
          >
            <div className='relative transition-transform group-hover:-translate-y-full'>
              About
            </div>
            <div className='absolute w-full transition-transform group-hover:-translate-y-full'>
              About
            </div>
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
