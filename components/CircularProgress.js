'use client';

import { IoIosArrowRoundUp } from 'react-icons/io';

import usePageProgress from '@/hooks/usePageProgress';

const CircularProgress = ({ children }) => {
  const progress = usePageProgress();
  const strokeWidth = 0.5;
  const radius = 26;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      className='group relative cursor-pointer transition-transform'
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        className='relative -rotate-90'
      >
        <circle
          stroke='hsla(204,2%,59%,.4)'
          fill='transparent'
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke='#000000'
          fill='transparent'
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className='absolute left-1/2 top-1/2 z-10 inline-block -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden font-normal text-black transition-all duration-500'>
        <IoIosArrowRoundUp className='relative transition-transform group-hover:-translate-y-full' />
        <IoIosArrowRoundUp className='absolute w-full transition-transform group-hover:-translate-y-full' />
      </div>
    </div>
  );
};

export default CircularProgress;
