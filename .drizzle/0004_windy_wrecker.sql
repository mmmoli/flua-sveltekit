DO $$ BEGIN
 CREATE TYPE "status" AS ENUM('preparing', 'ready', 'locked');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "rooms" ADD COLUMN "mood" "status" DEFAULT 'preparing';