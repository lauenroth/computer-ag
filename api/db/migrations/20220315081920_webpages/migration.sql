/*
  Warnings:

  - You are about to drop the `Webseite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Website` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Webseite";

-- DropTable
DROP TABLE "Website";

-- CreateTable
CREATE TABLE "Webpage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "design" TEXT NOT NULL DEFAULT E'default',
    "html" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Webpage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Webpage_slug_key" ON "Webpage"("slug");
