import { Expose, Type } from "class-transformer";
import { SessionResponseDto } from "./session-response.dto";
import { PaginationResponseDto } from "./pagination-response.dto";
import { validate, ValidateNested } from "class-validator";


export class AvailableSessionResponseDto extends PaginationResponseDto{

    @Expose()
    @Type(() => SessionResponseDto)
    @ValidateNested({each:true})
    sessions:SessionResponseDto

    @Expose()
    total:number
}