/*
  Warnings:

  - You are about to drop the column `dispositivoId` on the `ordemservico` table. All the data in the column will be lost.
  - You are about to drop the `dispositivo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ClienteId` to the `OrdemServico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dispositivo` to the `OrdemServico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `dispositivo` DROP FOREIGN KEY `Dispositivo_clienteId_fkey`;

-- DropForeignKey
ALTER TABLE `ordemservico` DROP FOREIGN KEY `OrdemServico_dispositivoId_fkey`;

-- DropIndex
DROP INDEX `OrdemServico_dispositivoId_fkey` ON `ordemservico`;

-- AlterTable
ALTER TABLE `ordemservico` DROP COLUMN `dispositivoId`,
    ADD COLUMN `ClienteId` INTEGER NOT NULL,
    ADD COLUMN `dispositivo` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `dispositivo`;

-- AddForeignKey
ALTER TABLE `OrdemServico` ADD CONSTRAINT `OrdemServico_ClienteId_fkey` FOREIGN KEY (`ClienteId`) REFERENCES `Cliente`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
