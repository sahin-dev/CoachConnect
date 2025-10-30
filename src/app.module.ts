import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import mailerConfig from './config/mailer.config';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true,load:[mailerConfig]}),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  
})
export class AppModule {}
