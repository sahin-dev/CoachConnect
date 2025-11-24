import { IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { CreateSessionDto } from "./create-session.dto";
import { PartialType } from "nestjs-mapped-types";

export class UpdateSessionDto extends PartialType<CreateSessionDto>(CreateSessionDto){

    @IsString()
    @IsNotEmpty()
    @IsMongoId()
    sessionId:string


}