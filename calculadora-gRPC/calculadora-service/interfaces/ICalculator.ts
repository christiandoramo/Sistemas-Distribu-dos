import { OneNumberDTO, TwoNumberDTO } from "src/calculatorServiceDTO";

// INTERFACES estilo proto - a assinatura dos metodos do serviço calculadora
// tem a mesma assinatura dos metodos em calculadora.proto
// configurando o RPC

export interface ICalculator{
    sum(data: TwoNumberDTO): any;
    sub(data: TwoNumberDTO): any;
    mul(data: TwoNumberDTO): any;
    div(data: TwoNumberDTO): any;
    lb(data: OneNumberDTO): any;
    log(data: OneNumberDTO): any;
    exp(data: TwoNumberDTO): any;
    sin(data: OneNumberDTO): any;
    cos(data: OneNumberDTO): any;
    sqrt(data: OneNumberDTO): any;
  }