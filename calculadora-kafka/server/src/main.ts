// server/src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: '*', // ou restrinja para 'http://localhost:3001'
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
