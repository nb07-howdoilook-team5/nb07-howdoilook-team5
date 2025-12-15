/*
  Warnings:

  - You are about to drop the column `costEffectiveness` on the `curation` table. All the data in the column will be lost.
  - Added the required column `cost_effectiveness` to the `curation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "curation" DROP COLUMN "costEffectiveness",
ADD COLUMN     "cost_effectiveness" INTEGER NOT NULL;
