import Link from 'next/link'
import React, { FC } from 'react'
import { navbar } from '../../../public/static/navbar'
import { FaDog, FaHome } from 'react-icons/fa'
import { useTheme } from 'next-themes'

const Navbar: FC = () => {
  // モード切り替え
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className='hidden justify-center md:flex'>
      <ul className='flex max-w-xl items-center justify-center rounded-3xl bg-white/90 px-4 shadow-sm shadow-blue-700/50 ring-1 ring-neutral-300/80 backdrop-blur dark:bg-neutral-900/90 dark:ring-neutral-300/20'>
        {/* Home */}
        <li>
          <Link
            href='/'
            className='block px-3 py-3 text-neutral-900 hover:text-blue-600/75 dark:text-neutral-50 hover:dark:text-blue-600/75'
          >
            <span className='sr-only'>Home</span>
            <FaHome />
          </Link>
        </li>
        {/* Links */}
        {navbar.map((item, i) => (
          <li key={i}>
            <Link
              href={item.href}
              className='block py-2.5 px-3 text-sm text-neutral-900 hover:text-blue-600/75 dark:text-neutral-50 hover:dark:text-blue-600/75'
            >
              {item.name}
            </Link>
          </li>
        ))}
        {/* モード切り替えボタン */}
        <li>
          <button
            onClick={toggleTheme}
            className='px-3 py-3 text-neutral-900 hover:text-blue-600/75 dark:text-neutral-50 hover:dark:text-blue-600/75'
          >
            <span className='sr-only'>Toggle Mode Button</span>
            <FaDog />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
