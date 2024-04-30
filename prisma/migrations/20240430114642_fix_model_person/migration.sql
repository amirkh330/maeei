/*
  Warnings:

  - You are about to drop the column `phone` on the `Person` table. All the data in the column will be lost.
  - Added the required column `expertise` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serialize_number` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" DROP COLUMN "phone",
ADD COLUMN     "expertise" TEXT NOT NULL,
ADD COLUMN     "mobile" TEXT NOT NULL,
ADD COLUMN     "pharmacy" TEXT[],
ADD COLUMN     "serialize_number" TEXT NOT NULL;
