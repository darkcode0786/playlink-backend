import mongoose, { Schema, Document, Types } from "mongoose";

export interface ILink extends Document {
  hash: string;
  userId: Types.ObjectId;
}

const linkSchema = new Schema<ILink>({
  hash: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const Link = mongoose.model<ILink>("Link", linkSchema);
