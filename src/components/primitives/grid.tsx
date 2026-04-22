import { cn } from "@/lib/utils";

export function Grid({
  children,
  className,
  cols = 2,
  gap = "md",
}: {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
  gap?: "none" | "sm" | "md" | "lg";
}) {
  const colMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  const gapMap = {
    none: "gap-0",
    sm: "gap-4",
    md: "gap-8 md:gap-10",
    lg: "gap-12 md:gap-16",
  };

  return (
    <div className={cn("grid", colMap[cols], gapMap[gap], className)}>
      {children}
    </div>
  );
}