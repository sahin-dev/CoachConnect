import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";
import { EncoderProvider } from "src/common/providres/encoder.provider";
import { PrismaService } from "../prisma/prisma.service";
import { SMTPProvider } from "src/common/providres/smtp.provider";


@Module({
    imports:[],
    controllers:[AuthController],
    providers:[AuthService, UserService, EncoderProvider, PrismaService, SMTPProvider]
})
export class AuthModule {

}