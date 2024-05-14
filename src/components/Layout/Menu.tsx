/// <reference types="vite-plugin-svgr/client" />

import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

import BackpackIcon from '@assets/icons/backpack-filled.svg?react'
import HomeIcon from '@assets/icons/home-filled.svg?react'
import LatterIcon from '@assets/icons/letter-filled.svg?react'
import UserIcon from '@assets/icons/user-filled.svg?react'
import classNames from '@functions/classNames'

const menus: { label: string; icon: ReactNode; path: string }[] = [
  { label: 'Home', icon: <HomeIcon />, path: '/' },
  { label: 'About', icon: <UserIcon />, path: '/about' },
  { label: 'Portfolio', icon: <BackpackIcon />, path: '/portfolio' },
  { label: 'Contact', icon: <LatterIcon />, path: '/contact' },
]

function Menu() {
  const location = useLocation()

  const menuActive = (path: string) => {
    if (path === location.pathname) return ' !bg-primary'
    return ''
  }

  return (
    <nav
      className={classNames(
        'fixed right-2 top-1/2 z-50 translate-y-[-50%] flex flex-col gap-5',
        'max-md:flex max-md:flex-row max-md:justify-around',
        'max-md:bottom-0 max-md:top-auto max-md:right-0 max-md:translate-y-0',
        'max-md:w-screen px-5 py-3',
        'max-md:bg-[#2b2a2a]'
      )}>
      {menus.map((menu) => (
        <Link key={menu.path} to={menu.path}>
          <div
            className={classNames(
              'flex items-center justify-center',
              'w-12 h-12 rounded-[50%] bg-[#2b2a2a] text-xl text-white cursor-pointer',
              'relative overflow-hidden group',
              'duration-300',
              'hover:bg-primary hover:overflow-visible',
              'max-md:bg-[#444]',
              menuActive(menu.path)
            )}>
            {menu.icon}
            <div
              className={classNames(
                'absolute top-0 right-0 -z-10',
                'flex items-center',
                'h-full pl-4 pr-6',
                'uppercase text-sm font-semibold',
                'rounded-full bg-primary opacity-0',
                'group-hover:-translate-x-6 group-hover:opacity-100 group-hover:rounded-tr-none group-hover:rounded-br-none',
                'max-md:hidden'
              )}
              style={{ transition: 'all 300ms' }}>
              {menu.label}
            </div>
          </div>
        </Link>
      ))}
    </nav>
  )
}

export default Menu
