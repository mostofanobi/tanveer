import React from 'react';

import Image from 'next/image';

const NewHome = () => {
  return (
    <div>
      <main>
        <section className='relative h-screen bg-[#07011C] text-white'>
          {/* BG */}
          <div className='absolute inset-0 -z-0'>
            <Image
              alt='bg-gradient'
              src='https://assets-global.website-files.com/65ea02c6577073f7737d9c43/65f2fb508b38a9796f1387d8_blur_gradient.svg'
              fill
            />
          </div>
          {/* Content */}
          <div className='relative grid h-full place-items-center'>
            <h1 className='text-[4vw]'>
              Creative Frontend Developer <br />
              Creating stuffs
            </h1>
          </div>
          <div className='absolute bottom-10 text-center'>
            <p className='text-[10px] tracking-widest'>
              Wellcome to the my side of the internet
            </p>
          </div>
        </section>
      </main>
      <footer>
        <div className='h-screen'></div>
      </footer>
    </div>
  );
};

export default NewHome;
