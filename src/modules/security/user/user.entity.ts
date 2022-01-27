import { Column, Entity } from 'typeorm';
import { Base } from '../../common/base.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class User extends Base {
  @IsNotEmpty({ message: 'Nome deve ser informado' })
  @Column({
    length: 100,
    unique: true,
  })
  name: string;

  @IsNotEmpty({ message: 'Password deve ser informado' })
  @Column({
    length: 20,
  })
  password: string;

  @IsNotEmpty({ message: 'Email deve ser informado' })
  @IsEmail()
  @Column({
    length: 100,
    unique: true,
  })
  email: string;

  @Column({
    default: true,
  })
  active: boolean;
}
