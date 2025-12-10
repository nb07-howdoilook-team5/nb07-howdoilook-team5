/*
  Warnings:

  - Added the required column `password` to the `style` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "style" ADD COLUMN     "password" TEXT NOT NULL;
