'use client';

import Tippy from '@tippyjs/react';
import { CheckmarkSquare04Icon, Copy01Icon, Mail01Icon } from 'hugeicons-react';
import { BsCheckLg, BsCopy } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa6';
import { LuCopy } from 'react-icons/lu';

import { followCursor } from 'tippy.js';

import Magnetic from '@/components/Magnetic';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

const Gmail = () => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const handleCopy = () => {
    copyToClipboard('m.mostofanobi@gmail.com');
  };

  return (
    <Magnetic>
      <Tippy
        content={isCopied ? 'Copied !!!' : 'm.mostofanobi@gmail.com'}
        followCursor={true}
        touch={false}
        offset={[0, 30]}
        arrow={false}
        plugins={[followCursor]}
      >
        <div
          onClick={handleCopy}
          className='text-whiteshadow-xl group relative h-14 w-14 cursor-pointer overflow-hidden rounded-full bg-dark text-white shadow-lg shadow-black/30 transition-[margin]'
        >
          <Mail01Icon
            size={28}
            className='absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]'
          />
          {isCopied ? (
            <CheckmarkSquare04Icon
              size={28}
              className='absolute left-[-15%] top-[115%] inline-block -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2 group-hover:top-1/2'
            />
          ) : (
            <Copy01Icon
              size={28}
              className='absolute left-[-15%] top-[115%] inline-block -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2 group-hover:top-1/2'
            />
          )}
        </div>
      </Tippy>
    </Magnetic>
  );
};

export default Gmail;
