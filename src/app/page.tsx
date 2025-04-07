"use client";
import HabitForm from "@/components/HabitForm";
import { Habit } from "@/types";
import { isTodayCompleted } from "@/utils/date";
import { toggleHabitToday } from "@/utils/habits";
import { loadHabitsFromStorage, saveHabitsToStorage } from "@/utils/storage";
import { useEffect, useState } from "react";

export default function HomrPage() {
  const [habits, setHabits] = useState<Habit[]>([]);

  //TODO: LOAD HABITS FROM LOCAL STORAGE
  useEffect(() => {
    const storageHabits = loadHabitsFromStorage();
    setHabits(storageHabits);
  }, []);

  //TODO: SAVE CHANGES ABOUT HABITS
  useEffect(() => {
    saveHabitsToStorage(habits);
  }, [habits]);

  const handleAddHabit = (habit: Habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const handleToggleComplete = (id: string) => {
    setHabits((prev) => 
      prev.map((h) => (h.id === id ? toggleHabitToday(h): h))
    )
  }

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Habbits</h1>
      <HabitForm onAddHabit={handleAddHabit} />
      <ul>
      {habits.map((habit) => {
        const completed = isTodayCompleted(habit.completedDates)
        return (
          <li key={habit.id} className="mb-2 border-b py-2 flex justify-between items-center">
            <span>{habit.name}</span>
            <button
              onClick={() => handleToggleComplete(habit.id)}
              className={`px-2 py-1 rounded ${
                completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-blue-950'
              }`}
            >
              {completed ? 'Hecho' : 'Marcar'}
            </button>
          </li>
        )
      })}
      </ul>
    </main>
  );
}
