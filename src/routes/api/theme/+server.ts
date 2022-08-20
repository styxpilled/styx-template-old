import type { RequestHandler } from './$types';

export const PUT: RequestHandler = async ({ request, setHeaders }) => {
  const theme = await request.text();
  setHeaders({
    'set-cookie': `theme = ${theme}; Path = /; HttpOnly; SameSite = None; Secure; expires = Fri, 31 Dec 9999 23: 59: 59 GMT`
  })
  return new Response(JSON.stringify({ theme }))
}
