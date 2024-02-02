import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useCallback } from 'react'

interface MobileItemProps{
    label: string,
    href: string,
    icon: LucideIcon
}
const MobileItem: React.FC<MobileItemProps> = ({
    label,
    href,
    icon: Icon,
    
}) => {
    
  return (
    <Link href={href}
      className={
        clsx(`
        group
        flex
        justify-center 
        gap-x-3
        text-sm
        w-full
        p-3 
        leading-6
        rounded-md
        text-gray-500
        hover:text-black
        transition-all
        hover:bg-gray-100`,
       )
      }>
        <Icon className='h-5 w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
        <span className='sr-only'>{label}</span>
      </Link>
  )
}

export default MobileItem