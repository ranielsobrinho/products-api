import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class CreateForeignKeys1643396848390 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'produtos',
            new TableColumn({
                name: 'fabricante',
                type: 'int',
                isNullable: false
            })
        )

        await queryRunner.createForeignKey(
            'produtos',
            new TableForeignKey({
                name: 'fabricante_fk',
                columnNames: ['fabricante'],
                referencedTableName: 'produtos',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('produtos', 'fabricante_fk')
        await queryRunner.dropColumn('produtos', 'fabricante')
    }

}
