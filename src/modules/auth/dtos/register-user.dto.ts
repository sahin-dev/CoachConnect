import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { CreateUserDto } from "src/modules/user/dtos/create-user.dto";

export class RegisterUserDto extends CreateUserDto{

        // @IsString()
        // @IsNotEmpty()
        // @MinLength(8)
        // readonly confirmPassword:string
}