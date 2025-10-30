-- CreateEnum
CREATE TYPE "OtpStatus" AS ENUM ('CREATED', 'VERIFIED', 'INVALID');

-- CreateEnum
CREATE TYPE "OtpFor" AS ENUM ('Change_Password');

-- CreateTable
CREATE TABLE "Otp" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "for" "OtpFor" NOT NULL,
    "otp_status" "OtpStatus" NOT NULL DEFAULT 'CREATED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Otp_pkey" PRIMARY KEY ("id")
);
