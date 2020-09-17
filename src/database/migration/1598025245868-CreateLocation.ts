import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLocation1598025245868 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE location (
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(200), 
            latitude VARCHAR(50) NOT NULL,
            longitude VARCHAR(50) NOT NULL,
            cep VARCHAR(8) NOT NULL, 
            city VARCHAR(25) NOT NULL, 
            estate VARCHAR(25) NOT NULL, 
            country VARCHAR(25) NOT NULL, 
            complement VARCHAR(200), 
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        DROP TABLE location;
        `)
    }

}
