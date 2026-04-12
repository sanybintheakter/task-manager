"use client";

import { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TaskStats from "./TaskStats";

export default function TaskBoard() {

const [tasks, setTasks] = useState(() => {
 
if (typeof window === "undefined") return [];

const savedTasks = localStorage.getItem("tasks");
return savedTasks ? JSON.parse(savedTasks) : [];
});

const [filter, setFilter] = useState("all");

useEffect(() => {
localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

function handleAddTask(title) {
setTasks((prevTasks) => [
...prevTasks,
{
id: crypto.randomUUID(),
title,
done: false,
},
]);
}

function handleToggleTask(id) {
  
setTasks((prevTasks) =>
prevTasks.map((task) =>
task.id === id ? { ...task, done: !task.done } : task
)
);
}

function handleDeleteTask(id) {
  
setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
}

function handleClearCompleted() {
setTasks((prevTasks) => prevTasks.filter((task) => !task.done));
}


const totalCount = tasks.length;
const completedCount = tasks.filter((task) => task.done).length;
const activeCount = totalCount - completedCount;

const visibleTasks =
filter === "active"
? tasks.filter((task) => !task.done)
: filter === "done"
? tasks.filter((task) => task.done)
: tasks;

return (
<section className="grid gap-6 lg:grid-cols-[320px_1fr]">
<div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
<AddTaskForm onAddTask={handleAddTask} />

<div>
<h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
Filter Tasks
</h2>

<div className="flex gap-2">
<button
onClick={() => setFilter("all")}
className={`rounded-full px-4 py-2 text-sm font-medium ${
filter === "all"
? "bg-cyan-500 text-slate-950"
: "bg-slate-800 text-white"
}`}
>
All
</button>

<button
onClick={() => setFilter("active")}
className={`rounded-full px-4 py-2 text-sm font-medium ${
filter === "active"
? "bg-cyan-500 text-slate-950"
: "bg-slate-800 text-white"
}`}
>
Active
</button>

<button
onClick={() => setFilter("done")}
className={`rounded-full px-4 py-2 text-sm font-medium ${
filter === "done"
? "bg-cyan-500 text-slate-950"
: "bg-slate-800 text-white"
}`}
>
Done
</button>
</div>
</div>

<TaskStats
totalCount={totalCount}
activeCount={activeCount}
completedCount={completedCount}
/>

<button
onClick={handleClearCompleted}
className="w-full rounded-2xl bg-rose-500 px-4 py-3 font-semibold text-white transition hover:bg-rose-400"
>
Clear Completed
</button>
</div>

<div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
<TaskList
tasks={visibleTasks}
onToggleTask={handleToggleTask}
onDeleteTask={handleDeleteTask}
/>
</div>
</section>
);
}