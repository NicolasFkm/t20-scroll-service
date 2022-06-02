import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { yupCreateEnemyInput } from 'src/yup/enemies';
import { EnemyService } from './enemies.service';
import { CreateEnemyInput } from './dto/enemy';

@Controller()
export class EnemyController {
  constructor(private readonly enemyService: EnemyService) {}

  @Post('/enemies')
  async createEnemy(@Body() input: CreateEnemyInput) {
    // Utiliza um schema yup para verificar o input
    const isValidInput = yupCreateEnemyInput.isValidSync(input);

    // Caso seja inválido, retorna erro 400
    if (!isValidInput) throw new BadRequestException('Seu input está inválido');

    return this.enemyService.createEnemy(input);
  }
}
