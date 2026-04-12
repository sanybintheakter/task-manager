import TaskBoard from "@/components/TaskBoard";

export default function Page() 

{
return (
<main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
<div className="mx-auto max-w-5xl">
<header className="mb-8">
<h1 className="text-4xl font-bold tracking-tight">My Task Manager</h1>
<p className="mt-2 text-slate-300">
A custom task management app built with Next.js, React, and Tailwind CSS.
</p>
</header>

<TaskBoard />
</div>
</main>
);
}