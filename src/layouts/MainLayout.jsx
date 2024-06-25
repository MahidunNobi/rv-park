import { Outlet } from "react-router-dom";
import Navbar from "../componants/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="min-w-[100vw] lg:min-w-[98vw] min-h-screen bg-white flex flex-col justify-between">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
