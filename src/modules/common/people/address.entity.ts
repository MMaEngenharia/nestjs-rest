import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from '../base.entity';
import { People } from './people.entity';

@Entity()
export class Address extends Base {
  @Column({
    type: 'character varying',
    length: 10,
  })
  number: string;

  @Column({
    type: 'character varying',
    nullable: true,
  })
  complement: string;

  @IsNotEmpty({ message: 'Bairro deve ser informado' })
  @Column({
    type: 'character varying',
  })
  neighborhood: string;

  @IsNotEmpty({ message: 'Cidade deve ser informada' })
  @Column({
    type: 'character varying',
  })
  city: string;

  @IsNotEmpty({ message: 'Estado deve ser informado' })
  @Column({
    type: 'character varying',
  })
  state: string;

  @ManyToOne(() => People, (people) => people.address, {
    nullable: false,
  })
  @JoinColumn({
    name: 'pessoa_id',
    referencedColumnName: 'id',
  })
  people: People;
}
