'use client'
import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface DesktopItemProps{
  label: string,
  icon: LucideIcon,
  onClick?: ()=> void,
  active?: boolean,
  href: string
}
const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  href
}) => {
  return (
   <li >
      <Link href={href}
      className={
        clsx(`
        group
        flex
        gap-x-3
        text-sm
        p-3 
        leading-6
        rounded-full
        hover:text-black
        bg-gray-100`,
        'text-gray-500')
      }>
        <Icon className='h-5 w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
        <span className='sr-only'>{label}</span>
      </Link>
   </li>
  )
}

export default DesktopItem