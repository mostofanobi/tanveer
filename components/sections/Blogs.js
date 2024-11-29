import { FiArrowDown } from 'react-icons/fi';
import { MdArrowOutward } from 'react-icons/md';

const Blogs = () => {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-screen-2xl px-6 lg:px-10'>
        <div className='mb-8 border-b border-gray-200 pb-4'>
          <h3 className='text-2xl leading-6 text-gray-900'>
            Recent Blogs <FiArrowDown className='inline-block text-sm' />
          </h3>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <article className='flex flex-col items-start justify-between border-r pr-8'>
            <div className='relative w-full'>
              <img
                src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'
                alt=''
                className='aspect-[16/9] w-full rounded-xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
              />
              <div className='mt-8 flex items-center gap-x-4 text-xs'>
                <time datetime='2020-03-16' className='text-gray-500'>
                  Mar 16, 2020
                </time>
                <a
                  href='#'
                  className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                >
                  Marketing
                </a>
              </div>
              <div className='group relative'>
                <h3 className='font-poppins mt-3 text-2xl font-medium leading-6'>
                  <a href='#'>
                    <span className='absolute inset-0'></span>
                    3D Wave on Scroll
                  </a>
                </h3>
                <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                  A website animation tutorial featuring a vertex shader with a
                  wave animation applied on a plane. Made with
                  React-three-fiber, Framer Motion and Next.js
                </p>
              </div>
            </div>
            <div className='mt-8 flex w-full items-center justify-between'>
              <div className='relative flex items-center gap-x-4'>
                <img
                  src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                  className='h-10 w-10 rounded-full bg-gray-100'
                />
                <div className='text-sm leading-6'>
                  <p className='font-semibold text-gray-900'>
                    <a href='#'>
                      <span className='absolute inset-0'></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className='text-gray-600'>Co-Founder / CTO</p>
                </div>
              </div>
              <button
                type='button'
                className='flex h-10 w-10 items-center justify-center rounded-full border'
              >
                <MdArrowOutward />
              </button>
            </div>
          </article>
          <article className='flex flex-col items-start justify-between pl-8'>
            <div className='relative w-full'>
              <img
                src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'
                alt=''
                className='aspect-[16/9] w-full rounded-xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
              />
              <div className='mt-8 flex items-center gap-x-4 text-xs'>
                <time datetime='2020-03-16' className='text-gray-500'>
                  Mar 16, 2020
                </time>
                <a
                  href='#'
                  className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                >
                  Marketing
                </a>
              </div>
              <div className='group relative'>
                <h3 className='font-poppins mt-3 text-2xl font-medium leading-6'>
                  <a href='#'>
                    <span className='absolute inset-0'></span>
                    3D Wave on Scroll
                  </a>
                </h3>
                <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                  A website animation tutorial featuring a vertex shader with a
                  wave animation applied on a plane. Made with
                  React-three-fiber, Framer Motion and Next.js
                </p>
              </div>
            </div>
            <div className='mt-8 flex w-full items-center justify-between'>
              <div className='relative flex items-center gap-x-4'>
                <img
                  src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                  className='h-10 w-10 rounded-full bg-gray-100'
                />
                <div className='text-sm leading-6'>
                  <p className='font-semibold text-gray-900'>
                    <a href='#'>
                      <span className='absolute inset-0'></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className='text-gray-600'>Co-Founder / CTO</p>
                </div>
              </div>
              <button
                type='button'
                className='flex h-10 w-10 items-center justify-center rounded-full border'
              >
                <MdArrowOutward />
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
