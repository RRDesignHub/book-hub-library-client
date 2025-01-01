import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const authRegister = (email, password) => {
    setLoader(true);  
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = async(name, photoURL) =>{
    setLoader(true);
    const currentUser = auth.currentUser;
    if(currentUser){
      return updateProfile(currentUser, { displayName: name, photoURL })
      .then(() => {
        setUser({
          ...currentUser,
          displayName: name,
          photoURL: photoURL,
        });
      })
      .finally(() => setLoader(false));
    }
      setLoader(false);
  }
  const loginWithEmail = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const passwordReset = (email) =>{
    setLoader(true);
    return sendPasswordResetEmail(auth, email)
  }

  const logoutUser = ()=>{
    setLoader(true);
    return signOut(auth);
  }

  useEffect(() => {
    const currentSubscriber = onAuthStateChanged(auth, async(currentUser) => {
      setUser(currentUser);
      setLoader(false)
    });
    return () => {
      currentSubscriber();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loader,
    setLoader,
    authRegister,
    loginWithEmail,
    loginWithGoogle,
    updateUser, 
    passwordReset,
    logoutUser
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};
