import Sidebar from "@/app/components/sidebar/sidebar";
import Navigation from "./_components/navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Sidebar>
      <div className="h-full">
        <Navigation />
        {/* <UserList items={users} /> */}
        {children}
      </div>
    </Sidebar>
  );
}
