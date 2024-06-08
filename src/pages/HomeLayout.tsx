import React from "react";

import HomeBg from "../assets/home_bg.png";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black h-screen">
      <div className="max-w-lg bg-red-700 mx-auto relative h-screen">
        <img src={HomeBg} className="absolute mt-32 w-full" alt="background" />
        {children}
      </div>
    </div>
  );
}
