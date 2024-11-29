'use client';

import Tippy from '@tippyjs/react';
import { ArrowUpRight01Icon, GithubIcon } from 'hugeicons-react';

import Link from 'next/link';

import { followCursor } from 'tippy.js';

import Magnetic from '@/components/Magnetic';

const Github = () => {
  return (
    <Magnetic>
      <Tippy
        content='@mostofanobi'
        followCursor={true}
        offset={[0, 30]}
        touch={false}
        arrow={false}
        plugins={[followCursor]}
      >
        <Link
          href='https://github.com/mostofanobi'
          target='_blank'
          rel='noopener noreferrer'
          className='group relative h-14 w-14 overflow-hidden rounded-full bg-dark text-white shadow-lg shadow-black/30 transition-[margin]'
        >
          <GithubIcon
            size={28}
            className='absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]'
          />
          <ArrowUpRight01Icon
            size={28}
            className='absolute left-[-15%] top-[115%] inline-block -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2 group-hover:top-1/2'
          />
        </Link>
      </Tippy>
    </Magnetic>
  );
};

export default Github;
