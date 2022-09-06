//#region Imports

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

//#endregion

@Entity({ name: 'todos' })
export class TodoEntity {

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  task: string;

  @ApiProperty()
  @Column({ name: 'is_done' })
  isDone: boolean;

  @ApiPropertyOptional()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @ApiPropertyOptional()
  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: string;

  @ApiPropertyOptional()
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

}