import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateConnections1598550774145 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS connection(
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            contactId INTEGER NOT NULL,
            FOREIGN KEY (contactId) REFERENCES contact (id) ON DELETE CASCADE ON UPDATE CASCADE,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        );`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE connection;
        `)
  }
}
