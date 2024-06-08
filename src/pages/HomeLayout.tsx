import React from "react";

import HomeBg from "../assets/home_bg.png";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-lg bg-red-700 mx-auto relative h-full flex flex-1">
      <div className="flex flex-col absolute pt-32 size-full">
        <img src={HomeBg} className="" alt="background" />
        <div className="bg-brand-grey flex-1"></div>
      </div>
      {children}
    </div>
  );
}
