import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UseGuards } from '@nestjs/common';
import { BookGuard } from './book/book.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new BookGuard());
  await app.listen(3700);
}
bootstrap();
