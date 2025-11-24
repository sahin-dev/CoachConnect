import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { SessionBuilder } from './providers/SessionBuilder.provider';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    controllers:[SessionController],
    providers:[SessionService, SessionBuilder, PrismaService]
})
export class SessionModule {}
