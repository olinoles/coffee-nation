import React from "react";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="App bg-brand-grey flex h-screen">
      <Outlet />
    </div>
  );
}

export default Root;
