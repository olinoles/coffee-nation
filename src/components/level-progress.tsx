import { ReactComponent as StarSvg } from "../assets/star.svg";
import { ReactComponent as StarBgSvg } from "../assets/star-bg.svg";
import { ReactComponent as CoffeeCupSvg } from "../assets/coffee_cup.svg";
import { ReactComponent as DiscountSvg } from "../assets/discount.svg";
import DiscountModal from "./discount-modal";
import { useState } from "react";

export function LevelProgress() {
  const [discountModal, setDiscountModalOpen] = useState(true);
  return (
    <div className="flex items-stretch w-full gap-5">
      <div className="relative size-14 mt-1 flex items-center justify-center">
        <div className=" absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
          <StarBgSvg className="size-12 mt-0.5 opacity-75 absolute animate-spin-slow" />
          <StarSvg className="size-12 absolute" />
          <span className=" text-yellow-800 absolute text-xl pt-1 font-semibold">
            4
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <span className="text-sm font-semibold">447 / 550 until level 5!</span>
        <div className="w-full rounded-full bg-gray-100 h-2">
          <div
            className="h-2 bg-gradient-to-r from-green-300 to-green-500 rounded-full"
            style={{ width: "81%" }}
          ></div>
        </div>
        <div className="flex gap-2">
          <CoffeeCupSvg className="size-4" />
          <span className="text-[10px] text-gray-400 font-medium">
            + 1 free coffee on level up
          </span>
        </div>
      </div>

      <div
        className="bg-gray-100 py-1 px-2 gap-1 flex flex-col rounded-lg items-center justify-center"
        onClick={() => setDiscountModalOpen(true)}
      >
        <DiscountSvg className="size-10" />
        <span className="text-xs underline decoration-dashed underline-offset-2 text-black font-bold whitespace-nowrap">
          15% OFF
        </span>
      </div>
      <DiscountModal open={discountModal} setOpen={setDiscountModalOpen} />
    </div>
  );
}
