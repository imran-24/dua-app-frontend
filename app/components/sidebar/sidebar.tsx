
import DesktopSidebar from "./desktop-sidebar"
import MobileFooter from "./mobile-footer"

async function Sidebar({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="h-full relative">
          <DesktopSidebar />
          <MobileFooter />
          <main 
          className="
          absolute
          md:left-28
          md:right-4
          md:top-0
          inset-x-0
          top-0
          ">
          {children}
          </main>
        </div>

    )
  }
  
export default Sidebar