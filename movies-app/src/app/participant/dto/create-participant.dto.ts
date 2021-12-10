import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParticipantDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  birthday: string;

  @IsString()
  @IsNotEmpty()
  staff: string;

  movie: number;
}
