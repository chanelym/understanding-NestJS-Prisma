import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;
}
