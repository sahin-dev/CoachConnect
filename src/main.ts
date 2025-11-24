import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import  {GlobalHttpExceptionHandler}  from './common/exceptions/GlobalHttpExceptionHandler';
import { ResponseTransformerInterceptor } from './common/interceptors/responseTransformer.interceptor';

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
    forbidNonWhitelisted:true
  }))

  app.useGlobalFilters(new GlobalHttpExceptionHandler())

  const reflector = app.get(Reflector)

  app.useGlobalInterceptors(new ResponseTransformerInterceptor(reflector))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
