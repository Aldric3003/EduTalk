import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const upcomingExams = [
  {
    id: 1,
    title: "Mathematics Mock Exam",
    date: "2023-04-05T10:00:00",
    duration: "2 hours",
    type: "Practice",
  },
  {
    id: 2,
    title: "English Language Test",
    date: "2023-04-08T14:00:00",
    duration: "1.5 hours",
    type: "Assessment",
  },
  {
    id: 3,
    title: "Physics Quiz",
    date: "2023-04-12T09:00:00",
    duration: "45 minutes",
    type: "Quiz",
  },
  {
    id: 4,
    title: "Chemistry Final Exam",
    date: "2023-04-15T13:00:00",
    duration: "3 hours",
    type: "Final",
  },
  {
    id: 5,
    title: "Biology Practical",
    date: "2023-04-18T11:00:00",
    duration: "2.5 hours",
    type: "Practical",
  },
]

export function UpcomingExams() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {upcomingExams.map((exam) => (
          <div
            key={exam.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border p-4"
          >
            <div className="space-y-1">
              <h4 className="font-medium">{exam.title}</h4>
              <p className="text-sm text-muted-foreground">{formatDate(exam.date)}</p>
              <div className="flex gap-2 text-xs text-muted-foreground">
                <span>{exam.duration}</span>
                <span>•</span>
                <span>{exam.type}</span>
              </div>
            </div>
            <div className="flex gap-2 self-end sm:self-auto">
              <Button variant="outline" size="sm">
                Prepare
              </Button>
              <Button size="sm">Start</Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

