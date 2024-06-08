import React from "react";
import HomeBg from "../assets/home_bg.png";

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-md bg-brand-grey mx-auto relative h-full flex flex-1">
      <div className="size-full">
        <div className="pt-36 bg-gradient-to-b from-red-700 to-red-400">
          <img className="w-full" src={HomeBg} alt="background" />
        </div>
      </div>
      <div className="absolute h-full mx-auto w-full m-3">{children}</div>
    </div>
  );
}
