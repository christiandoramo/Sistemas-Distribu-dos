import { Observable } from "rxjs";
import { OneNumberDTO, ResultDTO, TwoNumberDTO } from "src/calculatorServiceDTO";

// INTERFACES estilo proto - a assinatura dos metodos do serviço calculadora
// tem a mesma assinatura dos metodos em calculadora.proto
// configurando o RPC

export interface ICalculator{
    sum(data: TwoNumberDTO): Observable<ResultDTO>;
    sub(data: TwoNumberDTO): Observable<ResultDTO>;
    mul(data: TwoNumberDTO): Observable<ResultDTO>;
    div(data: TwoNumberDTO): Observable<ResultDTO>;
    lb(data: OneNumberDTO): Observable<ResultDTO>;
    log(data: OneNumberDTO): Observable<ResultDTO>;
    exp(data: TwoNumberDTO): Observable<ResultDTO>;
    sin(data: OneNumberDTO): Observable<ResultDTO>;
    cos(data: OneNumberDTO): Observable<ResultDTO>;
    sqrt(data: OneNumberDTO): Observable<ResultDTO>;
  }