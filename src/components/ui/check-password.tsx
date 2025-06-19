import { cn } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";

export const CheckPassword = ({
  meets,
  text,
}: {
  meets: boolean;
  text: string;
}) => (
  <div
    className={cn(
      "flex items-center gap-1.5 text-xs transition-colors duration-300",
      meets ? "text-teal-600" : "text-white/50"
    )}
  >
    {meets ? (
      <CheckCircle className="size-3.5" />
    ) : (
      <XCircle className="size-3.5" />
    )}
    <span className="whitespace-nowrap">{text}</span>
  </div>
);
