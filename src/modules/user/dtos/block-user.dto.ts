import { IsNotEmpty, IsString } from "class-validator";

export class TogggleBlockUserDto {

    @IsString()
    @IsNotEmpty()
    userId:string
}