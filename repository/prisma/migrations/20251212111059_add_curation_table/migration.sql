-- CreateTable
CREATE TABLE "curation" (
    "id" BIGSERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "content" TEXT,
    "password" TEXT NOT NULL,
    "trendy" INTEGER NOT NULL,
    "personality" INTEGER NOT NULL,
    "practicality" INTEGER NOT NULL,
    "costEffectiveness" INTEGER NOT NULL,
    "style_id" BIGINT NOT NULL,

    CONSTRAINT "curation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "curation" ADD CONSTRAINT "curation_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "style"("id") ON DELETE CASCADE ON UPDATE CASCADE;
