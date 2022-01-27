import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('produtos')
export class produtos {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome_produto: string

  @Column()
  fabricante: string

  @Column()
  quantidade_estoque: number

  @Column()
  valor: number

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date
}
