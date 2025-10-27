import { Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller({
path:"users",
})
export class UserController {

    constructor(private readonly userService:UserService){}

    @Post()
    async addUser(){
        const user = await this.userService.addOneUser()

        return user
    }

}