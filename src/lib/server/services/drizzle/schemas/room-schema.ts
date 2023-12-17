import { varchar, uuid, pgTable, index } from "drizzle-orm/pg-core";

export const rooms = pgTable("rooms", {
    id: uuid("id").primaryKey(),
    name: varchar("name").notNull(),
    ownerId: varchar("owner_id").notNull(),
}, (table) => {
    return {
        ownerId: index("owner_idx").on(table.ownerId),
    };
});

export type DbRoom = typeof rooms.$inferSelect;
export type NewDbRoom = typeof rooms.$inferInsert;
