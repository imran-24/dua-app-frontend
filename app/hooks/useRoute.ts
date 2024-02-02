'use client'
import {useMemo} from 'react'
import { usePathname } from 'next/navigation'
import { BookMarked, BookOpen, Home, LayoutGrid, LibraryBig, Lightbulb, PackagePlus } from 'lucide-react';



const useRoutes = () =>{
    const pathname = usePathname();

    const routes = useMemo(
      () => [
        {
          label: "Home",
          href: "/home",
          icon: Home,
        },
        {
          label: "All Duas",
          href: "/all-duas",
          icon: LayoutGrid,
        },
        {
          label: "Memorize",
          href: "/memorize",
          icon: Lightbulb,
        },
        {
          label: "Bookmark",
          href: "/bookmark",
          icon: BookMarked,
        },
        {
          label: "Ruqyah",
          href: "/ruqyah",
          icon: PackagePlus,
        },
        {
          label: "Dua Info",
          href: "/dua-info",
          icon: LibraryBig,
        },
        {
          label: "Books",
          href: "/books",
          icon: BookOpen,
        },
      ],
      [pathname]
    );

    return routes;
}

export default useRoutes;