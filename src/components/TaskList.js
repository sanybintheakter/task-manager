"use client";

import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onToggle }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard
            id={task.id}
            title={task.title}
            done={task.done}
            onToggle={onToggle}
          />
        </li>
      ))}
    </ul>
  );
}