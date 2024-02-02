'use client'

import { Loader } from "lucide-react"

interface LoadingProps{
    large?: boolean
}

const Loading = ({large}: LoadingProps) => {
  return (
    <div className="h-full flex items-center justify-center w-full">
        <Loader size={large ? 26 : 20} className="text-green-500 animate-spin " />
    </div>
  )
}

export default Loading