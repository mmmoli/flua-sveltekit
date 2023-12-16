import { varchar, uuid, pgTable } from "drizzle-orm/pg-core";

export const rooms = pgTable("rooms", {
    id: uuid("id").primaryKey(),
    name: varchar("name").notNull(),
    ownerId: uuid("owner_id").notNull(),
});

export type DbRoom = typeof rooms.$inferSelect;
export type NewDbRoom = typeof rooms.$inferInsert;
