import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { DRIZZLE_DATABASE_URL } from '$env/static/private'
import * as schema from './schemas'

neonConfig.fetchConnectionCache = true;

const sql = neon(DRIZZLE_DATABASE_URL);
export const db = drizzle(sql, {
    schema,
});
export type Db = typeof db;

