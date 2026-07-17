import { Outlet } from "react-router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex">
    <Sidebar />

      <main className="flex-1 p-6">
        <Outlet />
      </main>
      </div>
    </>
  );
};

export default MainLayout;
