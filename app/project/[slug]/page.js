import React from 'react';
import { BsX } from 'react-icons/bs';
import { PiArrowLeftBold } from 'react-icons/pi';

import Link from 'next/link';

import Magnetic from '@/components/Magnetic';

const ProjectDetails = ({ params: { slug } }) => {
  console.log(slug);
  return (
    <div
      class='relative z-10'
      aria-labelledby='slide-over-title'
      role='dialog'
      aria-modal='true'
    >
      {/* <!--
    Background backdrop, show/hide based on slide-over state.

    Entering: "ease-in-out duration-500"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in-out duration-500"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
      <Link
        href='/'
        class='fixed inset-0 block bg-gray-500 bg-opacity-75 transition-opacity'
        aria-hidden='true'
      ></Link>

      <div class='pointer-events-none fixed inset-0 overflow-hidden'>
        <div class='absolute inset-0 overflow-hidden'>
          <div class='pointer-events-none fixed inset-y-0 left-0 right-0 flex max-w-full pt-20'>
            {/* <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}

            <div class='pointer-events-auto w-screen'>
              <div class='relative h-full overflow-y-scroll rounded-t-3xl bg-white p-6 shadow-xl lg:p-10'>
                <Magnetic>
                  <Link
                    href='/'
                    className='group sticky top-0 float-right flex h-14 w-14 items-center justify-center rounded-full bg-dark text-xl text-white shadow-lg shadow-black/30'
                  >
                    <div className='relative inline-block overflow-hidden'>
                      <div className='relative transition-transform group-hover:-translate-y-full'>
                        <BsX className='h-7 w-7' />
                      </div>
                      <div className='absolute w-full transition-transform group-hover:-translate-y-full'>
                        <BsX className='h-7 w-7' />
                      </div>
                    </div>
                  </Link>
                </Magnetic>
                <div class='relative mx-auto mt-20 max-w-5xl'>
                  {/* <!-- Your content --> */}
                  {/* <Magnetic>
                    <Link
                      href='/'
                      className='group mb-14 flex h-14 w-14 items-center justify-center rounded-full bg-dark text-xl text-white shadow-lg shadow-black/30'
                    >
                      <div className='relative inline-block overflow-hidden'>
                        <div className='relative transition-transform group-hover:-translate-x-full'>
                          <PiArrowLeftBold className='h-6 w-6' />
                        </div>
                        <div className='absolute inset-0 translate-x-full transform transition-transform group-hover:translate-x-0'>
                          <PiArrowLeftBold className='h-6 w-6' />
                        </div>
                      </div>
                    </Link>
                  </Magnetic> */}
                  <h1 className='font-roobert mb-8 text-6xl font-bold'>
                    Phoenix
                  </h1>
                  <p className='max-w-4xl text-lg leading-relaxed'>
                    Momentum leverages advanced AI-driven solutions to optimize
                    business processes, improve decision-making, and drive
                    growth for organizations across various industries.
                    Recognizing the need for a digital presence that matched
                    their innovative offerings and market leadership, they
                    partnered with Off Menu. The Off Menu team performed a
                    competitive analysis of digital offerings before redesigning
                    and building the new Momentum brand and website.
                  </p>
                  <div className='h-screen'></div>
                  <div className='h-screen'></div>
                  <div className='h-screen'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
