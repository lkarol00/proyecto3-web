/*
  Warnings:

  - Added the required column `updatedAt` to the `Product_Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product_Order" ADD COLUMN     "cretedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
