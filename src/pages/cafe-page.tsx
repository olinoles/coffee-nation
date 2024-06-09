import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import { ReactComponent as CoffeeCupSvg } from "../assets/coffee_cup.svg";

export function CafePage() {
  const [cafe, setCafe] = useState<any>(null);
  const { cafeId } = useParams<{ cafeId: string }>();

  function getStamps(cafe: any) {
    const stamps = [];
    for (let i = 0; i < cafe.stamps_total; i++) {
      const discount = cafe.discounts?.find((d: any) => d.index === i);
      if (i < cafe.stamps_used) {
        stamps.push(
          <div
            className="border-solid relative border border-brand-pink rounded-full p-1  size-[40px]"
            key={i}
          >
            <CoffeeCupSvg className="size-5 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
          </div>
        );
        continue;
      } else if (discount) {
        stamps.push(
          <div
            className="border border-dashed flex justify-center rounded-full border-gray-500  size-[40px] items-center"
            key={i}
          >
            <p className="text-black text-xs leading-0 -mt-2 text-center font-semibold">
              <sub className="text-[6px]">SAVE</sub> {discount.rate}%
            </p>
          </div>
        );
        continue;
      } else if (i < cafe.stamps_total) {
        stamps.push(
          <div
            className="border border-dashed rounded-full border-gray-500  size-[40px]"
            key={i}
          ></div>
        );
        continue;
      }
    }
    stamps.push(
      <div className="border border-dashed rounded-full border-gray-500  size-[40px] flex justify-center items-center">
        <p className="text-brand-pink text-xs font-semibold">FREE</p>
      </div>
    );

    return stamps;
  }

  useEffect(() => {
    async function getCafe() {
      const docRef = doc(db, "cafes", cafeId!);
      const docSnap = await getDoc(docRef);
      setCafe(docSnap.data());
    }
    if (!cafe) {
      getCafe();
    }
  }, [cafeId, cafe]);

  return cafe ? (
    <div className="flex flex-col">
      <h1 className="text-lg font-semibold">{cafe.name}</h1>
      <h2 className="text-xs text-gray-400 font-medium">{cafe.address}</h2>
      <div className="flex flex-col mt-5 gap-5">
        <div className="flex gap-3 my-5">{getStamps(cafe)}</div>
        <h1 className="text-base font-semibold">Prepaid - 10 Cup purchase</h1>
        <div className="flex gap-3 flex-wrap">
          <div className="border border-dashed rounded-full border-gray-500 size-[40px]"></div>
          <div className="border border-dashed rounded-full border-gray-500 size-[40px]"></div>
          <div className="border border-dashed rounded-full border-gray-500 size-[40px]"></div>
          <div className="border border-dashed rounded-full border-gray-500 size-[40px]"></div>
          <div className="border border-dashed rounded-full border-gray-500 size-[40px]"></div>
          <div className="border border-dashed rounded-full border-gray-500 size-[40px]"></div>
          <div className="border border-dashed rounded-full border-gray-500 size-[40px]"></div>
          <div className="border border-dashed rounded-full border-gray-500 size-[40px]"></div>
          <div className="border border-dashed rounded-full border-gray-500 size-[40px]"></div>
          <div className="border border-dashed rounded-full border-gray-500 size-[40px]"></div>
        </div>
        <span className="text-xs text-gray-400 text-center font-medium">
          PREPAY AND SAVE 35% ON EVERY CUP
        </span>
        <div className="bg-red-700 text-white rounded-xl p-2 py-3 font-semibold text-center">
          BUY PREPAID CUPS
        </div>
      </div>
    </div>
  ) : (
    <div>Loading..</div>
  );
}
