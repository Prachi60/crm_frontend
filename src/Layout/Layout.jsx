import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import Header from "../Component/Header";


const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 p-0 position-fixed sidebar-wrapper">
          <Sidebar />
        </div>

        <div className="col-lg-10 p-0 offset-lg-2 p-0 main-content">
           <Header /> 

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
