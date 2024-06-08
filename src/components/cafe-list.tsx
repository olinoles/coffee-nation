import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { ReactComponent as CoffeeCupSvg } from '../assets/coffee_cup.svg';

const CafeList = () => {
  const [cafes, setCafes] = useState<any[]>([]);

  useEffect(() => {
    async function getCafes() {
      const querySnapshot = await getDocs(collection(db, 'cafes'));
      const data = querySnapshot.docs.map((doc) => {
        return doc.data();
      });
      setCafes(data);
    }
    if (!cafes?.length) {
      getCafes();
    }
  }, [cafes]);

  if (!cafes) {
    return <div>Loading..</div>;
  }

  function getStamps(cafe: any) {
    const stamps = [];
    for (let i = 0; i < cafe.stamps_total; i++) {
      const discount = cafe.discounts?.find((d: any) => d.index === i);
      if (i < cafe.stamps_used) {
        stamps.push(
          <div
            className="border-solid border border-red-400 rounded-full p-1 w-[32px] h-[32px]"
            key={i}
          >
            <CoffeeCupSvg className="size-5 absolute" />
          </div>
        );
        continue;
      } else if (discount) {
        stamps.push(
          <div
            className="border border-dotted rounded-full border-gray-500 w-[32px] h-[32px] flex justify-center items-center"
            key={i}
          >
            <p className="text-black text-xs">SAVE {discount.rate}%</p>
          </div>
        );
        continue;
      } else if (i < cafe.stamps_total) {
        stamps.push(
          <div
            className="border border-dotted rounded-full border-gray-500 w-[32px] h-[32px]"
            key={i}
          ></div>
        );
        continue;
      }
    }
    stamps.push(
      <div className="border border-dotted rounded-full border-gray-500 w-[32px] h-[32px] flex justify-center items-center">
        <p className="text-red-300 text-xs">FREE</p>
      </div>
    );

    return stamps;
  }

  return (
    <div className="flex flex-col gap-5">
      {cafes &&
        cafes.map((cafe, i) => {
          return (
            <div className="bg-gray-100 p-2 rounded-[21px]" key={i}>
              <h2 className="font-bold mb-1">{cafe.name}</h2>
              <p className="text-gray-400 text-xs font-medium mb-3">
                {cafe.address}
              </p>
              <div className="flex flex-row gap-3">{getStamps(cafe)}</div>
            </div>
          );
        })}
    </div>
  );
};

export default CafeList;
