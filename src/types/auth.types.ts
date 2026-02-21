import { User } from "./users.types";

export type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};
