import React from "react";
import PageBg from "../assets/page_bg.png";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-md bg-gradient-to-b from-red-700 to-red-400 mx-auto relative h-full flex flex-1">
      <div className="size-full">
        <div className="bottom-0 absolute">
          <img className="w-full" src={PageBg} alt="background" />
        </div>
      </div>
      <div className="absolute h-full mx-auto w-full m-3">{children}</div>
    </div>
  );
}
