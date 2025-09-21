// import { Navigate, Outlet } from "react-router-dom";
// import AuthController from "@/controllers/authController";
// import { Loader } from "lucide-react";
// import { Suspense } from "react";

// const ProtectedRoute = () => {
//   const { profile } = AuthController.get();
//   const token = profile?.role === "admin";

//   return token ? (
//     <Suspense fallback={<Loader />}>
//       <Outlet />
//     </Suspense>
//   ) : (
//     <Navigate to="/" />
//   );
// };

// export default ProtectedRoute;

import AuthController from "@/controllers/authController";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const session = AuthController.get();
  // const user = session?.profile;

  // if (user?.role !== "admin") {
  //   return <Navigate to="/" replace />;
  // }
  return children;
};

export default ProtectedRoute;