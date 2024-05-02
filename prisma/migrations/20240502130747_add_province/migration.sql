-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "serialize_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "expertise" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "pharmacy" TEXT[],

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
