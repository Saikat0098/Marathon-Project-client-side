import { createContext, useEffect, useState } from "react";
 
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile 
} from "firebase/auth";
import app from "../Firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [monUserId, setMonUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);
  const createNewUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (updateData) => {
    setLoading(true);
    try {
      const result = await updateProfile(auth.currentUser, updateData);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      return result;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
     if(currentUser?.email){
      setUser(currentUser);
      setUserUid(currentUser?.uid || null);
      setMonUserId(currentUser?.uid || null);
   
      const {data} = await axios.post(`http://localhost:5500/jwt` , {
        email:currentUser?.email ,
    } , {withCredentials:true})
    
     }
     else{
      
      setUser(currentUser);
      const {data} = await axios.get(`http://localhost:5500/logout` , 
        {withCredentials:true})
     }
     setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    login,
    loading,
    logOut,
    userUid,
    setUserUid,
    monUserId,
    setMonUserId,
    updateUserProfile,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

