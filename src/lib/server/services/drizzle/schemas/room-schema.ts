import { varchar, uuid, pgTable, index, pgEnum, json } from 'drizzle-orm/pg-core';

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
		name: varchar('name').notNull(),
		ownerId: varchar('owner_id').notNull(),
		status: statusEnum('status').notNull().default('preparing'),
		metadata: json('metadata').$type<RoomMetadata>()
	},
	(table) => {
		return {
			ownerId: index('owner_idx').on(table.ownerId)
		};
	}
);

export type DbRoom = typeof rooms.$inferSelect;
export type NewDbRoom = typeof rooms.$inferInsert;
