import { LayoutProps } from '@/types/common'
import React, { FC } from 'react'
import Header from '../organisms/Header'
import BackGround from '../atoms/BackGround'

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <BackGround />
      <Header />
      <div className='relative'>{children}</div>
    </>
  )
}

export default Layout
