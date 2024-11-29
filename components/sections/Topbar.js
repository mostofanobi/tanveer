import { BsCircleFill } from 'react-icons/bs';

import Link from 'next/link';

const Topbar = () => {
  return (
    <div className='fixed left-0 top-0 z-0 h-16 w-full '>
      <div className='flex h-full items-center justify-between px-12'>
        <Link href='/' className='text-2xl tracking-wide'>
          Mostofa nobi
        </Link>
        <p>
          Available for freelance work
          <BsCircleFill className='ml-3 inline h-1.5 w-1.5' />
        </p>
      </div>
    </div>
  );
};

export default Topbar;
