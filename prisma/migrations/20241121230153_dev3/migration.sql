/*
  Warnings:

  - Added the required column `images2` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `images3` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Reservation` ADD COLUMN `images2` VARCHAR(191) NOT NULL,
    ADD COLUMN `images3` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `articleBlog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
