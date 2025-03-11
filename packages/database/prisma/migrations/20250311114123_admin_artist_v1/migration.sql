/*
  Warnings:

  - You are about to drop the `Admins` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ARTIST', 'ADMIN');

-- AlterTable
ALTER TABLE "Artists" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'ARTIST';

-- DropTable
DROP TABLE "Admins";
