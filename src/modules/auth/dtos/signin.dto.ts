import { Transform, TransformFnParams } from "class-transformer"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class SigninDto {

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Transform(({value}:TransformFnParams) => String(value).trim().toLowerCase())
    email:string

    @IsString()
    @IsNotEmpty()
    @Transform(({value}:TransformFnParams) => String(value).trim())
    password:string

    // @IsEnum(UserRole)
    // @IsNotEmpty()
    // role:UserRole 
}