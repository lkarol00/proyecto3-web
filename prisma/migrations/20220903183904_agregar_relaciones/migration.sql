/*
  Warnings:

  - You are about to drop the column `delivertyTime` on the `Dispatch` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[orderId]` on the table `Dispatch` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `deliveryTime` to the `Dispatch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `Dispatch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Dispatch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dispatch" DROP COLUMN "delivertyTime",
ADD COLUMN     "deliveryTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "clientId" TEXT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "orderId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Dispatch_orderId_key" ON "Dispatch"("orderId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispatch" ADD CONSTRAINT "Dispatch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispatch" ADD CONSTRAINT "Dispatch_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
