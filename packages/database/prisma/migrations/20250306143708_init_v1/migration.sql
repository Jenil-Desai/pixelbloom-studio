-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('MOBILE', 'TABLET', 'DESKTOP');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "Admins" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artists" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "mobileNo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" "Gender",
    "country" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallpapers" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "imageUrl" TEXT,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "platform" "Platform",
    "categoriesId" TEXT NOT NULL,
    "artistsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wallpapers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LikedWallpapers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "wallpaperId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LikedWallpapers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookmarkedWallpapers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "wallpaperId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookmarkedWallpapers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admins_email_key" ON "Admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Artists_email_key" ON "Artists"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Artists_mobileNo_key" ON "Artists"("mobileNo");

-- AddForeignKey
ALTER TABLE "Wallpapers" ADD CONSTRAINT "Wallpapers_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallpapers" ADD CONSTRAINT "Wallpapers_artistsId_fkey" FOREIGN KEY ("artistsId") REFERENCES "Artists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedWallpapers" ADD CONSTRAINT "LikedWallpapers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedWallpapers" ADD CONSTRAINT "LikedWallpapers_wallpaperId_fkey" FOREIGN KEY ("wallpaperId") REFERENCES "Wallpapers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookmarkedWallpapers" ADD CONSTRAINT "BookmarkedWallpapers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookmarkedWallpapers" ADD CONSTRAINT "BookmarkedWallpapers_wallpaperId_fkey" FOREIGN KEY ("wallpaperId") REFERENCES "Wallpapers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
