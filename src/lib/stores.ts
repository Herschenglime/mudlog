import { writable } from 'svelte/store'

const theme = writable('system')

export { theme }

export const dailyLogs = writable(new Map<string,string>())
