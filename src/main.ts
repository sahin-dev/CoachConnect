import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:["debug", "error", "warn", "fatal","verbose", "log"]
  });

  app.setGlobalPrefix("/api/v1", {
    exclude:["/"]
  })

  app.useGlobalPipes(new ValidationPipe({
    transform:true,
    whitelist:true,
    always:true
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
