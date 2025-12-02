import { Expose, Type } from "class-transformer";
import { SessionResponseDto } from "./session-response.dto";
import { ValidateNested } from "class-validator";

export class SessionQueryResponseDto {

    @Expose()
    @ValidateNested()
    @Type(() => SessionResponseDto)
    sessions:SessionResponseDto

    @Expose()
    total:number

}