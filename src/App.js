import React, { useState } from "react";
import BidBody from './components/BidBody'
import {AuthContext} from "./context/authContext";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*
! this functions should be done 
! updation of images 
! footer and all other navigation components 
!

*/

const App = () => {
  const [user,setUser]=useState(null);
  const [err,setErr]=useState(null)
  return (

    <AuthContext.Provider value={{user,setUser,err,setErr}}>
     {/* <BrowserRouter>
       <Routes>
         <Route path="/" element={<BidBody/>}>
         
         </Route>
       </Routes>
     </BrowserRouter> */}
  
     <BidBody/>
    </AuthContext.Provider>
    
  )
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BidBody />);
export default App;

