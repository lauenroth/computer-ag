/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nachname` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vorname` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "nachname" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "vorname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profileId" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_slug_key" ON "Profile"("slug");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
