import { useTheme } from 'next-themes'
import React, { FC } from 'react'
import { FaDog } from 'react-icons/fa'

const ThemeButton: FC = () => {
  // モード切り替え
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className='flex h-10 w-10 items-center justify-center rounded-3xl bg-white/90 text-sm text-neutral-900 shadow-sm shadow-blue-700/50 ring-1 ring-neutral-300/80 backdrop-blur hover:text-blue-600/75 dark:bg-neutral-900/90 dark:text-neutral-50 dark:ring-neutral-300/20 hover:dark:text-blue-600/75 md:hidden'
    >
      <span className='sr-only'>Toggle Mode Button</span>
      <FaDog />
    </button>
  )
}

export default ThemeButton
