import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Configurar Morgan para el registro de solicitudes HTTP
  app.use(morgan('dev'));

  // Configurar CORS
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
