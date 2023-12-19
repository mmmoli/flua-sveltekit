import { varchar, uuid, pgTable, index, pgEnum, json, text } from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('status', ['preparing', 'ready', 'locked']);

export type ExternalData = {
	namespace: string;
	externalId: string;
};

export type RoomMetadata = {
	externalData?: ExternalData;
};

export const rooms = pgTable(
	'rooms',
	{
		id: uuid('id').primaryKey(),
		description: varchar('description', { length: 256 }),
		metadata: json('metadata').$type<RoomMetadata>(),
		name: varchar('name', { length: 256 }).notNull(),
		ownerId: varchar('owner_id').notNull(),
		status: statusEnum('status').notNull().default('preparing')
	},
	(table) => {
		return {
			ownerId: index('owner_idx').on(table.ownerId)
		};
	}
);

export type DbRoom = typeof rooms.$inferSelect;
export type NewDbRoom = typeof rooms.$inferInsert;
