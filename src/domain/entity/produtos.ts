import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { fabricante } from "./fabricante";

@Entity('produtos')
export class produtos {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome_produto: string

  @Column()
  quantidade_estoque: number

  @Column()
  valor: number

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  @JoinColumn({
    name: 'fabricante'
  })
  @ManyToOne(() => fabricante, (fabricante) => fabricante.produtos)
  fabricante: fabricante
}
