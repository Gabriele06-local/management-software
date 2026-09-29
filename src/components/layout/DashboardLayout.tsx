import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MobileNavbar } from "./MobileNavbar";

export function DashboardLayout() {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 min-w-0 p-6 pb-20 md:pb-6">
            <Outlet />
          </main>
        </div>
      </div>
      <MobileNavbar />
    </>
  );
}
