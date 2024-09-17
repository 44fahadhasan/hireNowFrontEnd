import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

// auth context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const axiosPublic = useAxiosPublic();

  // create a new user with email and password
  const createUserEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const userLoginEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // set user name and profile picture
  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  // user logout
  const userLogOut = () => {
    return signOut(auth);
  };

  // Get the currently login user data (observer)
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is login
        setUser(currentUser);

        const userInfo = { email: currentUser?.email };

        axiosPublic
          .post("/token", userInfo)
          .then((res) => {
            if (res?.data?.token) {
              // set token
              localStorage.setItem("token", res?.data?.token);
            }

            setLoading(false);
          })
          .catch((err) => {});

        // login end
      } else {
        // User is logout
        setLoading(false);
        setUser(null);

        // remove token
        localStorage.removeItem("token");
        // logout end
      }
    });

    // clear observer firebase mathod
    return () => unSubscribe();
  }, [axiosPublic]);

  // user authentication data
  const authData = {
    user,
    loading,
    createUserEmailAndPassword,
    userLoginEmailAndPassword,
    updateUserProfile,
    userLogOut,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
