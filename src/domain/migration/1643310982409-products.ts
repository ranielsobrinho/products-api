import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class products1643310982409 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'produtos',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'nome_produto',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'fabricante',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'quantidade_estoque',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'valor',
                    type: 'real',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produtos')
    }

}
