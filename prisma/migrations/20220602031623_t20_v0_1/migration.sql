/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `enemies` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "enemies_name_key" ON "enemies"("name");
