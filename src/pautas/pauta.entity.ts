import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

enum StatusPauta {
    NAO_INCIADA = 'Sessão não Iniciada',
    INICIADA = 'Sessão Iniciada',
    ENCERRADO = 'Pauta Encerrado',
}

@Entity('pauta')
export class Pauta {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    descricao: string;

    @CreateDateColumn({name: 'data_cadastro'})
    dataCadastro?: Date;

    @Column({type: 'timestamp', nullable: true})
    abertura?: Date;

    @Column({type: 'timestamp', nullable: true})
    fechamento?: Date;

    obterStatus(): string {
        if (this.fechamento && this.fechamento < new Date()) {
            return StatusPauta.ENCERRADO;
        } 
        if (this.abertura) {
            return StatusPauta.INICIADA;
        } 
        
        return StatusPauta.NAO_INCIADA;
    }
}