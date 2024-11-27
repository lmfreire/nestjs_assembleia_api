import { IsNotEmpty, IsIn } from "class-validator";
import { OpcaoVoto } from "./voto.entity";

export class RegistroVotoResource {
    @IsNotEmpty({message: "Cpf é um campo obrigatório"})
    cpf: string;
    @IsNotEmpty({message: "Voto é um campo obrigatório"})
    @IsIn([OpcaoVoto.SIM, OpcaoVoto.NAO], {message: "Campo Opção so aceita valores (SIM,NAO)"})
    voto: OpcaoVoto;
}