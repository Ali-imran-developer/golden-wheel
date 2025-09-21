import {
  BadgeCheck,
  BookAIcon,
  ChartNoAxesCombined,
  Gamepad2,
  Image,
  LayoutDashboard,
  Phone,
  ShoppingBasket,
  Star,
  StarOffIcon,
  User2,
} from "lucide-react";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ensureArray } from "@/helper-functions/use-formater";

const adminSidebarMenuItems = [
  {
    id: "blogs",
    label: "Blogs",
    path: "/admin/blogs",
    icon: <BookAIcon />,
  },
  {
    id: "banners",
    label: "Banners",
    path: "/admin/banners",
    icon: <Image />,
  },
  {
    id: "games",
    label: "Games",
    path: "/admin/games",
    icon: <Gamepad2 />,
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="mt-8 flex-col flex gap-4">
      {ensureArray(adminSidebarMenuItems)?.map((menuItem) => {
        const isActive = location.pathname === menuItem.path;

        return (
          <div key={menuItem.id} className={`flex cursor-pointer text-xl text-black items-center gap-2 rounded-md px-3 py-2 ${isActive ? "bg-gray-900 font-semibold !text-white"  : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
            onClick={() => { navigate(menuItem.path); setOpen ? setOpen(false) : null; }}>
            {menuItem?.icon}
            <span>{menuItem?.label}</span>
          </div>
        );
      })}
    </nav>
  );
}

function AdminSideBar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <ChartNoAxesCombined size={30} />
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex bg-white">
        <div onClick={() => navigate("/admin/dashboard")} className="flex cursor-pointer items-center gap-2">
          <ChartNoAxesCombined size={30} className="text-black" />
          <h1 className="text-2xl font-extrabold text-black">Admin Panel</h1>
        </div>
        <MenuItems setOpen={undefined} />
      </aside>
    </Fragment>
  );
}

export default AdminSideBar;