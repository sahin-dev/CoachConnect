import { IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class SessionDetailsParamsDto {
    
    @IsString()
    @IsNotEmpty()
    @IsMongoId()
    sessionId:string
}