import { ReactComponent as StarSvg } from "../assets/star.svg";

export function AppHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-white rounded-full py-0.5 flex items-center shadow-md">
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
          className="rounded-full size-10 border-white border-2 shadow-md"
          alt="profile"
        />
      </div>
    </div>
  );
}
