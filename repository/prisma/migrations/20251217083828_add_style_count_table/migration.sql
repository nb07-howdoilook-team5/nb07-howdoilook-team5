-- CreateTable
CREATE TABLE "style_count" (
    "id" BIGSERIAL NOT NULL,
    "style_id" BIGINT NOT NULL,
    "view_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "style_count_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "style_count" ADD CONSTRAINT "style_count_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "style"("id") ON DELETE CASCADE ON UPDATE CASCADE;
