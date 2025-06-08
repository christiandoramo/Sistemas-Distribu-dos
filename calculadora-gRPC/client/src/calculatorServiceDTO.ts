import {IsNumber,IsOptional,IsString } from 'class-validator'

export class TwoNumberDTO {
    @IsNumber()
    a: number;

    @IsNumber()
    b: number;
}

export class OneNumberDTO {
    @IsNumber()
    a: number;
}

export class ResultDTO {
    @IsNumber()
    // @IsOptional()
    result: number;

    @IsString()
    msg: string;
}