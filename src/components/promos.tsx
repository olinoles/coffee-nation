import { useEffect, useState } from "react";
import { PromoDeal } from "./promo-deal";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export function PromoDeals() {
  const [promos, setPromos] = useState<any[]>([]);

  useEffect(() => {
    async function getCafes() {
      const querySnapshot = await getDocs(collection(db, "promos"));
      const data = querySnapshot.docs.map((doc) => {
        return doc.data();
      });
      console.log(data);
      setPromos(data);
    }
    if (!promos?.length) {
      getCafes();
    }
  }, [promos]);

  return (
    <div className="flex gap-2 no-scrollbar overflow-x-scroll">
      {promos.map((promo, index) => (
        <PromoDeal key={index} {...promo} />
      ))}
    </div>
  );
}
