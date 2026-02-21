export type Users = {
  id: number;
  key: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  username: string;
  password: string;
  birthDate: string;
};

export type User = {
  username: string;
  avatar?: string;
};
