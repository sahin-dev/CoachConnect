import { IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class DeleteSessionDto {
    @IsNotEmpty()
    @IsMongoId()
    @IsString()
    sessionId:string

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    note:string
}