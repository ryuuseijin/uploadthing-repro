import type { FileRouter } from 'uploadthing/next';
import { createUploadthing } from 'uploadthing/next';

const f = createUploadthing({
  errorFormatter: (err) => {
    console.log('Error uploading file', err.message);
    console.log('  - Above error caused by:', err.cause);
    return { message: err.message };
  },
});

// @see https://docs.uploadthing.com/api-reference/server#file-routes
export const router = {
  TrainingImages: f({
    image: {
      maxFileSize: '8MB',
      maxFileCount: 20,
    },
  })
    .middleware(() => {
      return { foo: 'bar' as const };
    })
    .onUploadComplete(({ file, metadata }) => {
      console.log('upload completed', { file, metadata });
    }),
} satisfies FileRouter;

export type StyleRequestFileRouter = typeof router;
