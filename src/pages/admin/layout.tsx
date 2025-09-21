import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import { useState } from "react";
import Header from "./header";

function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <SideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        <Header setOpen={setOpenSidebar} />
        <main className="flex-1 flex-col flex bg-muted/40">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;