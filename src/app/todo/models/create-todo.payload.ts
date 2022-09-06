//#region Imports

import { IsBoolean, IsDefined, IsNotEmpty, IsString } from 'class-validator';

//#endregion

export class CreateTodoPayload {

  @IsNotEmpty({ message: 'O nome da task deve ser definido.' })
  @IsString({ message: 'O nome da task deve ser uma string.' })
  task: string;

  @IsDefined({
    message: 'A indicação de estar ou não finalizada deve ser definida.',
  })
  @IsBoolean({
    message: 'A indicação de estar ou não finalizada deve ser boolean.',
  })
  isDone: boolean;

}