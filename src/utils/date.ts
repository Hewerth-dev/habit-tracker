export function isTodayCompleted( completedDates: string[]): boolean {
    const today = new Date().toISOString().split('T')[0]
    return completedDates.includes(today)
}