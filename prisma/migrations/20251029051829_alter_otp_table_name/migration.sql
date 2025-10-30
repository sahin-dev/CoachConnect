/*
  Warnings:

  - You are about to drop the `Otp` table. If the table is not empty, all the data it contains will be lost.

*/
-- -- DropTable
-- DROP TABLE "public"."Otp";

-- -- CreateTable
-- CREATE TABLE "otps" (
--     "id" SERIAL NOT NULL,
--     "code" INTEGER NOT NULL,
--     "for" "OtpFor" NOT NULL,
--     "otp_status" "OtpStatus" NOT NULL DEFAULT 'CREATED',
--     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     "updatedAt" TIMESTAMP(3) NOT NULL,

--     CONSTRAINT "otps_pkey" PRIMARY KEY ("id")
-- );

ALTER TABLE IF EXISTS "Otp" RENAME TO "otps"