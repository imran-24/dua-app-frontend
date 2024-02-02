'use client'

import useRoutes from "@/app/hooks/useRoute"
import MobileItem from "./mobile-item"

const MobileFooter = () => {
  const routes = useRoutes()
  
  return (
    <div className='
    fixed
    bottom-0
    z-40
    w-full
    bg-white
    flex
    items-center 
    justify-between
    px-4
    md:hidden
    border-t
    '>
        {
            routes.map((item)=>(
                <MobileItem 
                key={item.label}
                label={item.label}
                href={item.href}
                icon={item.icon}/>
            ))
        }
    </div>
  )
}

export default MobileFooter