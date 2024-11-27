-- CreateTable
CREATE TABLE `Car` (
    `CarId` INTEGER NOT NULL AUTO_INCREMENT,
    `Model` VARCHAR(191) NOT NULL,
    `Year` INTEGER NOT NULL,
    `Manufacturer` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`CarId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
