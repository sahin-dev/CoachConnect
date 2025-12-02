import { Exclude } from "class-transformer";
import { UserResponseDto } from "./user-response.dto";

export class UpdateResponseDto extends UserResponseDto {

    @Exclude()
    email_verified: boolean;

}