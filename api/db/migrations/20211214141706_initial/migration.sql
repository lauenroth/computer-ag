-- CreateTable
CREATE TABLE "Anmeldung" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "klasse" TEXT NOT NULL,
    "anmerkung" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Anmeldung_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Anmeldung_email_key" ON "Anmeldung"("email");
