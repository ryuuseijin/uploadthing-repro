
/** @type {import("next").NextConfig} */
const config = {
  distDir: 'build',
};

const { withSentryConfig } = await import('@sentry/nextjs');

export default withSentryConfig(config, {
    enabled: false,
});
