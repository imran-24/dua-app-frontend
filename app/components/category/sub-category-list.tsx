'use client'

import { SubCategory } from "@/type"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

interface SubCategoryListProps{
    id: number
}

const SubCategoryList = ({id}: SubCategoryListProps) => {
  const [subCategories, setSubCategories] = useState<SubCategory[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sub-categories/${id}`);
        setTimeout(()=> setSubCategories(response.data),300)
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error state or log the error as needed
      }
    };

    fetchData();
  }, [id]);
  
  return (
    <div className="pl-3 py-3 transition-all ease-in-out duration-300">
      <ul className="pl-3 border-l border-green-500 border-dotted  space-y-3 ">
        {
          subCategories.map(sub => (
            <li key={`${sub.cat_id}-${sub.subcat_id}`} className="list-disc text-green-500">
                <Link href={`/duas/?cat=${id}&sub=${sub?.subcat_id}`}>
                  <span className="text-xs text-black font-medium">{sub.subcat_name_en}</span>
                </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SubCategoryList