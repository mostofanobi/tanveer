'use client';

import Github from '@/components/ui/socials/Github';
import Gmail from '@/components/ui/socials/Gmail';
import Linkedin from '@/components/ui/socials/Linkedin';
import Whatsapp from '@/components/ui/socials/Whatsapp';

const About = () => {
  return (
    <div className='mx-auto mt-20 max-w-screen-2xl'>
      <div className='mb-20 grid grid-cols-2'>
        <div className=''>
          <h1 className='text-7xl leading-[1.2] tracking-tight'>
            <span className='text-accent'> ✦ </span>
            <span className='text-black/30'>I'm </span>
            Mostofa Nobi, <br />
            Web Developer
          </h1>
        </div>
        <div className='text-xl'>
          <p className='font-kumbh mb-6 text-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            vero accusamus iste saepe assumenda, reiciendis, obcaecati sint
            cumque debitis laboriosam voluptatibus velit omnis
          </p>
          <p className='font-kumbh mb-14 text-xl text-black/50'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            vero accusamus iste saepe assumenda, reiciendis, elit. Recusandae
            vero accusamus iste saepe assumenda, reiciendis,
          </p>
          <div className='flex gap-4'>
            <Github />
            <Linkedin />
            <Gmail />
            <Whatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
