import React from 'react';

import classNames from 'classnames';

const Button = ({ label, handleClick, isDark }) => {
  return (
    <button
      onClick={handleClick}
      className={classNames({
        'bg-dark-blue text-white hover:ring-dark-blue/25': isDark,
        'bg-white text-dark-blue hover:ring-black/10': !isDark,
        'group relative rounded-2xl border px-6 py-2 transition-all hover:ring-4 active:scale-95': true
      })}
    >
      <div className='relative inline-block overflow-hidden text-right text-xs font-medium leading-none tracking-wide'>
        <div className='relative font-semibold transition-transform group-hover:-translate-y-full'>
          {label}
        </div>
        <div className='absolute w-full font-semibold transition-transform group-hover:-translate-y-full'>
          {label}
        </div>
      </div>
    </button>
  );
};

export default Button;
