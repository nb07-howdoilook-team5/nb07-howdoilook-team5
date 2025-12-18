/*
  Warnings:

  - You are about to drop the column `style_id` on the `style_count` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[style_count_id]` on the table `style` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `style_count_id` to the `style` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "style_count" DROP CONSTRAINT "style_count_style_id_fkey";

-- DropIndex
DROP INDEX "style_count_style_id_key";

-- AlterTable
ALTER TABLE "style" ADD COLUMN     "style_count_id" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "style_count" DROP COLUMN "style_id";

-- CreateIndex
CREATE UNIQUE INDEX "style_style_count_id_key" ON "style"("style_count_id");

-- AddForeignKey
ALTER TABLE "style" ADD CONSTRAINT "style_style_count_id_fkey" FOREIGN KEY ("style_count_id") REFERENCES "style_count"("id") ON DELETE CASCADE ON UPDATE CASCADE;
