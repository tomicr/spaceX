import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Logout = function Logout() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState<string>();

  const history = useHistory();
  async function logoutUser() {
    setError('');
    try {
      await logout();
      history.push('/');
    } catch {
      alert(error);
      setError('Failed to log out');
    }
  }

  return (
    <div className="logged-in">
      User logged in : {currentUser && currentUser.email}
      {'  '}{' '}
      <button className="signOut" type="button" onClick={logoutUser}>
        Sign out
      </button>
    </div>
  );
};

export default Logout;
