/*
  Warnings:

  - You are about to drop the column `ClienteId` on the `ordemservico` table. All the data in the column will be lost.
  - Added the required column `clienteId` to the `OrdemServico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ordemservico` DROP FOREIGN KEY `OrdemServico_ClienteId_fkey`;

-- DropIndex
DROP INDEX `OrdemServico_ClienteId_fkey` ON `ordemservico`;

-- AlterTable
ALTER TABLE `ordemservico` DROP COLUMN `ClienteId`,
    ADD COLUMN `clienteId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `OrdemServico` ADD CONSTRAINT `OrdemServico_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
