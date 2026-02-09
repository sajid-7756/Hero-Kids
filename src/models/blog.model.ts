import mongoose, { Schema } from "mongoose";

export interface IBlog extends mongoose.Document {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    author: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    readTime: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Blog =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
