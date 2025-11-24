import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class VerifyEmailDto{
    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsNumber()
    @IsNotEmpty()
    
    code:number
}