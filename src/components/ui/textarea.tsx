import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-24 w-full border-b border-border bg-transparent px-0 py-3 text-base transition-colors outline-none placeholder:text-muted-foreground/50 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}


export { Textarea }
