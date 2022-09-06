//#region Imports

import { Controller } from '@nestjs/common';
import { TodoEntity } from './entity/todo.entity';
import { CreateTodoPayload } from './models/create-todo.payload';
import { UpdateTodoPayload } from './models/update-todo.payload';
import { TodoService } from './todo.service';
import {
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
} from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { ParseUUIDPipe } from '@nestjs/common/pipes';

//#endregion

@Controller('todo')
export class TodoController {

  //#region Constructor

  constructor(
    private readonly service: TodoService,
  ) {}

  //#endregion

  //#region Public Methods

  @Get()
  public async findAll(): Promise<TodoEntity[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  public async findOne(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<TodoEntity> {
    return await this.service.findOne(id);
  }

  @Post()
  public async create(@Body() payload: CreateTodoPayload): Promise<TodoEntity> {
    return await this.service.create(payload);
  }

  @Put(':id')
  public async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() payload: UpdateTodoPayload,
  ): Promise<TodoEntity> {
    return await this.service.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async remove(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<void> {
    await this.service.remove(id);
  }

  //#endregion

}
