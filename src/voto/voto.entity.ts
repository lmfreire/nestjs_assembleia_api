import { Pauta } from "src/pautas/pauta.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Associado } from "./associado/associado.entity";

@Entity('voto')
export class Voto{

    @PrimaryGeneratedColumn()
    id?: String;

    @ManyToOne(() => Pauta)
    @JoinColumn({name: 'id_pauta'})
    pauta: Pauta;

    @ManyToOne(() => Associado)
    @JoinColumn({name: 'id_associado'})
    associado: Associado;

    @Column({name: 'voto'})
    opcaoVoto: OpcaoVoto
}

export enum OpcaoVoto {
    SIM = 'SIM',
    NAO = 'NAO'
}