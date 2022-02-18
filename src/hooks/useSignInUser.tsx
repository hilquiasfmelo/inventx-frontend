import React, { createContext, useCallback, useContext, useState } from "react";
import { ICredentialsUser } from "../interfaces/Users/ICredentialsUser";
import { api } from "../services/api";

interface IAuthContextState {
  user: IUserProps;
  signIn(credentials: ICredentialsUser): Promise<void>;
}

interface IUserProps {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  isAdmin: string;
  created_at: Date | string;
  updated_at: Date | string;
}

interface IAuthResponse {
  user: IUserProps;
  token: string;
}

const AuthContext = createContext<IAuthContextState>({} as IAuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthResponse>(() => {
    const user = localStorage.getItem('@InventxUser');
    const token = localStorage.getItem('@InventxToken');

    if (user && token) {
      return {
        user: JSON.parse(user),
        token
      }
    }

    return {} as IAuthResponse;
  });

  const signIn = useCallback(async (credentials: ICredentialsUser) => {
    const response = await api.post('/users/sessions', credentials);

    const { user, token } = response.data;

    localStorage.setItem('@InventxUser', JSON.stringify(user));
    localStorage.setItem('@InventxToken', token);

    setData({
      user,
      token
    })
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useSignInUser() {
  const context = useContext(AuthContext);

  return context;
}