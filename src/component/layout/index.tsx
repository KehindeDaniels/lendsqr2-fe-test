import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../nav-bar";
import SideBar from "../side-bar";

import "./layout.scss";

const Layout: React.FC = () => (
  <div className="layout">
    <div className="navBar">
      <NavBar />
    </div>
    <div className="container">
      <div className="sidebar-layout">
        <SideBar />
      </div>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;
