import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const initDatabase = async () => {
  const database = await open({
    filename: 'exercisesDb.sqlite',
    driver: sqlite3.Database,
  });
  await database.migrate({ migrationsPath: './database/migrations-sqlite' });
  return database;
}

const dbConnection = initDatabase();

export default dbConnection;