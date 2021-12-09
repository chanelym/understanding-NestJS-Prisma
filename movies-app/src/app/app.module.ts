import { Module } from '@nestjs/common';
import { PrismaModule } from '../../src/plugins/prisma/prisma.module';
import { MoviesController } from './movies/movies.controller';
import { GenreController } from './genre/genre.controller';
import { ParticipantController } from './participant/participant.controller';
import { MoviesService } from './movies/movies.service';
import { GenreService } from './genre/genre.service';
import { ParticipantService } from './participant/participant.service';

@Module({
  imports: [PrismaModule],
  controllers: [MoviesController, GenreController, ParticipantController],
  providers: [MoviesService, GenreService, ParticipantService],
})
export class AppModule {}
