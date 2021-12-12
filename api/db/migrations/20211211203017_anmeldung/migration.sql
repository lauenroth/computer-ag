-- CreateTable
CREATE TABLE "Anmeldung" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "klasse" TEXT NOT NULL,
    "anmerkung" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Anmeldung_email_key" ON "Anmeldung"("email");
