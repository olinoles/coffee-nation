import React from "react";
import HomeBg from "../assets/home_bg.png";

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-md bg-gradient-to-b from-red-700 to-red-400 mx-auto relative h-full flex flex-1">
      <div className="flex flex-col pt-36 size-full">
        <img src={HomeBg} className="" alt="background" />
        <div className="bg-brand-grey flex-1"></div>
      </div>
      <div className="absolute mx-auto w-full m-3">{children}</div>
    </div>
  );
}
