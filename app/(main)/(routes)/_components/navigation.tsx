'use client'

import Avater from "@/app/components/avater"
import { Input } from "@/app/components/inputs/input"
import { Search } from "lucide-react"

const Navigation = () => {
  return (
    <div className="
    flex 
    items-center 
    text-black 
    justify-between 
    h-16
    px-4
    lg:px-0
    
    ">
        <div className="flex-1">
            <h2 className="text-2xl text-neutral-900 font-sans font-bold ">Duas Page</h2>
        </div>
        <div className="
            lg:mr-52
            mr-3
            flex 
            items-center 
            relative
            ">
            <Input
            type="text"
            className="pr-10 ring-black bg-white border-none outline-none  placeholder:text-sm placeholder:font-light"
            placeholder="Search by dua name"
             />
            <div 
                role="button"  
                className="Z-20 h-9 w-9 absolute right-0 flex items-center justify-center transition rounded-lg hover:bg-gray-200">
                <Search 
                className="h-4 w-4 text-neutral-500 " />
            </div>            
        </div>
        <div>
            <Avater />
        </div>
    </div>
  )
}

export default Navigation