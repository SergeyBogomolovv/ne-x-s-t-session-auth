import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  app.use(cookieParser());

  app.use(
    cors({
      origin: config.get('CLIENT_URL'),
      credentials: true,
    }),
  );

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(4000);
}
bootstrap();
