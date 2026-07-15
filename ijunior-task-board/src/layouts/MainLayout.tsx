import { Outlet } from "react-router";
import React from "react";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
