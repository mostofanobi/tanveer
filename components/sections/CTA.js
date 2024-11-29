import React from 'react';

const CTA = () => {
  return (
    <section className='-mb-24 bg-[#E9E8E8] pb-60 pt-20'>
      <div className='mx-auto max-w-6xl px-6 lg:px-10'>
        <div className='relative rounded-3xl bg-dark p-20 text-white'>
          <div className='absolute -top-3 left-1/2 h-10 w-11/12 -translate-x-1/2 rounded-3xl bg-dark opacity-50'>
            <div className='absolute -top-3 left-1/2 h-10 w-11/12 -translate-x-1/2 rounded-3xl bg-dark opacity-50'>
              <div className='absolute -top-3 left-1/2 h-10 w-11/12 -translate-x-1/2 rounded-3xl bg-dark opacity-50' />
            </div>
          </div>
          <h1 className='mb-6 text-4xl'>Feeling interested in working with?</h1>
          <p className='max-w-2xl text-zinc-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur distinctio quis quia iure quos omnis sint officiis
            tempora incidunt unde ea optio corrupti odit, quod cupiditate nulla
            excepturi delectus reprehenderit!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
