import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Documentation } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.PORT ?? '8081');
  const logger = new Logger('NestApplication');

  app.setGlobalPrefix('api');
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  Documentation(app);

  await app.listen(port, '0.0.0.0');
  logger.log(`listening on port ${port}`);
}

bootstrap();
