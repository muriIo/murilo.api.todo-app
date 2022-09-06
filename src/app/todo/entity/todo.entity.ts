//#region Imports

import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

//#endregion

@Entity({ name: 'todos' })
export class TodoEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  task: string;

  @Column({ name: 'is_done' })
  isDone: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

}