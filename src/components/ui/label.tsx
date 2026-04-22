"use client"

import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-[10px] font-semibold tracking-[0.25em] uppercase select-none opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-30",
        className
      )}
      {...props}
    />
  )
}


export { Label }
