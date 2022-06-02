import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class EnemyRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.enemy.findMany();
  }
  findByUnique(input: Prisma.EnemyWhereUniqueInput) {
    return this.prismaService.enemy.findUnique({
      where: input,
    });
  }

  create(input: Prisma.EnemyCreateInput) {
    return this.prismaService.enemy.create({
      data: input,
    });
  }

  update(input: Prisma.EnemyUpdateInput, id: number) {
    return this.prismaService.enemy.update({
      data: input,
      where: {
        id,
      },
    });
  }

  delete(id: number) {
    return this.prismaService.enemy.delete({
      where: {
        id,
      },
    });
  }
}
