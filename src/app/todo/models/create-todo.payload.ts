//#region Imports

import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDefined, IsNotEmpty, IsString } from 'class-validator';

//#endregion

export class CreateTodoPayload {

  @ApiProperty()
  @IsNotEmpty({ message: 'O nome da task deve ser definido.' })
  @IsString({ message: 'O nome da task deve ser uma string.' })
  task: string;

  @ApiProperty()
  @IsDefined({
    message: 'A indicação de estar ou não finalizada deve ser definida.',
  })
  @IsBoolean({
    message: 'A indicação de estar ou não finalizada deve ser boolean.',
  })
  isDone: boolean;

}