import { defineConfig } from 'drizzle-kit';

import * as dotenv from 'dotenv';
dotenv.config();
const { DRIZZLE_DATABASE_URL } = process.env;
if (!DRIZZLE_DATABASE_URL) {
	throw new Error('DRIZZLE_DATABASE_URL is not defines');
}

export default defineConfig({
	schema: './src/lib/server/services/drizzle/schemas/index.ts',
	out: './.drizzle',
	driver: 'pg',
	dbCredentials: {
		connectionString: DRIZZLE_DATABASE_URL
	},
	verbose: true,
	strict: true
});
