import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { plainToInstance } from "class-transformer";
import { UserResponseDto } from "./dtos/user-response.dto";
import { EncoderProvider } from "src/common/providres/encoder.provider";

@Injectable()
export class UserService{

    constructor(private readonly prismaService:PrismaService, private readonly encoder:EncoderProvider){}

    async addOneUser(createUserDto:CreateUserDto){

        const existingUser = await this.findUserByEmail(createUserDto.email)
        if(existingUser){
            throw new ConflictException('This eamil already registered, kindly sign in to your account!')
        }
        const hashedPassword = await this.encoder.hashPassword(createUserDto.password, 10)
        const user = await this.prismaService.user.create({data:{...createUserDto, password:hashedPassword}})

        return plainToInstance(UserResponseDto, user, {excludeExtraneousValues:true})
    }

    async findUserByEmail(email:string){
        const user = await this.prismaService.user.findUnique({where:{email}})

        return user
    }

}