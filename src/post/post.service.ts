import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  async getAll() {
    return await this.prismaService.post.findMany();
  }

  async get(id: number) {
    return await this.prismaService.post.findUniqueOrThrow({
      where: { id: id },
    });
  }

  async create(dto: Prisma.PostCreateInput) {
    return await this.prismaService.post.create({ data: dto });
  }

  async update(id: number, dto: Prisma.PostUpdateInput) {
    return await this.prismaService.post.update({
      where: { id: id },
      data: dto,
    });
  }
  async delete(id: number) {
    return await this.prismaService.post.delete({ where: { id: id } });
  }
}
