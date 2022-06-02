import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  yupCreateEnemyInput,
  yupUpdateEnemyDefenseInput,
} from 'src/yup/enemies';
import { EnemyService } from './enemies.service';
import { CreateEnemyInput, UpdateEnemyDefenseInput } from './dto/enemy';

@Controller()
export class EnemyController {
  constructor(private readonly enemyService: EnemyService) {}

  @Post('/enemies')
  async createEnemy(@Body() input: CreateEnemyInput) {
    const isValidInput = yupCreateEnemyInput.isValidSync(input);

    if (!isValidInput) throw new BadRequestException('Seu input está inválido');

    return this.enemyService.createEnemy(input);
  }

  @Get('/enemies')
  async getEnemies() {
    return this.enemyService.getEnemies();
  }

  @Put('/enemies/defense/:id')
  async updateEnemiesDefense(
    @Body() input: UpdateEnemyDefenseInput,
    @Param() params,
  ) {
    // Utiliza um schema yup para verificar o input
    const isValidInput = yupUpdateEnemyDefenseInput.isValidSync(input);

    // Caso seja inválido, retorna erro 400
    if (!isValidInput)
      throw new BadRequestException('O campo armor e defense é requerido');

    return this.enemyService.updateEnemyDefense(
      input.armor,
      input.healthPoints,
      params.id,
    );
  }
}
