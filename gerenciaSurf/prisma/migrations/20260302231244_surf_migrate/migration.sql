-- CreateTable
CREATE TABLE `prancha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(100) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `tabua` VARCHAR(191) NOT NULL,
    `tamanho` VARCHAR(191) NOT NULL,
    `material` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
