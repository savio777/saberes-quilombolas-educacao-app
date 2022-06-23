import React, { createContext, useCallback, useContext, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../services/api";
import { useEffect } from "react";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        "@SaberesQuilombolasEducacao:token",
        "@SaberesQuilombolasEducacao:user",
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    /*const response = await api.post("/sessions", { email, password });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ["@SaberesQuilombolasEducacao:token", token],
      ["@SaberesQuilombolasEducacao:user", JSON.stringify(user)],
    ]);

    setData({ token, user });*/

    // mockup
    if (email) {
      setData({ user: { email }, token: "123" });
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      "@SaberesQuilombolasEducacao:token",
      "@SaberesQuilombolasEducacao:user",
    ]);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
