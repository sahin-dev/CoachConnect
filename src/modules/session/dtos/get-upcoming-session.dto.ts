import { IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { PaginationDto } from "src/common/dtos/pagination.dto";

export class CoachSessionDto{

    @IsNotEmpty()
    @IsString()
    @IsMongoId()

    coachId:string
    
}