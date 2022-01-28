import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { produtos } from "./produtos";

@Entity('fabricante')
export class fabricante {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome_fabricante: string

  @Column()
  telefone: number

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  @OneToMany(() => produtos, (produto) => produto.fabricante, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  produtos: produtos[]
}
