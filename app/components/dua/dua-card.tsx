'use client'

import clsx from "clsx";
import { AlertOctagon, AudioLines, Bookmark, Copy, Lightbulb, LucideIcon, Play, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {  useRef, useState } from "react";


interface DuaCardProps{
    referenceEn: string;
    serial: number;
    duaName: string;
    topEn: string;
    duaAradic: string;
    transliterationEn: string;
    translationEn: string;
    audio: string
}

const DuaCard = ({duaAradic, duaName, referenceEn, serial, topEn, translationEn, transliterationEn, audio}: DuaCardProps) => {
    const playerRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false)

    const onPlay = () => {
        if (!playerRef.current) return;
        togglePlay()  
        // playerRef.current.addEventListener("play", handlePlay);
        // playerRef.current.addEventListener("pause", handlePause);
  };

 
    
      const togglePlay = () => {
        if (!playerRef.current) return;

        if (playerRef.current.paused) {
            playerRef.current.play();
            setPlaying(true)
            
        }else{
            setPlaying(false)
            playerRef.current.pause();
        }
    }

    return (
    <Link href={''} className="space-y-2">
        <div className="
        inline-flex 
        w-full
        text-xs 
        md:text-sm
        border-[1px]
        shadow-sm
        bg-white
        rounded-lg p-4">
            <p className="text-black"><span className="text-green-500 font-medium">Section: </span> {duaName}</p>
        </div>
        <div className="
            border-[1px]
            shadow-sm
            bg-white
            rounded-lg p-4">
            <div className="flex flex-col space-y-4 lg:space-y-6">
                <div className="flex items-center ">
                    <Image width={40} height={40} className="object-contain mr-2" alt="allah" src={'/allah.png'} />
                    <p className="text-green-500 text-sm md:text-base  font-medium">{serial}. {duaName}</p>
                </div>
                <p className="md:text-lg">{topEn}</p>
                <p className="text-black text-2xl md:text-4xl tracking-wider leading-relaxed">{duaAradic}</p>
                {transliterationEn && 
                <div className="inline-flex w-full   md:text-lg">
                    <p className="text-black italic"><span className=" font-medium">Transliteration: </span> {transliterationEn}</p>
                </div>}
                {translationEn &&
                <div className="inline-flex w-full md:text-lg">
                    <p className="text-black"><span className=" font-medium">Translation: </span> {translationEn}</p>
                </div>}
                {referenceEn &&
                <div>
                    <span className="text-green-500 font-medium">Reference:</span>
                    <p className="md:text-lg">{referenceEn}</p>
                </div>}
                <div>
                {audio &&
                <div>
                    <audio controls className="hidden" ref={playerRef}>
                        <source src={audio} type="audio/mp3" />
                    </audio>
                    <div
                    role="button"
                    onClick={onPlay}
                    className={clsx("rounded-full h-10 w-10 flex items-center justify-center transition  bg-green-500 hover:bg-green-600",
                    playing && "bg-green-600")}>
                       {playing 
                        ? <AudioLines size={16} className="ml-0.5 fill-white text-white" />
                        : <Play size={16} className="ml-0.5 fill-white text-white" />}
                    </div>
                </div>
                }
                </div>   
            </div>
            <div className="w-full flex items-center justify-end space-x-2 mt-6">
                <div
                    role="button"
                    className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'>
                    <Copy className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
                </div>
                <div
                    role="button"
                    className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'>
                    <Bookmark className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
                </div>
                <div
                    role="button"
                    className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'>
                    <Lightbulb className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
                </div>
                <div
                    role="button"
                    className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'>
                    <Share2 className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
                </div>
                <div
                    role="button"
                    className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'>
                    <AlertOctagon className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
                </div>
            </div>
        </div>
    </Link>
  )
}

export default DuaCard