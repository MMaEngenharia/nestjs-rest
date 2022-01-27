import { ObjectLiteral, Repository } from 'typeorm';

export class BaseRepository<
  Entity extends ObjectLiteral
> extends Repository<Entity> {
  constructor(private entity: Entity) {
    super();
  }

  findById(id: number): Promise<Entity> {
    return this.findOne(id, { where: 'excluded = false' });
  }

  findAll(): Promise<Entity[]> {
    return this.find({ where: 'excluded = false' });
  }

  findAllP(id: number): Promise<Entity> {
    return this.createQueryBuilder(`${this.entity}`)
      .select('*')
      .where(`${this.entity}.id =:id and ${this.entity}.excluded = false`, {
        id,
      })
      .getRawOne();
  }
}
