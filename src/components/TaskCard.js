"use client";

export default function TaskCard({
id,
title,
done,
onToggleTask,
onDeleteTask,
}) 
{
return (
<div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-4">
<div>
<p
className={`text-base font-medium ${
done ? "text-slate-500 line-through" : "text-white"
}`}
>
{title}
</p>

<p className="mt-1 text-sm text-slate-400">
{done ? "Completed" : "Active"}
</p>
</div>

<div className="flex gap-2">
<button
onClick={() => onToggleTask(id)}
className="rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
>
{done ? "Undo" : "Done"}
</button>

<button
onClick={() => onDeleteTask(id)}
className="rounded-xl bg-rose-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-rose-400"
>
Delete
</button>
</div>
</div>
);
}