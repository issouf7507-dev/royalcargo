-- CreateTable
CREATE TABLE `Reservationanonime` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `etat` VARCHAR(191) NOT NULL,
    `prix` INTEGER NOT NULL,
    `poids` INTEGER NOT NULL,
    `tailes` INTEGER NOT NULL,
    `daten` DATETIME(3) NOT NULL,
    `condition` BOOLEAN NOT NULL,
    `quantite` INTEGER NOT NULL,
    `images` VARCHAR(191) NOT NULL,
    `images2` VARCHAR(191) NOT NULL,
    `images3` VARCHAR(191) NOT NULL,
    `service` VARCHAR(191) NOT NULL,
    `typec` VARCHAR(191) NOT NULL,
    `trackcode` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Reservationanonime_trackcode_key`(`trackcode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
