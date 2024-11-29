'use client';

import Tippy from '@tippyjs/react';
import { ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react';
import React, { useRef, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { PiArrowLeft, PiArrowRight, PiArrowUpRightBold } from 'react-icons/pi';
import Slider from 'react-slick';

import Link from 'next/link';

import { followCursor } from 'tippy.js';

import Magnetic from '@/components/Magnetic';

const Archives = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const options = {
    infinite: true,
    speed: 500,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    slickGoTo: true,
    arrows: false,
    beforeChange: (current, next) => setSlideIndex(next)
  };

  return (
    <section className='space-y-20 bg-[#E9E8E8] py-40'>
      <div className='relative mx-auto max-w-7xl px-6 lg:px-10'>
        <div className='mx-auto flex max-w-2xl items-end justify-between'>
          <h1 className='text-5xl leading-[1.1] tracking-tight'>
            <span className='text-[#b4b3b1]'>
              Explore <br />
              the{' '}
            </span>
            archives
          </h1>
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
          <div className='flex items-center gap-4'>
            <Magnetic>
              <button
                type='button'
                onClick={previous}
                className='group relative h-14 w-14 overflow-hidden rounded-full bg-dark text-white shadow-lg shadow-black/30'
              >
                <ArrowLeft01Icon
                  size={28}
                  className='absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 transition-all group-hover:-left-full'
                />
                <ArrowLeft01Icon
                  size={28}
                  className='absolute -right-full top-1/2 inline-block -translate-y-1/2 transition-all group-hover:right-1/2 group-hover:translate-x-1/2'
                />
              </button>
            </Magnetic>

            <Magnetic>
              <button
                type='button'
                onClick={next}
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
          </div>
        </div>
      </div>
      <Slider
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
      <div className='relative mx-auto max-w-5xl px-6 lg:px-10'>
        {/* <div className='flex items-center justify-between gap-5 sm:gap-10'> */}
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

        {/* <Magnetic>
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
          </Magnetic> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Archives;
