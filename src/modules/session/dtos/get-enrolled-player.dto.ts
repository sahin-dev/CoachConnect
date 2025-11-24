import { IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { PaginationDto } from "src/common/dtos/pagination.dto";

export class GetEnrolledPlayerDto extends PaginationDto{

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    coachId:string


}