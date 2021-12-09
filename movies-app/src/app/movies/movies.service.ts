import { Movie } from '.prisma/client';
import { PrismaService } from '../../plugins/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async create(CreateMovieDto: CreateMovieDto): Promise<Movie> {
    return await this.prisma.movie.create({
      data: { ...CreateMovieDto },
    });
  }

  async findAll(): Promise<Movie[]> {
    return await this.prisma.movie.findMany();
  }

  async findOne(id: number): Promise<Movie> {
    return await this.prisma.movie.findUnique({ where: { id } });
  }

  async update(id: number, UpdateMovieDto: UpdateMovieDto): Promise<Movie> {
    return await this.prisma.movie.update({
      data: { ...UpdateMovieDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.movie.delete({ where: { id } });
  }
}
