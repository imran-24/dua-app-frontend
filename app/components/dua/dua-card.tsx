'use client'

import { AlertOctagon, Bookmark, Copy, Lightbulb, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


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
    
    return (
    <Link href={''} className="space-y-2">
        <div className="inline-flex w-full text-sm bg-white rounded-lg p-4">
            <p className="text-black"><span className="text-green-500 font-medium">Section: </span> {duaName}</p>
        </div>
        <div className="rounded-lg bg-white p-4">
            <div className="flex flex-col  space-y-6">
                <div className="flex items-center ">
                    <Image width={40} height={40} className="object-contain mr-2" alt="allah" src={'/allah.png'} />
                    <p className="text-green-500 font-medium">{serial}. {duaName}</p>
                </div>
                <p className="text-lg">{topEn}</p>
                <p className="text-black text-4xl tracking-wider leading-relaxed">{duaAradic}</p>
                {transliterationEn && 
                <div className="inline-flex w-full text-lg">
                    <p className="text-black italic"><span className=" font-medium">Transliteration: </span> {transliterationEn}</p>
                </div>}
                {translationEn &&
                <div className="inline-flex w-full text-lg">
                    <p className="text-black"><span className=" font-medium">Translation: </span> {translationEn}</p>
                </div>}
                <div>
                    <span className="text-green-500 font-medium">Reference:</span>
                    <p className="text-lg">{referenceEn}</p>
                </div>
                <div>
                {audio &&
                <audio controls>
                    <source src={audio} type="audio/mp3" />
                </audio>}
                </div>
                
            </div>
            <div className="w-full flex items-center justify-end space-x-2">
                <div
                    role="button"
                    className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'>
                    <Copy className='h-5 w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
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
                    <Bookmark className='h-5 w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
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
                    <Lightbulb className='h-5 w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
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
                    <Share2 className='h-5 w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
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
                    <AlertOctagon className='h-5 w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
                </div>
            </div>
        </div>
    </Link>
  )
}

export default DuaCard