-- CreateEnum
CREATE TYPE "Size" AS ENUM ('SMALL', 'MEDIUM', 'LARGE', 'HUGE', 'COLOSSAL');

-- CreateTable
CREATE TABLE "enemies" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "difficult" INTEGER NOT NULL,
    "initiative" INTEGER NOT NULL,
    "perception" INTEGER NOT NULL,
    "armor" INTEGER NOT NULL,
    "healthPoints" INTEGER NOT NULL,
    "movement" DOUBLE PRECISION NOT NULL,
    "level" INTEGER NOT NULL,
    "size" "Size" NOT NULL DEFAULT E'MEDIUM',

    CONSTRAINT "enemies_pkey" PRIMARY KEY ("id")
);
