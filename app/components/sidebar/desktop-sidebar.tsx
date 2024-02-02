'use client'

import DesktopItem from "./desktop-item"
import Avater from "../avater"
import useRoutes from "@/app/hooks/useRoute"
import Image from "next/image"


const DesktopSidebar = () => {

  const routes = useRoutes()

  return (
    <>
      
      <div className="
      hidden
      md:fixed
      md:top-4
      md:left-4
      md:z-40
      md:w-20
      md:h-[608px]
      md:bg-white
      md:border-[1px]
      shadow-sm
      rounded-lg
      md:flex
      md:flex-col
      md:justify-evenly
      
      ">

        <nav className="
        flex
        items-center 
        justify-center
        ">
          <div className='
          relative
          overflow-hidden
          h-8
          w-8
          md:h-10
          md:w-10
          rounded-full
          cursor-pointer
          '>
            <Image fill className="shrink-0" src={'/hand-logo.png'} alt='user' />    
          </div>
        </nav>

        <nav className="
          mt-4
          flex
          flex-col 
          justify-between
          ">
            <ul role="list"
            className="flex flex-col items-center space-y-2">
                {routes.map((item)=> (
                    <DesktopItem 
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    
                   />
                ))}
            </ul>

        </nav>

        <nav className="
        flex
        items-center 
        justify-center
        ">
          <div className='
          relative
          overflow-hidden
          h-4
          w-4
          md:h-6
          md:w-6
          cursor-pointer
          '>
            <Image fill src={'/praying.png'} alt='user' />    
          </div>
        </nav>

    </div>
    </>
  )
}

export default DesktopSidebar