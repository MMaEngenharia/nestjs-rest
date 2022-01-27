import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEntityPeopleAndAddressMigration1620058415912
  implements MigrationInterface {
  name = 'CreateEntityPeopleAndAddressMigration1620058415912';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "people" ("id" BIGSERIAL NOT NULL, "uuid" character varying(40) NOT NULL, "create_date" TIMESTAMP NOT NULL, "update_date" TIMESTAMP, "delete_date" TIMESTAMP, "excluded" boolean NOT NULL DEFAULT false, "name" character varying(150) NOT NULL, "date_of_birth" date NOT NULL, "active" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_85c129d8247430387bf17c0b5cc" UNIQUE ("uuid"), CONSTRAINT "PK_aa866e71353ee94c6cc51059c5b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "address" ("id" BIGSERIAL NOT NULL, "uuid" character varying(40) NOT NULL, "create_date" TIMESTAMP NOT NULL, "update_date" TIMESTAMP, "delete_date" TIMESTAMP, "excluded" boolean NOT NULL DEFAULT false, "number" character varying(10) NOT NULL, "complement" character varying, "neighborhood" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "pessoa_id" bigint NOT NULL, CONSTRAINT "UQ_496d4a29b0dfa82ede19a4bcad0" UNIQUE ("uuid"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "address" ADD CONSTRAINT "FK_55b6e976553a905620b1784a85a" FOREIGN KEY ("pessoa_id") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "address" DROP CONSTRAINT "FK_55b6e976553a905620b1784a85a"`,
    );
    await queryRunner.query(`DROP TABLE "address"`);
    await queryRunner.query(`DROP TABLE "people"`);
  }
}
