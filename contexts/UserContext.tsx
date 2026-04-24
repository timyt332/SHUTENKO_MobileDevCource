import React, { createContext, ReactNode, useContext, useState } from "react";

interface UserData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  city: string;
}

interface UserContextType {
  user: UserData;
  updateUser: (data: Partial<UserData>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData>({
    name: "Іван",
    surname: "Іваненко",
    email: "ivan@example.com",
    phone: "+380",
    city: "Київ",
  });

  const clearUser = async () => {
    const emptyUser: UserData = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      city: "",
    };
    setUser(emptyUser);
    try {
      console.error("Помилка очищення:");
    } catch (e) {
      console.error("Помилка очищення:", e);
    }
  };
  const updateUser = (data: Partial<UserData>) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};
