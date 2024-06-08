import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export function DataAccessTest() {
  const [cafes, setCafes] = useState<any[]>([]);

  useEffect(() => {
    async function getCafes() {
      const querySnapshot = await getDocs(collection(db, 'cafes'));
      const data = querySnapshot.docs.map((doc) => {
        return doc.data();
      });
      setCafes(data);
      return data;
    }
    if (!cafes?.length) {
      getCafes();
    }
  }, []);
  return (
    <div className="max-w-lg bg-red-700 mx-auto relative h-full flex flex-1">
      {JSON.stringify(cafes)}
    </div>
  );
}
