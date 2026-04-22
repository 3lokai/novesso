import { cn } from "@/lib/utils";

export function Stack({
  children,
  className,
  gap = "md",
}: {
  children: React.ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg" | "xl";
}) {
  const gapMap = {
    sm: "gap-3 md:gap-4",
    md: "gap-5 md:gap-6",
    lg: "gap-8 md:gap-10",
    xl: "gap-12 md:gap-16",
  };

  return (
    <div className={cn("flex flex-col", gapMap[gap], className)}>
      {children}
    </div>
  );
}
