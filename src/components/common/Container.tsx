import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
const Container = ({ className, children }: ContainerProps) => {
  return <div className={cn("container mx-auto px-4", className)}>{children}</div>;
};

export default Container;
