import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import SignupModal from "@/components/SignupModal";

function ClientLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <Header />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
      <SignupModal />
      <Footer />
    </div>
  );
}

export default ClientLayout;