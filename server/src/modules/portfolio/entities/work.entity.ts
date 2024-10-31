import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum WorkStatus {
  HIDDEN = 'hidden',
  VISIBLE = 'visible',
}

@Entity()
export class Work {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  clientUrl: string;

  @Column({
    type: 'text',
    default: WorkStatus.VISIBLE,
  })
  status: WorkStatus;

  @Column({ nullable: true })
  imagePath?: string;
}
