'use client'

import React, { useEffect, useRef, useState } from 'react'
import DuaCard from './dua-card'
import axios from 'axios';
import { Dua } from '@/type';
import Loading from '@/app/(main)/(routes)/loading';
import { useSearchParams } from 'next/navigation';

const DuaList = () => {

    const searchParams = useSearchParams()
    const categoryId = searchParams.get('cat');
    const scrollRef = useRef<HTMLDivElement>(null)
    const [duas, setDuas] = useState<Dua[]>([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          setDuas([])
          const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/duas/${categoryId}`);
          setDuas(response.data);
          scrollRef.current?.scrollTop
          
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle error state or log the error as needed
        }
      };
  
      fetchData();
    }, [categoryId]);
    
  return (
    <div 
    style={{ height: 'calc(100vh - 4rem)' }}
    className='
    pb-12
    pt-2
    md:p-0
    col-span-12
    lg:col-span-8
    xl:col-span-7
    overflow-y-auto
    '>
        <div ref={scrollRef} className='scroll-smooth md:h-full flex flex-col gap-y-2 overflow-auto'>
            {
              duas.length == 0
              ? <Loading large />
              : duas.map(dua => (
                    <DuaCard
                    key={`${dua.cat_id}-${dua.id}`}
                    serial={dua.dua_id}
                    referenceEn={dua.refference_en}
                    duaName={dua.dua_name_en}
                    topEn={dua.top_en}
                    duaAradic={dua.dua_arabic}
                    transliterationEn={dua.transliteration_en}
                    translationEn={dua.translation_en}
                    audio={dua.audio}
                    />
        
                ))
            }
        </div>
    </div>
  )
}

export default DuaList