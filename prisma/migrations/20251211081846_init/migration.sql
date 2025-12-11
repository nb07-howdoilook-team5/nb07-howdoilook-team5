-- CreateTable
CREATE TABLE "style" (
    "id" BIGSERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "description" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "style_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "curation_comment" (
    "id" BIGSERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "content" TEXT,
    "password" TEXT NOT NULL,
    "curation_id" BIGINT NOT NULL,

    CONSTRAINT "curation_comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "curation" ADD CONSTRAINT "curation_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "style"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "curation_comment" ADD CONSTRAINT "curation_comment_curation_id_fkey" FOREIGN KEY ("curation_id") REFERENCES "curation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
