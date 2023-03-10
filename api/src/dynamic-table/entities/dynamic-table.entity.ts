import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DynamicTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'jsonb' })
  header: string;

  @Column({ type: 'jsonb' })
  data: string;

  @Column({ type: 'jsonb' })
  fullData: string;
}
