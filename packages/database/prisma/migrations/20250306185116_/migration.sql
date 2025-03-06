/*
  Warnings:

  - A unique constraint covering the columns `[clerkId]` on the table `Artists` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerkId` to the `Artists` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artists" ADD COLUMN     "clerkId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Artists_clerkId_key" ON "Artists"("clerkId");
