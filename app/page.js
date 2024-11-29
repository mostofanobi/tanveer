'use client';

import { useEffect, useRef } from 'react';
import { BsAt, BsCircleFill, BsDot, BsGithub } from 'react-icons/bs';
import { BsFullscreen } from 'react-icons/bs';
import { CiMobile3 } from 'react-icons/ci';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
  FaWhatsapp
} from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { HiMiniChevronLeft, HiOutlineEnvelope } from 'react-icons/hi2';
import { HiMiniChevronRight } from 'react-icons/hi2';
import { ImLinkedin } from 'react-icons/im';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from 'react-icons/io';
import { LiaSmileBeamSolid, LiaTelegramPlane } from 'react-icons/lia';
import { PiArrowUpRightBold } from 'react-icons/pi';
import { PiMonitorLight } from 'react-icons/pi';
import { RiLinkedinLine } from 'react-icons/ri';
import { VscGithubAlt } from 'react-icons/vsc';
import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';

import CircularProgress from '@/components/CircularProgress';
import HoverTransition from '@/components/HovarTransition';
import Magnetic from '@/components/Magnetic';
import SocialLinks from '@/components/SocialLinks';
import { Swiper, SwiperSlide } from '@/components/Swiper';
import ThemeSwitch from '@/components/ThemeSwitch';
import Archives from '@/components/sections/Archives';
import Blogs from '@/components/sections/Blogs';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Project from '@/components/sections/Project';
import Projects from '@/components/sections/Projects';
import Button from '@/components/ui/Button';
import RoundedCorner from '@/components/ui/RoundedCorner';
import Github from '@/components/ui/socials/Github';
import Gmail from '@/components/ui/socials/Gmail';
import Linkedin from '@/components/ui/socials/Linkedin';
import Whatsapp from '@/components/ui/socials/Whatsapp';
import { useCursor } from '@/providers/CursorProvider';

import tnLogo from './../public/tn_logo.png';

const projects = [
  {
    name: 'Aurora',
    tagline: 'Admin Dashboard'
  },
  {
    name: 'Phoenix',
    tagline: 'Admin Dashboard'
  },
  {
    name: 'Falcon',
    tagline: 'Bootstrap Admin Template'
  },
  {
    name: 'Sparrow',
    tagline: 'Landing Template'
  }
];

export default function Home() {
  const { updateCursor, resetCursor } = useCursor();
  const galleryRef = useRef(null);
  const galleryContainer = useRef(null);
  // useCursor();

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const { clientX, clientY, currentTarget } = e;
  //     const { width, height } = currentTarget.getBoundingClientRect();
  //     const centerX = width / 2;
  //     const centerY = height / 2;

  //     const sensitivity = 2;
  //     const deltaX = (centerX - clientX) / sensitivity;
  //     const deltaY = (centerY - clientY) / sensitivity;

  //     galleryRef.current.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
  //   };

  //   galleryContainer.current.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     galleryContainer.current.removeEventListener(
  //       'mousemove',
  //       handleMouseMove
  //     );
  //   };
  // }, []);
  return (
    <>
      <main className='relative z-10 h-full'>
        {/* Hero */}
        <section className='relative z-0 flex h-[70vh] flex-col bg-[#F0EFEF]'>
          {/* <div className='hero-bg pointer-events-none absolute left-0 right-0 top-0 h-full max-h-[60vh] w-full overflow-hidden opacity-20'>
            <div className='absolute bottom-0 left-0 right-0 top-auto h-1/2 bg-gradient-to-b from-transparent to-[#F0EFEF]'></div>
          </div> */}
          <header className='relative z-10'>
            <div className='mx-auto h-24 max-w-screen-2xl px-6 lg:px-10'>
              <nav className='flex h-full items-center justify-between'>
                <Magnetic>
                  <Link
                    href='/'
                    className='group relative inline-block overflow-hidden'
                  >
                    <h2 className='relative whitespace-nowrap text-xl font-medium transition-transform group-hover:-translate-y-full'>
                      Mostofa nobi
                    </h2>
                    <h2 className='absolute w-full whitespace-nowrap text-xl font-medium transition-transform group-hover:-translate-y-full'>
                      Mostofa nobi
                    </h2>
                  </Link>
                </Magnetic>

                <p className='text-sm'>
                  <span className='relative mr-3 inline-flex h-2.5 w-2.5 mix-blend-normal'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
                    <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400'></span>
                  </span>
                  Available for freelance work{' '}
                </p>
              </nav>
            </div>
          </header>
          <div className='relative -mt-24 flex-1 items-end'>
            <div className='relative mx-auto flex h-full max-w-screen-2xl items-center px-6 lg:px-10'>
              <div className='absolute bottom-0 left-0 w-full'>
                <div className='mx-auto -mb-14 max-w-2xl'>
                  <img
                    src='https://cdn.prod.website-files.com/6000971fd4b15ef62b9f6412/6391e4d6863b1e1116b72c56_brand%20studio%20badge.webp'
                    alt=''
                    className='w-32 drop-shadow-2xl'
                  />
                </div>
              </div>
              <div className='mx-auto w-full max-w-2xl'>
                <h1 className='mb-16 max-w-xl text-5xl leading-[1.1] tracking-tight'>
                  <span className='text-[#b4b3b1]'>Elevate your</span> digital{' '}
                  <br />
                  presence{' '}
                  <span className='text-[#b4b3b1]'>with a creative</span> <br />
                  front—end developer.
                </h1>

                <p className='leading-relaxed'>
                  Love to develop clean and aesthetic Web Applications & enjoy
                  creating things that live on the internet. Velit perferendis
                  accusamus voluptate in cum sequi? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Debitis ad cum amet inventore.
                </p>
              </div>
              {/* <Magnetic>
                <button
                  type='button'
                  className='group flex rounded-full bg-dark px-10 py-3.5 text-xl text-white shadow-lg shadow-black/30 transition-[shadow] hover:shadow-xl hover:shadow-black/30'
                >
                  <div className='relative inline-block overflow-hidden'>
                    <div className='relative transition-transform group-hover:-translate-y-full'>
                      Contact
                    </div>
                    <div className='absolute w-full transition-transform group-hover:-translate-y-full'>
                      Contact
                    </div>
                  </div>
                </button>
              </Magnetic> */}
            </div>
          </div>
        </section>
        {/* Showcase */}
        <section className='sticky bottom-0 left-0 right-0 top-0 -z-10 h-screen w-full overflow-hidden bg-dark'>
          <div className='relative flex h-full w-full rotate-[-20deg] items-center justify-center gap-[2.5vw]'>
            {[...Array(3).keys()].map((i) => (
              <div
                key={i}
                className='relative z-10 flex flex-col space-y-[2.5vw] pb-[15vh] pt-[5vh]'
                style={{
                  transform: `translate(0%, -0%)`
                }}
              >
                {[...Array(6).keys()].map((i) => (
                  <div className='relative' key={i}>
                    <div className='relative w-[33vw] min-w-80 overflow-hidden rounded-lg pt-[66%]'>
                      <img
                        src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
                        alt=''
                        className='absolute bottom-0 left-0 right-0 top-auto h-full w-full object-cover opacity-70'
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
        {/* Info */}
        <section className='z-0 bg-[#E9E8E8] py-20'>
          <div className='mx-auto max-w-4xl px-6'>
            <div className='flex flex-col items-start gap-10'>
              <h3 className='text-4xl leading-normal'>
                Hi, I'm Mostofa Nobi, A Creative front-end Developer Based in
                Bangladesh, Currently in Technext limited as Senior Frontend
                Developer.
                {/* <span className='text-[#b4b3b1]'>Hey there, I'm</span> Mostofa
                Nobi
                <span className='text-[#b4b3b1]'>cumque laboriosam iusto!</span>
                Lorem ipsum dolor sit amet conse ctetur,{' '}
                <span className='text-[#b4b3b1]'>adipisicing elit. </span> Ullam
                possimus{' '}
                <span className='text-[#b4b3b1]'>cumque laboriosam iusto!</span> */}
              </h3>
              {/* <p className='max-w-4xl text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                neque perferendis dicta at officia numquam, facere sunt. Quia
                earum maiores consequatur dolores et minima reprehenderit fugit
                porro dicta. Quibusdam expedita quaerat magnam fugiat. Fugiat
                iste mollitia fugit modi porro, laborum possimus distinctio
                facilis at, aliquid nobis magni accusamus ducimus neque?
              </p> */}
              <Magnetic>
                <button
                  type='button'
                  className='group flex rounded-full bg-dark px-10 py-3.5 text-xl text-white shadow-lg shadow-black/30 transition-[shadow] hover:shadow-xl hover:shadow-black/30'
                >
                  <div className='relative inline-block overflow-hidden'>
                    <div className='relative transition-transform group-hover:-translate-y-full'>
                      Get Resume
                    </div>
                    <div className='absolute w-full transition-transform group-hover:-translate-y-full'>
                      Get Resume
                    </div>
                  </div>
                </button>
              </Magnetic>
            </div>
            {/* <p className='mx-auto max-w-3xl text-center opacity-60'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              aperiam possimus ipsam ad voluptatem necessitatibus similique,
              quibusdam fugit ducimus ipsum culpa voluptates esse id, ipsa optio
              distinctio quod suscipit doloribus vero.
            </p> */}
          </div>
        </section>
        {/* Featured projects */}
        <Projects />
        {/* Archives */}
        <Archives />
        {/* <Link
          href='#!'
          onMouseEnter={() =>
            updateCursor({
              size: 150
            })
          }
          onMouseLeave={resetCursor}
          className='relative block'
        >
          <div
            ref={galleryContainer}
            className='relative z-10 h-screen w-screen overflow-hidden bg-dark'
          >
            <div
              ref={galleryRef}
              className='absolute-center flex h-fit w-fit flex-col justify-between gap-[2.5vw] p-[2.5vw]'
              style={{
                transition: 'transform 1.5s cubic-bezier(0.075,0.82,0.165,1)'
              }}
            >
              {[...Array(4).keys()].map((i) => (
                <div
                  key={i}
                  className='relative z-10 flex justify-between gap-[2.5vw]'
                  style={{
                    transform: `translate(0%, -0%)`
                  }}
                >
                  {[...Array(6).keys()].map((i) => (
                    <div className='relative' key={i}>
                      <div className='relative w-[30vw] min-w-96 overflow-hidden rounded-lg pt-[66%]'>
                        <img
                          src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
                          alt=''
                          className='absolute bottom-0 left-0 right-0 top-auto h-full w-full object-cover'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className='absolute-center grid h-full w-full content-center'>
              <div className='absolute left-0 top-0 h-full w-full bg-black/40'></div>
              <h1 className='relative text-center font-roobert text-[clamp(3rem,10vw,8rem)] font-bold leading-none text-white'>
                Ready for your <br /> next project?
              </h1>
            </div>
          </div>
        </Link> */}
        {/* CTA */}
        <CTA />
        <SocialLinks />
        {/* <Footer /> */}
        {/* <div className='sticky bottom-0 -z-10 h-[50vh] w-full bg-dark text-white'>
          <h1>hola</h1>
        </div> */}
      </main>
    </>
  );
}

// {/* <section className='z-0 min-h-screen bg-[#F0EFEF] py-20'>
//           <div className='relative mx-auto max-w-7xl px-6 lg:px-10'>
//             <div className='mb-20 flex items-end justify-between'>
//               <h1 className='text-8xl font-bold leading-[0.9] tracking-tight'>
//                 <span className='text-[#b4b3b1]'>
//                   Discover <br /> the{' '}
//                 </span>
//                 portfolio
//               </h1>
//               <Magnetic>
//                 <button
//                   type='button'
//                   className='group flex rounded-full bg-dark px-10 py-3.5 text-xl text-white shadow-lg shadow-black/30 transition-[shadow] hover:shadow-xl hover:shadow-black/30'
//                 >
//                   <div className='relative inline-block overflow-hidden'>
//                     <div className='relative transition-transform group-hover:-translate-y-full'>
//                       Browse all
//                     </div>
//                     <div className='absolute w-full transition-transform group-hover:-translate-y-full'>
//                       Browse all
//                     </div>
//                   </div>
//                 </button>
//               </Magnetic>
//             </div>
//             {/* Projects */}
// <ul
//   role='list'
//   className='mb-20 overflow-hidden rounded-3xl border border-dashed border-black/30'
// >
//   <li className='relative flex items-center justify-between gap-x-6 px-7 py-5'>
//     <div className='flex min-w-0 items-center gap-x-4'>
//       <img
//         alt='Technext Limited'
//         src='/tn_logo.png'
//         className='h-20 w-20 flex-none rounded-full bg-gray-50 object-cover'
//       />
//       <div className='min-w-0 flex-auto'>
//         <p className='text-xl font-medium leading-6'>
//           Technext Limited
//         </p>
//         <p className='mt-1 flex text-sm leading-5 text-gray-600'>
//           Front-end Developer
//         </p>
//       </div>
//     </div>
//     <p className='text-xl leading-6'>2022 &nbsp;—&nbsp; Present</p>
//   </li>
// </ul>
//             <div className='flex w-full gap-8'>
//               <div className='flex flex-1 flex-col gap-20'>
//                 <Link href='#!' className='group relative flex flex-col gap-4'>
//                   <h1 className='text-5xl font-extrabold'>Aurora</h1>
//                   <div className='relative mb-6'>
//                     <div className='absolute -bottom-3 left-1/2 h-10 w-11/12 -translate-x-1/2 rounded-3xl bg-dark opacity-20'>
//                       <div className='absolute -bottom-3 left-1/2 h-10 w-11/12 -translate-x-1/2 rounded-3xl bg-dark opacity-40'></div>
//                     </div>
//                     <div className='relative aspect-[3/2] w-full overflow-hidden rounded-3xl bg-white md:aspect-square'>
//                       {/* bg mask */}
//                       {/* <div className='absolute bottom-0 left-0 right-0 top-0 scale-110 overflow-hidden opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100'>
//                         <div className='absolute bottom-0 left-0 right-0 top-0 z-10 bg-black/30 backdrop-blur-[8px]' />
//                         <Image
//                           src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
//                           alt=''
//                           fill
//                           className='object-cover object-top'
//                         />
//                       </div> */}
//                       <div className='relative z-30 h-full w-full rounded-2xl shadow-2xl'>
//                         <Image
//                           src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
//                           alt=''
//                           fill
//                           className='rounded-2xl object-cover object-top'
//                         />
//                         {/* <div className='absolute bottom-5 left-5'>
//                         <h1 className='rounded-3xl bg-white p-4  text-5xl font-extrabold tracking-tight text-black mix-blend-screen shadow-2xl'>
//                           Falcon
//                         </h1>
//                       </div> */}
//                       </div>
//                     </div>
//                   </div>
//                   <div className='flex justify-between px-4'>
//                     <div>
//                       <p className='text font-normal text-black/60'>
//                         001 — Bootstrap Admin template
//                       </p>
//                       {/* <h1 className='text-3xl'>Phoenix</h1> */}
//                     </div>
//                     {/* <div className='group relative h-12 w-12 overflow-hidden rounded-full border text-black'>
//                         <PiArrowUpRightBold className='text-dark-blue absolute left-1/2 top-1/2 inline-block h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//                         <div className='text-dark-blue absolute left-[-25%] top-[125%] flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition-all group-hover:left-1/2 group-hover:top-1/2'>
//                           <PiArrowUpRightBold className='absolute h-5 w-5' />
//                         </div>
//                       </div> */}
//                   </div>
//                 </Link>
//                 <Link href='#!' className='group relative flex flex-col gap-4'>
//                   <h1 className='text-5xl font-extrabold'>Aurora</h1>
//                   <div className='relative mb-6'>
//                     <div className='absolute -bottom-3 left-1/2 h-10 w-11/12 -translate-x-1/2 rounded-3xl bg-dark opacity-20'>
//                       <div className='absolute -bottom-3 left-1/2 h-10 w-11/12 -translate-x-1/2 rounded-3xl bg-dark opacity-40'></div>
//                     </div>
//                     <div className='relative aspect-[3/2] w-full overflow-hidden rounded-3xl bg-white md:aspect-video'>
//                       {/* bg mask */}
//                       {/* <div className='absolute bottom-0 left-0 right-0 top-0 scale-110 overflow-hidden opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100'>
//                         <div className='absolute bottom-0 left-0 right-0 top-0 z-10 bg-black/30 backdrop-blur-[8px]' />
//                         <Image
//                           src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
//                           alt=''
//                           fill
//                           className='object-cover object-top'
//                         />
//                       </div> */}
//                       <div className='relative z-30 h-full w-full rounded-2xl shadow-2xl'>
//                         <Image
//                           src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
//                           alt=''
//                           fill
//                           className='rounded-2xl object-cover object-top'
//                         />
//                         {/* <div className='absolute bottom-5 left-5'>
//                         <h1 className='rounded-3xl bg-white p-4  text-5xl font-extrabold tracking-tight text-black mix-blend-screen shadow-2xl'>
//                           Falcon
//                         </h1>
//                       </div> */}
//                       </div>
//                     </div>
//                   </div>
//                   <div className='flex justify-between px-4'>
//                     <div>
//                       <p className='text font-normal text-black/60'>
//                         001 — Bootstrap Admin template
//                       </p>
//                       {/* <h1 className='text-3xl'>Phoenix</h1> */}
//                     </div>
//                     {/* <div className='group relative h-12 w-12 overflow-hidden rounded-full border text-black'>
//                         <PiArrowUpRightBold className='text-dark-blue absolute left-1/2 top-1/2 inline-block h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//                         <div className='text-dark-blue absolute left-[-25%] top-[125%] flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition-all group-hover:left-1/2 group-hover:top-1/2'>
//                           <PiArrowUpRightBold className='absolute h-5 w-5' />
//                         </div>
//                       </div> */}
//                   </div>
//                 </Link>
//               </div>
//               <div className='flex flex-1 flex-col gap-20'>
//                 <Link href='#!' className='group relative flex flex-col gap-4'>
//                   <h1 className='text-5xl font-extrabold'>Aurora</h1>
//                   <div className='relative mb-6'>
//                     <div className='absolute -bottom-3 left-1/2 h-10 w-11/12 -translate-x-1/2 rounded-3xl bg-dark opacity-20'>
//                       <div className='absolute -bottom-3 left-1/2 h-10 w-11/12 -translate-x-1/2 rounded-3xl bg-dark opacity-40'></div>
//                     </div>
//                     <div className='relative aspect-[3/2] w-full overflow-hidden rounded-3xl bg-white md:aspect-video'>
//                       {/* bg mask */}
//                       {/* <div className='absolute bottom-0 left-0 right-0 top-0 scale-110 overflow-hidden opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100'>
//                         <div className='absolute bottom-0 left-0 right-0 top-0 z-10 bg-black/30 backdrop-blur-[8px]' />
//                         <Image
//                           src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
//                           alt=''
//                           fill
//                           className='object-cover object-top'
//                         />
//                       </div> */}
//                       <div className='relative z-30 h-full w-full rounded-2xl shadow-2xl'>
//                         <Image
//                           src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
//                           alt=''
//                           fill
//                           className='rounded-2xl object-cover object-top'
//                         />
//                         {/* <div className='absolute bottom-5 left-5'>
//                         <h1 className='rounded-3xl bg-white p-4  text-5xl font-extrabold tracking-tight text-black mix-blend-screen shadow-2xl'>
//                           Falcon
//                         </h1>
//                       </div> */}
//                       </div>
//                     </div>
//                   </div>
//                   <div className='flex justify-between px-4'>
//                     <div>
//                       <p className='text font-normal text-black/60'>
//                         001 — Bootstrap Admin template
//                       </p>
//                       {/* <h1 className='text-3xl'>Phoenix</h1> */}
//                     </div>
//                     {/* <div className='group relative h-12 w-12 overflow-hidden rounded-full border text-black'>
//                         <PiArrowUpRightBold className='text-dark-blue absolute left-1/2 top-1/2 inline-block h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//                         <div className='text-dark-blue absolute left-[-25%] top-[125%] flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition-all group-hover:left-1/2 group-hover:top-1/2'>
//                           <PiArrowUpRightBold className='absolute h-5 w-5' />
//                         </div>
//                       </div> */}
//                   </div>
//                 </Link>
//                 <Link href='#!' className='group relative flex flex-col gap-4'>
//                   <h1 className='text-5xl font-extrabold'>Aurora</h1>
//                   <div className='relative mb-6'>
//                     <div className='absolute -bottom-3 left-1/2 h-10 w-11/12 -translate-x-1/2 rounded-3xl bg-dark opacity-20'>
//                       <div className='absolute -bottom-3 left-1/2 h-10 w-11/12 -translate-x-1/2 rounded-3xl bg-dark opacity-40'></div>
//                     </div>
//                     <div className='relative aspect-[3/2] w-full overflow-hidden rounded-3xl bg-white md:aspect-video'>
//                       {/* bg mask */}
//                       {/* <div className='absolute bottom-0 left-0 right-0 top-0 scale-110 overflow-hidden opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100'>
//                         <div className='absolute bottom-0 left-0 right-0 top-0 z-10 bg-black/30 backdrop-blur-[8px]' />
//                         <Image
//                           src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
//                           alt=''
//                           fill
//                           className='object-cover object-top'
//                         />
//                       </div> */}
//                       <div className='relative z-30 h-full w-full rounded-2xl shadow-2xl'>
//                         <Image
//                           src='https://themes.getbootstrap.com/wp-content/uploads/2022/11/phoenix-v1.18.0.jpg'
//                           alt=''
//                           fill
//                           className='rounded-2xl object-cover object-top'
//                         />
//                         {/* <div className='absolute bottom-5 left-5'>
//                         <h1 className='rounded-3xl bg-white p-4  text-5xl font-extrabold tracking-tight text-black mix-blend-screen shadow-2xl'>
//                           Falcon
//                         </h1>
//                       </div> */}
//                       </div>
//                     </div>
//                   </div>
//                   <div className='flex justify-between px-4'>
//                     <div>
//                       <p className='text font-normal text-black/60'>
//                         001 — Bootstrap Admin template
//                       </p>
//                       {/* <h1 className='text-3xl'>Phoenix</h1> */}
//                     </div>
//                     {/* <div className='group relative h-12 w-12 overflow-hidden rounded-full border text-black'>
//                         <PiArrowUpRightBold className='text-dark-blue absolute left-1/2 top-1/2 inline-block h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//                         <div className='text-dark-blue absolute left-[-25%] top-[125%] flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition-all group-hover:left-1/2 group-hover:top-1/2'>
//                           <PiArrowUpRightBold className='absolute h-5 w-5' />
//                         </div>
//                       </div> */}
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section> */}
