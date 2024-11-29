'use client';

import React, { useState } from 'react';
import { PiArrowUpRightBold } from 'react-icons/pi';

import Image from 'next/image';
import Link from 'next/link';

import { useCursor } from '@/providers/CursorProvider';

const Project = ({ project, className }) => {
  const { updateCursor, resetCursor } = useCursor();

  return (
    <Link
      href={`project/falcon`}
      onMouseEnter={() =>
        updateCursor({
          size: 150,
          content: (
            <PiArrowUpRightBold className='relative h-20 w-20 text-dark' />
          )
        })
      }
      onMouseLeave={resetCursor}
      className='relative min-h-[40rem] overflow-hidden rounded-2xl bg-dark p-8 text-white'
    >
      <div className='relative z-[3] flex h-full flex-col items-start justify-end'>
        <h1 className='font-roobert mb-5 text-5xl font-bold'>Falcon</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          dicta molestias nihil.
        </p>
      </div>
      <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] bg-[linear-gradient(45deg,#000_16%,rgba(0,0,0,.08))]' />
      <Image
        src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
        alt=''
        fill
        className='object-cover object-top'
      />
    </Link>
  );
};

export default Project;
