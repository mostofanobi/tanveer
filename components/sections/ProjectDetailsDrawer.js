import React from 'react';

import classNames from 'classnames';

const ProjectDetailsDrawer = ({ isOpen, close }) => {
  return (
    <div
      className='relative z-10'
      aria-labelledby='slide-over-title'
      role='dialog'
      aria-modal='true'
    >
      {isOpen && (
        <div onClick={close} className='fixed inset-0 bg-black/50'></div>
      )}

      <div className='pointer-events-none fixed inset-0 overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='fixed bottom-0 flex max-w-full'>
            <div
              className={classNames({
                'translate-y-full': !isOpen,
                'translate-y-0': isOpen,
                'pointer-events-auto h-[90vh] w-screen transform overflow-hidden transition ease-in-out': true
              })}
            >
              <div className='h-full overflow-y-auto rounded-t-3xl bg-white py-6 shadow-xl'>
                <div className='px-4 sm:px-6'>
                  <div className='flex items-start justify-between'>
                    <h2
                      className='text-base font-semibold leading-6 text-gray-900'
                      id='slide-over-title'
                    >
                      Panel title
                    </h2>
                    <div className='ml-3 flex h-7 items-center'>
                      <button
                        type='button'
                        onClick={close}
                        className='relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      >
                        <span className='absolute -inset-2.5'></span>
                        <span className='sr-only'>Close panel</span>
                        <svg
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='relative mt-6 px-4 sm:px-6'>
                  {/* <!-- Your content --> */}
                  <h1 className='text-7xl'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla iure magnam nobis vitae, maiores explicabo quae
                    voluptate nihil suscipit sequi, repellat veritatis non
                    dolore tempora exercitationem itaque officiis perspiciatis
                    repudiandae cumque pariatur alias eaque. Ratione quisquam
                    doloremque corporis earum blanditiis voluptates deserunt
                    possimus quos neque, ad maiores cumque accusantium fugit ex
                    enim placeat optio quis. Vitae error perspiciatis porro
                    explicabo mollitia, ipsam, nemo eum numquam doloremque animi
                    ratione ab ut ducimus optio voluptas laudantium aliquam
                    facilis excepturi at sapiente tempore architecto
                    consectetur! Sunt voluptatibus reprehenderit sint, corporis
                    magni voluptatum porro eligendi. Obcaecati, cumque!
                    Praesentium tempora dolorem deserunt, iure voluptatem
                    voluptatum exercitationem quo, accusamus culpa deleniti
                    ducimus ullam sint delectus quam explicabo. Repellendus
                    totam magnam doloribus modi blanditiis, nisi cupiditate
                    quasi perferendis quibusdam laboriosam, hic reiciendis
                    dolores saepe. Dolorem, rem quisquam? Repellat id commodi
                    fuga nulla praesentium ipsa laboriosam fugit rem eveniet
                    asperiores quibusdam debitis impedit blanditiis veniam
                    accusamus labore velit, repellendus quasi dicta. Rerum ex
                    officiis ratione libero natus doloribus mollitia, illum
                    asperiores. Harum illum architecto quis, tempore rerum omnis
                    minus error voluptatum nobis laudantium beatae accusantium
                    quaerat, magni delectus ipsa qui perspiciatis dolores, vitae
                    modi est amet sapiente. At a explicabo reprehenderit fuga?
                    Harum necessitatibus dolorem, magnam accusamus minima
                    architecto molestiae cumque nam omnis rerum ratione possimus
                    aut libero, quia, ullam hic. Nulla alias delectus laborum
                    debitis mollitia eum error reiciendis provident veritatis
                    repellat. Blanditiis neque, aperiam voluptate deserunt culpa
                    aspernatur id dolorum est ut. Est ad voluptatem quis fuga.
                    Dolorum officiis, iure maxime distinctio fugiat non eligendi
                    earum quam? Id culpa perferendis enim repellat nam doloribus
                    quis ut eos provident saepe iste quasi labore sapiente dicta
                    vero fuga fugit veniam voluptates accusantium, nihil illo
                    recusandae nesciunt? Officia aliquid alias unde sapiente
                    repellendus, quis velit optio obcaecati quo illo saepe
                    cumque amet iste accusantium, earum neque libero
                    voluptatibus? Ipsam doloremque alias quae voluptates minus
                    numquam dolor iure neque ea officiis. Voluptate nemo, iusto
                    veniam necessitatibus ea soluta pariatur possimus odio
                    provident, vero minus ipsam neque harum temporibus nihil
                    doloribus illo? Iure eos animi sint sapiente quis vel
                    obcaecati! Eaque exercitationem at vitae repellendus
                    consequatur eum, quod, id nam provident temporibus, eius
                    animi illum! Esse, corrupti earum consequuntur dolor rem eos
                    cumque praesentium omnis, accusantium vel ab! Fuga
                    blanditiis omnis assumenda eos nostrum expedita delectus
                    error adipisci consequuntur explicabo. A, qui error dicta
                    ipsum est accusamus odio esse odit neque molestias, ratione
                    expedita illo nulla modi sint, dolorum minima facilis?
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsDrawer;
