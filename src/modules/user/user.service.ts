import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { EncoderProvider } from "src/common/providres/encoder.provider";
import { UserQueryDto } from "./dtos/user-query.dto";
import { PaginationDto } from "src/common/dtos/pagination.dto";
import { UserRole } from "generated/prisma/enums";


@Injectable()
export class UserService{

    constructor(private readonly prismaService:PrismaService, private readonly encoder:EncoderProvider){}

    async addUser(createUserDto:CreateUserDto){

        const hashedPassword = await this.encoder.hashPassword(createUserDto.password, 10)
        const user = await this.prismaService.user.create({data:{...createUserDto, password:hashedPassword}})

        return user
    }

    async findUserByEmail(email:string){
        const user = await this.prismaService.user.findUnique({where:{email}})

        return user
    }

    async findUserById(userId:string){
        const user = await this.prismaService.user.findUnique({where:{id:userId}})

        return user
    }

    async getUnverifiedUser(userId:string){
        const unverifiedUsers  = await this.prismaService.user.findMany({where:{email_verified:false}})

        return 
    }

    async getUsers (query:UserQueryDto){
        
      const skip = (query.page - 1) * query.limit

      const queryBuilder = this.getQueryBuilder(query)

    //   const users = await this.prismaService.user.findMany({where:{...queryBuilder}, skip, take:query.limit})

      const [users, total] = await this.prismaService.$transaction([
        this.prismaService.user.findMany({where:{...queryBuilder}, skip, take:query.limit}),
        this.prismaService.user.count({where:{...queryBuilder}})
      ])


      return {users, page:query.page, limit:query.limit, pages:Math.ceil(total / query.limit)}

    }

    getQueryBuilder(query:UserQueryDto){

        let queryObj:Record<string, any> = {}
    
        if(query.fullName){
            queryObj.fullName = {contains:query.fullName, mode:"insensitive"}
        }

        if(Object.keys(query).includes("email_verified")){
           
            queryObj.email_verified = Boolean(query.email_verified)
        }

        if(query.email){
            queryObj.email = query.email.trim().toLowerCase()
        }

        if(query.role){
            queryObj.role = query.role
        }

        return queryObj
    }

    

    async updateEmailVerificationStatus(email:string){
        const user = await this.findUserByEmail(email)

        if(!user){
            throw new NotFoundException("user not found")
        }

        await this.prismaService.user.update({where:{id:user.id}, data:{email_verified:true}})
    }

    async deleteUserById(userId:string){

        const user = await this.prismaService.user.findUnique({where:{id:userId}})

        if(!user){
            throw new NotFoundException("user not found")
        }
        const updatedUser = await this.prismaService.user.update({where:{id:user.id}, data:{is_deleted:true}})

        return updatedUser

    }

    async isCoach(userId:string){

        const user = await this.prismaService.user.findFirst({where:{id:userId}})

        return user && user.role === UserRole.COACH
    }

}