import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const recentExams = [
  {
    id: 1,
    subject: "Mathematics",
    topic: "Calculus",
    score: 85,
    date: "2023-03-15",
    status: "Passed",
  },
  {
    id: 2,
    subject: "Physics",
    topic: "Mechanics",
    score: 92,
    date: "2023-03-12",
    status: "Passed",
  },
  {
    id: 3,
    subject: "English",
    topic: "Comprehension",
    score: 78,
    date: "2023-03-10",
    status: "Passed",
  },
  {
    id: 4,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    score: 65,
    date: "2023-03-08",
    status: "Failed",
  },
  {
    id: 5,
    subject: "Biology",
    topic: "Cell Biology",
    score: 88,
    date: "2023-03-05",
    status: "Passed",
  },
]

export function RecentExams() {
  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {recentExams.map((exam) => (
          <div key={exam.id} className="flex items-center justify-between rounded-lg border p-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{exam.subject}</h4>
                <Badge variant={exam.status === "Passed" ? "default" : "destructive"}>{exam.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{exam.topic}</p>
              <p className="text-xs text-muted-foreground">{new Date(exam.date).toLocaleDateString()}</p>
            </div>
            <div className="text-2xl font-bold">
              {exam.score}
              <span className="text-sm text-muted-foreground">%</span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

