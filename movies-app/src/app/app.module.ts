import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { GenreModule } from './genre/genre.module';
import { ParticipantModule } from './participant/participant.module';

@Module({
  imports: [MoviesModule, GenreModule, ParticipantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
