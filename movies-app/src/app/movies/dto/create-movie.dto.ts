import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMovieDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  release_date: string;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsNotEmpty()
  genreid: number;

  @IsNotEmpty()
  participantid: number;
}
