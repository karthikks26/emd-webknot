"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { TaskForm } from "@/components/task-form";

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch tasks",
        variant: "destructive",
      });
    }
  };

  const updateTaskStatus = async (id, newStatus) => {
    try {
      await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      toast({
        title: "Success",
        description: "Task status updated successfully",
      });
      fetchTasks();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update task status",
        variant: "destructive",
      });
    }
  };

  const getProgressValue = (status) => {
    switch (status) {
      case "Pending":
        return 0;
      case "In Progress":
        return 50;
      case "Completed":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task._id}>
          <CardHeader>
            <CardTitle>{task.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{task.description}</p>
            <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
            <p>Status: {task.status}</p>
            <p>Assigned to: {task.assignedTo?.name}</p>
            <p>Event: {task.event?.name}</p>
            <div className="mt-2">
              <Progress
                value={getProgressValue(task.status)}
                className="w-full"
              />
            </div>
            <div className="flex space-x-2 mt-2">
              <Button
                onClick={() => updateTaskStatus(task._id, "Pending")}
                variant={task.status === "Pending" ? "default" : "outline"}
              >
                Pending
              </Button>
              <Button
                onClick={() => updateTaskStatus(task._id, "In Progress")}
                variant={task.status === "In Progress" ? "default" : "outline"}
              >
                In Progress
              </Button>
              <Button
                onClick={() => updateTaskStatus(task._id, "Completed")}
                variant={task.status === "Completed" ? "default" : "outline"}
              >
                Completed
              </Button>
            </div>
            <Button onClick={() => setEditingTask(task)} className="mt-2">
              Edit
            </Button>
          </CardContent>
        </Card>
      ))}
      {editingTask && (
        <Card>
          <CardHeader>
            <CardTitle>Edit Task</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskForm
              task={editingTask}
              onSuccess={() => {
                setEditingTask(null);
                fetchTasks();
              }}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
