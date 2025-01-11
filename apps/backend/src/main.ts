import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });


  try {
    await app.listen(process.env.PORT ?? 3000);
    logger.log('Application started successfully');
  } catch (error) {
    logger.error('Failed to start application', error);
    throw error;
  }
}
bootstrap();
