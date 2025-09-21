// import { useState } from "react";
// import Sidebar from "./sidebar";
// import Blogs from "./blogs";
// import Banners from "./banners";
// import Games from "./games";

// const AdminLayout = () => {
//   const [activeTab, setActiveTab] = useState("blogs");

//   const blogs: any[] = [];
//   const banners: any[] = [];
//   const games: any[] = [];

//   return (
//     <div className="flex h-screen">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="flex-1 bg-gray-100 overflow-y-auto p-6">
//         {activeTab === "blogs" && <Blogs blogs={blogs} />}
//         {activeTab === "banners" && <Banners banners={banners} />}
//         {activeTab === "games" && <Games games={games} />}
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;