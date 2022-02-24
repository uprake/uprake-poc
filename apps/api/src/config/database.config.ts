export default () => ({
  databaseUri:
    process.env.DATABASE_URI || 'mongodb://localhost:27017/uprake-collab',
});
