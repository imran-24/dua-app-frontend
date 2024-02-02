'use client'
import {useMemo} from 'react'
import { usePathname } from 'next/navigation'
import { BookMarked, BookOpen, Home, LayoutGrid, LibraryBig, Lightbulb, PackagePlus } from 'lucide-react';



const useRoutes = () =>{
    const routes = useMemo(
      () => [
        {
          label: "Home",
          href: "#",
          icon: Home,
        },
        {
          label: "All Duas",
          href: "#",
          icon: LayoutGrid,
        },
        {
          label: "Memorize",
          href: "#",
          icon: Lightbulb,
        },
        {
          label: "Bookmark",
          href: "#",
          icon: BookMarked,
        },
        {
          label: "Ruqyah",
          href: "#",
          icon: PackagePlus,
        },
        {
          label: "Dua Info",
          href: "#",
          icon: LibraryBig,
        },
        {
          label: "Books",
          href: "#",
          icon: BookOpen,
        },
      ],
      []
    );

    return routes;
}

export default useRoutes;