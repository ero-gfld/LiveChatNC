/*
  Warnings:

  - Added the required column `hidden` to the `Queue` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Queue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT,
    "authorImage" TEXT,
    "submissionDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "executionDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "duration" INTEGER NOT NULL,
    "discordGuildId" TEXT NOT NULL,
    "hidden" BOOLEAN NOT NULL
);
INSERT INTO "new_Queue" ("author", "authorImage", "content", "discordGuildId", "duration", "executionDate", "id", "submissionDate", "type") SELECT "author", "authorImage", "content", "discordGuildId", "duration", "executionDate", "id", "submissionDate", "type" FROM "Queue";
DROP TABLE "Queue";
ALTER TABLE "new_Queue" RENAME TO "Queue";
CREATE INDEX "Queue_type_idx" ON "Queue"("type");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
