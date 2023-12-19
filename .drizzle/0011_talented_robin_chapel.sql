ALTER TABLE "rooms" ADD COLUMN "slug" varchar(128) NOT NULL;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "slug_idx" ON "rooms" ("slug");