import { Participant } from '.prisma/client';
import { PrismaService } from '../../plugins/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';

@Injectable()
export class ParticipantService {
  constructor(private prisma: PrismaService) {}

  async create(
    createParticipantDto: CreateParticipantDto,
  ): Promise<Participant> {
    return await this.prisma.participant.create({
      data: { ...createParticipantDto },
    });
  }

  async findAll(): Promise<Participant[]> {
    return await this.prisma.participant.findMany();
  }

  async findOne(id: number): Promise<Participant> {
    return await this.prisma.participant.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateParticipantDto: UpdateParticipantDto,
  ): Promise<Participant> {
    return await this.prisma.participant.update({
      data: { ...updateParticipantDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.participant.delete({ where: { id } });
  }
}
