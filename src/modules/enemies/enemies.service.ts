import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Enemy } from '@prisma/client';
import { CreateEnemyInput } from './dto/enemy';
import { EnemyRepository } from './repositories';

@Injectable()
export class EnemyService {
  constructor(private readonly enemyRepository: EnemyRepository) {}

  async createEnemy(input: CreateEnemyInput): Promise<Enemy> {
    const foundEnemyByName = await this.enemyRepository.findByUnique({
      name: input.name,
    });

    if (foundEnemyByName)
      throw new ConflictException('Já existe um livro com este nome');

    try {
      return this.enemyRepository.create(input);
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async getEnemies(): Promise<Enemy[]> {
    try {
      return this.enemyRepository.findAll();
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async updateEnemyDefense(
    armor: number,
    healthPoints: number,
    id: number,
  ): Promise<Enemy> {
    const foundBookById = await this.enemyRepository.findByUnique({
      id,
    });

    if (!foundBookById)
      throw new NotFoundException('Inimigo não encontrado pelo id');

    try {
      return this.enemyRepository.update({ armor, healthPoints }, id);
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
