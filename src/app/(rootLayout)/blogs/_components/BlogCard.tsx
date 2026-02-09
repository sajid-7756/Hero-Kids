import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IBlog } from "@/models/blog.model";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <Card className="overflow-hidden group flex flex-col h-full hover:shadow-xl transition-all duration-300 border-none bg-white/50 backdrop-blur-sm">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary hover:bg-primary/90 text-white border-none px-3 py-1">
            {blog.category}
          </Badge>
        </div>
      </div>

      <CardHeader className="p-6 pb-2">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{blog.readTime}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {blog.title}
        </h3>
      </CardHeader>

      <CardContent className="p-6 pt-2 grow">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {blog.description}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0 mt-auto">
        <div className="flex items-center justify-between w-full border-t pt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <User className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium text-foreground">
              {blog.author}
            </span>
          </div>
          <Link
            href={`/blogs/${blog._id.toString()}`}
            className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline group/link"
          >
            Read More
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
