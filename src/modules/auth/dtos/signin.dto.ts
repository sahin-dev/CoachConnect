import { Transform } from "class-transformer"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class SigninDto {

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Transform(({value}) => value.toLowerCase())
    email:string

    @IsString()
    @IsNotEmpty()
    password:string
}