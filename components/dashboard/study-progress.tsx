import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"

const subjects = [
  {
    id: 1,
    name: "Mathematics",
    progress: 75,
    topics: 24,
    topicsCompleted: 18,
  },
  {
    id: 2,
    name: "English",
    progress: 60,
    topics: 20,
    topicsCompleted: 12,
  },
  {
    id: 3,
    name: "Physics",
    progress: 85,
    topics: 18,
    topicsCompleted: 15,
  },
  {
    id: 4,
    name: "Chemistry",
    progress: 50,
    topics: 22,
    topicsCompleted: 11,
  },
  {
    id: 5,
    name: "Biology",
    progress: 40,
    topics: 20,
    topicsCompleted: 8,
  },
]

export function StudyProgress() {
  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-6">
        {subjects.map((subject) => (
          <div key={subject.id} className="space-y-2">
            <div className="flex justify-between">
              <h4 className="font-medium">{subject.name}</h4>
              <span className="text-sm text-muted-foreground">{subject.progress}%</span>
            </div>
            <Progress value={subject.progress} className="h-2" />
            <p className="text-xs text-muted-foreground">
              {subject.topicsCompleted} of {subject.topics} topics completed
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

