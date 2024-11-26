import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { PautasService } from 'src/pautas/pautas.service';
import { VotoService } from './voto.service';
import { RegistroVotoResource } from './voto.resource';
import { Response } from 'express';
import { ErrorResponse } from 'src/common/error.resource';

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

        const pauta = await this.pautaService.findById(idPauta);

        if(!pauta) {
            return response
                   .status(HttpStatus.NOT_FOUND)
                   .send(new ErrorResponse('Pauta não encontrada'));
        }

        const result = await this.votoService.registrarVoto(pauta,resource.cpf,resource.voto)

        if(result.isError()){
            const error = result.error

            return response.status(error.status).send(new ErrorResponse(error.message));
        }

        return response.status(HttpStatus.ACCEPTED).send();
    }
}
