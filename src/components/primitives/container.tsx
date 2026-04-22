import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto px-6 md:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}
