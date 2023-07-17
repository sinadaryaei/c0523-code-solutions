import { Pool } from 'pg';

export const db = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'studentGradeTable',
  password: 'your_password',
  port: 5432,
});
