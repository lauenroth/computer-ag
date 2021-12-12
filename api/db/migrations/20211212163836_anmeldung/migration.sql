-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Anmeldung" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "klasse" TEXT NOT NULL,
    "anmerkung" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Anmeldung" ("anmerkung", "email", "id", "klasse", "name") SELECT "anmerkung", "email", "id", "klasse", "name" FROM "Anmeldung";
DROP TABLE "Anmeldung";
ALTER TABLE "new_Anmeldung" RENAME TO "Anmeldung";
CREATE UNIQUE INDEX "Anmeldung_email_key" ON "Anmeldung"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
