import { Genre } from '.prisma/client';
import { PrismaService } from '../../plugins/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private prisma: PrismaService) {}

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    return await this.prisma.genre.create({
      data: { ...createGenreDto },
    });
  }

  async findAll(): Promise<Genre[]> {
    return await this.prisma.genre.findMany();
  }

  async findOne(id: number): Promise<Genre> {
    return await this.prisma.genre.findUnique({ where: { id } });
  }

  async update(id: number, UpdateGenreDto: UpdateGenreDto): Promise<Genre> {
    return await this.prisma.genre.update({
      data: { ...UpdateGenreDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.genre.delete({ where: { id } });
  }
}
