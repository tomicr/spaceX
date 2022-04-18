import React, { useContext, useState, useEffect, useMemo } from 'react';
import { User } from 'firebase';
import { auth } from '../../firebase-config';

type ContextProps = {
  currentUser: User | null;
  loginUser: any;
  signup: any;
  logout: any;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function loginUser(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      currentUser,
      loginUser,
      signup,
      logout,
    }),
    [currentUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
