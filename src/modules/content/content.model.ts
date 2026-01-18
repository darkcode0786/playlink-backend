import mongoose, { Schema, Document, Types } from "mongoose";

export type ContentType = "image" | "video" | "article" | "audio";

export interface IContent extends Document {
  link: string;
  type: ContentType;
  title: string;
  tags: Types.ObjectId[];
  userId: Types.ObjectId;
}

const contentSchema = new Schema<IContent>(
  {
    link: { type: String, required: true },
    type: {
      type: String,
      enum: ["image", "video", "article", "audio"],
      required: true,
    },
    title: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Content = mongoose.model<IContent>("Content", contentSchema);
