import { ReactComponent as StarSvg } from "../assets/star.svg";
import { ReactComponent as CoffeeCupSvg } from "../assets/coffee_cup.svg";
import { ReactComponent as DiscountSvg } from "../assets/discount.svg";

export function LevelProgress() {
  return (
    <div className="flex items-stretch w-full gap-5">
      <div className="relative flex items-center justify-center">
        <StarSvg className="mx-auto size-12" />
        <span className="absolute left-1/2 top-1/2 text-yellow-800 text-xl pt-1 -translate-y-1/2 -translate-x-1/2 font-semibold">
          4
        </span>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <span className="text-sm font-semibold">447 / 550 until level 5!</span>
        <div className="w-full rounded-full bg-gray-100 h-2">
          <div
            className="h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"
            style={{ width: "81%" }}
          ></div>
        </div>
        <div className="flex gap-3">
          <CoffeeCupSvg className="size-4" />
          <span className="text-xs text-gray-400 font-medium">
            + 1 free coffee on level up
          </span>
        </div>
      </div>

      <div className="bg-gray-100 py-1 px-2 gap-1 flex flex-col rounded-lg items-center justify-center">
        <DiscountSvg className="size-10" />
        <span className="text-xs text-black font-bold whitespace-nowrap">
          15% OFF
        </span>
      </div>
    </div>
  );
}
