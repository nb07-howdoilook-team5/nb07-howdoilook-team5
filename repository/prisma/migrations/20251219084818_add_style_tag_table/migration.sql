/*
  Warnings:

  - You are about to drop the column `tags` on the `style` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "style" DROP COLUMN "tags",
ADD COLUMN     "imageUrls" TEXT[];

-- CreateTable
CREATE TABLE "tag" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "style_tag" (
    "id" BIGSERIAL NOT NULL,
    "style_id" BIGINT NOT NULL,
    "tag_id" BIGINT NOT NULL,

    CONSTRAINT "style_tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tag_name_key" ON "tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "style_tag_style_id_tag_id_key" ON "style_tag"("style_id", "tag_id");

-- AddForeignKey
ALTER TABLE "style_tag" ADD CONSTRAINT "style_tag_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "style"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "style_tag" ADD CONSTRAINT "style_tag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
