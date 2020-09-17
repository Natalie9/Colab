import { MigrationInterface, QueryRunner, Table, Migration } from 'typeorm'

export class CreateContact1597954662711 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE contact (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(200) NOT NULL, 
        description VARCHAR(500),
        phone VARCHAR(20),
        email VARCHAR(100) UNIQUE, 
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('contact')
  }
}
