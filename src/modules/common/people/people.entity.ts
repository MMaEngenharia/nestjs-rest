import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../base.entity';
import { Address } from './address.entity';

@Entity()
export class People extends Base {
  @IsNotEmpty({ message: 'Nome deve ser informado' })
  @Column({
    type: 'character varying',
    length: 150,
  })
  name: string;

  @Column({
    name: 'date_of_birth',
    type: 'date',
  })
  dateOfBirth: Date;

  @Column({
    default: true,
  })
  active: boolean;

  @OneToMany(() => Address, (address) => address.people)
  address: Address[];
}
