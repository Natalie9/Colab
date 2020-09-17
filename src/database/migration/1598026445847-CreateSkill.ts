import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSkill1598026445847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS skill(
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(30) NOT NULL,            
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        DROP TABLE skill;
        `)
    }

}
