import { session } from '$app/stores'

export const setTheme = (theme: 'light' | 'dark'): void => {
  session.update(($session) => ({ ...$session, theme }));
  fetch('/api/theme', { method: 'PUT', body: theme })
}