/*
  Warnings:

  - Made the column `content` on table `curation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `style` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "curation" ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "content" SET DEFAULT '';

-- AlterTable
ALTER TABLE "style" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '';

-- CreateTable
CREATE TABLE "curation_comment" (
    "id" BIGSERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL,
    "curaion_id" BIGINT NOT NULL,

    CONSTRAINT "curation_comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "curation_comment_curaion_id_key" ON "curation_comment"("curaion_id");

-- AddForeignKey
ALTER TABLE "curation_comment" ADD CONSTRAINT "curation_comment_curaion_id_fkey" FOREIGN KEY ("curaion_id") REFERENCES "curation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
