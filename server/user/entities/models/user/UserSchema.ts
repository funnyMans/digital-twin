import { Schema, model, models } from "mongoose";
import { IUser } from "@/server/user/entities/types";

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: {
    type: String,
    enum: ["patient", "client", "admin"],
    default: "admin",
  },
  createdAt: { type: Date, default: () => new Date() },
});

export const UserModel = models.User || model<IUser>("User", userSchema);
