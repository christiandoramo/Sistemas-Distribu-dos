import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions} from '@nestjs/microservices'
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'calculadora',
        protoPath: join(__dirname, '..','..', '..', 'proto', 'calculadora.proto')
      },
    },
  );
  await app.listen();
}

bootstrap();
