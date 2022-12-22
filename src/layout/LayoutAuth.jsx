import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../../styles/pages/login/login.module.scss";

const LayoutAuth = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
