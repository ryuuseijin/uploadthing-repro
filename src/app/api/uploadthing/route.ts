import { createRouteHandler } from 'uploadthing/next';
import { router } from './router';

export const { GET, POST } = createRouteHandler({
  router,
  config: {},
});
