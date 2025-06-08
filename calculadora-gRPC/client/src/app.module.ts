import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClientsModule, Transport} from '@nestjs/microservices'
import { join } from 'path';


@Module({
  imports: [
    ClientsModule.register([
      {
      name: 'CALC_PACKAGE',
      transport: Transport.GRPC,
      options:{
        package: 'calculadora',
        protoPath: join(__dirname, '..','..', '..', 'proto', 'calculadora.proto')
      },
      },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
