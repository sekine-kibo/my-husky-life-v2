import { AnimatePresence, motion } from 'framer-motion'
import React, { FC } from 'react'

const NavModal: FC<any> = ({ isModalOpen, toggleModal }) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          key='NavModal'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* モーダルの背景 */}
          <div
            className='fixed inset-0 z-10 bg-neutral-50/60 dark:bg-black/90'
            onClick={toggleModal}
          />
          {/* モーダル */}
          <div className='fixed inset-4 z-10 h-52 w-11/12 rounded-3xl bg-white/80 ring-1 ring-neutral-300/80 dark:bg-neutral-900/80'>
            中身
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NavModal
