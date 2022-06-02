import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateEnemyInput } from './dto/enemy';
import { EnemyRepository } from './repositories';

@Injectable()
export class EnemyService {
  constructor(private readonly enemyRepository: EnemyRepository) {}

  async createEnemy(input: CreateEnemyInput): Promise<any> {
    // Busca no banco de dados algum livro com o mesmo nome
    const foundEnemyByName = await this.enemyRepository.findByUnique({
      name: input.name,
    });

    // Case exista, retorna erro 409
    if (foundEnemyByName)
      throw new ConflictException('Já existe um livro com este nome');

    try {
      // Retorna o livro criado
      return this.enemyRepository.create(input);
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
