import { Habit } from "@/types";

const STORAGE_KEY = 'my-habbits'

export function saveHabitsToStorage(habits: Habit[]){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits))
}

export function loadHabitsFromStorage(): Habit[]{
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
}