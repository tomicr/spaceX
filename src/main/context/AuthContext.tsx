import React, { useContext, useState, useMemo, useEffect, Children } from 'react';
import { sleep } from 'react-query/types/core/utils';

import { auth } from '../../firebase-config';

export const AuthContext = React.createContext({});

export const useAuth = () => React.useContext(AuthContext);

const AuthProvider = function AuthProvider({children} : {children: any}) {
  const [currentUser, setCurrentUser] = useState();
  const value = useMemo(() => ({ currentUser }), []);
  // useEffect(() => {
  //   sleep(2000).then()
  // }, []);

  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};
export default AuthProvider;
