import { useEffect, useState ,useRef} from "react";
import { createContext } from "react";

import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword ,signOut,onAuthStateChanged} from "firebase/auth";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestoreApp } from '../config/firebase';

//this is for form
//import { Form, Modal,Button,Alert } from 'react-bootstrap';


  
  export  const AuthContext=createContext();
  export const AuthProvider=({children})=>{
   //this is for form
  //  const [showform,setshowform]=useState(false);
  //  const openform=()=>setshowform(true);
  //  const closeform = () =>setshowform(false);
  //  const newprice=useRef();


  const [currentUSer,setCurrentUser]=useState(null);
  const [loading,setLoading]=useState(true);
  const [globalgMsg,setGlobalMsg]=useState('')

  const register=(nameRef,email,password)=>{
    return createUserWithEmailAndPassword(getAuth(),nameRef,email,password)
  };
  const login=(email,password)=>{
    
    return signInWithEmailAndPassword(getAuth(),email,password)
      
     
   };
  
  const logout=()=>{
    return signOut(getAuth());        
  };

  const bidAuction=(bidId,price,addPrice)=>{
    
    
    if(currentUSer){

      let myinc=parseInt(addPrice.current.value)>parseInt(price)?addPrice.current.value:parseInt(price);
        console.log(addPrice,'this is bla bla ');

      
    const newPrice =parseInt(myinc);
    const dbRef=doc(firestoreApp,'bids',bidId);
 
   return updateDoc(dbRef,{
    
    itemStartPrice:newPrice,
   currWinner:currentUSer.email
  

   })}
   else {
    console.log('login erro');
    return setGlobalMsg('Please login first !')
   }
    
  };
  
  const updateBid=(bidId,bidTitle,bidDisc,bidImage,bidDueDate,bidItemStartPrice)=>{
    const dbRef=doc(firestoreApp,'bids',bidId);
    return updateDoc(dbRef,{
     
     
      title:bidTitle.current.value,
      disc:bidDisc.current.value,
      itemImage:bidImage.current.value[0],
      itemDueDate:bidDueDate.current.value,
      itemStartPrice:bidItemStartPrice.current.value


    })



  };
  const endAuction=(bidId)=>{
    const dbRef=doc(firestoreApp,'bids',bidId);
    return deleteDoc(dbRef,bidId);
    
}
// const updateBid=(bidID)
  //this useEffet if for the expire date of the  global message 
  useEffect(() => {
    const timeOut=setTimeout(()=>setGlobalMsg(''),2000)
    return ()=>clearTimeout(timeOut)
  },[globalgMsg])



  useEffect(()=>{
    const angel=onAuthStateChanged(getAuth(),(user)=>{
        setCurrentUser(user)
        setLoading(false)
    

    });
    return angel;
},[]);



    return <AuthContext.Provider value={{currentUSer,register,login,logout,bidAuction,updateBid,endAuction,globalgMsg}}>{!loading&& children}</AuthContext.Provider>
  } 