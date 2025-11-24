import { Expose } from "class-transformer"
import { ValidateNested } from "class-validator"
import { ParticipantPaymentStatus, PaymentMethod } from "generated/prisma/enums"


class EnrolledPlayerResponseDto {
    @Expose()
    id:string

    @Expose()
    avatar:string

    @Expose()
    fullName:string
}

class EnrolledPalyerSessionResponseDto {
    @Expose()
    id:string
    
    @Expose()
    title:string

    @Expose()
    address:string
}

export class GetEnrolledPlayerResponseDto {

    @Expose()
    @ValidateNested()
    session:EnrolledPalyerSessionResponseDto

    @Expose()
    @ValidateNested()
    player:EnrolledPlayerResponseDto

    @Expose()
    payment_status:ParticipantPaymentStatus
    
    @Expose()
    payment_method:PaymentMethod

}