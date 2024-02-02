'use client'

import clsx from "clsx"
import { LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
import { useState } from "react"

interface CategoryCardProps{
    id: number,
    icon: string,
    category: string,
    subcategory: number,
    onExpand: ()=> void
}


const CategoryCard = ({onExpand, icon, id, category, subcategory}: CategoryCardProps) => {

  const searchParams = useSearchParams()
  const isActive = id.toString() === searchParams?.get('cat');
  
  return (
    <>
    <Link href={`/duas?cat=${id}`}
    role="button"
    onClick={onExpand}
    className='w-full'>
        <div className={clsx(`flex items-center p-2 space-x-4  rounded-lg hover:bg-gray-100 transition duration-100 ease-out`, isActive && 'bg-gray-100')}>
            <div className='h-10 w-10 bg-gray-100 flex items-center justify-center rounded-lg'>
                <Image 
                src={`/category/${icon}.svg`} 
                width={30} 
                height={30} 
                className='shrink-0' 
                alt="icon" 
                />
            </div>
            <div>
                <p className='text-black text-sm font-medium'>{category}</p>
                <span className='text-xs text-neutral-400'>Subcategory: {subcategory}</span>
            </div>
        </div>
    </Link>

    </>
  )
}

export default CategoryCard