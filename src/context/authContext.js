import { useEffect, useState ,useRef} from "react";
import { createContext } from "react";
import Register from "../auth/Register";

export  const AuthContext=createContext(null);
// const AuthProvider = ({user}) => {
//     const [currentUSer,setCurrentUser]=useState(null);
//     const [loading,setLoading]=useState(true);
//     const [globalgMsg,setGlobalMsg]=useState('');

//     const [users,setUsers]=useState([]);


// setUsers(user)
//   // return  <AuthContext.Provider value={{currentUSer,register,login,logout,bidAuction,updateBid,endAuction,globalgMsg}}>{!loading&& children}</AuthContext.Provider>
// }

// export default AuthContext