/*
  Warnings:

  - A unique constraint covering the columns `[style_id]` on the table `style_count` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "style_count_style_id_key" ON "style_count"("style_id");
