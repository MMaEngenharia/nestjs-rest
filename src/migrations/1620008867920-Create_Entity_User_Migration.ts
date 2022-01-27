import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEntityUserMigration1620008867920
  implements MigrationInterface {
  name = 'CreateEntityUserMigration1620008867920';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" BIGSERIAL NOT NULL, "uuid" character varying(40) NOT NULL, "create_date" TIMESTAMP NOT NULL, "update_date" TIMESTAMP, "delete_date" TIMESTAMP, "excluded" boolean NOT NULL DEFAULT false, "name" character varying(100) NOT NULL, "password" character varying(20) NOT NULL, "email" character varying(100) NOT NULL, "active" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_a95e949168be7b7ece1a2382fed" UNIQUE ("uuid"), CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8" UNIQUE ("name"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
