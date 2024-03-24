import { http, HttpResponse } from 'msw';
import interactions from './../mockData/interactions';
import users from './../mockData/users';
import contractors from './../mockData/contactors';
 
// Let's keep a map of all existing posts in memory.
// At the beginning, this list is empty as we have no posts.
const allPosts = new Map()
 
export const handlers = [
  // /api/auth/me
  http.get(/.*\/api\/auth\/me$/, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: { name: 'test', email: 'email@domain.com' },
      }),
    );
  }),
  http.post('/auth', () => {
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'mySecret=abc-123',
        'X-Custom-Header': 'yes',
      },
    })
  }),
  http.get('/users', () => {
    // Construct a JSON response with the list of all posts
    // as the response body.
    return HttpResponse.json(Array.from(users.values()));
  }),
  http.get('/posts', () => {
    // Construct a JSON response with the list of all posts
    // as the response body.
    return HttpResponse.json(Array.from(allPosts.values()));
  }),
  http.get('/interactions', () => {
    const interactionsWithContractors = interactions.map((el) => {
      const contracorId = contractors.findIndex((contractor) => parseInt(contractor.id) === parseInt(el.contactorId));
      el.contactor = contractors[contracorId];
      return el;
    });
    console.log(interactionsWithContractors)
    return HttpResponse.json(interactionsWithContractors);
  }),
]