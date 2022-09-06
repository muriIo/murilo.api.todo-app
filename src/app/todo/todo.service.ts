//#region Imports

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './entity/todo.entity';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CreateTodoPayload } from './models/create-todo.payload';
import { UpdateTodoPayload } from './models/update-todo.payload';

//#endregion

@Injectable()
export class TodoService {

  //#region Constructor

  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  //#endregion


  //#region Public Methods

  public async findAll(): Promise<TodoEntity[]> {
    return await this.todoRepository.find();
  }

  public async findOne(id: string): Promise<TodoEntity> {
    const entity = await this.todoRepository.findOne({
      where: {
        id,
      },
    });

    if (!entity)
      throw new NotFoundException(`A entidade com a identificação ${ id }, não foi encontrada.`);

    return entity;
  }

  public async create(payload: CreateTodoPayload): Promise<TodoEntity> {
    return await this.todoRepository.save(this.todoRepository.create(payload));
  }

  public async update(
    id: string,
    payload: UpdateTodoPayload,
  ): Promise<TodoEntity> {
    const todo = await this.findOne(id);

    this.todoRepository.merge(todo, payload);

    return await this.todoRepository.save(todo);
  }

  public async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.todoRepository.softDelete(id);
  }

  //#endregion

}
