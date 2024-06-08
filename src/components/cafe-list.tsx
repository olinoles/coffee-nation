import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import { db } from '../firebase';

const CafeList = () => {
  const [cafes, setCafes] = useState<any[]>([]);
  const [userData, setUserData] = useState<any>();

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
    async function getUserData() {
      const docRef = doc(db, 'user_data', 'FLM2Kz9xKRix07romZG1');
      const docSnap = await getDoc(docRef);
      setUserData(docSnap.data());
    }
    if (!userData) {
      getUserData();
    }
  }, []);

  if (!cafes || !userData) {
    return <div>Loading..</div>;
  }

  function getStampsUsedForCafe(cafeId: string, userData: any) {
    const stamp = userData.stamps.find(
      (stamp: any) => stamp.cafe_id === cafeId
    );
    return stamp ? stamp.stamps_used : 0;
  }

  function getStampsTotalForCafe(cafeId: string, userData: any) {
    const stamp = userData.stamps.find(
      (stamp: any) => stamp.cafe_id === cafeId
    );
    return stamp ? stamp.stamps_total : 0;
  }

  return (
    <div className="flex flex-col gap-5">
      {cafes &&
        userData &&
        cafes.map((cafe) => {
          return (
            <div className="bg-gray-100 p-2 rounded-[21px]" key={cafe.id}>
              <h2 className="font-bold mb-1">{cafe.name}</h2>
              <p className="text-gray-400 text-xs font-medium">
                {cafe.address}
              </p>
              <div className="flex flex-row gap-3">
                {Array.from(
                  Array(getStampsUsedForCafe(cafe.id, userData)).keys()
                ).map(() => {
                  return <div className="border-2 rounded-full">🌟</div>;
                })}
                {Array.from(
                  Array(
                    getStampsTotalForCafe(cafe.id, userData) -
                      getStampsUsedForCafe(cafe.id, userData)
                  ).keys()
                ).map(() => {
                  return <div>⭐️</div>;
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CafeList;
