import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type SpinnerProps = {
  className: string;
};

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <Loader2 className={cn("h-4 w-4 animate-spin text-current", className)} />
  );
};

export default Spinner;
