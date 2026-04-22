import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export function Section({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "dark";
  size?: "sm" | "default" | "lg" | "full";
} & ComponentPropsWithoutRef<"section">) {
  const sizeMap = {
    sm: "py-12 md:py-16",
    default: "py-16 md:py-24",
    lg: "py-24 md:py-32",
    full: "min-h-screen flex items-center",
  };

  const variantMap = {
    default: "bg-background",
    // Secondary is a warm mid-tone; gold accent labels lack contrast — use primary ink instead.
    muted:
      "bg-secondary [&_.label.text-accent]:text-primary",
    dark: "bg-primary text-primary-foreground",
  };

  return (
    <section
      {...props}
      className={cn(
        "w-full px-6 md:px-10",
        sizeMap[size],
        variantMap[variant],
        className
      )}
    >
      {children}
    </section>
  );
}
