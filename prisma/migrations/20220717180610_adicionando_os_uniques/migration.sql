/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `wifi` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "wifi_userId_title_key" ON "wifi"("userId", "title");
