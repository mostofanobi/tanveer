'use client';

import { BsCircleFill, BsDot, BsSunglasses } from 'react-icons/bs';

import Link from 'next/link';

import Magnetic from '@/components/Magnetic';

import CircularProgress from '../CircularProgress';
import Github from '../ui/socials/Github';
import Gmail from '../ui/socials/Gmail';
import Linkedin from '../ui/socials/Linkedin';
import Whatsapp from '../ui/socials/Whatsapp';
import Header from './Header';

const Hero = () => {
  return (
    <section className='center-container min-h-screen font-thin'>
      <h1 className='text-7xl font-light leading-[1.2] tracking-tight'>
        Creative developer <span className='text-body/30'>with emphasis</span>{' '}
        <br />
        <span className='text-body/30'> on</span> visual
        <span className='text-slime-green'> ✦ </span>design,{' '}
        <span className='text-body/30'>creating </span>
        <br />
        <span className='text-body/30'>seamless </span>
        digital experiences.
      </h1>
      <div className='flex gap-3'>
        <Github />
        <Linkedin />
        <Whatsapp />
      </div>
    </section>
  );
};

export default Hero;
