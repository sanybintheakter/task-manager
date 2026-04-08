"use client";

export default function TaskCard({ title, done, id, onToggle }) {
  return (
    <div className="flex items-center justify-between p-3 border">
      <span className={done ? "line-through text-gray-400" : ""}>
        {title}
      </span>

      <button
        className="text-green-600 text-sm"
        onClick={() => onToggle(id)}
      >
        Toggle
      </button>
    </div>
  );
}