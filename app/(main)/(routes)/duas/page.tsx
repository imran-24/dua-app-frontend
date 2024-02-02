import CategoryList from "@/app/components/category/category-list"
import DuaList from "@/app/components/dua/dualist"
import Settings from "@/app/components/settings/settings"



const MainPage = () => {
  return (
    <div className='text-black h-full'>
      <div className='grid grid-cols-12 gap-x-4 h-full'>
        <CategoryList />
        <DuaList />
        <Settings />
      </div>      
    </div>
  )
}

export default MainPage