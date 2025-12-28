export interface IUser {
  email: string;
  name: string;
  role: "patient" | "client" | "admin";
  createdAt: Date;
}
