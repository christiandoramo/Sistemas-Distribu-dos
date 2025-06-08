import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ICalculator } from 'interfaces/ICalculator';
import {firstValueFrom} from 'rxjs'
import { ResultDTO, TwoNumberDTO } from './calculatorServiceDTO';

@Injectable()
export class AppService {
  private calculator: ICalculator;

  constructor(@Inject('CALC_PACKAGE') private client: ClientGrpc) {}

  getHello(): string {
    return 'Hello World!';
  }
  onModuleInit() {
    this.calculator = this.client.getService<ICalculator>('CalculatorService');
  }

  async sum(data:TwoNumberDTO): Promise<ResultDTO>{
    return await firstValueFrom(this.calculator.sum(data))
  }
}
