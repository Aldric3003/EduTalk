import type React from "react"
export function ChartContainer({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`rounded-md border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
}

export function ChartTooltipContent({
  labelClassName,
  valueClassName,
}: { labelClassName?: string; valueClassName?: string }) {
  return (
    <div>
      <div className={labelClassName}></div>
      <div className={valueClassName}></div>
    </div>
  )
}

export const Chart = () => null

