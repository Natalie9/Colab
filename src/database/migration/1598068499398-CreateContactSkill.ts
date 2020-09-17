import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateContactSkill1598068499398 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE contact_skill (
            contactId INTEGER NOT NULL,
            skillId INTEGER NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (contactId, skillId),
            FOREIGN KEY (contactId) REFERENCES contact (id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (skillId) REFERENCES skill (id) ON DELETE CASCADE ON UPDATE CASCADE
        );
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('contact_skill')
  }
}
