import { Column, Exclusion, IsNull, PrimaryGeneratedColumn } from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    length: 40,
    unique: true,
  })
  uuid: string;

  @Column({
    name: 'create_date',
    type: 'timestamp without time zone',
    update: false,
    insert: true,
    nullable: false,
  })
  createDate: Date;

  @Column({
    name: 'update_date',
    type: 'timestamp without time zone',
    insert: false,
    update: true,
    nullable: true,
  })
  updateDate: Date;

  @Column({
    name: 'delete_date',
    type: 'timestamp without time zone',
    insert: false,
    update: true,
    nullable: true,
  })
  deleteDate: Date;

  @Column({
    select: false,
    default: false,
  })
  excluded: boolean;
}
