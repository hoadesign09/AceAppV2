
//  import React, { createContext, useEffect, useState } from "react"

// export const AuthContext = createContext("");

// export const AuthProvider =  ({children}) =>  {

//     const [userInfo, setUserInfo] = useState([])
//     const [isLoading, setIsLoading] = useState(true)

//      const loginApi = ()  => {
//         fetch("https://hoadesign.net/API/userdetail.json")
//         .then((response) => response.json() )
//         .then((json) => setUserInfo(json))
//         .catch((error) => 
//             {console.log(error)})
//         .finally(() => setIsLoading(false))
//     };
    
//     useEffect(() =>{
//         loginApi();
//     }, [])



//     return(
//     <AuthContext.Provider 
//     value = {[isLoading, loginApi, userInfo]}> 
//         {children}
//     </AuthContext.Provider>
//     );
// };
