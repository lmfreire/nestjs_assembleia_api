import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { VotoService } from '../voto.service';
import { Response } from 'express';

@Controller('pautas/:id/resultado')
export class ResultadoController {
    constructor(
        private readonly votoService: VotoService,
    ){}

    @Get()
    async obterResultado(
        @Param('id') id: string,
        @Res() response: Response
    ){
        return response.status(HttpStatus.OK).send();
    }
}
