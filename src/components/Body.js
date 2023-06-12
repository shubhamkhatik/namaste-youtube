import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Head from "./Head";

const Body = () => {
  return (
    <>
      <Head />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
