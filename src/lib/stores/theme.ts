import { writable } from "svelte/store";

export const setTheme = (theme: 'light' | 'dark'): 'light' | 'dark' => {
  fetch('/api/theme', { method: 'PUT', body: theme });
  return theme;
}

export const theme = writable('dark');
