"use client";

import { createContext, useContext, useState } from "react";
import { AuthContextType } from "../types/auth.types";
import { User } from "../types/users.types";
import nookies from "nookies";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const cookieUser = nookies.get().user;
    return cookieUser ? JSON.parse(cookieUser) : null;
  });

  const login = (userData: User) => {
    nookies.set(null, "user", JSON.stringify(userData), { path: "/" });
    setUser(userData);
  };

  const router = useRouter();
  async function logout() {
    await fetch("/api/logout", { method: "POST", credentials: "include" });
    setUser(null);
    router.push("/login");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
