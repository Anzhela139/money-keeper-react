import { http, HttpResponse } from 'msw'
 
// Let's keep a map of all existing posts in memory.
// At the beginning, this list is empty as we have no posts.
const allPosts = new Map()
 
export const handlers = [
  // /api/auth/me
  rest.get(/.*\/api\/auth\/me$/, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: { name: 'test', email: 'email@domain.com' },
      }),
    );
  }),
  http.get('/accounts/users', () => {
    // Construct a JSON response with the list of all posts
    // as the response body.
    return HttpResponse.json(Array.from(allPosts.values()))
  }),
  http.get('/posts', () => {
    // Construct a JSON response with the list of all posts
    // as the response body.
    return HttpResponse.json(Array.from(allPosts.values()))
  }),
]