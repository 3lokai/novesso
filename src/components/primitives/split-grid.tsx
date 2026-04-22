import { cn } from '@/lib/utils'

export function SplitGrid({
  children,
  className,
  ratio = '1:1',
}: {
  children: React.ReactNode
  className?: string
  ratio?: '1:1' | '2:1' | '3:2'
}) {
  const ratioMap = {
    '1:1': 'grid-cols-1 md:grid-cols-2',
    '2:1': 'grid-cols-1 md:grid-cols-[2fr_1fr]',
    '3:2': 'grid-cols-1 md:grid-cols-[3fr_2fr]',
  }

  return (
    <div className={cn('grid gap-10 md:gap-16', ratioMap[ratio], className)}>
      {children}
    </div>
  )
}
