'use client';

import Tippy from '@tippyjs/react';
import { ArrowRight01Icon, RecordIcon } from 'hugeicons-react';
import React, { useRef, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { PiArrowLeft, PiArrowRight, PiArrowUpRightBold } from 'react-icons/pi';
import Slider from 'react-slick';

import Link from 'next/link';

import { followCursor } from 'tippy.js';

import Magnetic from '@/components/Magnetic';

import Project from './Project';
import ProjectDetailsDrawer from './ProjectDetailsDrawer';

const Projects = () => {
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = useState(false);

  const openProjectDrawer = () => setIsProjectDrawerOpen(true);
  const closeProjectDrawer = () => setIsProjectDrawerOpen(false);

  return (
    <section className='space-y-20 bg-[#F0EFEF] py-40'>
      <div className='relative mx-auto max-w-6xl px-6 lg:px-10'>
        <div className='mx-auto mb-52 flex max-w-2xl items-end justify-between'>
          <h1 className='text-5xl leading-[1.1] tracking-tight'>
            <span className='text-[#b4b3b1]'>Discover the </span>
            <br /> projects{' '}
            <span className='text-[#b4b3b1]'>of my expertise</span>
          </h1>

          <Magnetic>
            <button
              type='button'
              className='group relative h-14 w-14 overflow-hidden rounded-full bg-dark text-white shadow-lg shadow-black/30'
            >
              <ArrowRight01Icon
                size={28}
                className='absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:translate-x-[110%]'
              />
              <ArrowRight01Icon
                size={28}
                className='absolute -left-full top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2'
              />
            </button>
          </Magnetic>
          {/* <div className='hidden lg:block'>
            <Magnetic>
              <button
                type='button'
                className='group flex rounded-full bg-dark px-10 py-3.5 text-xl text-white shadow-lg shadow-black/30 transition-[shadow] hover:shadow-xl hover:shadow-black/30'
              >
                <div className='relative inline-block overflow-hidden'>
                  <div className='relative transition-transform group-hover:-translate-y-full'>
                    Browse all
                  </div>
                  <div className='absolute w-full transition-transform group-hover:-translate-y-full'>
                    Browse all
                  </div>
                </div>
              </button>
            </Magnetic>
          </div> */}
        </div>
        {/* <ul
          role='list'
          className='mb-20 overflow-hidden rounded-3xl border border-dashed border-black/30'
        >
          <li className='relative flex items-center justify-between gap-x-6 px-7 py-5'>
            <div className='flex min-w-0 items-center gap-x-4'>
              <img
                alt='Technext Limited'
                src='/tn_logo.png'
                className='h-20 w-20 flex-none rounded-full bg-gray-50 object-cover'
              />
              <div className='min-w-0 flex-auto'>
                <p className='text-xl font-medium leading-6'>
                  Technext Limited
                </p>
                <p className='mt-1 flex text-sm leading-5 text-gray-600'>
                  Front-end Developer
                </p>
              </div>
            </div>
            <p className='text-xl leading-6'>2022 &nbsp;—&nbsp; Present</p>
          </li>
        </ul> */}
        {/* <div className='flex h-full flex-col gap-[15vh]'>
          <div className='sticky bottom-[15vh] z-50 h-[70vh] w-full overflow-hidden rounded-3xl border border-black/10 bg-dark p-3'>
            <div className='relative h-full w-full overflow-hidden rounded-2xl'>
              <img
                src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
                alt=''
                className='absolute h-full w-full object-cover'
              />
            </div>
          </div>
          <div className='sticky bottom-[15vh] z-40 h-[70vh] w-full overflow-hidden rounded-3xl border border-black/10 bg-dark p-10'>
            <img
              src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
              alt=''
              className='absolute h-full w-full object-cover'
            />
          </div>
          <div className='sticky bottom-[15vh] z-30 h-[70vh] w-full overflow-hidden rounded-3xl border border-black/10 bg-dark p-10'>
            <img
              src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
              alt=''
              className='absolute h-full w-full object-cover'
            />
          </div>
          <div className='sticky bottom-[15vh] z-20 h-[70vh] w-full overflow-hidden rounded-3xl border border-black/10 bg-dark p-10'>
            <img
              src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
              alt=''
              className='absolute h-full w-full object-cover'
            />
          </div>
          <div className='sticky bottom-[15vh] z-10 h-[70vh] w-full overflow-hidden rounded-3xl border border-black/10 bg-dark p-10'>
            <img
              src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
              alt=''
              className='absolute h-full w-full object-cover'
            />
          </div>
        </div> */}

        <div className='flex flex-col gap-60'>
          {[1, 2, 3].map(() => (
            <div
              className='relative cursor-pointer'
              onClick={openProjectDrawer}
            >
              <div className='relative overflow-hidden rounded-3xl'>
                <img
                  src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
                  alt=''
                  className='absolute bottom-0 left-0 right-0 top-auto h-[130%] w-full translate-y-16 object-cover'
                />
                <div className='relative flex aspect-video w-full flex-col justify-start p-10'>
                  <h1 className='mt-auto text-6xl text-white'>Falcon</h1>
                </div>
              </div>

              <div className='absolute bottom-auto left-1/2 right-auto top-0 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-black shadow-lg shadow-black/30'>
                <img
                  src='https://cdn.prod.website-files.com/6000971fd4b15ef62b9f6412/6391e4d6863b1e1116b72c56_brand%20studio%20badge.webp'
                  alt=''
                  className='w-full'
                />
              </div>
            </div>
          ))}
        </div>

        <ProjectDetailsDrawer
          isOpen={isProjectDrawerOpen}
          close={closeProjectDrawer}
        />
      </div>
      {/* <Slider
        key='archive-slider'
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...options}
        className='flex'
      >
        {[...Array(6).keys()].map((i) => (
          <div key={i} style={{ width: 'auto' }}>
            <Link
              href='#!'
              className='group mr-5 block w-[80vw] sm:w-[30vw] sm:min-w-[30rem]'
            >
              <div
                className={`relative mb-5 w-full overflow-hidden rounded-2xl pt-[66%] transition-transform after:absolute after:inset-0 after:bg-black/30 after:opacity-0 after:transition-opacity after:content-[''] group-hover:scale-95 group-hover:after:opacity-100`}
              >
                <img
                  src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
                  alt=''
                  className='absolute bottom-0 left-0 right-0 top-auto h-full w-full object-cover transition-transform group-hover:scale-105'
                />
              </div>
              <div className='px-4'>
                <p className='underlined-text text-xl group-hover:[background-size:100%_2px]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum veritatis distinctio voluptates a.
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
      <div className='relative mx-auto max-w-7xl px-6 lg:px-10'>
        <div className='flex items-center justify-between gap-5 sm:gap-10'>
          <div className='flex items-center gap-4'>
            <Magnetic>
              <button
                type='button'
                onClick={previous}
                className='group relative h-14 w-14 overflow-hidden rounded-full bg-dark text-white shadow-lg shadow-black/30'
              >
                <PiArrowLeft className='absolute left-1/2 top-1/2 inline-block h-6 w-6 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:-left-full' />
                <PiArrowLeft className='absolute -right-full top-1/2 inline-block h-6 w-6 -translate-y-1/2 transition-all group-hover:right-1/2 group-hover:translate-x-1/2' />
              </button>
            </Magnetic>

            <Magnetic>
              <button
                type='button'
                onClick={next}
                className='group relative h-14 w-14 overflow-hidden rounded-full bg-dark text-white shadow-lg shadow-black/30'
              >
                <PiArrowRight className='absolute left-1/2 top-1/2 inline-block h-6 w-6 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:translate-x-[110%]' />
                <PiArrowRight className='absolute -left-full top-1/2 inline-block h-6 w-6 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2' />
              </button>
            </Magnetic>
          </div>
          <div className='hidden flex-1 items-center gap-3 md:flex'>
            <p>0{slideIndex + 1}</p>
            <div className='relative h-[2px] w-full rounded bg-gray-300'>
              <div
                className='absolute h-full rounded bg-dark transition-[width]'
                style={{
                  width: `${(slideIndex / 5) * 100}%`
                }}
              ></div>
            </div>
            <p>06</p>
          </div>
          <Magnetic>
            <button
              type='button'
              className='group flex rounded-full bg-dark px-10 py-3.5 text-xl text-white shadow-lg shadow-black/30 transition-[shadow] hover:shadow-xl hover:shadow-black/30'
            >
              <div className='relative inline-block overflow-hidden'>
                <div className='relative transition-transform group-hover:-translate-y-full'>
                  Browse all
                </div>
                <div className='absolute w-full transition-transform group-hover:-translate-y-full'>
                  Browse all
                </div>
              </div>
            </button>
          </Magnetic>
        </div>
      </div> */}
    </section>
  );
};

export default Projects;
