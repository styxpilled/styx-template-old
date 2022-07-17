import type { GetSession } from '@sveltejs/kit'
import cookie from 'cookie';

export type SessionData = { theme: 'dark' | 'light' }

export const getSession: GetSession = (event) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  const theme = cookies.theme ? cookies.theme : 'dark';
  return {
    theme,
  };
}
