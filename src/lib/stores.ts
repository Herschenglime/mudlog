import { writable } from 'svelte/store'

const theme = writable('system')

export { theme }

interface logEntry {title:string, body:string}

export const dailyLogs = writable(new Map<Date,logEntry>())
