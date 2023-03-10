import { Column, Double, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Main {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: string;

  @Column()
  hora: number;

  @Column()
  dia: number;

  @Column()
  mes: number;

  @Column()
  anio: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  est_se: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  est_ne: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  est_ce: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  est_no: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  est_so: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  est_no_2: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  est_n: number;
}
