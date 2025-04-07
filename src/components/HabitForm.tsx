"use client";
import { Habit } from "@/types";
import { useState } from "react";

interface Props {
  onAddHabit: (habit: Habit) => void;
}

export default function HabitForm({ onAddHabit }: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newHabit: Habit = {
        id: crypto.randomUUID(),
        name,
        completedDates: [],
      };

      onAddHabit(newHabit);
      setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ej: Read 30 minutes"
        className="flex-1 px-4 py-2 rounded border"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}
