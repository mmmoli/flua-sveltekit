import { varchar, uuid, pgTable, index, pgEnum, json, timestamp } from 'drizzle-orm/pg-core';

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
		createdAt: timestamp('created_at').notNull().defaultNow(),
		description: varchar('description', { length: 256 }),
		metadata: json('metadata').$type<RoomMetadata>(),
		name: varchar('name', { length: 256 }).notNull(),
		ownerId: varchar('owner_id').notNull(),
		slug: varchar('slug', { length: 128 }).notNull(),
		status: statusEnum('status').notNull().default('preparing'),
		updatedAt: timestamp('updated_at').notNull().defaultNow()
	},
	(table) => {
		return {
			ownerId: index('room_owner_idx').on(table.ownerId),
			slug: index('room_slug_idx').on(table.slug)
		};
	}
);

export type DbRoom = typeof rooms.$inferSelect;
export type NewDbRoom = typeof rooms.$inferInsert;
