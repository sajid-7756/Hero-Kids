import mongoose, { Schema } from "mongoose";

export interface IProduct extends mongoose.Document {
  title: string;
  bangla: string;
  image: string;

  price: number;
  discount: number;

  sizes: string[];
  color: string[];

  description: string;

  qna: {
    question: string;
    answer: string;
  }[];

  reviews: number;
  sold: number;
  ratings: number;

  info: string[];
}

const ProductSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    bangla: {
      type: String,
      required: [true, "Bangla title is required"],
    },

    image: {
      type: String,
      required: [true, "Product image is required"],
    },

    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },

    discount: {
      type: Number,
      default: 0,
      min: [0, "Discount cannot be negative"],
      max: [100, "Discount cannot exceed 100"],
    },

    sizes: {
      type: [String],
      default: [],
    },

    color: {
      type: [String],
      default: [],
    },

    description: {
      type: String,
      required: [true, "Product description is required"],
    },

    qna: [
      {
        question: {
          type: String,
          required: true,
        },
        answer: {
          type: String,
          required: true,
        },
      },
    ],

    reviews: {
      type: Number,
      default: 0,
      min: [0, "Reviews cannot be negative"],
    },

    sold: {
      type: Number,
      default: 0,
      min: [0, "Sold count cannot be negative"],
    },

    ratings: {
      type: Number,
      default: 0,
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot be more than 5"],
    },

    info: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
    versionKey: false,
  },
);

export const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
