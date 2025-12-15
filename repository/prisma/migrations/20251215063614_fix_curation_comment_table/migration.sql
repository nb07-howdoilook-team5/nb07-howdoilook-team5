/*
  Warnings:

  - You are about to drop the column `curaion_id` on the `curation_comment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[curation_id]` on the table `curation_comment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `curation_id` to the `curation_comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "curation_comment" DROP CONSTRAINT "curation_comment_curaion_id_fkey";

-- DropIndex
DROP INDEX "curation_comment_curaion_id_key";

-- AlterTable
ALTER TABLE "curation_comment" DROP COLUMN "curaion_id",
ADD COLUMN     "curation_id" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "curation_comment_curation_id_key" ON "curation_comment"("curation_id");

-- AddForeignKey
ALTER TABLE "curation_comment" ADD CONSTRAINT "curation_comment_curation_id_fkey" FOREIGN KEY ("curation_id") REFERENCES "curation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
