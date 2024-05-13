-- AlterTable
ALTER TABLE "VerificationToken" ALTER COLUMN "expiresAt" SET DEFAULT CURRENT_TIMESTAMP + interval '10 minutes';
