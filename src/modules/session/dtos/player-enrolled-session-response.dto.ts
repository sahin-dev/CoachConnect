import { Expose, Type } from "class-transformer";
import { CoachResponseDto } from "./coach-response.dto";
import { SessionResponseDto } from "./session-response.dto";
import { ValidateNested } from "class-validator";
import { PaginationResponseDto } from "./pagination-response.dto";


export class PlayerEnrolledSessionDto extends PaginationResponseDto{

   
    @Expose()
    @ValidateNested({each:true})
    @Type(() => SessionResponseDto)
    sessions: SessionResponseDto[]

}