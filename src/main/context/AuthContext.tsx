import React, { useContext, useState, useMemo } from 'react';

import { auth } from '../../firebase-config';

// export const AuthContext = React.createContext();

// export const useAuth() {
//   return useContext(AuthContext);
// };

const AuthProvider = function AuthProvider() {
  // const [currentUser, setCurrentUser] = useState();
  // const value = useMemo(() => ({ currentUser }), []);

  return (
    <div>
      {/* <AuthContext.Provider value={value}>{children}</AuthContext.Provider> */}
    </div>
  );
};
export default AuthProvider;
