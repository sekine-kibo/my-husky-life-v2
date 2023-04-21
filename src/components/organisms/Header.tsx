import React, { FC } from 'react'
import OuterFrame from '../atoms/OuterFrame'
import Navbar from '../molecules/Navbar'
import NavbarButton from '../molecules/NavbarButton'
import ThemeButton from '../atoms/ThemeButton'

const Header: FC = () => {
  return (
    <header>
      <OuterFrame>
        <div className='flex items-center justify-end gap-2 px-2 pt-6 md:justify-center'>
          <Navbar />
          <NavbarButton />
          <ThemeButton />
        </div>
      </OuterFrame>
    </header>
  )
}

export default Header
