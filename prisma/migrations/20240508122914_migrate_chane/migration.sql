/*
  Warnings:

  - You are about to drop the column `serialize_number` on the `Person` table. All the data in the column will be lost.
  - Added the required column `family` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" DROP COLUMN "serialize_number",
ADD COLUMN     "family" TEXT NOT NULL;
