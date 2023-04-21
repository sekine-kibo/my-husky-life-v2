import React, { FC } from 'react'

const BackGround: FC = () => {
  return (
    <div className='fixed inset-0 flex justify-center sm:px-8'>
      <div className='flex w-full max-w-7xl justify-center lg:px-8'>
        <div className='w-full bg-white ring-1 ring-neutral-300/20 dark:bg-neutral-900'></div>
      </div>
    </div>
  )
}

export default BackGround
