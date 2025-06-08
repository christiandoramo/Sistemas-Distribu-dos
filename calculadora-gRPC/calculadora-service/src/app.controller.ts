import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { ResultDTO, TwoNumberDTO } from './calculatorServiceDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @GrpcMethod('CalculatorService', 'sum')
  sum(data: TwoNumberDTO): ResultDTO {
    console.log('sum called with:', data);
    const {a, b} = data
    const result = a+b
    return {result, msg: "operação concluída com sucesso"};
  }
}
