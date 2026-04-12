"use client";

import { useState } from "react";

export default function AddTaskForm({ onAddTask }) 
{
 
const [title, setTitle] = useState("");

function handleSubmit(event) {

event.preventDefault();

const trimmedTitle = title.trim();

if (!trimmedTitle) return;

onAddTask(trimmedTitle);

setTitle("");
}

return (
<div>
<h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
Add a Task
</h2>

<form onSubmit={handleSubmit} className="space-y-3">
<input
type="text"
value={title}
onChange={(event) => setTitle(event.target.value)}
placeholder="Enter a task..."
className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400"
/>
<button
type="submit"
className="w-full rounded-2xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
>
Add Task
</button>
</form>
</div>
);
}