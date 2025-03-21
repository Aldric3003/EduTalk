"use client"

import { useTheme } from "next-themes"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    subject: "Mathematics",
    score: 85,
    average: 72,
  },
  {
    subject: "English",
    score: 78,
    average: 68,
  },
  {
    subject: "Physics",
    score: 92,
    average: 75,
  },
  {
    subject: "Chemistry",
    score: 88,
    average: 70,
  },
  {
    subject: "Biology",
    score: 76,
    average: 65,
  },
  {
    subject: "Economics",
    score: 82,
    average: 69,
  },
]

export function PerformanceChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <ChartContainer className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "hsl(var(--muted))" : "#f0f0f0"} vertical={false} />
          <XAxis
            dataKey="subject"
            stroke={isDark ? "hsl(var(--muted-foreground))" : "#888"}
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke={isDark ? "hsl(var(--muted-foreground))" : "#888"}
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="border-none bg-background p-2 shadow-md"
                labelClassName="font-medium text-foreground"
                valueClassName="font-medium text-foreground"
              />
            }
          />
          <Legend />
          <Bar dataKey="score" name="Your Score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="average" name="Class Average" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

