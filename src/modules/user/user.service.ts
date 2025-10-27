import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserService{

    constructor(private readonly prismaService:PrismaService){}

    async addOneUser(){
        const user = await this.prismaService.user.create({data:{email:"mdsahin@gmail.com", name:"sahin siraj"
        }})

        return user
    }

}