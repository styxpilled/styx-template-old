import type { RequestHandler } from '@sveltejs/kit';

export const PUT: RequestHandler = async ({ request }) => {
  const theme = await request.text();
  return {
    headers: {
      'Set-Cookie': `theme=${theme}; SameSite=None; HttpOnly; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`
    }
  }
}