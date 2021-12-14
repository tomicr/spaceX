import React, { useState, useMemo } from 'react';

export const AuthContext = React.createContext({});

export const useAuth = () => React.useContext(AuthContext);

const AuthProvider = function AuthProvider({ children }: { children: any }) {
  const [currentUser, setCurrentUser] = useState();
  const value = useMemo(() => ({ currentUser }), []);

  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};
export default AuthProvider;
