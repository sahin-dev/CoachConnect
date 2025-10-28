import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { PrismaService } from "../prisma/prisma.service";
import { UserService } from "./user.service";
import { EncoderProvider } from "src/common/providres/encoder.provider";

@Module({
    imports:[],
    controllers:[UserController],
    providers:[PrismaService, UserService, EncoderProvider],
    exports:[UserService]
})
export class UserModule{

}