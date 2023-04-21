import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import NavModal from './NavModal'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

const NavbarButton = () => {
  // モーダルの開閉
  const [isModalOpen, setModalOpen] = useState(false)
  const toggleModal = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <>
      <button
        className='flex h-10 items-center justify-center rounded-3xl bg-white/90 px-7 text-sm text-neutral-900 shadow-sm shadow-blue-700/50 ring-1 ring-neutral-300/80 backdrop-blur hover:text-blue-600/75 dark:bg-neutral-900/90 dark:text-neutral-50 dark:ring-neutral-300/20 hover:dark:text-blue-600/75 md:hidden'
        onClick={toggleModal}
      >
        Menu
        <FaChevronDown className='ml-2' />
      </button>
      {isModalOpen && (
        <NavModal toggleModal={toggleModal} isModalOpen={isModalOpen} />
      )}
    </>
  )
}

export default NavbarButton
