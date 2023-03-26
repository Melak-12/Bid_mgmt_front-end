import React from "react";
import Nav from "./components/auth/Nav";
import BidBody from "./components/bids/BidBody";
import { AuthProvider } from "./context/authContext";


const App = () => {
  return (

    <AuthProvider>
      <Nav/>
      <BidBody/>
     
    </AuthProvider>
  )
}

export default App