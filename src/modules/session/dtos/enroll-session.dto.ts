import { Type } from "class-transformer";
import { IsIn, IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { PaymentMethod } from "generated/prisma/enums";

export class EnrollSessionDto {

    @IsString()
    @IsMongoId()
    @IsNotEmpty()
    sessionId:string

    @IsIn(Object.keys(PaymentMethod))
    @IsString()
    @IsNotEmpty()
    paymentMethod:PaymentMethod
}