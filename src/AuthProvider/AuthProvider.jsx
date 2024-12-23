import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.init";
 


 const AuthContext = createContext();
 const auth = getAuth(app);

 
 
 const AuthProvider = ({children}) => {
    return (
        <div>
            <AuthContext.Provider>
                {children}
            </AuthContext.Provider>
        </div>
    );
 };
 
 export default AuthProvider;