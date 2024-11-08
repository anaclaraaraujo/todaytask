export interface Task {
  id: number,
  text: string,
  isChecked: boolean
}

export interface TaskItem {
  data: Task
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export interface TaskStatus {
  tasksCounter: number
  checkedTasksCounter: number
}