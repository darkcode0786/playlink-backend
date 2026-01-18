import mongoose, { Schema, HydratedDocument } from "mongoose";
export interface IUser {
  username: string;
  name: string;
  email: string;
  password: string;
}


export type UserDocument = HydratedDocument<IUser>;

const userSchema = new Schema<UserDocument>(
  {
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = mongoose.model<UserDocument>("User", userSchema);
