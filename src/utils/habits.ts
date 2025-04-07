import { Habit } from "@/types";

export function toggleHabitToday(habit: Habit): Habit{
    const today = new Date().toISOString().split('T')[0]

    const alreadyDone = habit.completedDates.includes(today)

    return {
        ...habit,
        completedDates: alreadyDone ? habit.completedDates.filter(((day) => day !== today)) : [...habit.completedDates, today]
    }
}