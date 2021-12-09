import { Participant } from '.prisma/client';
import { PrismaService } from '../../plugins/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';

@Injectable()
export class ParticipantService {
  constructor(private prisma: PrismaService) {}

  async create(
    createParticipanteDto: CreateParticipantDto,
  ): Promise<Participant> {
    return await this.prisma.participant.create({
      data: { ...createParticipanteDto },
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
    UpdateParticipanteDto: UpdateParticipantDto,
  ): Promise<Participant> {
    return await this.prisma.participant.update({
      data: { ...UpdateParticipanteDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.participant.delete({ where: { id } });
  }
}
