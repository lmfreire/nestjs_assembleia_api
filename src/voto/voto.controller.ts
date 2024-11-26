import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { PautasService } from 'src/pautas/pautas.service';
import { VotoService } from './voto.service';
import { RegistroVotoResource } from './voto.resource';
import { Response } from 'express';

@Controller('pautas/:id/votos')
export class VotoController {
    constructor(
        private readonly votoService: VotoService,
        private readonly pautaService: PautasService
    ){}

    @Post()
    async registrarVoto(
        @Param('id') idPauta: string,
        @Body() resource: RegistroVotoResource,
        @Res() response: Response
    ){

        return response.status(HttpStatus.ACCEPTED).send()

    }
}
