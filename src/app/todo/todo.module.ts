//#region Imports

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entity/todo.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

//#endregion

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoEntity]),
  ],
  controllers: [
    TodoController
  ],
  providers: [
    TodoService
  ],
  exports: [
    TodoService
  ],
})
export class TodoModule { }
