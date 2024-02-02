'use client'

import { Moon, Search } from "lucide-react"
import { Input } from "../inputs/input"
import CategoryCard from "./category-card"
import { useEffect, useState } from "react"
import axios from "axios"
import { Category } from "@/type"
import SubCategoryList from "./sub-category-list"
import Loading from "@/app/(main)/(routes)/loading"
import { useRouter } from "next/navigation"

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [subCat, setSubCat] = useState<Record<string, boolean>>({})
  const router = useRouter()

  useEffect(() => {
    if(categories.length === 0) return ;
    setSubCat({[categories[0]?.cat_id] : true})
    router.push(`/duas/?cat=${categories[0]?.cat_id}`)
  },[categories, router])

  const handleExpand = (id: number)=>{
    setSubCat(prev => ({
        ...prev,
        [id]: !prev[id]
    }))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error state or log the error as needed
      }
    };

    fetchData();
  }, []);
  
  return (
    <div 
    className='
    hidden
    lg:block 
    xl:col-span-3
    lg:col-span-4
    h-fit
    md:bg-white
    md:border-[1px]
    shadow-sm
    rounded-lg
    overflow-hidden
    '>
        <div className="py-4 mb-3 rounded-t bg-green-500">
            <h2 className="text-xl text-center text-white font-semibold">Category</h2>
        </div>
        <div className="flex flex-col px-3 pb-4 space-y-3">
            <div className="
                flex 
                items-center 
                relative
                ">
                <Input
                type="text"
                className="pl-10 ring-black placeholder:text-sm placeholder:font-light"
                placeholder="Search by dua name"
                />
                <div 
                    role="button"  
                    className="Z-20 h-9 w-9 absolute left-0 flex items-center justify-center transition rounded-lg ">
                    <Search 
                    className="h-4 w-4 text-neutral-500 " />
                </div>            
            </div>
            <div className="md:h-[420px]  overflow-y-auto">
                { categories.length == 0 
                ?   <Loading  />
                :   categories.map(category => (
                    <div key={`${category.cat_name_en}-${category.cat_id}`}>
                        <CategoryCard
                        onExpand={()=> handleExpand(category.cat_id)}
                        id={category.cat_id}
                        category={category.cat_name_en}
                        icon={category.cat_icon}
                        subcategory={category.no_of_subcat}
                        />
                        {subCat[category.cat_id] && 
                            <SubCategoryList id={category.cat_id} />
                        }
                    </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default CategoryList