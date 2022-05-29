import React, { useContext, useState } from 'react';

export const AuthContext = React.createContext({})

const AuthProvider = ({ children }) => {
    const user =localStorage.getItem('user')
   

    return (
      <AuthContext.Provider value={{user}}>
          {children}
      </AuthContext.Provider>
    );
  };



export default AuthProvider


export const useAuth = () => {
    return useContext(AuthContext);
}


