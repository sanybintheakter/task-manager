"use client";

import TaskList from "./TaskList";

export default function TaskBoard() {
  const tasks = [
    { id: 1, title: "Buy milk", done: false },
    { id: 2, title: "Write tests", done: true },
    { id: 3, title: "Ship it", done: false },
  ];

  function handleToggle(id) {
    console.log("Toggle task", id);
  }

  return <TaskList tasks={tasks} onToggle={handleToggle} />;
}