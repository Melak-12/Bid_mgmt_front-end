import { useEffect, useState } from 'react';
// import { getFirestore, onSnapshot, collection,forEach, doc, query, where} from 'firebase/firestore';
import { collection, query, onSnapshot } from "firebase/firestore";
import { firestoreApp } from '../config/firebase';

export const useFirestore = (coll) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const q = query(collection(firestoreApp, coll));
    const angel = onSnapshot(q, (querySnapshot) => {
      const cities = [];
       querySnapshot.forEach((doc) => {
      cities.push({...doc.data(),id:doc.id});
  });
  setDocs(cities)
  
});
return () => angel();
  }, [collection]);

  return { docs };
};
