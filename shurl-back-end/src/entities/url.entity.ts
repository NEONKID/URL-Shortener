import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'url', schema: 'public' })
export class URL {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 2048 })
  origin: string;
}
