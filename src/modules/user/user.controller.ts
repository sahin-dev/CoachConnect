import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dtos/create-user.dto";

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

}