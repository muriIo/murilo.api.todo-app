//#region Imports

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

//#endregion

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/dev/v1/');
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('TODOApp API')
    .setVersion('1.0')
    .setBasePath('/dev/v1/swagger')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/dev/v1/swagger', app, document);
  await app.listen(3000);
}
bootstrap();
