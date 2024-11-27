import { ApiProperty } from "@nestjs/swagger";
import { Pauta } from "./pauta.entity";
import { IsNotEmpty } from "class-validator";


export class CriarPautaResource {
    @IsNotEmpty({
        message: 'Descrição é um campo obrigatório'
    })
    @ApiProperty({name:"descricao", example: "Votação sobre aumento do Gás"})
    descricao: string;
}

export class PautaResource{
    @ApiProperty()
    id: string;
    @ApiProperty()
    descricao: string;
    @ApiProperty()
    status: string;
}

export class NovaSessaoResource {
    @ApiProperty({default: 10})
    minutos: number;
}

export function toDomain(resource: CriarPautaResource): Pauta{
    const pauta = new Pauta();
    pauta.descricao = resource.descricao;
    return pauta;
}

export function toRepresentation(entity: Pauta): PautaResource{
    const resource = new PautaResource();
    resource.id = entity.id;
    resource.descricao = entity.descricao;
    resource.status = entity.obterStatus()

    return resource;
}

