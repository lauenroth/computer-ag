/*
  Warnings:

  - You are about to drop the column `websiteId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Website` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_websiteId_fkey";

-- DropIndex
DROP INDEX "Website_userId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "websiteId";

-- AlterTable
ALTER TABLE "Website" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "Webseite" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "design" TEXT NOT NULL DEFAULT E'default',
    "html" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Webseite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Webseite_slug_key" ON "Webseite"("slug");
