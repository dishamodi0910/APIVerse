/*
  Warnings:

  - A unique constraint covering the columns `[userId,courseId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "VerificationToken" ALTER COLUMN "expiresAt" SET DEFAULT CURRENT_TIMESTAMP + interval '10 minutes';

-- CreateIndex
CREATE UNIQUE INDEX "Review_userId_courseId_key" ON "Review"("userId", "courseId");
