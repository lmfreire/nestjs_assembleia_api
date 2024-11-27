import { IsNotEmpty, IsIn } from "class-validator";
import { OpcaoVoto } from "./voto.entity";
import { ApiProperty } from "@nestjs/swagger";

export class RegistroVotoResource {
    @ApiProperty({example: "12345678912"})
    @IsNotEmpty({message: "Cpf é um campo obrigatório"})
    cpf: string;
    @ApiProperty({example: "SIM/NAO"})
    @IsNotEmpty({message: "Voto é um campo obrigatório"})
    @IsIn([OpcaoVoto.SIM, OpcaoVoto.NAO], {message: "Campo Opção so aceita valores (SIM,NAO)"})
    voto: OpcaoVoto;
}