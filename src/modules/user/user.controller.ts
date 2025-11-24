import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UserQueryDto } from "./dtos/user-query.dto";
import { PaginationDto } from "src/common/dtos/pagination.dto";
import { plainToInstance } from "class-transformer";
import { UserResponseDto } from "./dtos/user-response.dto";
import { AllUsersResponseDto } from "./dtos/all-usres-response.dto";

@Controller({
path:"users",
})
export class UserController {

    constructor(private readonly userService:UserService){}

    // @Post()
    // async addUser(@Body() createUserDto:CreateUserDto){
    //     const user = await this.userService.addOneUser(createUserDto)

    //     return user
    // }
    @Get()
    async getAllUSers(@Query() query:UserQueryDto){
        
        const data = await this.userService.getUsers(query)
  
        return plainToInstance(AllUsersResponseDto,data, {
            excludeExtraneousValues:true
        })
    }

}