
export default function TaskStats({
totalCount,
activeCount,
completedCount,
}) 
{
return (
<div>
<h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
Stats
</h2>

<div className="grid gap-3">
<div className="rounded-2xl bg-slate-800 p-4">
<p className="text-sm text-slate-400">Total</p>
<p className="text-2xl font-bold text-white">{totalCount}</p>
</div>

<div className="rounded-2xl bg-slate-800 p-4">
<p className="text-sm text-slate-400">Active</p>
<p className="text-2xl font-bold text-white">{activeCount}</p>
</div>

<div className="rounded-2xl bg-slate-800 p-4">
<p className="text-sm text-slate-400">Completed</p>
<p className="text-2xl font-bold text-white">{completedCount}</p>
</div>
</div>
</div>
);
}