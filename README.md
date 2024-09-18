# Reproducing build error with uploadthing@7.0.2, nextjs and custom distDir

## Setup

    npm i

## Node version

    node --version
    v20.11.0

## Reproducing the error

To reproduce the error run the following command:

    npm run build

The process will exit with the following error:

    ...
    Linting and checking validity of types  .Maximum call stack size exceeded

## Make the error go away

There are three changes, any one of which will make the error go away:

1. remove the line containing `distDir: 'build'` from `next.config.js`
3. remove `withSentryConfig` from `next.config.js`
4. change `@uploadthing/react": "^7.0.2"` to `@uploadthing/react": "^6.8.0"` in `package.json` (and run `npm i`)


