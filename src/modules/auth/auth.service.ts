import { BadRequestException, Body, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { SigninDto } from "./dtos/signin.dto";
import { RegisterUserDto } from "./dtos/register-user.dto";
import { UserService } from "../user/user.service";
import { EncoderProvider } from "src/common/providres/encoder.provider";
import { plainToInstance } from "class-transformer";
import { UserResponseDto } from "../user/dtos/user-response.dto";
import { SMTPProvider } from "src/common/providres/smtp.provider";
import { User } from "generated/prisma/browser";



@Injectable()
export class AuthService {

    constructor (private readonly userService:UserService, private readonly encoder:EncoderProvider, private readonly mailProvider:SMTPProvider){}


    async signin ( signInDto:SigninDto){
        
        const user = await this.userService.findUserByEmail(signInDto.email)

        if(!user){
            throw new NotFoundException("No account belong to this email. Please create an account first!")
        }

        if(! (await this.comparePassword(signInDto.password, user.password))){

            throw new BadRequestException("credentials are not matched!")
        }

        return this.userToUserDtoMapper(user)

    }


    private async  comparePassword(password:string, hash:string):Promise<boolean>{

        return await this.encoder.compare(password, hash)
    }


    //map user nobject to user DTO

    private userToUserDtoMapper(user:User){

        return plainToInstance(UserResponseDto, user, {

            excludeExtraneousValues:true,
        })
    }

    private generateEmailVerificationCode(){
        return Math.random() * 900000
    }

    private sendEmailVerificationCode(email:string){
        const code = this.generateEmailVerificationCode()

        this.mailProvider.sendMail(email, "Email Verification code", `Your email verification code is ${code}`)
    }


    async registerUser (@Body() registerUserDto:RegisterUserDto) {
        const user =  await this.userService.addOneUser(registerUserDto)
        //Send verification code to user email
        this.sendEmailVerificationCode(user.email)

        return user
    }

}