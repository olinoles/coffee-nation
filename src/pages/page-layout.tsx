import React from "react";
import PageBg from "../assets/page_bg.png";
import { Link } from "react-router-dom";
import { ReactComponent as StarSvg } from "../assets/star.svg";

export function PageHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-white rounded-full py-0.5 flex items-center">
        <div className="relative ml-3 flex items-center justify-center">
          <StarSvg className="mx-auto size-8" />
          <span className="absolute left-1/2 top-1/2 text-yellow-800 text-lg pt-1 -translate-y-1/2 -translate-x-1/2 font-semibold">
            4
          </span>
        </div>
        <div className="flex flex-col ml-2 mr-7">
          <span className="text-black font-medium">Level 4</span>
          <span className="text-gray-500 font-medium text-xs">456pts</span>
        </div>
      </div>
      <div>
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          className="rounded-full size-10 border-white border-2"
          alt="profile"
        />
      </div>
    </div>
  );
}

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-md bg-gradient-to-b from-red-700 to-red-400 mx-auto relative h-full flex flex-1">
      <div className="size-full">
        <div className="bottom-0 absolute w-full">
          <img className="w-full" src={PageBg} alt="background" />
        </div>
      </div>
      <div className="absolute h-full mx-auto w-full m-3">
        <div className="max-w-lg gap-10 p-4 mx-auto overflow-y-scroll relative h-full flex flex-1 flex-col">
          <div className="bg-white flex p-1 flex-col gap-3 shadow-md rounded-[21px]">
            <PageHeader />
            <hr className="border-gray-300 mx-3 border-dashed my-2" />
            <Link to="/">
              <div className="flex gap-1 mx-3 text-gray-600 font-semibold items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                Back
              </div>
            </Link>
            <div className="p-3">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
