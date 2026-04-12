import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  
if (tasks.length === 0) {
return (
<div className="rounded-2xl border border-dashed border-slate-700 p-8 text-center text-slate-400">
No tasks to show here yet.
</div>
);
}

return (
<div className="space-y-4">
{tasks.map((task) => (
<TaskCard
key={task.id}
id={task.id}
title={task.title}
done={task.done}
onToggleTask={onToggleTask}
onDeleteTask={onDeleteTask}
/>
))}
</div>
);
}