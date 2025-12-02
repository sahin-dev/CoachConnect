import { PaginationDto } from "src/common/dtos/pagination.dto";
import { SessionResponseDto } from "./session-response.dto";
import { PlayerStatus, SessionStatus } from "generated/prisma/enums";
import { IsEnum, IsString } from "class-validator";

export class GetPlayerEnrolledSessionDto{

    @IsString()
    @IsEnum(SessionStatus)
    status:SessionStatus 

}