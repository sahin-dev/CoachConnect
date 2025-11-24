import { Exclude, Expose, Type } from "class-transformer"
import { ValidateNested } from "class-validator"

class UpcomingSessionResponseDto {

    @Expose()
    id:string

    @Expose()
    banner:string

    @Expose()
    title:string

    @Expose()
    description:string

    @Expose()
    started_at:Date
}


export class CoachUpcomingSessionResponseDto{

    @Expose()
    // @ValidateNested()
    @Type(() => UpcomingSessionResponseDto)
    session:UpcomingSessionResponseDto

    @Expose()
    left:number
}

