import "reflect-metadata";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const swaggerConfig = new DocumentBuilder()
                              .setTitle("Assembleia API")
                              .setDescription("API para gerenciar assembleias")
                              .setVersion("1.0.0")
                              .setContact("Matheus Freire", "", "l.matheus.freire10@gmail.com")
                              .build();
                              
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api", app, swaggerDoc);
  

  await app.listen(3000);
}
bootstrap();
