import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  time: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: null })
  completedAt: string;

  @Column({ default: null })
  canceledAt: string;
}
