import databaseConfig from './database.config';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: databaseConfig(),
});
