import { Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ResultDTO, TwoNumberDTO } from './calculatorServiceDTO';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @GrpcMethod('CalculatorService', 'sum')
  sum(data: TwoNumberDTO): ResultDTO {
    const {a, b} = data
    const result = a+b
    return {result, msg: "operação concluída com sucesso"};
  }
}
