import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ICalculator } from 'interfaces/ICalculator';
import { ResultDTO, TwoNumberDTO } from './calculatorServiceDTO';



@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sum')
  async sum(@Body() data:TwoNumberDTO): Promise<ResultDTO> {
    return this.appService.sum(data);
  }

}
