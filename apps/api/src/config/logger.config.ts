const pack = require('../../package.json');

export default () => ({
  applicationName: process.env.DATADOG_APPLICATION_NAME,
  apiKey: process.env.DATADOG_API_KEY,
  host: process.env.DATADOG_HOST,
  env: (process.env.ENV_TYPE as string) || 'development',
  version: pack['version'] || (process.env.VERSION as string),
});
