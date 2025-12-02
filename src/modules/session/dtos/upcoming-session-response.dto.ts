import { Exclude, Expose, Type } from "class-transformer"
import { ValidateNested } from "class-validator"
import { SessionResponseDto } from "./session-response.dto"

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
    @Type(() => SessionResponseDto)
    sessions:SessionResponseDto

    @Expose()
    total:number
}

