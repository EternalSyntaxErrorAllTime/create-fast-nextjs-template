import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchemas implements MigrationInterface {
  name = "InitSchemas1759747150284";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "auth"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP SCHEMA IF EXISTS "auth" CASCADE`);
  }
}
