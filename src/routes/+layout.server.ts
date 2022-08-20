import cookie from 'cookie';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ request }) => {
  const cookies = cookie.parse(request.headers.get('cookie') || '');
  const theme: string = cookies.theme ? cookies.theme : 'dark';
  return {
    theme,
  };
}
