import { TaskList } from "@/components/task-list";
import { TaskForm } from "@/components/task-form";

export default function TasksPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Task Management</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}
