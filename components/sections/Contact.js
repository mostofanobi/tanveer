'use client';

import Gmail from '../ui/socials/Gmail';
import Linkedin from '../ui/socials/Linkedin';
import Whatsapp from '../ui/socials/Whatsapp';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 pb-80 pt-60'>
      <h1 className='text-6xl'>stay in touch</h1>
      <div className='flex gap-4'>
        <Gmail />
        <Linkedin />
        <Whatsapp />
      </div>
    </div>
  );
};

export default Contact;
